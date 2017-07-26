(function (c) {
  function b (a, c) {
    if (!(1 < a.originalEvent.touches.length)) {
      a.preventDefault();
      var b = a.originalEvent.changedTouches[0], d = document.createEvent("MouseEvents");
      d.initMouseEvent(c, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
      a.target.dispatchEvent(d)
    }
  }

  c.support.touch = "ontouchend" in document;
  if (c.support.touch) {
    var d = c.ui.mouse.prototype, f = d._mouseInit, g = d._mouseDestroy, e;
    d._touchStart = function (a) {
      e || !this._mouseCapture(a.originalEvent.changedTouches[0]) || a.target.className &&
      a.target.className.indexOf && -1 !== a.target.className.indexOf("closethick") || a.target.parentNode && a.target.parentNode.className && a.target.parentNode.className.indexOf && -1 !== a.target.parentNode.className.indexOf("dialogButtonsItem") || (e = !0, this._touchMoved = !1, b(a, "mouseover"), b(a, "mousemove"), b(a, "mousedown"))
    };
    d._touchMove = function (a) {
      !e || a.target.className && a.target.className.indexOf && -1 !== a.target.className.indexOf("closethick") || a.target.parentNode && a.target.parentNode.className && a.target.parentNode.className.indexOf &&
      -1 !== a.target.parentNode.className.indexOf("dialogButtonsItem") || (this._touchMoved = !0, b(a, "mousemove"))
    };
    d._touchEnd = function (a) {
      e && (b(a, "mouseup"), b(a, "mouseout"), b(a, "click"), e = !1)
    };
    d._mouseInit = function () {
      this.element.bind({
        touchstart: c.proxy(this, "_touchStart"),
        touchmove: c.proxy(this, "_touchMove"),
        touchend: c.proxy(this, "_touchEnd")
      });
      f.call(this)
    };
    d._mouseDestroy = function () {
      this.element.unbind({
        touchstart: c.proxy(this, "_touchStart"),
        touchmove: c.proxy(this, "_touchMove"),
        touchend: c.proxy(this, "_touchEnd")
      });
      g.call(this)
    }
  }
})(jQuery);
(function (a) {
  a.idleTimer = function b (c) {
    var d = !1, g = !0, e = 3E4, f = function () {
      d = !d;
      b.olddate = +new Date;
      a(document).trigger(a.data(document, "idleTimer", d ? "idle" : "active") + ".idleTimer")
    };
    b.olddate = b.olddate || +new Date;
    if ("number" == typeof c) e = c; else {
      if ("destroy" === c)return g = !1, clearTimeout(a.idleTimer.tId), a(document).unbind(".idleTimer"), this;
      if ("getElapsedTime" === c)return +new Date - b.olddate
    }
    a(document).bind(a.trim("mousemove keydown DOMMouseScroll mousewheel mousedown ".split(" ").join(".idleTimer ")),
      function () {
        clearTimeout(a.idleTimer.tId);
        g && (d && f(), a.idleTimer.tId = setTimeout(f, e))
      });
    a.idleTimer.tId = setTimeout(f, e);
    a.data(document, "idleTimer", "active")
  }
})(jQuery);
(function (a, f) {
  var g = {
    init: function (e, d, b) {
      var c = this;
      this.warning = e = a(e);
      this.resume = a(d);
      this.options = b;
      this.countdownOpen = !1;
      this.failedRequests = b.failedRequests;
      this._startTimer();
      this.title = document.title;
      a.data(e[0], "idletimeout", this);
      a.idleTimer(1E3 * b.idleAfter);
      a(document).bind("idle.idleTimer", function () {
        "idle" !== a.data(document, "idleTimer") || c.countdownOpen || (c._stopTimer(), c.countdownOpen = !0, c._idle())
      });
      this.resume.bind("click", function (a) {
        a.preventDefault();
        f.clearInterval(c.countdown);
        c.countdownOpen = !1;
        c._startTimer();
        c._keepAlive(!1);
        b.onResume.call(c.warning)
      })
    }, _idle: function () {
      var a = this, d = this.options, b = this.warning[0], c = d.warningLength;
      d.onIdle.call(b);
      d.onCountdown.call(b, c);
      this.countdown = f.setInterval(function () {
        0 === --c ? (window.clearInterval(a.countdown), d.onTimeout.call(b)) : (d.onCountdown.call(b, c), document.title = d.titleMessage.replace("%s", c) + a.title)
      }, 1E3)
    }, _startTimer: function () {
      var a = this;
      this.timer = f.setTimeout(function () {
        a._keepAlive()
      }, 1E3 * this.options.pollingInterval)
    },
    _stopTimer: function () {
      this.failedRequests = this.options.failedRequests;
      f.clearTimeout(this.timer)
    }, _keepAlive: function (e) {
      var d = this, b = this.options;
      document.title = d.title;
      "undefined" === typeof e && (e = !0);
      this.failedRequests ? a.ajax({
        timeout: b.AJAXTimeout, url: b.keepAliveURL, error: function () {
          d.failedRequests--
        }, success: function (c) {
          a.trim(c) !== b.serverResponseEquals && d.failedRequests--
        }, complete: function () {
          e && d._startTimer()
        }
      }) : (this._stopTimer(), b.onAbort.call(this.warning[0]))
    }
  };
  a.idleTimeout = function (e,
                            d, b) {
    g.init(e, d, a.extend(a.idleTimeout.options, b));
    return this
  };
  a.idleTimeout.options = {
    warningLength: 30,
    keepAliveURL: "",
    serverResponseEquals: "OK",
    idleAfter: 600,
    pollingInterval: 60,
    failedRequests: 5,
    AJAXTimeout: 250,
    titleMessage: "Warning: %s seconds until log out | ",
    onTimeout: a.noop,
    onIdle: a.noop,
    onCountdown: a.noop,
    onResume: a.noop,
    onAbort: a.noop
  }
})(jQuery, window);
window.jQuery && function (f) {
  f.extend({
    xml2json: function (a, l) {
      function g (e, a) {
        if (!e)return null;
        var c = "", b = null;
        k(e.localName || e.nodeName);
        e.childNodes && 0 < e.childNodes.length && f.each(e.childNodes, function (e, a) {
          var n = a.nodeType, d = k(a.localName || a.nodeName), f = a.text || a.nodeValue || "";
          8 != n && (3 != n && 4 != n && d ? (b = b || {}, b[d] ? (b[d].length || (b[d] = m(b[d])), b[d] = m(b[d]), b[d][b[d].length] = g(a, !0), b[d].length = b[d].length) : b[d] = g(a)) : f.match(/^\s+$/) || (c += f.replace(/^\s+/, "").replace(/\s+$/, "")))
        });
        e.attributes && 0 <
        e.attributes.length && (b = b || {}, f.each(e.attributes, function (a, e) {
          var c = k(e.name), d = e.value;
          b[c] ? (b[cnn] = m(b[cnn]), b[c][b[c].length] = d, b[c].length = b[c].length) : b[c] = d
        }));
        if (b) {
          b = f.extend("" != c ? new String(c) : {}, b || {});
          if (c = b.text ? ("object" == typeof b.text ? b.text : [b.text || ""]).concat([c]) : c) b.text = c;
          c = ""
        }
        var h = b || c;
        if (l) {
          c && (h = {});
          if (c = h.text || c || "") h.text = c;
          a || (h = m(h))
        }
        return h
      }

      if (!a)return {};
      var k = function (a) {
        return String(a || "").replace(/-/g, "_")
      }, m = function (a) {
        f.isArray(a) || (a = [a]);
        a.length = a.length;
        return a
      };
      "string" == typeof a && (a = f.text2xml(a));
      if (a.nodeType) {
        if (3 == a.nodeType || 4 == a.nodeType)return a.nodeValue;
        var p = 9 == a.nodeType ? a.documentElement : a, q = g(p, !0), p = a = null;
        return q
      }
    }, text2xml: function (a) {
      var l;
      try {
        var g = f.browser.msie ? new ActiveXObject("Microsoft.XMLDOM") : new DOMParser;
        g.async = !1
      } catch (k) {
        throw Error("XML Parser could not be instantiated");
      }
      try {
        l = f.browser.msie ? g.loadXML(a) ? g : !1 : g.parseFromString(a, "text/xml")
      } catch (k) {
        throw Error("Error parsing XML string");
      }
      return l
    }
  })
}(jQuery);
(function (g) {
  g.cookie = function (h, b, a) {
    if (1 < arguments.length && (!/Object/.test(Object.prototype.toString.call(b)) || null === b || void 0 === b)) {
      a = g.extend({}, a);
      if (null === b || void 0 === b) a.expires = -1;
      if ("number" === typeof a.expires) {
        var d = a.expires, c = a.expires = new Date;
        c.setDate(c.getDate() + d)
      }
      b = String(b);
      return document.cookie = [encodeURIComponent(h), "\x3d", a.raw ? b : encodeURIComponent(b), a.expires ? "; expires\x3d" + a.expires.toUTCString() : "", a.path ? "; path\x3d" + a.path : "", a.domain ? "; domain\x3d" + a.domain : "", a.secure ?
        "; secure" : ""].join("")
    }
    a = b || {};
    for (var d = a.raw ? function (a) {
      return a
    } : decodeURIComponent, c = document.cookie.split("; "), e = 0, f; f = c[e] && c[e].split("\x3d"); e++)if (d(f[0]) === h)return d(f[1] || "");
    return null
  }
})(jQuery);
jsgradient = {
  inputA: "", inputB: "", inputC: "", gradientElement: "", hexToRgb: function (a) {
    var b, c;
    a = a.replace("#", "");
    if (3 !== a.length && 6 !== a.length)return [255, 255, 255];
    3 == a.length && (a = a[0] + a[0] + a[1] + a[1] + a[2] + a[2]);
    b = parseInt(a.substr(0, 2), 16);
    c = parseInt(a.substr(2, 2), 16);
    a = parseInt(a.substr(4, 2), 16);
    return [b, c, a]
  }, rgbToHex: function (a) {
    a[0] = 255 < a[0] ? 255 : 0 > a[0] ? 0 : a[0];
    a[1] = 255 < a[1] ? 255 : 0 > a[1] ? 0 : a[1];
    a[2] = 255 < a[2] ? 255 : 0 > a[2] ? 0 : a[2];
    return this.zeroFill(a[0].toString(16), 2) + this.zeroFill(a[1].toString(16), 2) +
      this.zeroFill(a[2].toString(16), 2)
  }, zeroFill: function (a, b) {
    b -= a.toString().length;
    return 0 < b ? Array(b + (/\./.test(a) ? 2 : 1)).join("0") + a : a
  }, generateGradient: function (a, b, c) {
    var d = [];
    a = this.hexToRgb(a);
    b = this.hexToRgb(b);
    --c;
    rStep = (Math.max(a[0], b[0]) - Math.min(a[0], b[0])) / c;
    gStep = (Math.max(a[1], b[1]) - Math.min(a[1], b[1])) / c;
    bStep = (Math.max(a[2], b[2]) - Math.min(a[2], b[2])) / c;
    d.push("#" + this.rgbToHex(a));
    for (var e = a[0], f = a[1], g = a[2], h = 0; h < c - 1; h++)e = a[0] < b[0] ? e + Math.round(rStep) : e - Math.round(rStep), f = a[1] <
    b[1] ? f + Math.round(gStep) : f - Math.round(gStep), g = a[2] < b[2] ? g + Math.round(bStep) : g - Math.round(bStep), d.push("#" + this.rgbToHex([e, f, g]));
    d.push("#" + this.rgbToHex(b));
    return d
  }, gradientList: function (a, b, c) {
    c = "object" === typeof c ? c : $(c);
    c = c.find("li");
    var d = jsgradient.generateGradient(a, b, c.length);
    c.each(function (a) {
      $(this).css("backgroundColor", d[a])
    })
  }
};
(function (d) {
  function h (a, b) {
    var c = this, f = a.attr("name") || b.name || "";
    this.options = b;
    this.$el = a.hide();
    this.$label = this.$el.closest("label");
    0 === this.$label.length && this.$el.attr("id") && (this.$label = d(e('label[for\x3d"%s"]', this.$el.attr("id").replace(/:/g, "\\:"))));
    this.$parent = d(e('\x3cdiv class\x3d"ms-parent %s" %s/\x3e', a.attr("class") || "", e('title\x3d"%s"', a.attr("title"))));
    this.$choice = d(e('\x3cbutton type\x3d"button" class\x3d"ms-choice"\x3e\x3cspan class\x3d"placeholder"\x3e%s\x3c/span\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/button\x3e',
      this.options.placeholder));
    this.$drop = d(e('\x3cdiv class\x3d"ms-drop %s"%s\x3e\x3c/div\x3e', this.options.position, e(' style\x3d"width: %s"', this.options.dropWidth)));
    this.$el.after(this.$parent);
    this.$parent.append(this.$choice);
    this.$parent.append(this.$drop);
    this.$el.prop("disabled") && this.$choice.addClass("disabled");
    this.$parent.css("width", this.options.width || this.$el.css("width") || this.$el.outerWidth() + 20);
    this.selectAllName = 'data-name\x3d"selectAll' + f + '"';
    this.selectGroupName = 'data-name\x3d"selectGroup' +
      f + '"';
    this.selectItemName = 'data-name\x3d"selectItem' + f + '"';
    this.options.keepOpen || d(document).click(function (b) {
      d(b.target)[0] !== c.$choice[0] && d(b.target).parents(".ms-choice")[0] !== c.$choice[0] && (d(b.target)[0] === c.$drop[0] || d(b.target).parents(".ms-drop")[0] !== c.$drop[0] && b.target !== a[0]) && c.options.isOpen && c.close()
    })
  }

  var e = function (a) {
    var b = arguments, c = !0, d = 1;
    a = a.replace(/%s/g, function () {
      var a = b[d++];
      return "undefined" === typeof a ? (c = !1, "") : a
    });
    return c ? a : ""
  }, n = function (a) {
    for (var b = [{
      base: "A",
      letters: /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g
    }, {base: "AA", letters: /[\uA732]/g}, {base: "AE", letters: /[\u00C6\u01FC\u01E2]/g}, {
      base: "AO",
      letters: /[\uA734]/g
    }, {base: "AU", letters: /[\uA736]/g}, {base: "AV", letters: /[\uA738\uA73A]/g}, {
      base: "AY",
      letters: /[\uA73C]/g
    }, {base: "B", letters: /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g},
      {base: "C", letters: /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g}, {
        base: "D",
        letters: /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g
      }, {base: "DZ", letters: /[\u01F1\u01C4]/g}, {base: "Dz", letters: /[\u01F2\u01C5]/g}, {
        base: "E",
        letters: /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g
      }, {base: "F", letters: /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g},
      {
        base: "G",
        letters: /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g
      }, {
        base: "H",
        letters: /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g
      }, {
        base: "I",
        letters: /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g
      }, {base: "J", letters: /[\u004A\u24BF\uFF2A\u0134\u0248]/g}, {
        base: "K",
        letters: /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g
      },
      {
        base: "L",
        letters: /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g
      }, {base: "LJ", letters: /[\u01C7]/g}, {base: "Lj", letters: /[\u01C8]/g}, {
        base: "M",
        letters: /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g
      }, {
        base: "N",
        letters: /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g
      }, {base: "NJ", letters: /[\u01CA]/g}, {base: "Nj", letters: /[\u01CB]/g}, {
        base: "O",
        letters: /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g
      },
      {base: "OI", letters: /[\u01A2]/g}, {base: "OO", letters: /[\uA74E]/g}, {
        base: "OU",
        letters: /[\u0222]/g
      }, {base: "P", letters: /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g}, {
        base: "Q",
        letters: /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g
      }, {
        base: "R",
        letters: /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g
      }, {
        base: "S",
        letters: /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g
      }, {
        base: "T",
        letters: /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g
      }, {base: "TZ", letters: /[\uA728]/g}, {
        base: "U",
        letters: /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g
      }, {base: "V", letters: /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g}, {
        base: "VY",
        letters: /[\uA760]/g
      }, {base: "W", letters: /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g},
      {base: "X", letters: /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g}, {
        base: "Y",
        letters: /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g
      }, {
        base: "Z",
        letters: /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g
      }, {
        base: "a",
        letters: /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g
      },
      {base: "aa", letters: /[\uA733]/g}, {base: "ae", letters: /[\u00E6\u01FD\u01E3]/g}, {
        base: "ao",
        letters: /[\uA735]/g
      }, {base: "au", letters: /[\uA737]/g}, {base: "av", letters: /[\uA739\uA73B]/g}, {
        base: "ay",
        letters: /[\uA73D]/g
      }, {base: "b", letters: /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g}, {
        base: "c",
        letters: /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g
      }, {
        base: "d",
        letters: /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g
      },
      {base: "dz", letters: /[\u01F3\u01C6]/g}, {
        base: "e",
        letters: /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g
      }, {base: "f", letters: /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g}, {
        base: "g",
        letters: /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g
      }, {
        base: "h",
        letters: /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g
      },
      {base: "hv", letters: /[\u0195]/g}, {
        base: "i",
        letters: /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g
      }, {base: "j", letters: /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g}, {
        base: "k",
        letters: /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g
      }, {
        base: "l",
        letters: /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g
      }, {base: "lj", letters: /[\u01C9]/g},
      {base: "m", letters: /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g}, {
        base: "n",
        letters: /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g
      }, {base: "nj", letters: /[\u01CC]/g}, {
        base: "o",
        letters: /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g
      },
      {base: "oi", letters: /[\u01A3]/g}, {base: "ou", letters: /[\u0223]/g}, {
        base: "oo",
        letters: /[\uA74F]/g
      }, {base: "p", letters: /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g}, {
        base: "q",
        letters: /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g
      }, {
        base: "r",
        letters: /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g
      }, {
        base: "s",
        letters: /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g
      },
      {
        base: "t",
        letters: /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g
      }, {base: "tz", letters: /[\uA729]/g}, {
        base: "u",
        letters: /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g
      }, {base: "v", letters: /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g}, {
        base: "vy",
        letters: /[\uA761]/g
      }, {base: "w", letters: /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g},
      {base: "x", letters: /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g}, {
        base: "y",
        letters: /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g
      }, {
        base: "z",
        letters: /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g
      }], c = 0; c < b.length; c++)a = a.replace(b[c].letters, b[c].base);
    return a
  };
  h.prototype = {
    constructor: h, init: function () {
      var a = this, b = d("\x3cul\x3e\x3c/ul\x3e");
      this.$drop.html("");
      this.options.filter && this.$drop.append('\x3cdiv class\x3d"ms-search"\x3e\x3cinput type\x3d"text" autocomplete\x3d"off" autocorrect\x3d"off" autocapitilize\x3d"off" spellcheck\x3d"false"\x3e\x3c/div\x3e');
      this.options.selectAll && !this.options.single && b.append(['\x3cli class\x3d"ms-select-all"\x3e\x3clabel\x3e', e('\x3cinput type\x3d"checkbox" %s /\x3e ', this.selectAllName), this.options.selectAllDelimiter[0], this.options.selectAllText, this.options.selectAllDelimiter[1], "\x3c/label\x3e\x3c/li\x3e"].join(""));
      d.each(this.$el.children(), function (c, d) {
        b.append(a.optionToHtml(c, d))
      });
      b.append(e('\x3cli class\x3d"ms-no-results"\x3e%s\x3c/li\x3e', this.options.noMatchesFound));
      this.$drop.append(b);
      this.$drop.find("ul").css("max-height",
        this.options.maxHeight + "px");
      this.$drop.find(".multiple").css("width", this.options.multipleWidth + "px");
      this.$searchInput = this.$drop.find(".ms-search input");
      this.$selectAll = this.$drop.find("input[" + this.selectAllName + "]");
      this.$selectGroups = this.$drop.find("input[" + this.selectGroupName + "]");
      this.$selectItems = this.$drop.find("input[" + this.selectItemName + "]:enabled");
      this.$disableItems = this.$drop.find("input[" + this.selectItemName + "]:disabled");
      this.$noResults = this.$drop.find(".ms-no-results");
      this.events();
      this.updateSelectAll(!0);
      this.update(!0);
      this.options.isOpen && this.open()
    }, optionToHtml: function (a, b, c, f) {
      var m = this;
      b = d(b);
      var k = b.attr("class") || "", l = e('title\x3d"%s"', b.attr("title")),
        q = this.options.multiple ? "multiple" : "", g, h = this.options.single ? "radio" : "checkbox";
      if (b.is("option")) {
        a = b.val();
        var n = m.options.textTemplate(b), r = b.prop("selected"), t = e('style\x3d"%s"', this.options.styler(a));
        g = f || b.prop("disabled");
        f = d([e('\x3cli class\x3d"%s %s" %s %s\x3e', q, k, l, t), e('\x3clabel class\x3d"%s"\x3e',
          g ? "disabled" : ""), e('\x3cinput type\x3d"%s" %s%s%s%s\x3e', h, this.selectItemName, r ? ' checked\x3d"checked"' : "", g ? ' disabled\x3d"disabled"' : "", e(' data-group\x3d"%s"', c)), e("\x3cspan\x3e%s\x3c/span\x3e", n), "\x3c/label\x3e\x3c/li\x3e"].join(""));
        f.find("input").val(a);
        return f
      }
      if (b.is("optgroup")) {
        f = m.options.labelTemplate(b);
        var p = d("\x3cdiv/\x3e");
        c = "group_" + a;
        g = b.prop("disabled");
        p.append(['\x3cli class\x3d"group"\x3e', e('\x3clabel class\x3d"optgroup %s" data-group\x3d"%s"\x3e', g ? "disabled" : "", c), this.options.hideOptgroupCheckboxes ||
        this.options.single ? "" : e('\x3cinput type\x3d"checkbox" %s %s\x3e', this.selectGroupName, g ? 'disabled\x3d"disabled"' : ""), f, "\x3c/label\x3e\x3c/li\x3e"].join(""));
        d.each(b.children(), function (a, b) {
          p.append(m.optionToHtml(a, b, c, g))
        });
        return p.html()
      }
    }, events: function () {
      var a = this, b = function (c) {
        c.preventDefault();
        a[a.options.isOpen ? "close" : "open"]()
      };
      if (this.$label) this.$label.off("click").on("click", function (c) {
        "label" === c.target.nodeName.toLowerCase() && c.target === this && (b(c), a.options.filter && a.options.isOpen ||
        a.focus(), c.stopPropagation())
      });
      this.$choice.off("click").on("click", b).off("focus").on("focus", this.options.onFocus).off("blur").on("blur", this.options.onBlur);
      this.$parent.off("keydown").on("keydown", function (c) {
        switch (c.which) {
          case 27:
            a.close(), a.$choice.focus()
        }
      });
      this.$searchInput.off("keydown").on("keydown", function (c) {
        9 === c.keyCode && c.shiftKey && a.close()
      }).off("keyup").on("keyup", function (c) {
        a.options.filterAcceptOnEnter && (13 === c.which || 32 == c.which) && a.$searchInput.val() ? (a.$selectAll.click(),
          a.close(), a.focus()) : a.filter()
      });
      this.$selectAll.off("click").on("click", function () {
        var c = d(this).prop("checked"), b = a.$selectItems.filter(":visible");
        if (b.length === a.$selectItems.length) a[c ? "checkAll" : "uncheckAll"](); else a.$selectGroups.prop("checked", c), b.prop("checked", c), a.options[c ? "onCheckAll" : "onUncheckAll"](), a.update()
      });
      this.$selectGroups.off("click").on("click", function () {
        var c = d(this).parent().attr("data-group"),
          c = a.$selectItems.filter(":visible").filter(e('[data-group\x3d"%s"]', c)),
          b = c.length !== c.filter(":checked").length;
        c.prop("checked", b);
        a.updateSelectAll();
        a.update();
        a.options.onOptgroupClick({label: d(this).parent().text(), checked: b, children: c.get(), instance: a})
      });
      this.$selectItems.off("click").on("click", function () {
        a.updateSelectAll();
        a.update();
        a.updateOptGroupSelect();
        a.options.onClick({
          label: d(this).parent().text(),
          value: d(this).val(),
          checked: d(this).prop("checked"),
          instance: a
        });
        a.options.single && a.options.isOpen && !a.options.keepOpen && a.close();
        if (a.options.single) {
          var c =
            d(this).val();
          a.$selectItems.filter(function () {
            return d(this).val() !== c
          }).each(function () {
            d(this).prop("checked", !1)
          });
          a.update()
        }
      })
    }, open: function () {
      if (!this.$choice.hasClass("disabled")) {
        this.options.isOpen = !0;
        this.$choice.find("\x3ediv").addClass("open");
        this.$drop[this.animateMethod("show")]();
        this.$selectAll.parent().show();
        this.$noResults.hide();
        this.$el.children().length || (this.$selectAll.parent().hide(), this.$noResults.show());
        if (this.options.container) {
          var a = this.$drop.offset();
          this.$drop.appendTo(d(this.options.container));
          this.$drop.offset({top: a.top, left: a.left})
        }
        this.options.filter && (this.$searchInput.val(""), this.$searchInput.focus(), this.filter());
        this.options.onOpen()
      }
    }, close: function () {
      this.options.isOpen = !1;
      this.$choice.find("\x3ediv").removeClass("open");
      this.$drop[this.animateMethod("hide")]();
      this.options.container && (this.$parent.append(this.$drop), this.$drop.css({top: "auto", left: "auto"}));
      this.options.onClose()
    }, animateMethod: function (a) {
      return {
          show: {fade: "fadeIn", slide: "slideDown"}, hide: {
            fade: "fadeOut",
            slide: "slideUp"
          }
        }[a][this.options.animate] || a
    }, update: function (a) {
      var b = this.options.displayValues ? this.getSelects() : this.getSelects("text"),
        c = this.$choice.find("\x3espan"), f = b.length;
      0 === f ? c.addClass("placeholder").html(this.options.placeholder) : this.options.allSelected && f === this.$selectItems.length + this.$disableItems.length ? c.removeClass("placeholder").html(this.options.allSelected) : this.options.ellipsis && f > this.options.minimumCountSelected ? c.removeClass("placeholder").text(b.slice(0, this.options.minimumCountSelected).join(this.options.delimiter) +
        "...") : this.options.countSelected && f > this.options.minimumCountSelected ? c.removeClass("placeholder").html(this.options.countSelected.replace("#", b.length).replace("%", this.$selectItems.length + this.$disableItems.length)) : c.removeClass("placeholder").text(b.join(this.options.delimiter));
      this.options.addTitle && c.prop("title", this.getSelects("text"));
      this.$el.val(this.getSelects()).trigger("change");
      this.$drop.find("li").removeClass("selected");
      this.$drop.find("input:checked").each(function () {
        d(this).parents("li").first().addClass("selected")
      });
      a || this.$el.trigger("change")
    }, updateSelectAll: function (a) {
      var b = this.$selectItems;
      a || (b = b.filter(":visible"));
      this.$selectAll.prop("checked", b.length && b.length === b.filter(":checked").length);
      if (!a && this.$selectAll.prop("checked")) this.options.onCheckAll()
    }, updateOptGroupSelect: function () {
      var a = this.$selectItems.filter(":visible");
      d.each(this.$selectGroups, function (b, c) {
        var f = d(c).parent().attr("data-group"), f = a.filter(e('[data-group\x3d"%s"]', f));
        d(c).prop("checked", f.length && f.length === f.filter(":checked").length)
      })
    },
    getSelects: function (a) {
      var b = this, c = [], f = [];
      this.$drop.find(e("input[%s]:checked", this.selectItemName)).each(function () {
        c.push(d(this).parents("li").first().text());
        f.push(d(this).val())
      });
      "text" === a && this.$selectGroups.length && (c = [], this.$selectGroups.each(function () {
        var a = [], f = d.trim(d(this).parent().text()), l = d(this).parent().data("group"),
          l = b.$drop.find(e('[%s][data-group\x3d"%s"]', b.selectItemName, l)), h = l.filter(":checked");
        if (h.length) {
          a.push("[");
          a.push(f);
          if (l.length > h.length) {
            var g = [];
            h.each(function () {
              g.push(d(this).parent().text())
            });
            a.push(": " + g.join(", "))
          }
          a.push("]");
          c.push(a.join(""))
        }
      }));
      return "text" === a ? c : f
    }, setSelects: function (a) {
      var b = this;
      this.$selectItems.prop("checked", !1);
      this.$disableItems.prop("checked", !1);
      d.each(a, function (a, d) {
        b.$selectItems.filter(e('[value\x3d"%s"]', d)).prop("checked", !0);
        b.$disableItems.filter(e('[value\x3d"%s"]', d)).prop("checked", !0)
      });
      this.$selectAll.prop("checked", this.$selectItems.length === this.$selectItems.filter(":checked").length + this.$disableItems.filter(":checked").length);
      d.each(b.$selectGroups,
        function (a, f) {
          var e = d(f).parent().attr("data-group"), e = b.$selectItems.filter('[data-group\x3d"' + e + '"]');
          d(f).prop("checked", e.length && e.length === e.filter(":checked").length)
        });
      this.update()
    }, enable: function () {
      this.$choice.removeClass("disabled")
    }, disable: function () {
      this.$choice.addClass("disabled")
    }, checkAll: function () {
      this.$selectItems.prop("checked", !0);
      this.$selectGroups.prop("checked", !0);
      this.$selectAll.prop("checked", !0);
      this.update();
      this.options.onCheckAll()
    }, uncheckAll: function () {
      this.$selectItems.prop("checked",
        !1);
      this.$selectGroups.prop("checked", !1);
      this.$selectAll.prop("checked", !1);
      this.update();
      this.options.onUncheckAll()
    }, focus: function () {
      this.$choice.focus();
      this.options.onFocus()
    }, blur: function () {
      this.$choice.blur();
      this.options.onBlur()
    }, refresh: function () {
      this.init()
    }, filter: function () {
      var a = this, b = d.trim(this.$searchInput.val()).toLowerCase();
      0 === b.length ? (this.$selectAll.parent().show(), this.$selectItems.parent().show(), this.$disableItems.parent().show(), this.$selectGroups.parent().show(), this.$noResults.hide()) :
        (this.$selectItems.each(function () {
          var a = d(this).parent();
          a[0 > n(a.text().toLowerCase()).indexOf(n(b)) ? "hide" : "show"]()
        }), this.$disableItems.parent().hide(), this.$selectGroups.each(function () {
          var b = d(this).parent(), f = b.attr("data-group"), m = a.$selectItems.filter(":visible");
          b[m.filter(e('[data-group\x3d"%s"]', f)).length ? "show" : "hide"]()
        }), this.$selectItems.parent().filter(":visible").length ? (this.$selectAll.parent().show(), this.$noResults.hide()) : (this.$selectAll.parent().hide(), this.$noResults.show()));
      this.updateOptGroupSelect();
      this.updateSelectAll();
      this.options.onFilter(b)
    }
  };
  d.fn.multipleSelect = function () {
    var a = arguments[0], b = arguments, c,
      f = "getSelects setSelects enable disable open close checkAll uncheckAll focus blur refresh close".split(" ");
    this.each(function () {
      var e = d(this), k = e.data("multipleSelect"),
        l = d.extend({}, d.fn.multipleSelect.defaults, e.data(), "object" === typeof a && a);
      k || (k = new h(e, l), e.data("multipleSelect", k));
      if ("string" === typeof a) {
        if (0 > d.inArray(a, f))throw"Unknown method: " +
        a;
        c = k[a](b[1])
      } else k.init(), b[1] && (c = k[b[1]].apply(k, [].slice.call(b, 2)))
    });
    return "undefined" !== typeof c ? c : this
  };
  d.fn.multipleSelect.defaults = {
    name: "",
    isOpen: !1,
    placeholder: "",
    selectAll: !0,
    selectAllDelimiter: ["[", "]"],
    minimumCountSelected: 3,
    ellipsis: !1,
    multiple: !1,
    multipleWidth: 80,
    single: !1,
    filter: !1,
    width: void 0,
    dropWidth: void 0,
    maxHeight: 250,
    container: null,
    position: "bottom",
    keepOpen: !1,
    animate: "none",
    displayValues: !1,
    delimiter: ", ",
    addTitle: !1,
    filterAcceptOnEnter: !1,
    hideOptgroupCheckboxes: !1,
    selectAllText: "Select all",
    allSelected: "All selected",
    countSelected: "# of % selected",
    noMatchesFound: "No matches found",
    styler: function () {
      return !1
    },
    textTemplate: function (a) {
      return a.html()
    },
    labelTemplate: function (a) {
      return a.attr("label")
    },
    onOpen: function () {
      return !1
    },
    onClose: function () {
      return !1
    },
    onCheckAll: function () {
      return !1
    },
    onUncheckAll: function () {
      return !1
    },
    onFocus: function () {
      return !1
    },
    onBlur: function () {
      return !1
    },
    onOptgroupClick: function () {
      return !1
    },
    onClick: function () {
      return !1
    },
    onFilter: function () {
      return !1
    }
  }
})(jQuery);
this.JSON || (this.JSON = {});
(function () {
  function b (a) {
    return 10 > a ? "0" + a : a
  }

  function k (a) {
    r.lastIndex = 0;
    return r.test(a) ? '"' + a.replace(r, function (a) {
        var d = u[a];
        return "string" === typeof d ? d : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
      }) + '"' : '"' + a + '"'
  }

  function m (a, g) {
    var d, b, q = e, f, c = g[a];
    c && "object" === typeof c && "function" === typeof c.toJSON && (c = c.toJSON(a));
    "function" === typeof l && (c = l.call(g, a, c));
    switch (typeof c) {
      case "string":
        return k(c);
      case "number":
        return isFinite(c) ? String(c) : "null";
      case "boolean":
      case "null":
        return String(c);
      case "object":
        if (!c)return "null";
        e += n;
        f = [];
        if ("[object Array]" === Object.prototype.toString.apply(c)) {
          b = c.length;
          for (a = 0; a < b; a += 1)f[a] = m(a, c) || "null";
          g = 0 === f.length ? "[]" : e ? "[\n" + e + f.join(",\n" + e) + "\n" + q + "]" : "[" + f.join(",") + "]";
          e = q;
          return g
        }
        if (l && "object" === typeof l)for (b = l.length, a = 0; a < b; a += 1)d = l[a], "string" === typeof d && (g = m(d, c)) && f.push(k(d) + (e ? ": " : ":") + g); else for (d in c)Object.hasOwnProperty.call(c, d) && (g = m(d, c)) && f.push(k(d) + (e ? ": " : ":") + g);
        g = 0 === f.length ? "{}" : e ? "{\n" + e + f.join(",\n" + e) + "\n" + q + "}" : "{" + f.join(",") + "}";
        e = q;
        return g
    }
  }

  "function" !== typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + b(this.getUTCMonth() + 1) + "-" + b(this.getUTCDate()) + "T" + b(this.getUTCHours()) + ":" + b(this.getUTCMinutes()) + ":" + b(this.getUTCSeconds()) + "Z" : null
  }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
    return this.valueOf()
  });
  var t = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    r = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    e, n, u = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"}, l;
  "function" !== typeof JSON.stringify && (JSON.stringify = function (a, b, d) {
    var p;
    n = e = "";
    if ("number" === typeof d)for (p = 0; p < d; p += 1)n += " "; else"string" === typeof d && (n = d);
    if ((l = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length))throw Error("JSON.stringify");
    return m("", {"": a})
  });
  "function" !== typeof JSON.parse && (JSON.parse = function (a, b) {
    function d (a, e) {
      var f, c, h = a[e];
      if (h && "object" === typeof h)for (f in h)Object.hasOwnProperty.call(h,
        f) && (c = d(h, f), void 0 !== c ? h[f] = c : delete h[f]);
      return b.call(a, e, h)
    }

    t.lastIndex = 0;
    t.test(a) && (a = a.replace(t, function (a) {
      return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    }));
    if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return a = eval("(" + a + ")"), "function" === typeof b ? d({"": a}, "") : a;
    throw new SyntaxError("JSON.parse");
  })
})();
jQuery.fn.serializeObject = function () {
  var b = {}, k = this.serializeArray();
  jQuery.each(k, function () {
    b[this.name] ? (b[this.name].push || (b[this.name] = [b[this.name]]), b[this.name].push(this.value || "")) : b[this.name] = this.value || ""
  });
  return b
};
jQuery.postJSON = function (b, k, m) {
  return jQuery.ajax({
    type: "POST",
    url: b,
    contentType: "application/json",
    data: JSON.stringify(k),
    dataType: "json",
    success: m
  })
};
(function (d) {
  function x (a, b, f) {
    var c = a[0], g = /er/.test(f) ? "indeterminate" : /bl/.test(f) ? "disabled" : "checked", e = "update" == f ? {
      checked: c.checked,
      disabled: c.disabled,
      indeterminate: "true" == a.attr("indeterminate") || "false" == a.attr("determinate")
    } : c[g];
    if (/^(ch|di|in)/.test(f) && !e) u(a, g); else if (/^(un|en|de)/.test(f) && e) n(a, g); else if ("update" == f)for (var d in e)e[d] ? u(a, d, !0) : n(a, d, !0); else b && "toggle" != f || (b || a.trigger("ifClicked"), e ? "radio" !== c.type && n(a, g) : u(a, g))
  }

  function u (a, b, f) {
    var c = a[0], g = a.parent(),
      e = "checked" == b, l = "indeterminate" == b, y = "disabled" == b,
      p = l ? "determinate" : e ? "unchecked" : "enabled", C = k(a, p + q(c.type)), r = k(a, b + q(c.type));
    if (!0 !== c[b]) {
      if (!f && "checked" == b && "radio" == c.type && c.name) {
        var t = a.closest("form"), m = 'input[name\x3d"' + c.name + '"]', m = t.length ? t.find(m) : d(m);
        m.each(function () {
          this !== c && d(this).data("iCheck") && n(d(this), b)
        })
      }
      l ? (c[b] = !0, c.checked && n(a, "checked", "force")) : (f || (c[b] = !0), e && c.indeterminate && n(a, "indeterminate", !1));
      v(a, e, b, f)
    }
    c.disabled && k(a, "cursor", !0) && g.find(".iCheck-helper").css("cursor",
      "default");
    g.addClass(r || k(a, b) || "");
    g.attr("role") && !l && g.attr("aria-" + (y ? "disabled" : "checked"), "true");
    g.removeClass(C || k(a, p) || "");
    f || (-1 === a[0].className.indexOf("_LayerSelect") && d(a).trigger("click"), a.get(0).checked = !0, jQuery(a).trigger("change"))
  }

  function n (a, b, f) {
    var c = a[0], d = a.parent(), e = "checked" == b, l = "indeterminate" == b, y = "disabled" == b,
      p = l ? "determinate" : e ? "unchecked" : "enabled", n = k(a, p + q(c.type)), r = k(a, b + q(c.type));
    if (!1 !== c[b]) {
      if (l || !f || "force" == f) c[b] = !1;
      v(a, e, p, f)
    }
    !c.disabled && k(a, "cursor",
      !0) && d.find(".iCheck-helper").css("cursor", "pointer");
    d.removeClass(r || k(a, b) || "");
    d.attr("role") && !l && d.attr("aria-" + (y ? "disabled" : "checked"), "false");
    d.addClass(n || k(a, p) || "");
    f || (a.get(0).checked = !1, "checkbox" == a.get(0).type && jQuery(a).trigger("change"))
  }

  function A (a, b) {
    a.data("iCheck") && (a.parent().html(a.attr("style", a.data("iCheck").s || "")), b && a.trigger(b), a.off(".i").unwrap(), d('label[for\x3d"' + a[0].id + '"]').add(a.closest("label")).off(".i"))
  }

  function k (a, b, d) {
    if (a.data("iCheck"))return a.data("iCheck").o[b +
    (d ? "" : "Class")]
  }

  function q (a) {
    return a.charAt(0).toUpperCase() + a.slice(1)
  }

  function v (a, b, d, c) {
    c || (b && a.trigger("ifToggled"), a.trigger("ifChanged").trigger("if" + q(d)))
  }

  var z = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
  d.fn.iCheck = function (a, b) {
    var f = 'input[type\x3d"checkbox"], input[type\x3d"radio"]', c = d(), g = function (a) {
      a.each(function () {
        var a = d(this);
        c = a.is(f) ? c.add(a) : c.add(a.find(f))
      })
    };
    if (/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a =
      a.toLowerCase(), g(this), c.each(function () {
      var c = d(this);
      "destroy" == a ? A(c, "ifDestroyed") : x(c, !0, a);
      d.isFunction(b) && b()
    });
    if ("object" != typeof a && a)return this;
    var e = d.extend({
        checkedClass: "checked",
        disabledClass: "disabled",
        indeterminateClass: "indeterminate",
        labelHover: !0
      }, a), l = e.handle, k = e.hoverClass || "hover", p = e.focusClass || "focus", q = e.activeClass || "active",
      r = !!e.labelHover, t = e.labelHoverClass || "hover", m = ("" + e.increaseArea).replace("%", "") | 0;
    if ("checkbox" == l || "radio" == l) f = 'input[type\x3d"' + l + '"]';
    -50 > m && (m = -50);
    g(this);
    return c.each(function () {
      var a = d(this);
      A(a);
      var c = this, b = c.id, f = -m + "%", g = 100 + 2 * m + "%", g = {
          position: "absolute",
          top: f,
          left: f,
          display: "block",
          width: g,
          height: g,
          margin: 0,
          padding: 0,
          background: "#fff",
          border: 0,
          opacity: 0
        }, f = z ? {position: "absolute", visibility: "hidden"} : m ? g : {position: "absolute", opacity: 0},
        l = "checkbox" == c.type ? e.checkboxClass || "icheckbox" : e.radioClass || "iradio",
        w = d('label[for\x3d"' + b + '"]').add(a.closest("label")), v = !!e.aria,
        B = "iCheck-" + Math.random().toString(36).substr(2,
            6), h = '\x3cdiv class\x3d"' + l + '" ' + (v ? 'role\x3d"' + c.type + '" ' : "");
      v && w.each(function () {
        h += 'aria-labelledby\x3d"';
        this.id ? h += this.id : (this.id = B, h += B);
        h += '"'
      });
      h = a.wrap(h + "/\x3e").trigger("ifCreated").parent().append(e.insert);
      g = d('\x3cins class\x3d"iCheck-helper"/\x3e').css(g).appendTo(h);
      a.data("iCheck", {o: e, s: a.attr("style")}).css(f);
      e.inheritClass && h.addClass(c.className || "");
      e.inheritID && b && h.attr("id", "iCheck-" + b);
      "static" == h.css("position") && h.css("position", "relative");
      x(a, !0, "update");
      if (w.length) w.on("click.i mouseover.i mouseout.i touchbegin.i touchend.i",
        function (b) {
          var e = b.type, f = d(this);
          if (!c.disabled) {
            if ("click" == e) {
              if (d(b.target).is("a"))return;
              x(a, !1, !0)
            } else r && (/ut|nd/.test(e) ? (h.removeClass(k), f.removeClass(t)) : (h.addClass(k), f.addClass(t)));
            if (z) b.stopPropagation(); else return !1
          }
        });
      a.on("click.i focus.i blur.i keyup.i keydown.i keypress.i", function (b) {
        var d = b.type;
        b = b.keyCode;
        if ("click" == d)return !1;
        if ("keydown" == d && 32 == b)return "radio" == c.type && c.checked || (c.checked ? n(a, "checked") : u(a, "checked")), !1;
        if ("keyup" == d && "radio" == c.type) !c.checked &&
        u(a, "checked"); else if (/us|ur/.test(d)) h["blur" == d ? "removeClass" : "addClass"](p)
      });
      g.on("click mousedown mouseup mouseover mouseout touchbegin.i touchend.i", function (b) {
        var d = b.type, e = /wn|up/.test(d) ? q : k;
        if (!c.disabled) {
          if ("click" == d) x(a, !1, !0); else if (/wn|er|in/.test(d) ? h.addClass(e) : h.removeClass(e + " " + q), w.length && r && e == k) w[/ut|nd/.test(d) ? "removeClass" : "addClass"](t);
          if (z) b.stopPropagation(); else return !1
        }
      })
    })
  }
})(window.jQuery || window.Zepto);
!function (d) {
  d(window.jQuery, window, document)
}(function (d, p, w, x) {
  d.widget("selectBox.selectBoxIt", {
    VERSION: "3.8.1",
    options: {
      showEffect: "none",
      showEffectOptions: {},
      showEffectSpeed: "medium",
      hideEffect: "none",
      hideEffectOptions: {},
      hideEffectSpeed: "medium",
      showFirstOption: !0,
      defaultText: "",
      defaultIcon: "",
      downArrowIcon: "",
      theme: "default",
      keydownOpen: !0,
      isMobile: function () {
        return /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(navigator.userAgent || navigator.vendor || p.opera)
      },
      "native": !1,
      aggressiveChange: !1,
      selectWhenHidden: !0,
      viewport: d(p),
      similarSearch: !1,
      copyAttributes: ["title", "rel"],
      copyClasses: "button",
      nativeMousedown: !1,
      customShowHideEvent: !1,
      autoWidth: !0,
      html: !0,
      populate: "",
      dynamicPositioning: !0,
      hideCurrent: !1
    },
    getThemes: function () {
      var a = d(this.element).attr("data-theme") || "c";
      return {
        bootstrap: {
          focus: "active",
          hover: "",
          enabled: "enabled",
          disabled: "disabled",
          arrow: "caret",
          button: "btn",
          list: "dropdown-menu",
          container: "bootstrap",
          open: "open"
        },
        jqueryui: {
          focus: "ui-state-focus",
          hover: "ui-state-hover",
          enabled: "ui-state-enabled",
          disabled: "ui-state-disabled",
          arrow: "ui-icon ui-icon-triangle-1-s",
          button: "ui-widget ui-state-default",
          list: "ui-widget ui-widget-content",
          container: "jqueryui",
          open: "selectboxit-open"
        },
        jquerymobile: {
          focus: "ui-btn-down-" + a,
          hover: "ui-btn-hover-" + a,
          enabled: "ui-enabled",
          disabled: "ui-disabled",
          arrow: "ui-icon ui-icon-arrow-d ui-icon-shadow",
          button: "ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-" + a,
          list: "ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-" +
          a,
          container: "jquerymobile",
          open: "selectboxit-open"
        },
        "default": {
          focus: "selectboxit-focus",
          hover: "selectboxit-hover",
          enabled: "selectboxit-enabled",
          disabled: "selectboxit-disabled",
          arrow: "selectboxit-default-arrow",
          button: "selectboxit-btn",
          list: "selectboxit-list",
          container: "selectboxit-container",
          open: "selectboxit-open"
        }
      }
    },
    isDeferred: function (a) {
      return d.isPlainObject(a) && a.promise && a.done
    },
    _create: function (a) {
      var c = this.options.populate, b = this.options.theme;
      if (this.element.is("select"))return this.widgetProto =
        d.Widget.prototype, this.originalElem = this.element[0], this.selectBox = this.element, this.options.populate && this.add && !a && this.add(c), this.selectItems = this.element.find("option"), this.firstSelectItem = this.selectItems.slice(0, 1), this.documentHeight = d(w).height(), this.theme = d.isPlainObject(b) ? d.extend({}, this.getThemes()["default"], b) : this.getThemes()[b] ? this.getThemes()[b] : this.getThemes()["default"], this.currentFocus = 0, this.blur = !0, this.textArray = [], this.currentIndex = 0, this.currentText = "", this.flipped =
        !1, a || (this.selectBoxStyles = this.selectBox.attr("style")), this._createDropdownButton()._createUnorderedList()._copyAttributes()._replaceSelectBox()._addClasses(this.theme)._eventHandlers(), this.originalElem.disabled && this.disable && this.disable(), this._ariaAccessibility && this._ariaAccessibility(), this.isMobile = this.options.isMobile(), this._mobile && this._mobile(), this.options["native"] && this._applyNativeSelect(), this.triggerEvent("create"), this
    },
    _createDropdownButton: function () {
      var a = this.originalElemId =
          this.originalElem.id || "", c = this.originalElemValue = this.originalElem.value || "",
        b = this.originalElemName = this.originalElem.name || "", h = this.options.copyClasses,
        g = this.selectBox.attr("class") || "";
      return this.dropdownText = d("\x3cspan/\x3e", {
        id: a && a + "SelectBoxItText",
        "class": "selectboxit-text",
        unselectable: "on",
        text: this.firstSelectItem.text()
      }).attr("data-val", c), this.dropdownImageContainer = d("\x3cspan/\x3e", {"class": "selectboxit-option-icon-container"}), this.dropdownImage = d("\x3ci/\x3e", {
        id: a && a + "SelectBoxItDefaultIcon",
        "class": "selectboxit-default-icon", unselectable: "on"
      }), this.dropdown = d("\x3cspan/\x3e", {
        id: a && a + "SelectBoxIt",
        "class": "selectboxit " + ("button" === h ? g : "") + " " + (this.selectBox.prop("disabled") ? this.theme.disabled : this.theme.enabled),
        name: b,
        tabindex: this.selectBox.attr("tabindex") || "0",
        unselectable: "on"
      }).append(this.dropdownImageContainer.append(this.dropdownImage)).append(this.dropdownText), this.dropdownContainer = d("\x3cspan/\x3e", {
        id: a && a + "SelectBoxItContainer", "class": "selectboxit-container " + this.theme.container +
        " " + ("container" === h ? g : "")
      }).append(this.dropdown), this
    },
    _createUnorderedList: function () {
      var a, c, b, h, g, e, f, l, m, u, q, n, t, k = this, v = "", r = k.originalElemId || "",
        r = d("\x3cul/\x3e", {id: r && r + "SelectBoxItOptions", "class": "selectboxit-options", tabindex: -1});
      if (k.options.showFirstOption || (k.selectItems.first().attr("disabled", "disabled"), k.selectItems = k.selectBox.find("option").slice(1)), k.selectItems.each(function (p) {
          n = d(this);
          b = c = "";
          a = n.prop("disabled");
          h = n.attr("data-icon") || "";
          e = (g = n.attr("data-iconurl") ||
            "") ? "selectboxit-option-icon-url" : "";
          f = g ? "style\x3d\"background-image:url('" + g + "');\"" : "";
          l = n.attr("data-selectedtext");
          q = (m = n.attr("data-text")) ? m : n.text();
          t = n.parent();
          t.is("optgroup") && (c = "selectboxit-optgroup-option", 0 === n.index() && (b = '\x3cspan class\x3d"selectboxit-optgroup-header ' + t.first().attr("class") + '"data-disabled\x3d"true"\x3e' + t.first().attr("label") + "\x3c/span\x3e"));
          n.attr("value", this.value);
          v += b + '\x3cli data-id\x3d"' + p + '" data-val\x3d"' + this.value + '" data-disabled\x3d"' + a + '" class\x3d"' +
            c + " selectboxit-option " + (d(this).attr("class") || "") + '"' + (this.style.cssText ? ' style\x3d"' + this.style.cssText + '"' : "") + '\x3e\x3ca class\x3d"selectboxit-option-anchor"\x3e\x3cspan class\x3d"selectboxit-option-icon-container"\x3e\x3ci class\x3d"selectboxit-option-icon ' + h + " " + (e || k.theme.container) + '"' + f + "\x3e\x3c/i\x3e\x3c/span\x3e" + (k.options.html ? q : k.htmlEscape(q)) + "\x3c/a\x3e\x3c/li\x3e";
          u = n.attr("data-search");
          k.textArray[p] = a ? "" : u ? u : q;
          this.selected && (k._setText(k.dropdownText, l || q), k.currentFocus =
            p)
        }), k.options.defaultText || k.selectBox.attr("data-text")) {
        var p = k.options.defaultText || k.selectBox.attr("data-text");
        k._setText(k.dropdownText, p);
        k.options.defaultText = p
      }
      return r.append(v), k.list = r, k.dropdownContainer.append(k.list), k.listItems = k.list.children("li"), k.listAnchors = k.list.find("a"), k.listItems.first().addClass("selectboxit-option-first"), k.listItems.last().addClass("selectboxit-option-last"), k.list.find("li[data-disabled\x3d'true']").not(".optgroupHeader").addClass(k.theme.disabled),
        k.dropdownImage.addClass(k.selectBox.attr("data-icon") || k.options.defaultIcon || k.listItems.eq(k.currentFocus).find("i").attr("class")), k.dropdownImage.attr("style", k.listItems.eq(k.currentFocus).find("i").attr("style")), k
    },
    _replaceSelectBox: function () {
      var a, c, b = this.originalElem.id || "", h = this.selectBox.attr("data-size"),
        h = this.listSize = h === x ? "auto" : "0" === h ? "auto" : +h;
      return this.selectBox.css("display", "none").after(this.dropdownContainer), this.dropdownContainer.appendTo("body").addClass("selectboxit-rendering"),
        this.dropdown.height(), this.downArrow = d("\x3ci/\x3e", {
        id: b && b + "SelectBoxItArrow",
        "class": "selectboxit-arrow",
        unselectable: "on"
      }), this.downArrowContainer = d("\x3cspan/\x3e", {
        id: b && b + "SelectBoxItArrowContainer",
        "class": "selectboxit-arrow-container",
        unselectable: "on"
      }).append(this.downArrow), this.dropdown.append(this.downArrowContainer), this.listItems.removeClass("selectboxit-selected").eq(this.currentFocus).addClass("selectboxit-selected"), a = this.downArrowContainer.outerWidth(!0), c = this.dropdownImage.outerWidth(!0),
      this.options.autoWidth && (this.dropdown.css({width: "auto"}).css({width: this.list.outerWidth(!0) + a + c}), this.list.css({"min-width": this.dropdown.width()})), this.dropdownText.css({"max-width": this.dropdownContainer.outerWidth(!0) - (a + c)}), this.selectBox.after(this.dropdownContainer), this.dropdownContainer.removeClass("selectboxit-rendering"), "number" === d.type(h) && (this.maxHeight = this.listAnchors.outerHeight(!0) * h), this
    },
    _scrollToView: function (a) {
      var c = this.listItems.eq(this.currentFocus), b = this.list.scrollTop(),
        d = c.height(), c = c.position().top, g = Math.abs(c), e = this.list.height();
      return "search" === a ? d > e - c ? this.list.scrollTop(b + (c - (e - d))) : -1 > c && this.list.scrollTop(c - d) : "up" === a ? -1 > c && this.list.scrollTop(b - g) : "down" === a && d > e - c && this.list.scrollTop(b + (g - e + d)), this
    },
    _callbackSupport: function (a) {
      return d.isFunction(a) && a.call(this, this.dropdown), this
    },
    _setText: function (a, c) {
      return this.options.html ? a.html(c) : a.text(c), this
    },
    open: function (a) {
      var c = this, b = c.options.showEffect, d = c.options.showEffectSpeed, g = c.options.showEffectOptions,
        e = c.options["native"], f = c.isMobile;
      return !c.listItems.length || c.dropdown.hasClass(c.theme.disabled) ? c : (e || f || this.list.is(":visible") || (c.triggerEvent("open"), c._dynamicPositioning && c.options.dynamicPositioning && c._dynamicPositioning(), "none" === b ? c.list.show() : "show" === b || "slideDown" === b || "fadeIn" === b ? c.list[b](d) : c.list.show(b, g, d), c.list.promise().done(function () {
        c._scrollToView("search");
        c.triggerEvent("opened")
      })), c._callbackSupport(a), c)
    },
    close: function (a) {
      var c = this, b = c.options.hideEffect, d =
        c.options.hideEffectSpeed, g = c.options.hideEffectOptions, e = c.isMobile;
      return c.options["native"] || e || !c.list.is(":visible") || (c.triggerEvent("close"), "none" === b ? c.list.hide() : "hide" === b || "slideUp" === b || "fadeOut" === b ? c.list[b](d) : c.list.hide(b, g, d), c.list.promise().done(function () {
        c.triggerEvent("closed")
      })), c._callbackSupport(a), c
    },
    toggle: function () {
      var a = this.list.is(":visible");
      a ? this.close() : a || this.open()
    },
    _keyMappings: {38: "up", 40: "down", 13: "enter", 8: "backspace", 9: "tab", 32: "space", 27: "esc"},
    _keydownMethods: function () {
      var a =
        this, c = a.list.is(":visible") || !a.options.keydownOpen;
      return {
        down: function () {
          a.moveDown && c && a.moveDown()
        }, up: function () {
          a.moveUp && c && a.moveUp()
        }, enter: function () {
          var b = a.listItems.eq(a.currentFocus);
          a._update(b);
          "true" !== b.attr("data-preventclose") && a.close();
          a.triggerEvent("enter")
        }, tab: function () {
          a.triggerEvent("tab-blur");
          a.close()
        }, backspace: function () {
          a.triggerEvent("backspace")
        }, esc: function () {
          a.close()
        }
      }
    },
    _eventHandlers: function () {
      var a, c, b = this, h = b.options.nativeMousedown, g = b.options.customShowHideEvent,
        e = b.focusClass, f = b.hoverClass, l = b.openClass;
      return this.dropdown.on({
        "click.selectBoxIt": function () {
          b.dropdown.trigger("focus", !0);
          b.originalElem.disabled || (b.triggerEvent("click"), h || g || b.toggle())
        }, "mousedown.selectBoxIt": function () {
          d(this).data("mdown", !0);
          b.triggerEvent("mousedown");
          h && !g && b.toggle()
        }, "mouseup.selectBoxIt": function () {
          b.triggerEvent("mouseup")
        }, "blur.selectBoxIt": function () {
          b.blur && (b.triggerEvent("blur"), b.close(), d(this).removeClass(e))
        }, "focus.selectBoxIt": function (a, c) {
          var h =
            d(this).data("mdown");
          d(this).removeData("mdown");
          h || c || setTimeout(function () {
            b.triggerEvent("tab-focus")
          }, 0);
          c || (d(this).hasClass(b.theme.disabled) || d(this).addClass(e), b.triggerEvent("focus"))
        }, "keydown.selectBoxIt": function (a) {
          var c = b._keyMappings[a.keyCode], d = b._keydownMethods()[c];
          d && (d(), !b.options.keydownOpen || "up" !== c && "down" !== c || b.open());
          d && "tab" !== c && a.preventDefault()
        }, "keypress.selectBoxIt": function (a) {
          var c = b._keyMappings[a.charCode || a.keyCode], d = String.fromCharCode(a.charCode || a.keyCode);
          b.search && (!c || c && "space" === c) && b.search(d, !0, !0);
          "space" === c && a.preventDefault()
        }, "mouseenter.selectBoxIt": function () {
          b.triggerEvent("mouseenter")
        }, "mouseleave.selectBoxIt": function () {
          b.triggerEvent("mouseleave")
        }
      }), b.list.on({
        "mouseover.selectBoxIt": function () {
          b.blur = !1
        }, "mouseout.selectBoxIt": function () {
          b.blur = !0
        }, "focusin.selectBoxIt": function () {
          b.dropdown.trigger("focus", !0)
        }
      }), b.list.on({
        "mousedown.selectBoxIt": function () {
          b._update(d(this));
          b.triggerEvent("option-click");
          "false" === d(this).attr("data-disabled") &&
          "true" !== d(this).attr("data-preventclose") && b.close();
          setTimeout(function () {
            b.dropdown.trigger("focus", !0)
          }, 0)
        }, "focusin.selectBoxIt": function () {
          b.listItems.not(d(this)).removeAttr("data-active");
          d(this).attr("data-active", "");
          var a = b.list.is(":hidden");
          (b.options.searchWhenHidden && a || b.options.aggressiveChange || a && b.options.selectWhenHidden) && b._update(d(this));
          d(this).addClass(e)
        }, "mouseup.selectBoxIt": function () {
          h && !g && (b._update(d(this)), b.triggerEvent("option-mouseup"), "false" === d(this).attr("data-disabled") &&
          "true" !== d(this).attr("data-preventclose") && b.close())
        }, "mouseenter.selectBoxIt": function () {
          "false" === d(this).attr("data-disabled") && (b.listItems.removeAttr("data-active"), d(this).addClass(e).attr("data-active", ""), b.listItems.not(d(this)).removeClass(e), d(this).addClass(e), b.currentFocus = +d(this).attr("data-id"))
        }, "mouseleave.selectBoxIt": function () {
          "false" === d(this).attr("data-disabled") && (b.listItems.not(d(this)).removeClass(e).removeAttr("data-active"), d(this).addClass(e), b.currentFocus = +d(this).attr("data-id"))
        },
        "blur.selectBoxIt": function () {
          d(this).removeClass(e)
        }
      }, ".selectboxit-option"), b.list.on({
        "click.selectBoxIt": function (a) {
          a.preventDefault()
        }
      }, "a"), b.selectBox.on({
        "change.selectBoxIt, internal-change.selectBoxIt": function (d, h) {
          var e, g;
          h || (e = b.list.find('li[data-val\x3d"' + b.originalElem.value + '"]'), e.length && (b.listItems.eq(b.currentFocus).removeClass(b.focusClass), b.currentFocus = +e.attr("data-id")));
          e = b.listItems.eq(b.currentFocus);
          g = e.attr("data-selectedtext");
          c = (a = e.attr("data-text")) ? a : e.find("a").text();
          b._setText(b.dropdownText, g || c);
          b.dropdownText.attr("data-val", b.originalElem.value);
          e.find("i").attr("class") && (b.dropdownImage.attr("class", e.find("i").attr("class")).addClass("selectboxit-default-icon"), b.dropdownImage.attr("style", e.find("i").attr("style")));
          b.triggerEvent("changed")
        }, "disable.selectBoxIt": function () {
          b.dropdown.addClass(b.theme.disabled)
        }, "enable.selectBoxIt": function () {
          b.dropdown.removeClass(b.theme.disabled)
        }, "open.selectBoxIt": function () {
          var a;
          a = b.list.find("li[data-val\x3d'" +
            b.dropdownText.attr("data-val") + "']");
          a.length || (a = b.listItems.not("[data-disabled\x3dtrue]").first());
          b.currentFocus = +a.attr("data-id");
          a = b.listItems.eq(b.currentFocus);
          b.dropdown.addClass(l).removeClass(f).addClass(e);
          b.listItems.removeClass(b.selectedClass).removeAttr("data-active").not(a).removeClass(e);
          a.addClass(b.selectedClass).addClass(e);
          b.options.hideCurrent && (b.listItems.show(), a.hide())
        }, "close.selectBoxIt": function () {
          b.dropdown.removeClass(l)
        }, "blur.selectBoxIt": function () {
          b.dropdown.removeClass(e)
        },
        "mouseenter.selectBoxIt": function () {
          d(this).hasClass(b.theme.disabled) || b.dropdown.addClass(f)
        }, "mouseleave.selectBoxIt": function () {
          b.dropdown.removeClass(f)
        }, destroy: function (a) {
          a.preventDefault();
          a.stopPropagation()
        }
      }), b
    },
    _update: function (a) {
      var c, b = this.options.defaultText || this.selectBox.attr("data-text"), d = this.listItems.eq(this.currentFocus);
      "false" === a.attr("data-disabled") && (this.listItems.eq(this.currentFocus).attr("data-selectedtext"), c = d.attr("data-text"), c || d.text(), (b && this.options.html ?
        this.dropdownText.html() === b : this.dropdownText.text() === b) && this.selectBox.val() === a.attr("data-val") ? this.triggerEvent("change") : (this.selectBox.val(a.attr("data-val")), this.currentFocus = +a.attr("data-id"), this.originalElem.value !== this.dropdownText.attr("data-val") && this.triggerEvent("change")))
    },
    _addClasses: function (a) {
      var c = (this.focusClass = a.focus, this.hoverClass = a.hover, a.button), b = a.list, d = a.arrow,
        g = a.container;
      return this.openClass = a.open, this.selectedClass = "selectboxit-selected", this.downArrow.addClass(this.selectBox.attr("data-downarrow") ||
        this.options.downArrowIcon || d), this.dropdownContainer.addClass(g), this.dropdown.addClass(c), this.list.addClass(b), this
    },
    refresh: function (a, c) {
      return this._destroySelectBoxIt()._create(!0), c || this.triggerEvent("refresh"), this._callbackSupport(a), this
    },
    htmlEscape: function (a) {
      return String(a).replace(/&/g, "\x26amp;").replace(/"/g, "\x26quot;").replace(/'/g, "\x26#39;").replace(/</g, "\x26lt;").replace(/>/g, "\x26gt;")
    },
    triggerEvent: function (a) {
      return this.selectBox.trigger(a, {
        selectbox: this.selectBox,
        selectboxOption: this.selectItems.eq(this.options.showFirstOption ?
          this.currentFocus : 0 <= this.currentFocus - 1 ? this.currentFocus : 0),
        dropdown: this.dropdown,
        dropdownOption: this.listItems.eq(this.currentFocus)
      }), this
    },
    _copyAttributes: function () {
      return this._addSelectBoxAttributes && this._addSelectBoxAttributes(), this
    },
    _realOuterWidth: function (a) {
      if (a.is(":visible"))return a.outerWidth(!0);
      var c;
      a = a.clone();
      return a.css({
        visibility: "hidden",
        display: "block",
        position: "absolute"
      }).appendTo("body"), c = a.outerWidth(!0), a.remove(), c
    }
  });
  var f = d.selectBox.selectBoxIt.prototype;
  f.add =
    function (a, c) {
      this._populate(a, function (a) {
        var h, g, e = this;
        h = d.type(a);
        var f = 0, l = [], m = (g = e._isJSON(a)) && e._parseJSON(a);
        if (a && ("array" === h || g && m.data && "array" === d.type(m.data)) || "object" === h && a.data && "array" === d.type(a.data)) {
          e._isJSON(a) && (a = m);
          a.data && (a = a.data);
          for (g = a.length; g - 1 >= f; f += 1)h = a[f], d.isPlainObject(h) ? l.push(d("\x3coption/\x3e", h)) : "string" === d.type(h) && l.push(d("\x3coption/\x3e", {
              text: h,
              value: h
            }));
          e.selectBox.append(l)
        } else a && "string" === h && !e._isJSON(a) ? e.selectBox.append(a) : a && "object" ===
        h ? e.selectBox.append(d("\x3coption/\x3e", a)) : a && e._isJSON(a) && d.isPlainObject(e._parseJSON(a)) && e.selectBox.append(d("\x3coption/\x3e", e._parseJSON(a)));
        return e.dropdown ? e.refresh(function () {
          e._callbackSupport(c)
        }, !0) : e._callbackSupport(c), e
      })
    };
  f._parseJSON = function (a) {
    return JSON && JSON.parse && JSON.parse(a) || d.parseJSON(a)
  };
  f._isJSON = function (a) {
    try {
      return this._parseJSON(a), !0
    } catch (c) {
      return !1
    }
  };
  f._populate = function (a, c) {
    var b = this;
    return a = d.isFunction(a) ? a.call() : a, b.isDeferred(a) ? a.done(function (a) {
      c.call(b,
        a)
    }) : c.call(b, a), b
  };
  f._ariaAccessibility = function () {
    var a = this, c = d("label[for\x3d'" + a.originalElem.id + "']");
    return a.dropdownContainer.attr({
      role: "combobox",
      "aria-autocomplete": "list",
      "aria-haspopup": "true",
      "aria-expanded": "false",
      "aria-owns": a.list[0].id
    }), a.dropdownText.attr({"aria-live": "polite"}), a.dropdown.on({
      "disable.selectBoxIt": function () {
        a.dropdownContainer.attr("aria-disabled", "true")
      }, "enable.selectBoxIt": function () {
        a.dropdownContainer.attr("aria-disabled", "false")
      }
    }), c.length && a.dropdownContainer.attr("aria-labelledby",
      c[0].id), a.list.attr({
      role: "listbox",
      "aria-hidden": "true"
    }), a.listItems.attr({role: "option"}), a.selectBox.on({
      "open.selectBoxIt": function () {
        a.list.attr("aria-hidden", "false");
        a.dropdownContainer.attr("aria-expanded", "true")
      }, "close.selectBoxIt": function () {
        a.list.attr("aria-hidden", "true");
        a.dropdownContainer.attr("aria-expanded", "false")
      }
    }), a
  };
  f._addSelectBoxAttributes = function () {
    var a = this;
    return a._addAttributes(a.selectBox.prop("attributes"), a.dropdown), a.selectItems.each(function (c) {
      a._addAttributes(d(this).prop("attributes"),
        a.listItems.eq(c))
    }), a
  };
  f._addAttributes = function (a, c) {
    var b = this.options.copyAttributes;
    return a.length && d.each(a, function (a, g) {
      var e = g.name.toLowerCase(), f = g.value;
      "null" === f || -1 === d.inArray(e, b) && -1 === e.indexOf("data") || c.attr(e, f)
    }), this
  };
  f.destroy = function (a) {
    return this._destroySelectBoxIt(), this.widgetProto.destroy.call(this), this._callbackSupport(a), this
  };
  f._destroySelectBoxIt = function () {
    return this.dropdown.off(".selectBoxIt"), d.contains(this.dropdownContainer[0], this.originalElem) && this.dropdownContainer.before(this.selectBox),
      this.dropdownContainer.remove(), this.selectBox.removeAttr("style").attr("style", this.selectBoxStyles), this.triggerEvent("destroy"), this
  };
  f.disable = function (a) {
    return this.options.disabled || (this.close(), this.selectBox.attr("disabled", "disabled"), this.dropdown.removeAttr("tabindex").removeClass(this.theme.enabled).addClass(this.theme.disabled), this.setOption("disabled", !0), this.triggerEvent("disable")), this._callbackSupport(a), this
  };
  f.disableOption = function (a, c) {
    var b, h, g;
    return "number" === d.type(a) &&
    (this.close(), b = this.selectBox.find("option").eq(a), this.triggerEvent("disable-option"), b.attr("disabled", "disabled"), this.listItems.eq(a).attr("data-disabled", "true").addClass(this.theme.disabled), this.currentFocus === a && (h = this.listItems.eq(this.currentFocus).nextAll("li").not("[data-disabled\x3d'true']").first().length, g = this.listItems.eq(this.currentFocus).prevAll("li").not("[data-disabled\x3d'true']").first().length, h ? this.moveDown() : g ? this.moveUp() : this.disable())), this._callbackSupport(c), this
  };
  f._isDisabled = function () {
    return this.originalElem.disabled && this.disable(), this
  };
  f._dynamicPositioning = function () {
    if ("number" === d.type(this.listSize)) this.list.css("max-height", this.maxHeight || "none"); else {
      var a = this.dropdown.offset().top, c = this.list.data("max-height") || this.list.outerHeight(),
        b = this.dropdown.outerHeight(), h = this.options.viewport, g = h.height(),
        h = d.isWindow(h.get(0)) ? h.scrollTop() : h.offset().top, e = !(g + h >= a + b + c);
      (this.list.data("max-height") || this.list.data("max-height", this.list.outerHeight()),
        e) ? this.dropdown.offset().top - h >= c ? (this.list.css("max-height", c), this.list.css("top", this.dropdown.position().top - this.list.outerHeight())) : (a = Math.abs(a + b + c - (g + h)), g = Math.abs(this.dropdown.offset().top - h - c), g > a ? (this.list.css("max-height", c - a - b / 2), this.list.css("top", "auto")) : (this.list.css("max-height", c - g - b / 2), this.list.css("top", this.dropdown.position().top - this.list.outerHeight()))) : (this.list.css("max-height", c), this.list.css("top", "auto"))
    }
    return this
  };
  f.enable = function (a) {
    return this.options.disabled &&
    (this.triggerEvent("enable"), this.selectBox.removeAttr("disabled"), this.dropdown.attr("tabindex", 0).removeClass(this.theme.disabled).addClass(this.theme.enabled), this.setOption("disabled", !1), this._callbackSupport(a)), this
  };
  f.enableOption = function (a, c) {
    var b;
    return "number" === d.type(a) && (b = this.selectBox.find("option").eq(a), this.triggerEvent("enable-option"), b.removeAttr("disabled"), this.listItems.eq(a).attr("data-disabled", "false").removeClass(this.theme.disabled)), this._callbackSupport(c), this
  };
  f.moveDown = function (a) {
    this.currentFocus += 1;
    var c = "true" === this.listItems.eq(this.currentFocus).attr("data-disabled") ? !0 : !1,
      b = this.listItems.eq(this.currentFocus).nextAll("li").not("[data-disabled\x3d'true']").first().length;
    if (this.currentFocus === this.listItems.length) --this.currentFocus; else {
      if (c && b)return this.listItems.eq(this.currentFocus - 1).blur(), this.moveDown(), void 0;
      c && !b ? --this.currentFocus : (this.listItems.eq(this.currentFocus - 1).blur().end().eq(this.currentFocus).focusin(), this._scrollToView("down"),
        this.triggerEvent("moveDown"))
    }
    return this._callbackSupport(a), this
  };
  f.moveUp = function (a) {
    --this.currentFocus;
    var c = "true" === this.listItems.eq(this.currentFocus).attr("data-disabled") ? !0 : !1,
      b = this.listItems.eq(this.currentFocus).prevAll("li").not("[data-disabled\x3d'true']").first().length;
    if (-1 === this.currentFocus) this.currentFocus += 1; else {
      if (c && b)return this.listItems.eq(this.currentFocus + 1).blur(), this.moveUp(), void 0;
      c && !b ? this.currentFocus += 1 : (this.listItems.eq(this.currentFocus + 1).blur().end().eq(this.currentFocus).focusin(),
        this._scrollToView("up"), this.triggerEvent("moveUp"))
    }
    return this._callbackSupport(a), this
  };
  f._setCurrentSearchOption = function (a) {
    return (this.options.aggressiveChange || this.options.selectWhenHidden || this.listItems.eq(a).is(":visible")) && !0 !== this.listItems.eq(a).data("disabled") && (this.listItems.eq(this.currentFocus).blur(), this.currentIndex = a, this.currentFocus = a, this.listItems.eq(this.currentFocus).focusin(), this._scrollToView("search"), this.triggerEvent("search")), this
  };
  f._searchAlgorithm = function (a,
                                 c) {
    var b, d, g, e, f = !1, l = this.textArray, m = this.currentText;
    b = a;
    for (g = l.length; g > b; b += 1) {
      e = l[b];
      for (d = 0; g > d; d += 1)-1 !== l[d].search(c) && (f = !0, d = g);
      if (f || (this.currentText = this.currentText.charAt(this.currentText.length - 1).replace(/[|()\[{.+*?$\\]/g, "\\$0"), m = this.currentText), c = new RegExp(m, "gi"), 3 > m.length) {
        if (c = new RegExp(m.charAt(0), "gi"), -1 !== e.charAt(0).search(c))return this._setCurrentSearchOption(b), (e.substring(0, m.length).toLowerCase() !== m.toLowerCase() || this.options.similarSearch) && (this.currentIndex +=
          1), !1
      } else if (-1 !== e.search(c))return this._setCurrentSearchOption(b), !1;
      if (e.toLowerCase() === this.currentText.toLowerCase())return this._setCurrentSearchOption(b), this.currentText = "", !1
    }
    return !0
  };
  f.search = function (a, c, b) {
    b ? this.currentText += a.replace(/[|()\[{.+*?$\\]/g, "\\$0") : this.currentText = a.replace(/[|()\[{.+*?$\\]/g, "\\$0");
    return this._searchAlgorithm(this.currentIndex, new RegExp(this.currentText, "gi")) && this._searchAlgorithm(0, this.currentText), this._callbackSupport(c), this
  };
  f._updateMobileText =
    function () {
      var a, c;
      a = this.selectBox.find("option").filter(":selected");
      c = (c = a.attr("data-text")) ? c : a.text();
      this._setText(this.dropdownText, c);
      this.list.find('li[data-val\x3d"' + a.val() + '"]').find("i").attr("class") && this.dropdownImage.attr("class", this.list.find('li[data-val\x3d"' + a.val() + '"]').find("i").attr("class")).addClass("selectboxit-default-icon")
    };
  f._applyNativeSelect = function () {
    return this.dropdownContainer.append(this.selectBox), this.dropdown.attr("tabindex", "-1"), this.selectBox.css({
      display: "block",
      visibility: "visible",
      width: this._realOuterWidth(this.dropdown),
      height: this.dropdown.outerHeight(),
      opacity: "0",
      position: "absolute",
      top: "0",
      left: "0",
      cursor: "pointer",
      "z-index": "999999",
      margin: this.dropdown.css("margin"),
      padding: "0",
      "-webkit-appearance": "menulist-button"
    }), this.originalElem.disabled && this.triggerEvent("disable"), this
  };
  f._mobileEvents = function () {
    var a = this;
    a.selectBox.on({
      "changed.selectBoxIt": function () {
        a.hasChanged = !0;
        a._updateMobileText();
        a.triggerEvent("option-click")
      }, "mousedown.selectBoxIt": function () {
        a.hasChanged ||
        !a.options.defaultText || a.originalElem.disabled || (a._updateMobileText(), a.triggerEvent("option-click"))
      }, "enable.selectBoxIt": function () {
        a.selectBox.removeClass("selectboxit-rendering")
      }, "disable.selectBoxIt": function () {
        a.selectBox.addClass("selectboxit-rendering")
      }
    })
  };
  f._mobile = function () {
    return this.isMobile && (this._applyNativeSelect(), this._mobileEvents()), this
  };
  f.remove = function (a, c) {
    var b, h, g = this;
    b = d.type(a);
    var e = 0, f = "";
    if ("array" === b) {
      for (h = a.length; h - 1 >= e; e += 1)b = a[e], "number" === d.type(b) &&
      (f += f.length ? ", option:eq(" + b + ")" : "option:eq(" + b + ")");
      g.selectBox.find(f).remove()
    } else"number" === b ? g.selectBox.find("option").eq(a).remove() : g.selectBox.find("option").remove();
    return g.dropdown ? g.refresh(function () {
      g._callbackSupport(c)
    }, !0) : g._callbackSupport(c), g
  };
  f.selectOption = function (a, c) {
    var b = d.type(a);
    return "number" === b ? this.selectBox.val(this.selectItems.eq(a).val()).change() : "string" === b && this.selectBox.val(a).change(), this._callbackSupport(c), this
  };
  f.setOption = function (a, c, b) {
    var f =
      this;
    return "string" === d.type(a) && (f.options[a] = c), f.refresh(function () {
      f._callbackSupport(b)
    }, !0), f
  };
  f.setOptions = function (a, c) {
    var b = this;
    return d.isPlainObject(a) && (b.options = d.extend({}, b.options, a)), b.refresh(function () {
      b._callbackSupport(c)
    }, !0), b
  };
  f.wait = function (a, c) {
    return this.widgetProto._delay.call(this, c, a), this
  }
});
(function (e) {
  function t () {
    this.regional = [];
    this.regional[""] = {
      currentText: "Now",
      closeText: "Done",
      amNames: ["AM", "A"],
      pmNames: ["PM", "P"],
      timeFormat: "HH:mm",
      timeSuffix: "",
      timeOnlyTitle: "Choose Time",
      timeText: "Time",
      hourText: "Hour",
      minuteText: "Minute",
      secondText: "Second",
      millisecText: "Millisecond",
      timezoneText: "Time Zone",
      isRTL: !1
    };
    this._defaults = {
      showButtonPanel: !0,
      timeOnly: !1,
      showHour: !0,
      showMinute: !0,
      showSecond: !1,
      showMillisec: !1,
      showTimezone: !1,
      showTime: !0,
      stepHour: 1,
      stepMinute: 1,
      stepSecond: 1,
      stepMillisec: 1,
      hour: 0,
      minute: 0,
      second: 0,
      millisec: 0,
      timezone: null,
      useLocalTimezone: !1,
      defaultTimezone: "+0000",
      hourMin: 0,
      minuteMin: 0,
      secondMin: 0,
      millisecMin: 0,
      hourMax: 23,
      minuteMax: 59,
      secondMax: 59,
      millisecMax: 999,
      minDateTime: null,
      maxDateTime: null,
      onSelect: null,
      hourGrid: 0,
      minuteGrid: 0,
      secondGrid: 0,
      millisecGrid: 0,
      alwaysSetTime: !0,
      separator: " ",
      altFieldTimeOnly: !0,
      altTimeFormat: null,
      altSeparator: null,
      altTimeSuffix: null,
      pickerTimeFormat: null,
      pickerTimeSuffix: null,
      showTimepicker: !0,
      timezoneIso8601: !1,
      timezoneList: null,
      addSliderAccess: !1,
      sliderAccessArgs: null,
      controlType: "slider",
      defaultValue: null,
      parse: "strict"
    };
    e.extend(this._defaults, this.regional[""])
  }

  e.ui.timepicker = e.ui.timepicker || {};
  if (!e.ui.timepicker.version) {
    e.extend(e.ui, {timepicker: {version: "1.1.1"}});
    e.extend(t.prototype, {
      $input: null,
      $altInput: null,
      $timeObj: null,
      inst: null,
      hour_slider: null,
      minute_slider: null,
      second_slider: null,
      millisec_slider: null,
      timezone_select: null,
      hour: 0,
      minute: 0,
      second: 0,
      millisec: 0,
      timezone: null,
      defaultTimezone: "+0000",
      hourMinOriginal: null,
      minuteMinOriginal: null,
      secondMinOriginal: null,
      millisecMinOriginal: null,
      hourMaxOriginal: null,
      minuteMaxOriginal: null,
      secondMaxOriginal: null,
      millisecMaxOriginal: null,
      ampm: "",
      formattedDate: "",
      formattedTime: "",
      formattedDateTime: "",
      timezoneList: null,
      units: ["hour", "minute", "second", "millisec"],
      control: null,
      setDefaults: function (c) {
        u(this._defaults, c || {});
        return this
      },
      _newInst: function (c, b) {
        var a = new t, d = {}, f = {}, g, k;
        for (g in this._defaults)if (this._defaults.hasOwnProperty(g)) {
          var h = c.attr("time:" + g);
          if (h)try {
            d[g] =
              eval(h)
          } catch (m) {
            d[g] = h
          }
        }
        g = {
          beforeShow: function (b, d) {
            if (e.isFunction(a._defaults.evnts.beforeShow))return a._defaults.evnts.beforeShow.call(c[0], b, d, a)
          }, onChangeMonthYear: function (b, d, f) {
            a._updateDateTime(f);
            e.isFunction(a._defaults.evnts.onChangeMonthYear) && a._defaults.evnts.onChangeMonthYear.call(c[0], b, d, f, a)
          }, onClose: function (b, d) {
            !0 === a.timeDefined && "" !== c.val() && a._updateDateTime(d);
            e.isFunction(a._defaults.evnts.onClose) && a._defaults.evnts.onClose.call(c[0], b, d, a)
          }
        };
        for (k in g)g.hasOwnProperty(k) &&
        (f[k] = b[k] || null);
        a._defaults = e.extend({}, this._defaults, d, b, g, {evnts: f, timepicker: a});
        a.amNames = e.map(a._defaults.amNames, function (a) {
          return a.toUpperCase()
        });
        a.pmNames = e.map(a._defaults.pmNames, function (a) {
          return a.toUpperCase()
        });
        "string" === typeof a._defaults.controlType ? (void 0 === e.fn[a._defaults.controlType] && (a._defaults.controlType = "select"), a.control = a._controls[a._defaults.controlType]) : a.control = a._defaults.controlType;
        null === a._defaults.timezoneList && (d = "-1200 -1100 -1000 -0930 -0900 -0800 -0700 -0600 -0500 -0430 -0400 -0330 -0300 -0200 -0100 +0000 +0100 +0200 +0300 +0330 +0400 +0430 +0500 +0530 +0545 +0600 +0630 +0700 +0800 +0845 +0900 +0930 +1000 +1030 +1100 +1130 +1200 +1245 +1300 +1400".split(" "),
        a._defaults.timezoneIso8601 && (d = e.map(d, function (a) {
          return "+0000" == a ? "Z" : a.substring(0, 3) + ":" + a.substring(3)
        })), a._defaults.timezoneList = d);
        a.timezone = a._defaults.timezone;
        a.hour = a._defaults.hour;
        a.minute = a._defaults.minute;
        a.second = a._defaults.second;
        a.millisec = a._defaults.millisec;
        a.ampm = "";
        a.$input = c;
        b.altField && (a.$altInput = e(b.altField).css({cursor: "pointer"}).focus(function () {
          c.trigger("focus")
        }));
        if (0 === a._defaults.minDate || 0 === a._defaults.minDateTime) a._defaults.minDate = new Date;
        if (0 === a._defaults.maxDate ||
          0 === a._defaults.maxDateTime) a._defaults.maxDate = new Date;
        void 0 !== a._defaults.minDate && a._defaults.minDate instanceof Date && (a._defaults.minDateTime = new Date(a._defaults.minDate.getTime()));
        void 0 !== a._defaults.minDateTime && a._defaults.minDateTime instanceof Date && (a._defaults.minDate = new Date(a._defaults.minDateTime.getTime()));
        void 0 !== a._defaults.maxDate && a._defaults.maxDate instanceof Date && (a._defaults.maxDateTime = new Date(a._defaults.maxDate.getTime()));
        void 0 !== a._defaults.maxDateTime && a._defaults.maxDateTime instanceof
        Date && (a._defaults.maxDate = new Date(a._defaults.maxDateTime.getTime()));
        a.$input.bind("focus", function () {
          a._onFocus()
        });
        return a
      },
      _addTimePicker: function (c) {
        var b = this.$altInput && this._defaults.altFieldTimeOnly ? this.$input.val() + " " + this.$altInput.val() : this.$input.val();
        this.timeDefined = this._parseTime(b);
        this._limitMinMaxDateTime(c, !1);
        this._injectTimePicker()
      },
      _parseTime: function (c, b) {
        this.inst || (this.inst = e.datepicker._getInst(this.$input[0]));
        if (b || !this._defaults.timeOnly) {
          var a = e.datepicker._get(this.inst,
            "dateFormat");
          try {
            var d = w(a, this._defaults.timeFormat, c, e.datepicker._getFormatConfig(this.inst), this._defaults);
            if (!d.timeObj)return !1;
            e.extend(this, d.timeObj)
          } catch (f) {
            return e.datepicker.log("Error parsing the date/time string: " + f + "\ndate/time string \x3d " + c + "\ntimeFormat \x3d " + this._defaults.timeFormat + "\ndateFormat \x3d " + a), !1
          }
        } else {
          a = e.datepicker.parseTime(this._defaults.timeFormat, c, this._defaults);
          if (!a)return !1;
          e.extend(this, a)
        }
        return !0
      },
      _injectTimePicker: function () {
        var c = this.inst.dpDiv,
          b = this.inst.settings, a = this, d = "", f = "", g = {}, k = {}, h = null;
        if (0 === c.find("div.ui-timepicker-div").length && b.showTimepicker) {
          for (var h = '\x3cdiv class\x3d"ui-timepicker-div' + (b.isRTL ? " ui-timepicker-rtl" : "") + '"\x3e\x3cdl\x3e\x3cdt class\x3d"ui_tpicker_time_label"' + (b.showTime ? "" : ' style\x3d"display:none;"') + "\x3e" + b.timeText + '\x3c/dt\x3e\x3cdd class\x3d"ui_tpicker_time"' + (b.showTime ? "" : ' style\x3d"display:none;"') + "\x3e\x3c/dd\x3e", m = 0, n = this.units.length; m < n; m++) {
            d = this.units[m];
            f = d.substr(0, 1).toUpperCase() +
              d.substr(1);
            g[d] = parseInt(b[d + "Max"] - (b[d + "Max"] - b[d + "Min"]) % b["step" + f], 10);
            k[d] = 0;
            h += '\x3cdt class\x3d"ui_tpicker_' + d + '_label"' + (b["show" + f] ? "" : ' style\x3d"display:none;"') + "\x3e" + b[d + "Text"] + '\x3c/dt\x3e\x3cdd class\x3d"ui_tpicker_' + d + '"\x3e\x3cdiv class\x3d"ui_tpicker_' + d + '_slider"' + (b["show" + f] ? "" : ' style\x3d"display:none;"') + "\x3e\x3c/div\x3e";
            if (b["show" + f] && 0 < b[d + "Grid"]) {
              h += '\x3cdiv style\x3d"padding-left: 1px"\x3e\x3ctable class\x3d"ui-tpicker-grid-label"\x3e\x3ctr\x3e';
              if ("hour" == d)for (f =
                                     b[d + "Min"]; f <= g[d]; f += parseInt(b[d + "Grid"], 10)) {
                k[d]++;
                var l = e.datepicker.formatTime(q(b.pickerTimeFormat || b.timeFormat) ? "hht" : "HH", {hour: f}, b),
                  h = h + ('\x3ctd data-for\x3d"' + d + '"\x3e' + l + "\x3c/td\x3e")
              } else for (f = b[d + "Min"]; f <= g[d]; f += parseInt(b[d + "Grid"], 10))k[d]++, h += '\x3ctd data-for\x3d"' + d + '"\x3e' + (10 > f ? "0" : "") + f + "\x3c/td\x3e";
              h += "\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e"
            }
            h += "\x3c/dd\x3e"
          }
          var h = h + ('\x3cdt class\x3d"ui_tpicker_timezone_label"' + (b.showTimezone ? "" : ' style\x3d"display:none;"') + "\x3e" + b.timezoneText +
              "\x3c/dt\x3e"),
            h = h + ('\x3cdd class\x3d"ui_tpicker_timezone" ' + (b.showTimezone ? "" : ' style\x3d"display:none;"') + "\x3e\x3c/dd\x3e"),
            p = e(h + "\x3c/dl\x3e\x3c/div\x3e");
          !0 === b.timeOnly && (p.prepend('\x3cdiv class\x3d"ui-widget-header ui-helper-clearfix ui-corner-all"\x3e\x3cdiv class\x3d"ui-datepicker-title"\x3e' + b.timeOnlyTitle + "\x3c/div\x3e\x3c/div\x3e"), c.find(".ui-datepicker-header, .ui-datepicker-calendar").hide());
          m = 0;
          for (n = a.units.length; m < n; m++)d = a.units[m], f = d.substr(0, 1).toUpperCase() + d.substr(1),
            a[d + "_slider"] = a.control.create(a, p.find(".ui_tpicker_" + d + "_slider"), d, a[d], b[d + "Min"], g[d], b["step" + f]), b["show" + f] && 0 < b[d + "Grid"] && (h = 100 * k[d] * b[d + "Grid"] / (g[d] - b[d + "Min"]), p.find(".ui_tpicker_" + d + " table").css({
            width: h + "%",
            marginLeft: b.isRTL ? "0" : h / (-2 * k[d]) + "%",
            marginRight: b.isRTL ? h / (-2 * k[d]) + "%" : "0",
            borderCollapse: "collapse"
          }).find("td").click(function (b) {
            var c = e(this), f = c.html();
            b = parseInt(f.replace(/[^0-9]/g), 10);
            f = f.replace(/[^apm]/ig);
            c = c.data("for");
            "hour" == c && (-1 !== f.indexOf("p") && 12 > b ?
              b += 12 : -1 !== f.indexOf("a") && 12 === b && (b = 0));
            a.control.value(a, a[c + "_slider"], d, b);
            a._onTimeChange();
            a._onSelectHandler()
          }).css({cursor: "pointer", width: 100 / k[d] + "%", textAlign: "center", overflow: "hidden"}));
          this.timezone_select = p.find(".ui_tpicker_timezone").append("\x3cselect\x3e\x3c/select\x3e").find("select");
          e.fn.append.apply(this.timezone_select, e.map(b.timezoneList, function (a, b) {
            return e("\x3coption /\x3e").val("object" == typeof a ? a.value : a).text("object" == typeof a ? a.label : a)
          }));
          "undefined" != typeof this.timezone &&
          null !== this.timezone && "" !== this.timezone ? e.timepicker.timeZoneOffsetString(new Date(this.inst.selectedYear, this.inst.selectedMonth, this.inst.selectedDay, 12)) == this.timezone ? r(a) : this.timezone_select.val(this.timezone) : "undefined" != typeof this.hour && null !== this.hour && "" !== this.hour ? this.timezone_select.val(b.defaultTimezone) : r(a);
          this.timezone_select.change(function () {
            a._defaults.useLocalTimezone = !1;
            a._onTimeChange()
          });
          b = c.find(".ui-datepicker-buttonpane");
          b.length ? b.before(p) : c.append(p);
          this.$timeObj =
            p.find(".ui_tpicker_time");
          null !== this.inst && (c = this.timeDefined, this._onTimeChange(), this.timeDefined = c);
          if (this._defaults.addSliderAccess) {
            var x = this._defaults.sliderAccessArgs, v = this._defaults.isRTL;
            x.isRTL = v;
            setTimeout(function () {
              if (0 === p.find(".ui-slider-access").length) {
                p.find(".ui-slider:visible").sliderAccess(x);
                var a = p.find(".ui-slider-access:eq(0)").outerWidth(!0);
                a && p.find("table:visible").each(function () {
                  var b = e(this), c = b.outerWidth(),
                    d = b.css(v ? "marginRight" : "marginLeft").toString().replace("%",
                      ""), f = c - a, g = {width: f, marginRight: 0, marginLeft: 0};
                  g[v ? "marginRight" : "marginLeft"] = d * f / c + "%";
                  b.css(g)
                })
              }
            }, 10)
          }
        }
      },
      _limitMinMaxDateTime: function (c, b) {
        var a = this._defaults, d = new Date(c.selectedYear, c.selectedMonth, c.selectedDay);
        if (this._defaults.showTimepicker) {
          if (null !== e.datepicker._get(c, "minDateTime") && void 0 !== e.datepicker._get(c, "minDateTime") && d) {
            var f = e.datepicker._get(c, "minDateTime"),
              g = new Date(f.getFullYear(), f.getMonth(), f.getDate(), 0, 0, 0, 0);
            if (null === this.hourMinOriginal || null === this.minuteMinOriginal ||
              null === this.secondMinOriginal || null === this.millisecMinOriginal) this.hourMinOriginal = a.hourMin, this.minuteMinOriginal = a.minuteMin, this.secondMinOriginal = a.secondMin, this.millisecMinOriginal = a.millisecMin;
            c.settings.timeOnly || g.getTime() == d.getTime() ? (this._defaults.hourMin = f.getHours(), this.hour <= this._defaults.hourMin ? (this.hour = this._defaults.hourMin, this._defaults.minuteMin = f.getMinutes(), this.minute <= this._defaults.minuteMin ? (this.minute = this._defaults.minuteMin, this._defaults.secondMin = f.getSeconds(),
              this.second <= this._defaults.secondMin ? (this.second = this._defaults.secondMin, this._defaults.millisecMin = f.getMilliseconds()) : (this.millisec < this._defaults.millisecMin && (this.millisec = this._defaults.millisecMin), this._defaults.millisecMin = this.millisecMinOriginal)) : (this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal)) : (this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal)) :
              (this._defaults.hourMin = this.hourMinOriginal, this._defaults.minuteMin = this.minuteMinOriginal, this._defaults.secondMin = this.secondMinOriginal, this._defaults.millisecMin = this.millisecMinOriginal)
          }
          if (null !== e.datepicker._get(c, "maxDateTime") && void 0 !== e.datepicker._get(c, "maxDateTime") && d) {
            f = e.datepicker._get(c, "maxDateTime");
            g = new Date(f.getFullYear(), f.getMonth(), f.getDate(), 0, 0, 0, 0);
            if (null === this.hourMaxOriginal || null === this.minuteMaxOriginal || null === this.secondMaxOriginal) this.hourMaxOriginal = a.hourMax,
              this.minuteMaxOriginal = a.minuteMax, this.secondMaxOriginal = a.secondMax, this.millisecMaxOriginal = a.millisecMax;
            c.settings.timeOnly || g.getTime() == d.getTime() ? (this._defaults.hourMax = f.getHours(), this.hour >= this._defaults.hourMax ? (this.hour = this._defaults.hourMax, this._defaults.minuteMax = f.getMinutes(), this.minute >= this._defaults.minuteMax ? (this.minute = this._defaults.minuteMax, this._defaults.secondMax = f.getSeconds()) : this.second >= this._defaults.secondMax ? (this.second = this._defaults.secondMax, this._defaults.millisecMax =
              f.getMilliseconds()) : (this.millisec > this._defaults.millisecMax && (this.millisec = this._defaults.millisecMax), this._defaults.millisecMax = this.millisecMaxOriginal)) : (this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal)) : (this._defaults.hourMax = this.hourMaxOriginal, this._defaults.minuteMax = this.minuteMaxOriginal, this._defaults.secondMax = this.secondMaxOriginal, this._defaults.millisecMax = this.millisecMaxOriginal)
          }
          void 0 !==
          b && !0 === b && (a = parseInt(this._defaults.hourMax - (this._defaults.hourMax - this._defaults.hourMin) % this._defaults.stepHour, 10), d = parseInt(this._defaults.minuteMax - (this._defaults.minuteMax - this._defaults.minuteMin) % this._defaults.stepMinute, 10), f = parseInt(this._defaults.secondMax - (this._defaults.secondMax - this._defaults.secondMin) % this._defaults.stepSecond, 10), g = parseInt(this._defaults.millisecMax - (this._defaults.millisecMax - this._defaults.millisecMin) % this._defaults.stepMillisec, 10), this.hour_slider &&
          (this.control.options(this, this.hour_slider, "hour", {
            min: this._defaults.hourMin,
            max: a
          }), this.control.value(this, this.hour_slider, "hour", this.hour)), this.minute_slider && (this.control.options(this, this.minute_slider, "minute", {
            min: this._defaults.minuteMin,
            max: d
          }), this.control.value(this, this.minute_slider, "minute", this.minute)), this.second_slider && (this.control.options(this, this.second_slider, "second", {
            min: this._defaults.secondMin,
            max: f
          }), this.control.value(this, this.second_slider, "second", this.second)),
          this.millisec_slider && (this.control.options(this, this.millisec_slider, "millisec", {
            min: this._defaults.millisecMin,
            max: g
          }), this.control.value(this, this.millisec_slider, "millisec", this.millisec)))
        }
      },
      _onTimeChange: function () {
        var c = this.hour_slider ? this.control.value(this, this.hour_slider, "hour") : !1,
          b = this.minute_slider ? this.control.value(this, this.minute_slider, "minute") : !1,
          a = this.second_slider ? this.control.value(this, this.second_slider, "second") : !1,
          d = this.millisec_slider ? this.control.value(this, this.millisec_slider,
            "millisec") : !1, f = this.timezone_select ? this.timezone_select.val() : !1, g = this._defaults,
          k = g.pickerTimeFormat || g.timeFormat, h = g.pickerTimeSuffix || g.timeSuffix;
        "object" == typeof c && (c = !1);
        "object" == typeof b && (b = !1);
        "object" == typeof a && (a = !1);
        "object" == typeof d && (d = !1);
        "object" == typeof f && (f = !1);
        !1 !== c && (c = parseInt(c, 10));
        !1 !== b && (b = parseInt(b, 10));
        !1 !== a && (a = parseInt(a, 10));
        !1 !== d && (d = parseInt(d, 10));
        var m = g[12 > c ? "amNames" : "pmNames"][0],
          n = c != this.hour || b != this.minute || a != this.second || d != this.millisec ||
            0 < this.ampm.length && 12 > c != (-1 !== e.inArray(this.ampm.toUpperCase(), this.amNames)) || null === this.timezone && f != this.defaultTimezone || null !== this.timezone && f != this.timezone;
        n && (!1 !== c && (this.hour = c), !1 !== b && (this.minute = b), !1 !== a && (this.second = a), !1 !== d && (this.millisec = d), !1 !== f && (this.timezone = f), this.inst || (this.inst = e.datepicker._getInst(this.$input[0])), this._limitMinMaxDateTime(this.inst, !0));
        q(g.timeFormat) && (this.ampm = m);
        this.formattedTime = e.datepicker.formatTime(g.timeFormat, this, g);
        this.$timeObj &&
        (k === g.timeFormat ? this.$timeObj.text(this.formattedTime + h) : this.$timeObj.text(e.datepicker.formatTime(k, this, g) + h));
        this.timeDefined = !0;
        n && this._updateDateTime()
      },
      _onSelectHandler: function () {
        var c = this._defaults.onSelect || this.inst.settings.onSelect, b = this.$input ? this.$input[0] : null;
        c && b && c.apply(b, [this.formattedDateTime, this])
      },
      _updateDateTime: function (c) {
        c = this.inst || c;
        var b = e.datepicker._daylightSavingAdjust(new Date(c.selectedYear, c.selectedMonth, c.selectedDay)),
          a = e.datepicker._get(c, "dateFormat");
        c = e.datepicker._getFormatConfig(c);
        var d = null !== b && this.timeDefined,
          a = this.formattedDate = e.datepicker.formatDate(a, null === b ? new Date : b, c);
        !0 === this._defaults.timeOnly ? a = this.formattedTime : !0 !== this._defaults.timeOnly && (this._defaults.alwaysSetTime || d) && (a += this._defaults.separator + this.formattedTime + this._defaults.timeSuffix);
        this.formattedDateTime = a;
        if (this._defaults.showTimepicker)if (this.$altInput && !0 === this._defaults.altFieldTimeOnly) this.$altInput.val(this.formattedTime), this.$input.val(this.formattedDate);
        else if (this.$altInput) {
          this.$input.val(a);
          var a = "", d = this._defaults.altSeparator ? this._defaults.altSeparator : this._defaults.separator,
            f = this._defaults.altTimeSuffix ? this._defaults.altTimeSuffix : this._defaults.timeSuffix;
          (a = this._defaults.altFormat ? e.datepicker.formatDate(this._defaults.altFormat, null === b ? new Date : b, c) : this.formattedDate) && (a += d);
          a = this._defaults.altTimeFormat ? a + (e.datepicker.formatTime(this._defaults.altTimeFormat, this, this._defaults) + f) : a + (this.formattedTime + f);
          this.$altInput.val(a)
        } else this.$input.val(a);
        else this.$input.val(this.formattedDate);
        this.$input.trigger("change")
      },
      _onFocus: function () {
        if (!this.$input.val() && this._defaults.defaultValue) {
          this.$input.val(this._defaults.defaultValue);
          var c = e.datepicker._getInst(this.$input.get(0)), b = e.datepicker._get(c, "timepicker");
          if (b && b._defaults.timeOnly && c.input.val() != c.lastVal)try {
            e.datepicker._updateDatepicker(c)
          } catch (a) {
            e.datepicker.log(a)
          }
        }
      },
      _controls: {
        slider: {
          create: function (c, b, a, d, f, g, k) {
            var h = c._defaults.isRTL;
            return b.prop("slide", null).slider({
              orientation: "horizontal",
              value: h ? -1 * d : d, min: h ? -1 * g : f, max: h ? -1 * f : g, step: k, slide: function (b, d) {
                c.control.value(c, e(this), a, h ? -1 * d.value : d.value);
                c._onTimeChange()
              }, stop: function (a, b) {
                c._onSelectHandler()
              }
            })
          }, options: function (c, b, a, d, e) {
            if (c._defaults.isRTL) {
              if ("string" == typeof d)return "min" == d || "max" == d ? void 0 !== e ? b.slider(d, -1 * e) : Math.abs(b.slider(d)) : b.slider(d);
              c = d.min;
              a = d.max;
              d.min = d.max = null;
              void 0 !== c && (d.max = -1 * c);
              void 0 !== a && (d.min = -1 * a);
              return b.slider(d)
            }
            return "string" == typeof d && void 0 !== e ? b.slider(d, e) : b.slider(d)
          },
          value: function (c, b, a, d) {
            return c._defaults.isRTL ? void 0 !== d ? b.slider("value", -1 * d) : Math.abs(b.slider("value")) : void 0 !== d ? b.slider("value", d) : b.slider("value")
          }
        }, select: {
          create: function (c, b, a, d, f, g, k) {
            var h = '\x3cselect class\x3d"ui-timepicker-select" data-unit\x3d"' + a + '" data-min\x3d"' + f + '" data-max\x3d"' + g + '" data-step\x3d"' + k + '"\x3e';
            for (c._defaults.timeFormat.indexOf("t"); f <= g; f += k)h += '\x3coption value\x3d"' + f + '"' + (f == d ? " selected" : "") + "\x3e", h = "hour" == a && q(c._defaults.pickerTimeFormat || c._defaults.timeFormat) ?
              h + e.datepicker.formatTime("hh TT", {hour: f}, c._defaults) : "millisec" == a || 10 <= f ? h + f : h + ("0" + f.toString()), h += "\x3c/option\x3e";
            h += "\x3c/select\x3e";
            b.children("select").remove();
            e(h).appendTo(b).change(function (a) {
              c._onTimeChange();
              c._onSelectHandler()
            });
            return b
          }, options: function (c, b, a, d, e) {
            a = {};
            var g = b.children("select");
            if ("string" == typeof d) {
              if (void 0 === e)return g.data(d);
              a[d] = e
            } else a = d;
            return c.control.create(c, b, g.data("unit"), g.val(), a.min || g.data("min"), a.max || g.data("max"), a.step || g.data("step"))
          },
          value: function (c, b, a, d) {
            c = b.children("select");
            return void 0 !== d ? c.val(d) : c.val()
          }
        }
      }
    });
    e.fn.extend({
      timepicker: function (c) {
        c = c || {};
        var b = Array.prototype.slice.call(arguments);
        "object" == typeof c && (b[0] = e.extend(c, {timeOnly: !0}));
        return e(this).each(function () {
          e.fn.datetimepicker.apply(e(this), b)
        })
      }, datetimepicker: function (c) {
        c = c || {};
        var b = arguments;
        return "string" == typeof c ? "getDate" == c ? e.fn.datepicker.apply(e(this[0]), b) : this.each(function () {
          var a = e(this);
          a.datepicker.apply(a, b)
        }) : this.each(function () {
          var a =
            e(this);
          a.datepicker(e.timepicker._newInst(a, c)._defaults)
        })
      }
    });
    e.datepicker.parseDateTime = function (c, b, a, d, e) {
      c = w(c, b, a, d, e);
      c.timeObj && (b = c.timeObj, c.date.setHours(b.hour, b.minute, b.second, b.millisec));
      return c.date
    };
    e.datepicker.parseTime = function (c, b, a) {
      a = u(u({}, e.timepicker._defaults), a || {});
      var d = function (a, b, c) {
        var d = function (a, b) {
          var c = [];
          a && e.merge(c, a);
          b && e.merge(c, b);
          c = e.map(c, function (a) {
            return a.replace(/[.*+?|()\[\]{}\\]/g, "\\$\x26")
          });
          return "(" + c.join("|") + ")?"
        }, f = "^" + a.toString().replace(/([hH]{1,2}|mm?|ss?|[tT]{1,2}|[lz]|'.*?')/g,
            function (a) {
              switch (a.charAt(0).toLowerCase()) {
                case "h":
                  return "(\\d?\\d)";
                case "m":
                  return "(\\d?\\d)";
                case "s":
                  return "(\\d?\\d)";
                case "l":
                  return "(\\d?\\d?\\d)";
                case "z":
                  return "(z|[-+]\\d\\d:?\\d\\d|\\S+)?";
                case "t":
                  return d(c.amNames, c.pmNames);
                default:
                  return "(" + a.replace(/\'/g, "").replace(/(\.|\$|\^|\\|\/|\(|\)|\[|\]|\?|\+|\*)/g, function (a) {
                      return "\\" + a
                    }) + ")?"
              }
            }).replace(/\s/g, "\\s?") + c.timeSuffix + "$";
        a = function (a) {
          a = a.toLowerCase().match(/(h{1,2}|m{1,2}|s{1,2}|l{1}|t{1,2}|z|'.*?')/g);
          var b = {
            h: -1,
            m: -1, s: -1, l: -1, t: -1, z: -1
          };
          if (a)for (var c = 0; c < a.length; c++)-1 == b[a[c].toString().charAt(0)] && (b[a[c].toString().charAt(0)] = c + 1);
          return b
        }(a);
        var l = "", f = b.match(new RegExp(f, "i"));
        b = {hour: 0, minute: 0, second: 0, millisec: 0};
        if (f) {
          -1 !== a.t && (void 0 === f[a.t] || 0 === f[a.t].length ? (l = "", b.ampm = "") : (l = -1 !== e.inArray(f[a.t].toUpperCase(), c.amNames) ? "AM" : "PM", b.ampm = c["AM" == l ? "amNames" : "pmNames"][0]));
          -1 !== a.h && (b.hour = "AM" == l && "12" == f[a.h] ? 0 : "PM" == l && "12" != f[a.h] ? parseInt(f[a.h], 10) + 12 : Number(f[a.h]));
          -1 !== a.m &&
          (b.minute = Number(f[a.m]));
          -1 !== a.s && (b.second = Number(f[a.s]));
          -1 !== a.l && (b.millisec = Number(f[a.l]));
          if (-1 !== a.z && void 0 !== f[a.z]) {
            a = f[a.z].toUpperCase();
            switch (a.length) {
              case 1:
                a = c.timezoneIso8601 ? "Z" : "+0000";
                break;
              case 5:
                c.timezoneIso8601 && (a = "0000" == a.substring(1) ? "Z" : a.substring(0, 3) + ":" + a.substring(3));
                break;
              case 6:
                c.timezoneIso8601 ? "00:00" == a.substring(1) && (a = "Z") : a = "Z" == a || "00:00" == a.substring(1) ? "+0000" : a.replace(/:/, "")
            }
            b.timezone = a
          }
          return b
        }
        return !1
      }, f = function (a, b, c) {
        try {
          var f = new Date("2012-01-01 " +
            b);
          return {
            hour: f.getHours(),
            minutes: f.getMinutes(),
            seconds: f.getSeconds(),
            millisec: f.getMilliseconds(),
            timezone: e.timepicker.timeZoneOffsetString(f)
          }
        } catch (n) {
          try {
            return d(a, b, c)
          } catch (l) {
            e.datepicker.log("Unable to parse \ntimeString: " + b + "\ntimeFormat: " + a)
          }
        }
        return !1
      };
      return "function" === typeof a.parse ? a.parse(c, b, a) : "loose" === a.parse ? f(c, b, a) : d(c, b, a)
    };
    e.datepicker.formatTime = function (c, b, a) {
      a = a || {};
      a = e.extend({}, e.timepicker._defaults, a);
      b = e.extend({hour: 0, minute: 0, second: 0, millisec: 0, timezone: "+0000"},
        b);
      var d = a.amNames[0], f = parseInt(b.hour, 10);
      11 < f && (d = a.pmNames[0]);
      c = c.replace(/(?:HH?|hh?|mm?|ss?|[tT]{1,2}|[lz]|('.*?'|".*?"))/g, function (c) {
        switch (c) {
          case "HH":
            return ("0" + f).slice(-2);
          case "H":
            return f;
          case "hh":
            return ("0" + y(f)).slice(-2);
          case "h":
            return y(f);
          case "mm":
            return ("0" + b.minute).slice(-2);
          case "m":
            return b.minute;
          case "ss":
            return ("0" + b.second).slice(-2);
          case "s":
            return b.second;
          case "l":
            return ("00" + b.millisec).slice(-3);
          case "z":
            return null === b.timezone ? a.defaultTimezone : b.timezone;
          case "T":
            return d.charAt(0).toUpperCase();
          case "TT":
            return d.toUpperCase();
          case "t":
            return d.charAt(0).toLowerCase();
          case "tt":
            return d.toLowerCase();
          default:
            return c.replace(/\'/g, "") || "'"
        }
      });
      return c = e.trim(c)
    };
    e.datepicker._base_selectDate = e.datepicker._selectDate;
    e.datepicker._selectDate = function (c, b) {
      var a = this._getInst(e(c)[0]), d = this._get(a, "timepicker");
      d ? (d._limitMinMaxDateTime(a, !0), a.inline = a.stay_open = !0, this._base_selectDate(c, b), a.inline = a.stay_open = !1, this._notifyChange(a), this._updateDatepicker(a)) :
        this._base_selectDate(c, b)
    };
    e.datepicker._base_updateDatepicker = e.datepicker._updateDatepicker;
    e.datepicker._updateDatepicker = function (c) {
      var b = c.input[0];
      if (!e.datepicker._curInst || e.datepicker._curInst == c || !e.datepicker._datepickerShowing || e.datepicker._lastInput == b)if ("boolean" !== typeof c.stay_open || !1 === c.stay_open)if (this._base_updateDatepicker(c), b = this._get(c, "timepicker")) b._addTimePicker(c), b._defaults.useLocalTimezone && (r(b, new Date(c.selectedYear, c.selectedMonth, c.selectedDay, 12)), b._onTimeChange())
    };
    e.datepicker._base_doKeyPress = e.datepicker._doKeyPress;
    e.datepicker._doKeyPress = function (c) {
      var b = e.datepicker._getInst(c.target), a = e.datepicker._get(b, "timepicker");
      if (a && e.datepicker._get(b, "constrainInput")) {
        var d = q(a._defaults.timeFormat), b = e.datepicker._possibleChars(e.datepicker._get(b, "dateFormat")),
          a = a._defaults.timeFormat.toString().replace(/[hms]/g, "").replace(/TT/g, d ? "APM" : "").replace(/Tt/g, d ? "AaPpMm" : "").replace(/tT/g, d ? "AaPpMm" : "").replace(/T/g, d ? "AP" : "").replace(/tt/g, d ? "apm" : "").replace(/t/g,
              d ? "ap" : "") + " " + a._defaults.separator + a._defaults.timeSuffix + (a._defaults.showTimezone ? a._defaults.timezoneList.join("") : "") + a._defaults.amNames.join("") + a._defaults.pmNames.join("") + b,
          d = String.fromCharCode(void 0 === c.charCode ? c.keyCode : c.charCode);
        return c.ctrlKey || " " > d || !b || -1 < a.indexOf(d)
      }
      return e.datepicker._base_doKeyPress(c)
    };
    e.datepicker._base_updateAlternate = e.datepicker._updateAlternate;
    e.datepicker._updateAlternate = function (c) {
      var b = this._get(c, "timepicker");
      if (b) {
        var a = b._defaults.altField;
        if (a) {
          var d = this._getDate(c);
          c = e.datepicker._getFormatConfig(c);
          var f, g = b._defaults.altSeparator ? b._defaults.altSeparator : b._defaults.separator;
          f = b._defaults.altTimeSuffix ? b._defaults.altTimeSuffix : b._defaults.timeSuffix;
          f = "" + (e.datepicker.formatTime(null !== b._defaults.altTimeFormat ? b._defaults.altTimeFormat : b._defaults.timeFormat, b, b._defaults) + f);
          b._defaults.timeOnly || b._defaults.altFieldTimeOnly || (f = b._defaults.altFormat ? e.datepicker.formatDate(b._defaults.altFormat, null === d ? new Date : d, c) + g + f :
            b.formattedDate + g + f);
          e(a).val(f)
        }
      } else e.datepicker._base_updateAlternate(c)
    };
    e.datepicker._base_doKeyUp = e.datepicker._doKeyUp;
    e.datepicker._doKeyUp = function (c) {
      var b = e.datepicker._getInst(c.target), a = e.datepicker._get(b, "timepicker");
      if (a && a._defaults.timeOnly && b.input.val() != b.lastVal)try {
        e.datepicker._updateDatepicker(b)
      } catch (d) {
        e.datepicker.log(d)
      }
      return e.datepicker._base_doKeyUp(c)
    };
    e.datepicker._base_gotoToday = e.datepicker._gotoToday;
    e.datepicker._gotoToday = function (c) {
      var b = this._getInst(e(c)[0]),
        a = b.dpDiv;
      this._base_gotoToday(c);
      c = this._get(b, "timepicker");
      r(c);
      this._setTime(b, new Date);
      e(".ui-datepicker-today", a).click()
    };
    e.datepicker._disableTimepickerDatepicker = function (c) {
      var b = this._getInst(c);
      if (b) {
        var a = this._get(b, "timepicker");
        e(c).datepicker("getDate");
        a && (a._defaults.showTimepicker = !1, a._updateDateTime(b))
      }
    };
    e.datepicker._enableTimepickerDatepicker = function (c) {
      var b = this._getInst(c);
      if (b) {
        var a = this._get(b, "timepicker");
        e(c).datepicker("getDate");
        a && (a._defaults.showTimepicker =
          !0, a._addTimePicker(b), a._updateDateTime(b))
      }
    };
    e.datepicker._setTime = function (c, b) {
      var a = this._get(c, "timepicker");
      if (a) {
        var d = a._defaults;
        a.hour = b ? b.getHours() : d.hour;
        a.minute = b ? b.getMinutes() : d.minute;
        a.second = b ? b.getSeconds() : d.second;
        a.millisec = b ? b.getMilliseconds() : d.millisec;
        a._limitMinMaxDateTime(c, !0);
        a._onTimeChange();
        a._updateDateTime(c)
      }
    };
    e.datepicker._setTimeDatepicker = function (c, b, a) {
      if (c = this._getInst(c)) {
        var d = this._get(c, "timepicker");
        d && (this._setDateFromField(c), b && ("string" == typeof b ?
          (d._parseTime(b, a), b = new Date, b.setHours(d.hour, d.minute, d.second, d.millisec)) : b = new Date(b.getTime()), "Invalid Date" == b.toString() && (b = void 0), this._setTime(c, b)))
      }
    };
    e.datepicker._base_setDateDatepicker = e.datepicker._setDateDatepicker;
    e.datepicker._setDateDatepicker = function (c, b) {
      var a = this._getInst(c);
      if (a) {
        var d = b instanceof Date ? new Date(b.getTime()) : b;
        this._updateDatepicker(a);
        this._base_setDateDatepicker.apply(this, arguments);
        this._setTimeDatepicker(c, d, !0)
      }
    };
    e.datepicker._base_getDateDatepicker =
      e.datepicker._getDateDatepicker;
    e.datepicker._getDateDatepicker = function (c, b) {
      var a = this._getInst(c);
      if (a) {
        var d = this._get(a, "timepicker");
        return d ? (void 0 === a.lastVal && this._setDateFromField(a, b), (a = this._getDate(a)) && d._parseTime(e(c).val(), d.timeOnly) && a.setHours(d.hour, d.minute, d.second, d.millisec), a) : this._base_getDateDatepicker(c, b)
      }
    };
    e.datepicker._base_parseDate = e.datepicker.parseDate;
    e.datepicker.parseDate = function (c, b, a) {
      var d;
      try {
        d = this._base_parseDate(c, b, a)
      } catch (f) {
        d = this._base_parseDate(c,
          b.substring(0, b.length - (f.length - f.indexOf(":") - 2)), a), e.datepicker.log("Error parsing the date string: " + f + "\ndate string \x3d " + b + "\ndate format \x3d " + c)
      }
      return d
    };
    e.datepicker._base_formatDate = e.datepicker._formatDate;
    e.datepicker._formatDate = function (c, b, a, d) {
      return (b = this._get(c, "timepicker")) ? (b._updateDateTime(c), b.$input.val()) : this._base_formatDate(c)
    };
    e.datepicker._base_optionDatepicker = e.datepicker._optionDatepicker;
    e.datepicker._optionDatepicker = function (c, b, a) {
      var d = this._getInst(c),
        f;
      if (!d)return null;
      if (d = this._get(d, "timepicker")) {
        var g = null, k = null, h = null, m = d._defaults.evnts, n = {}, l;
        if ("string" == typeof b)if ("minDate" === b || "minDateTime" === b) g = a; else if ("maxDate" === b || "maxDateTime" === b) k = a; else if ("onSelect" === b) h = a; else {
          if (m.hasOwnProperty(b)) {
            if ("undefined" === typeof a)return m[b];
            n[b] = a;
            f = {}
          }
        } else if ("object" == typeof b)for (l in b.minDate ? g = b.minDate : b.minDateTime ? g = b.minDateTime : b.maxDate ? k = b.maxDate : b.maxDateTime && (k = b.maxDateTime), m)m.hasOwnProperty(l) && b[l] && (n[l] = b[l]);
        for (l in n)n.hasOwnProperty(l) && (m[l] = n[l], f || (f = e.extend({}, b)), delete f[l]);
        if (l = f)a:{
          l = f;
          for (var p in l)if (l.hasOwnProperty(l)) {
            l = !1;
            break a
          }
          l = !0
        }
        if (l)return;
        g ? (g = 0 === g ? new Date : new Date(g), d._defaults.minDate = g, d._defaults.minDateTime = g) : k ? (k = 0 === k ? new Date : new Date(k), d._defaults.maxDate = k, d._defaults.maxDateTime = k) : h && (d._defaults.onSelect = h)
      }
      return void 0 === a ? this._base_optionDatepicker.call(e.datepicker, c, b) : this._base_optionDatepicker.call(e.datepicker, c, f || b, a)
    };
    var u = function (c, b) {
      e.extend(c,
        b);
      for (var a in b)if (null === b[a] || void 0 === b[a]) c[a] = b[a];
      return c
    }, q = function (c) {
      return -1 !== c.indexOf("t") && -1 !== c.indexOf("h")
    }, y = function (c) {
      12 < c && (c -= 12);
      0 == c && (c = 12);
      return String(c)
    }, w = function (c, b, a, d, f) {
      var g;
      a:{
        try {
          var k = f && f.separator ? f.separator : e.timepicker._defaults.separator,
            h = (f && f.timeFormat ? f.timeFormat : e.timepicker._defaults.timeFormat).split(k).length, m = a.split(k),
            n = m.length;
          if (1 < n) {
            g = [m.splice(0, n - h).join(k), m.splice(0, h).join(k)];
            break a
          }
        } catch (l) {
          if (e.datepicker.log("Could not split the date from the time. Please check the following datetimepicker options\nthrown error: " +
              l + "\ndateTimeString" + a + "\ndateFormat \x3d " + c + "\nseparator \x3d " + f.separator + "\ntimeFormat \x3d " + f.timeFormat), 0 <= l.indexOf(":")) {
            g = a.length - (l.length - l.indexOf(":") - 2);
            a.substring(g);
            g = [e.trim(a.substring(0, g)), e.trim(a.substring(g))];
            break a
          } else throw l;
        }
        g = [a, ""]
      }
      c = e.datepicker._base_parseDate(c, g[0], d);
      if ("" !== g[1]) {
        b = e.datepicker.parseTime(b, g[1], f);
        if (null === b)throw"Wrong time format";
        return {date: c, timeObj: b}
      }
      return {date: c}
    }, r = function (c, b) {
      if (c && c.timezone_select) {
        c._defaults.useLocalTimezone =
          !0;
        var a = e.timepicker.timeZoneOffsetString("undefined" !== typeof b ? b : new Date);
        c._defaults.timezoneIso8601 && (a = a.substring(0, 3) + ":" + a.substring(3));
        c.timezone_select.val(a)
      }
    };
    e.timepicker = new t;
    e.timepicker.timeZoneOffsetString = function (c) {
      c = -1 * c.getTimezoneOffset();
      var b = c % 60;
      return (0 <= c ? "+" : "-") + ("0" + ((c - b) / 60 * 101).toString()).substr(-2) + ("0" + (101 * b).toString()).substr(-2)
    };
    e.timepicker.timeRange = function (c, b, a) {
      return e.timepicker.handleRange("timepicker", c, b, a)
    };
    e.timepicker.dateTimeRange = function (c,
                                           b, a) {
      e.timepicker.dateRange(c, b, a, "datetimepicker")
    };
    e.timepicker.dateRange = function (c, b, a, d) {
      e.timepicker.handleRange(d || "datepicker", c, b, a)
    };
    e.timepicker.handleRange = function (c, b, a, d) {
      function f (c, d, e) {
        d.val() && new Date(b.val()) > new Date(a.val()) && d.val(e)
      }

      function g (a, b, d) {
        e(a).val() && (a = e(a)[c].call(e(a), "getDate"), a.getTime && e(b)[c].call(e(b), "option", d, a))
      }

      e.fn[c].call(b, e.extend({
        onClose: function (b, c) {
          f(this, a, b)
        }, onSelect: function (b) {
          g(this, a, "minDate")
        }
      }, d, d.start));
      e.fn[c].call(a, e.extend({
        onClose: function (a,
                           c) {
          f(this, b, a)
        }, onSelect: function (a) {
          g(this, b, "maxDate")
        }
      }, d, d.end));
      "timepicker" != c && d.reformat && e([b, a]).each(function () {
        var a = e(this)[c].call(e(this), "option", "dateFormat"), b = new Date(e(this).val());
        e(this).val() && b && e(this).val(e.datepicker.formatDate(a, b))
      });
      f(b, a, b.val());
      g(b, a, "minDate");
      g(a, b, "maxDate");
      return e([b.get(0), a.get(0)])
    };
    e.timepicker.version = "1.1.1"
  }
})(jQuery);
(function () {
  var d = function (b, c) {
    var e = d.resolve(b, c || "/"), m = d.modules[e];
    if (!m)throw Error("Failed to resolve module " + b + ", tried " + e);
    return (e = d.cache[e]) ? e.exports : m()
  };
  d.paths = [];
  d.modules = {};
  d.cache = {};
  d.extensions = [".js", ".coffee", ".json"];
  d._core = {assert: !0, events: !0, fs: !0, path: !0, vm: !0};
  d.resolve = function () {
    return function (b, c) {
      function e (a) {
        a = h.normalize(a);
        if (d.modules[a])return a;
        for (var f = 0; f < d.extensions.length; f++) {
          var b = d.extensions[f];
          if (d.modules[a + b])return a + b
        }
      }

      function m (a) {
        a = a.replace(/\/+$/,
          "");
        var f = h.normalize(a + "/package.json");
        if (d.modules[f]) {
          var f = d.modules[f](), b = f.browserify;
          if ("object" == typeof b && b.main) {
            if (f = e(h.resolve(a, b.main)))return f
          } else if ("string" == typeof b) {
            if (f = e(h.resolve(a, b)))return f
          } else if (f.main && (f = e(h.resolve(a, f.main))))return f
        }
        return e(a + "/index")
      }

      c || (c = "/");
      if (d._core[b])return b;
      var h = d.modules.path(), g = (c = h.resolve("/", c)) || "/";
      if (b.match(/^(?:\.\.?\/|\/)/)) {
        var k = e(h.resolve(g, b)) || m(h.resolve(g, b));
        if (k)return k
      }
      if (g = function (a, f) {
          var b;
          "/" === f ?
            b = [""] : b = h.normalize(f).split("/");
          for (var p = [], l = b.length - 1; 0 <= l; l--)if ("node_modules" !== b[l]) {
            var q = b.slice(0, l + 1).join("/") + "/node_modules";
            p.push(q)
          }
          for (b = 0; b < p.length; b++) {
            l = p[b];
            if (q = e(l + "/" + a))return q;
            if (l = m(l + "/" + a))return l
          }
          if (q = e(a))return q
        }(b, g))return g;
      throw Error("Cannot find module '" + b + "'");
    }
  }();
  d.alias = function (b, c) {
    var e = d.modules.path(), m = null;
    try {
      m = d.resolve(b + "/package.json", "/")
    } catch (k) {
      m = d.resolve(b, "/")
    }
    for (var e = e.dirname(m), m = (Object.keys || function (b) {
      var a = [], f;
      for (f in b)a.push(f);
      return a
    })(d.modules), h = 0; h < m.length; h++) {
      var g = m[h];
      g.slice(0, e.length + 1) === e + "/" ? (g = g.slice(e.length), d.modules[c + g] = d.modules[e + g]) : g === e && (d.modules[c] = d.modules[e])
    }
  };
  (function () {
    var b = {}, c = "undefined" != typeof window ? window : {}, e = !1;
    d.define = function (m, h) {
      !e && d.modules.__browserify_process && (b = d.modules.__browserify_process(), e = !0);
      var g = d._core[m] ? "" : d.modules.path().dirname(m), k = function (b) {
        var c = d(b, g);
        b = d.cache[d.resolve(b, g)];
        return b && null === b.parent && (b.parent = a), c
      };
      k.resolve = function (a) {
        return d.resolve(a,
          g)
      };
      k.modules = d.modules;
      k.define = d.define;
      k.cache = d.cache;
      var a = {id: m, filename: m, exports: {}, loaded: !1, parent: null};
      d.modules[m] = function () {
        return d.cache[m] = a, h.call(a.exports, k, a, a.exports, g, m, b, c), a.loaded = !0, a.exports
      }
    }
  })();
  d.define("path", function (b, c, e, d, h, g, k) {
    function a (a, b) {
      for (var f = [], c = 0; c < a.length; c++)b(a[c], c, a) && f.push(a[c]);
      return f
    }

    function f (a, b) {
      for (var f = 0, c = a.length; 0 <= c; c--) {
        var e = a[c];
        "." == e ? a.splice(c, 1) : ".." === e ? (a.splice(c, 1), f++) : f && (a.splice(c, 1), f--)
      }
      if (b)for (; f--; f)a.unshift("..");
      return a
    }

    var n = /^(.+\/(?!$)|\/)?((?:.+?)?(\.[^.]*)?)$/;
    e.resolve = function () {
      for (var b = "", l = !1, c = arguments.length; -1 <= c && !l; c--) {
        var e = 0 <= c ? arguments[c] : g.cwd();
        "string" == typeof e && e && (b = e + "/" + b, l = "/" === e.charAt(0))
      }
      return b = f(a(b.split("/"), function (a) {
        return !!a
      }), !l).join("/"), (l ? "/" : "") + b || "."
    };
    e.normalize = function (b) {
      var c = "/" === b.charAt(0), e = "/" === b.slice(-1);
      return b = f(a(b.split("/"), function (a) {
        return !!a
      }), !c).join("/"), !b && !c && (b = "."), b && e && (b += "/"), (c ? "/" : "") + b
    };
    e.join = function () {
      var b = Array.prototype.slice.call(arguments,
        0);
      return e.normalize(a(b, function (a, b) {
        return a && "string" == typeof a
      }).join("/"))
    };
    e.dirname = function (a) {
      return (a = n.exec(a)[1] || "") ? 1 === a.length ? a : a.substring(0, a.length - 1) : "."
    };
    e.basename = function (a, b) {
      var f = n.exec(a)[2] || "";
      return b && f.substr(-1 * b.length) === b && (f = f.substr(0, f.length - b.length)), f
    };
    e.extname = function (a) {
      return n.exec(a)[3] || ""
    }
  });
  d.define("__browserify_process", function (b, c, e, d, h, g, k) {
    g = c.exports = {};
    g.nextTick = function () {
      if ("undefined" != typeof window && window.setImmediate)return window.setImmediate;
      if ("undefined" != typeof window && window.postMessage && window.addEventListener) {
        var a = [];
        return window.addEventListener("message", function (b) {
          b.source === window && "browserify-tick" === b.data && (b.stopPropagation(), 0 < a.length && a.shift()())
        }, !0), function (b) {
          a.push(b);
          window.postMessage("browserify-tick", "*")
        }
      }
      return function (a) {
        setTimeout(a, 0)
      }
    }();
    g.title = "browser";
    g.browser = !0;
    g.env = {};
    g.argv = [];
    g.binding = function (a) {
      if ("evals" === a)return b("vm");
      throw Error("No such module. (Possibly not yet loaded)");
    };
    (function () {
      var a = "/", f;
      g.cwd = function () {
        return a
      };
      g.chdir = function (c) {
        f || (f = b("path"));
        a = f.resolve(c, a)
      }
    })()
  });
  d.define("/ArrayList.js", function (b, c, e, d, h, g, k) {
    function a (a) {
      this.array = [];
      a instanceof f && this.addAll(a)
    }

    var f = b("./Collection");
    e = b("./List");
    var n = b("./IndexOutOfBoundsException"), p = b("./NoSuchElementException"), l = b("./OperationNotSupported");
    a.prototype = new e;
    a.prototype.array = null;
    a.prototype.add = function (a) {
      return this.array.push(a), !0
    };
    a.prototype.addAll = function (a) {
      for (a = a.iterator(); a.hasNext();)this.add(a.next());
      return !0
    };
    a.prototype.set = function (a, b) {
      var f = this.array[a];
      return this.array[a] = b, f
    };
    a.prototype.iterator = function () {
      return new a.Iterator(this)
    };
    a.prototype.get = function (a) {
      if (0 > a || a >= this.size())throw new n;
      return this.array[a]
    };
    a.prototype.isEmpty = function () {
      return 0 === this.array.length
    };
    a.prototype.size = function () {
      return this.array.length
    };
    a.prototype.toArray = function () {
      for (var a = [], b = 0, f = this.array.length; b < f; b++)a.push(this.array[b]);
      return a
    };
    a.prototype.remove = function (a) {
      for (var b = !1, f =
        0, c = this.array.length; f < c; f++)if (this.array[f] === a) {
        this.array.splice(f, 1);
        b = !0;
        break
      }
      return b
    };
    a.Iterator = function (a) {
      this.arrayList = a
    };
    a.Iterator.prototype.arrayList = null;
    a.Iterator.prototype.position = 0;
    a.Iterator.prototype.next = function () {
      if (this.position === this.arrayList.size())throw new p;
      return this.arrayList.get(this.position++)
    };
    a.Iterator.prototype.hasNext = function () {
      return this.position < this.arrayList.size() ? !0 : !1
    };
    a.Iterator.prototype.remove = function () {
      throw new l;
    };
    c.exports = a
  });
  d.define("/Collection.js",
    function (b, c, e, d, h, g, k) {
      function a () {
      }

      b("./Iterator");
      a.prototype.add = function (a) {
      };
      a.prototype.addAll = function (a) {
      };
      a.prototype.isEmpty = function () {
      };
      a.prototype.iterator = function () {
      };
      a.prototype.size = function () {
      };
      a.prototype.toArray = function () {
      };
      a.prototype.remove = function (a) {
      };
      c.exports = a
    });
  d.define("/Iterator.js", function (b, c, e, d, h, g, k) {
    function a () {
    }

    a.prototype.hasNext = function () {
    };
    a.prototype.next = function () {
    };
    a.prototype.remove = function () {
    };
    c.exports = a
  });
  d.define("/List.js", function (b, c, e, d,
                                 h, g, k) {
    function a () {
    }

    b = b("./Collection");
    a.prototype = new b;
    a.prototype.get = function (a) {
    };
    a.prototype.set = function (a, b) {
    };
    a.prototype.isEmpty = function () {
    };
    c.exports = a
  });
  d.define("/IndexOutOfBoundsException.js", function (b, c, e, d, h, g, k) {
    function a (a) {
      this.message = a || ""
    }

    a.prototype = Error();
    a.prototype.name = "IndexOutOfBoundsException";
    c.exports = a
  });
  d.define("/NoSuchElementException.js", function (b, c, e, d, h, g, k) {
    function a (a) {
      this.message = a || ""
    }

    a.prototype = Error();
    a.prototype.name = "NoSuchElementException";
    c.exports = a
  });
  d.define("/OperationNotSupported.js", function (b, c, e, d, h, g, k) {
    function a (a) {
      this.message = a || ""
    }

    a.prototype = Error();
    a.prototype.name = "OperationNotSupported";
    c.exports = a
  });
  d.define("/Arrays.js", function (b, c, e, d, h, g, k) {
    function a () {
    }

    a.sort = function () {
      var a = arguments[0], b, c, l;
      if (1 === arguments.length) a.sort(); else if (2 === arguments.length) c = arguments[1], l = function (a, b) {
        return c.compare(a, b)
      }, a.sort(l); else if (3 === arguments.length)for (b = a.slice(arguments[1], arguments[2]), b.sort(), l = a.slice(0,
        arguments[1]).concat(b, a.slice(arguments[2], a.length)), a.splice(0, a.length), b = 0; b < l.length; b++)a.push(l[b]); else if (4 === arguments.length)for (b = a.slice(arguments[1], arguments[2]), c = arguments[3], l = function (a, b) {
        return c.compare(a, b)
      }, b.sort(l), l = a.slice(0, arguments[1]).concat(b, a.slice(arguments[2], a.length)), a.splice(0, a.length), b = 0; b < l.length; b++)a.push(l[b])
    };
    a.asList = function (a) {
      for (var b = new javascript.util.ArrayList, c = 0, l = a.length; c < l; c++)b.add(a[c]);
      return b
    };
    c.exports = a
  });
  d.define("/EmptyStackException.js",
    function (b, c, e, d, h, g, k) {
      function a (a) {
        this.message = a || ""
      }

      a.prototype = Error();
      a.prototype.name = "EmptyStackException";
      c.exports = a
    });
  d.define("/HashMap.js", function (b, c, e, d, h, g, k) {
    function a () {
      this.object = {}
    }

    e = b("./Map");
    b("./ArrayList");
    a.prototype = new e;
    a.prototype.object = null;
    a.prototype.get = function (a) {
      return this.object[a] || null
    };
    a.prototype.put = function (a, b) {
      return this.object[a] = b, b
    };
    a.prototype.values = function () {
      var a = new javascript.util.ArrayList, b;
      for (b in this.object)this.object.hasOwnProperty(b) &&
      a.add(this.object[b]);
      return a
    };
    a.prototype.size = function () {
      return this.values().size()
    };
    c.exports = a
  });
  d.define("/Map.js", function (b, c, e, d, h, g, k) {
    function a () {
    }

    a.prototype.get = function (a) {
    };
    a.prototype.put = function (a, b) {
    };
    a.prototype.size = function () {
    };
    a.prototype.values = function () {
    };
    c.exports = a
  });
  d.define("/Set.js", function (b, c, d, m, h, g, k) {
    function a () {
    }

    b = b("./Collection");
    a.prototype = new b;
    a.prototype.contains = function (a) {
    };
    c.exports = a
  });
  d.define("/HashSet.js", function (b, c, d, m, h, g, k) {
    function a (a) {
      this.array =
        [];
      a instanceof f && this.addAll(a)
    }

    var f = b("./Collection");
    d = b("./Set");
    var n = b("./OperationNotSupported"), p = b("./NoSuchElementException");
    a.prototype = new d;
    a.prototype.array = null;
    a.prototype.contains = function (a) {
      for (var b = 0, c = this.array.length; b < c; b++)if (this.array[b] === a)return !0;
      return !1
    };
    a.prototype.add = function (a) {
      return this.contains(a) ? !1 : (this.array.push(a), !0)
    };
    a.prototype.addAll = function (a) {
      for (a = a.iterator(); a.hasNext();)this.add(a.next());
      return !0
    };
    a.prototype.remove = function (a) {
      throw new n;
    };
    a.prototype.size = function () {
      return this.array.length
    };
    a.prototype.isEmpty = function () {
      return 0 === this.array.length
    };
    a.prototype.toArray = function () {
      for (var a = [], b = 0, c = this.array.length; b < c; b++)a.push(this.array[b]);
      return a
    };
    a.prototype.iterator = function () {
      return new a.Iterator(this)
    };
    a.Iterator = function (a) {
      this.hashSet = a
    };
    a.Iterator.prototype.hashSet = null;
    a.Iterator.prototype.position = 0;
    a.Iterator.prototype.next = function () {
      if (this.position === this.hashSet.size())throw new p;
      return this.hashSet.array[this.position++]
    };
    a.Iterator.prototype.hasNext = function () {
      return this.position < this.hashSet.size() ? !0 : !1
    };
    a.Iterator.prototype.remove = function () {
      throw new javascript.util.OperationNotSupported;
    };
    c.exports = a
  });
  d.define("/SortedMap.js", function (b, c, d, m, h, g, k) {
    function a () {
    }

    b = b("./Map");
    a.prototype = new b;
    c.exports = a
  });
  d.define("/SortedSet.js", function (b, c, d, m, h, g, k) {
    function a () {
    }

    b = b("./Set");
    a.prototype = new b;
    c.exports = a
  });
  d.define("/Stack.js", function (b, c, d, m, h, g, k) {
    function a () {
      this.array = []
    }

    d = b("./List");
    var f = b("./EmptyStackException");
    a.prototype = new d;
    a.prototype.array = null;
    a.prototype.push = function (a) {
      return this.array.push(a), a
    };
    a.prototype.pop = function (a) {
      if (0 === this.array.length)throw new f;
      return this.array.pop()
    };
    a.prototype.peek = function () {
      if (0 === this.array.length)throw new f;
      return this.array[this.array.length - 1]
    };
    a.prototype.empty = function (a) {
      return 0 === this.array.length ? !0 : !1
    };
    a.prototype.isEmpty = function () {
      return this.empty()
    };
    a.prototype.search = function (a) {
      return this.array.indexOf(a)
    };
    a.prototype.size = function () {
      return this.array.length
    };
    a.prototype.toArray = function () {
      for (var a = [], b = 0, c = this.array.length; b < c; b++)a.push(this.array[b]);
      return a
    };
    c.exports = a
  });
  d.define("/TreeMap.js", function (b, c, d, m, h, g, k) {
    function a () {
      this.array = []
    }

    d = b("./Map");
    b("./SortedMap");
    b("./ArrayList");
    a.prototype = new d;
    a.prototype.array = null;
    a.prototype.get = function (a) {
      for (var b = 0, c = this.array.length; b < c; b++) {
        var d = this.array[b];
        if (0 === d.key.compareTo(a))return d.value
      }
      return null
    };
    a.prototype.put = function (a, b) {
      var c = this.get(a);
      if (c) {
        var d = c.value;
        return c.value =
          b, d
      }
      for (var d = {
        key: a,
        value: b
      }, e = 0, g = this.array.length; e < g; e++)if (c = this.array[e], 1 === c.key.compareTo(a))return this.array.splice(e, 0, d), null;
      return this.array.push({key: a, value: b}), null
    };
    a.prototype.values = function () {
      for (var a = new javascript.util.ArrayList, b = 0, c = this.array.length; b < c; b++)a.add(this.array[b].value);
      return a
    };
    a.prototype.size = function () {
      return this.values().size()
    };
    c.exports = a
  });
  d.define("/TreeSet.js", function (b, c, d, m, h, g, k) {
    function a (a) {
      this.array = [];
      a instanceof f && this.addAll(a)
    }

    var f = b("./Collection");
    d = b("./SortedSet");
    var n = b("./OperationNotSupported"), p = b("./NoSuchElementException");
    a.prototype = new d;
    a.prototype.array = null;
    a.prototype.contains = function (a) {
      for (var b = 0, c = this.array.length; b < c; b++)if (0 === this.array[b].compareTo(a))return !0;
      return !1
    };
    a.prototype.add = function (a) {
      if (this.contains(a))return !1;
      for (var b = 0, c = this.array.length; b < c; b++)if (1 === this.array[b].compareTo(a))return this.array.splice(b, 0, a), !0;
      return this.array.push(a), !0
    };
    a.prototype.addAll = function (a) {
      for (a =
             a.iterator(); a.hasNext();)this.add(a.next());
      return !0
    };
    a.prototype.remove = function (a) {
      throw new n;
    };
    a.prototype.size = function () {
      return this.array.length
    };
    a.prototype.isEmpty = function () {
      return 0 === this.array.length
    };
    a.prototype.toArray = function () {
      for (var a = [], b = 0, c = this.array.length; b < c; b++)a.push(this.array[b]);
      return a
    };
    a.prototype.iterator = function () {
      return new a.Iterator(this)
    };
    a.Iterator = function (a) {
      this.treeSet = a
    };
    a.Iterator.prototype.treeSet = null;
    a.Iterator.prototype.position = 0;
    a.Iterator.prototype.next =
      function () {
        if (this.position === this.treeSet.size())throw new p;
        return this.treeSet.array[this.position++]
      };
    a.Iterator.prototype.hasNext = function () {
      return this.position < this.treeSet.size() ? !0 : !1
    };
    a.Iterator.prototype.remove = function () {
      throw new javascript.util.OperationNotSupported;
    };
    c.exports = a
  });
  d.define("/javascript.util.js", function (b, c, d, m, h, g, k) {
    c = {util: {}};
    c.util.version = "0.10.0";
    c.util.ArrayList = b("./ArrayList");
    c.util.Arrays = b("./Arrays");
    c.util.Collection = b("./Collection");
    c.util.EmptyStackException =
      b("./EmptyStackException");
    c.util.HashMap = b("./HashMap");
    c.util.IndexOutOfBoundsException = b("./IndexOutOfBoundsException");
    c.util.Iterator = b("./Iterator");
    c.util.List = b("./List");
    c.util.Map = b("./Map");
    c.util.NoSuchElementException = b("./NoSuchElementException");
    c.util.OperationNotSupported = b("./OperationNotSupported");
    c.util.Set = b("./Set");
    c.util.HashSet = b("./HashSet");
    c.util.SortedMap = b("./SortedMap");
    c.util.SortedSet = b("./SortedSet");
    c.util.Stack = b("./Stack");
    c.util.TreeMap = b("./TreeMap");
    c.util.TreeSet =
      b("./TreeSet");
    this.javascript = c;
    var a;
    "undefined" != typeof window ? a = window : a = k;
    a.javascript = c
  });
  d("/javascript.util.js")
})();
jsts = {
  version: "0.13.2",
  algorithm: {distance: {}, locate: {}},
  error: {},
  geom: {util: {}},
  geomgraph: {index: {}},
  index: {bintree: {}, chain: {}, kdtree: {}, quadtree: {}, strtree: {}},
  io: {},
  noding: {snapround: {}},
  operation: {buffer: {}, distance: {}, overlay: {snap: {}}, polygonize: {}, relate: {}, union: {}, valid: {}},
  planargraph: {},
  simplify: {},
  triangulate: {quadedge: {}},
  util: {}
};
"function" !== typeof String.prototype.trim && (String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g, "")
});
jsts.abstractFunc = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.error = {};
jsts.error.IllegalArgumentError = function (a) {
  this.name = "IllegalArgumentError";
  this.message = a
};
jsts.error.IllegalArgumentError.prototype = Error();
jsts.error.TopologyError = function (a, b) {
  this.name = "TopologyError";
  this.message = b ? a + " [ " + b + " ]" : a
};
jsts.error.TopologyError.prototype = Error();
jsts.error.AbstractMethodInvocationError = function () {
  this.name = "AbstractMethodInvocationError";
  this.message = "Abstract method called, should be implemented in subclass."
};
jsts.error.AbstractMethodInvocationError.prototype = Error();
jsts.error.NotImplementedError = function () {
  this.name = "NotImplementedError";
  this.message = "This method has not yet been implemented."
};
jsts.error.NotImplementedError.prototype = Error();
jsts.error.NotRepresentableError = function (a) {
  this.name = "NotRepresentableError";
  this.message = a
};
jsts.error.NotRepresentableError.prototype = Error();
jsts.error.LocateFailureError = function (a) {
  this.name = "LocateFailureError";
  this.message = a
};
jsts.error.LocateFailureError.prototype = Error();
"undefined" !== typeof module && (module.exports = jsts);
jsts.geom.GeometryFilter = function () {
};
jsts.geom.GeometryFilter.prototype.filter = function (a) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.util.PolygonExtracter = function (a) {
  this.comps = a
};
jsts.geom.util.PolygonExtracter.prototype = new jsts.geom.GeometryFilter;
jsts.geom.util.PolygonExtracter.prototype.comps = null;
jsts.geom.util.PolygonExtracter.getPolygons = function (a, b) {
  void 0 === b && (b = []);
  a instanceof jsts.geom.Polygon ? b.push(a) : a instanceof jsts.geom.GeometryCollection && a.apply(new jsts.geom.util.PolygonExtracter(b));
  return b
};
jsts.geom.util.PolygonExtracter.prototype.filter = function (a) {
  a instanceof jsts.geom.Polygon && this.comps.push(a)
};
jsts.io.WKTParser = function (a) {
  this.geometryFactory = a || new jsts.geom.GeometryFactory;
  this.regExes = {
    typeStr: /^\s*(\w+)\s*\(\s*(.*)\s*\)\s*$/,
    emptyTypeStr: /^\s*(\w+)\s*EMPTY\s*$/,
    spaces: /\s+/,
    parenComma: /\)\s*,\s*\(/,
    doubleParenComma: /\)\s*\)\s*,\s*\(\s*\(/,
    trimParens: /^\s*\(?(.*?)\)?\s*$/
  }
};
jsts.io.WKTParser.prototype.read = function (a) {
  var b, c, d;
  a = a.replace(/[\n\r]/g, " ");
  d = this.regExes.typeStr.exec(a);
  -1 !== a.search("EMPTY") && (d = this.regExes.emptyTypeStr.exec(a), d[2] = void 0);
  d && (c = d[1].toLowerCase(), d = d[2], this.parse[c] && (b = this.parse[c].apply(this, [d])));
  if (void 0 === b)throw Error("Could not parse WKT " + a);
  return b
};
jsts.io.WKTParser.prototype.write = function (a) {
  return this.extractGeometry(a)
};
jsts.io.WKTParser.prototype.extractGeometry = function (a) {
  var b = a.CLASS_NAME.split(".")[2].toLowerCase();
  if (!this.extract[b])return null;
  var c = b.toUpperCase();
  return a.isEmpty() ? c + " EMPTY" : c + "(" + this.extract[b].apply(this, [a]) + ")"
};
jsts.io.WKTParser.prototype.extract = {
  coordinate: function (a) {
    return a.x + " " + a.y
  }, point: function (a) {
    return a.coordinate.x + " " + a.coordinate.y
  }, multipoint: function (a) {
    for (var b = [], c = 0, d = a.geometries.length; c < d; ++c)b.push("(" + this.extract.point.apply(this, [a.geometries[c]]) + ")");
    return b.join(",")
  }, linestring: function (a) {
    for (var b = [], c = 0, d = a.points.length; c < d; ++c)b.push(this.extract.coordinate.apply(this, [a.points[c]]));
    return b.join(",")
  }, multilinestring: function (a) {
    for (var b = [], c = 0, d = a.geometries.length; c <
    d; ++c)b.push("(" + this.extract.linestring.apply(this, [a.geometries[c]]) + ")");
    return b.join(",")
  }, polygon: function (a) {
    var b = [];
    b.push("(" + this.extract.linestring.apply(this, [a.shell]) + ")");
    for (var c = 0, d = a.holes.length; c < d; ++c)b.push("(" + this.extract.linestring.apply(this, [a.holes[c]]) + ")");
    return b.join(",")
  }, multipolygon: function (a) {
    for (var b = [], c = 0, d = a.geometries.length; c < d; ++c)b.push("(" + this.extract.polygon.apply(this, [a.geometries[c]]) + ")");
    return b.join(",")
  }, geometrycollection: function (a) {
    for (var b =
      [], c = 0, d = a.geometries.length; c < d; ++c)b.push(this.extractGeometry.apply(this, [a.geometries[c]]));
    return b.join(",")
  }
};
jsts.io.WKTParser.prototype.parse = {
  point: function (a) {
    if (void 0 === a)return this.geometryFactory.createPoint(null);
    a = a.trim().split(this.regExes.spaces);
    return this.geometryFactory.createPoint(new jsts.geom.Coordinate(a[0], a[1]))
  }, multipoint: function (a) {
    if (void 0 === a)return this.geometryFactory.createMultiPoint(null);
    for (var b = a.trim().split(","), c = [], d = 0, e = b.length; d < e; ++d)a = b[d].replace(this.regExes.trimParens, "$1"), c.push(this.parse.point.apply(this, [a]));
    return this.geometryFactory.createMultiPoint(c)
  },
  linestring: function (a) {
    if (void 0 === a)return this.geometryFactory.createLineString(null);
    a = a.trim().split(",");
    for (var b = [], c, d = 0, e = a.length; d < e; ++d)c = a[d].trim().split(this.regExes.spaces), b.push(new jsts.geom.Coordinate(c[0], c[1]));
    return this.geometryFactory.createLineString(b)
  }, linearring: function (a) {
    if (void 0 === a)return this.geometryFactory.createLinearRing(null);
    a = a.trim().split(",");
    for (var b = [], c, d = 0, e = a.length; d < e; ++d)c = a[d].trim().split(this.regExes.spaces), b.push(new jsts.geom.Coordinate(c[0],
      c[1]));
    return this.geometryFactory.createLinearRing(b)
  }, multilinestring: function (a) {
    if (void 0 === a)return this.geometryFactory.createMultiLineString(null);
    for (var b = a.trim().split(this.regExes.parenComma), c = [], d = 0, e = b.length; d < e; ++d)a = b[d].replace(this.regExes.trimParens, "$1"), c.push(this.parse.linestring.apply(this, [a]));
    return this.geometryFactory.createMultiLineString(c)
  }, polygon: function (a) {
    if (void 0 === a)return this.geometryFactory.createPolygon(null);
    var b;
    a = a.trim().split(this.regExes.parenComma);
    for (var c, d = [], e = 0, f = a.length; e < f; ++e)b = a[e].replace(this.regExes.trimParens, "$1"), b = this.parse.linestring.apply(this, [b]), b = this.geometryFactory.createLinearRing(b.points), 0 === e ? c = b : d.push(b);
    return this.geometryFactory.createPolygon(c, d)
  }, multipolygon: function (a) {
    if (void 0 === a)return this.geometryFactory.createMultiPolygon(null);
    for (var b = a.trim().split(this.regExes.doubleParenComma), c = [], d = 0, e = b.length; d < e; ++d)a = b[d].replace(this.regExes.trimParens, "$1"), c.push(this.parse.polygon.apply(this, [a]));
    return this.geometryFactory.createMultiPolygon(c)
  }, geometrycollection: function (a) {
    if (void 0 === a)return this.geometryFactory.createGeometryCollection(null);
    a = a.replace(/,\s*([A-Za-z])/g, "|$1");
    a = a.trim().split("|");
    for (var b = [], c = 0, d = a.length; c < d; ++c)b.push(jsts.io.WKTParser.prototype.read.apply(this, [a[c]]));
    return this.geometryFactory.createGeometryCollection(b)
  }
};
jsts.algorithm.HCoordinate = function () {
  this.y = this.x = 0;
  this.w = 1;
  1 === arguments.length ? this.initFrom1Coordinate(arguments[0]) : 2 === arguments.length && arguments[0] instanceof jsts.geom.Coordinate ? this.initFrom2Coordinates(arguments[0], arguments[1]) : 2 === arguments.length && arguments[0] instanceof jsts.algorithm.HCoordinate ? this.initFrom2HCoordinates(arguments[0], arguments[1]) : 2 === arguments.length ? this.initFromXY(arguments[0], arguments[1]) : 3 === arguments.length ? this.initFromXYW(arguments[0], arguments[1], arguments[2]) :
    4 === arguments.length && this.initFromXYW(arguments[0], arguments[1], arguments[2], arguments[3])
};
jsts.algorithm.HCoordinate.intersection = function (a, b, c, d) {
  var e, f, g;
  e = a.y - b.y;
  f = b.x - a.x;
  a = a.x * b.y - b.x * a.y;
  b = c.y - d.y;
  g = d.x - c.x;
  c = c.x * d.y - d.x * c.y;
  d = e * g - b * f;
  f = (f * c - g * a) / d;
  e = (b * a - e * c) / d;
  if (!isFinite(f) || !isFinite(e))throw new jsts.error.NotRepresentableError;
  return new jsts.geom.Coordinate(f, e)
};
jsts.algorithm.HCoordinate.prototype.initFrom1Coordinate = function (a) {
  this.x = a.x;
  this.y = a.y;
  this.w = 1
};
jsts.algorithm.HCoordinate.prototype.initFrom2Coordinates = function (a, b) {
  this.x = a.y - b.y;
  this.y = b.x - a.x;
  this.w = a.x * b.y - b.x * a.y
};
jsts.algorithm.HCoordinate.prototype.initFrom2HCoordinates = function (a, b) {
  this.x = a.y * b.w - b.y * a.w;
  this.y = b.x * a.w - a.x * b.w;
  this.w = a.x * b.y - b.x * a.y
};
jsts.algorithm.HCoordinate.prototype.initFromXYW = function (a, b, c) {
  this.x = a;
  this.y = b;
  this.w = c
};
jsts.algorithm.HCoordinate.prototype.initFromXY = function (a, b) {
  this.x = a;
  this.y = b;
  this.w = 1
};
jsts.algorithm.HCoordinate.prototype.initFrom4Coordinates = function (a, b, c, d) {
  var e, f, g;
  e = a.y - b.y;
  f = b.x - a.x;
  a = a.x * b.y - b.x * a.y;
  b = c.y - d.y;
  g = d.x - c.x;
  c = c.x * d.y - d.x * c.y;
  this.x = f * c - g * a;
  this.y = b * a - e * c;
  this.w = e * g - b * f
};
jsts.algorithm.HCoordinate.prototype.getX = function () {
  var a = this.x / this.w;
  if (!isFinite(a))throw new jsts.error.NotRepresentableError;
  return a
};
jsts.algorithm.HCoordinate.prototype.getY = function () {
  var a = this.y / this.w;
  if (!isFinite(a))throw new jsts.error.NotRepresentableError;
  return a
};
jsts.algorithm.HCoordinate.prototype.getCoordinate = function () {
  var a = new jsts.geom.Coordinate;
  a.x = this.getX();
  a.y = this.getY();
  return a
};
jsts.algorithm.CGAlgorithms = function () {
};
jsts.algorithm.CGAlgorithms.CLOCKWISE = -1;
jsts.algorithm.CGAlgorithms.RIGHT = jsts.algorithm.CGAlgorithms.CLOCKWISE;
jsts.algorithm.CGAlgorithms.COUNTERCLOCKWISE = 1;
jsts.algorithm.CGAlgorithms.LEFT = jsts.algorithm.CGAlgorithms.COUNTERCLOCKWISE;
jsts.algorithm.CGAlgorithms.COLLINEAR = 0;
jsts.algorithm.CGAlgorithms.STRAIGHT = jsts.algorithm.CGAlgorithms.COLLINEAR;
jsts.algorithm.CGAlgorithms.orientationIndex = function (a, b, c) {
  return jsts.algorithm.RobustDeterminant.signOfDet2x2(b.x - a.x, b.y - a.y, c.x - b.x, c.y - b.y)
};
jsts.algorithm.CGAlgorithms.isPointInRing = function (a, b) {
  return jsts.algorithm.CGAlgorithms.locatePointInRing(a, b) !== jsts.geom.Location.EXTERIOR
};
jsts.algorithm.CGAlgorithms.locatePointInRing = function (a, b) {
  return jsts.algorithm.RayCrossingCounter.locatePointInRing(a, b)
};
jsts.algorithm.CGAlgorithms.isOnLine = function (a, b) {
  var c, d, e, f, g;
  c = new jsts.algorithm.RobustLineIntersector;
  d = 1;
  for (e = b.length; d < e; d++)if (f = b[d - 1], g = b[d], c.computeIntersection(a, f, g), c.hasIntersection())return !0;
  return !1
};
jsts.algorithm.CGAlgorithms.isCCW = function (a) {
  var b, c, d, e, f;
  b = a.length - 1;
  if (3 > b)throw new jsts.IllegalArgumentError("Ring has fewer than 3 points, so orientation cannot be determined");
  c = a[0];
  d = 0;
  f = 1;
  for (f; f <= b; f++)e = a[f], e.y > c.y && (c = e, d = f);
  f = d;
  do--f, 0 > f && (f = b); while (a[f].equals2D(c) && f !== d);
  e = d;
  do e = (e + 1) % b; while (a[e].equals2D(c) && e !== d);
  b = a[f];
  a = a[e];
  if (b.equals2D(c) || a.equals2D(c) || b.equals2D(a))return !1;
  c = jsts.algorithm.CGAlgorithms.computeOrientation(b, c, a);
  return 0 === c ? b.x > a.x : 0 < c
};
jsts.algorithm.CGAlgorithms.computeOrientation = function (a, b, c) {
  return jsts.algorithm.CGAlgorithms.orientationIndex(a, b, c)
};
jsts.algorithm.CGAlgorithms.distancePointLine = function (a, b, c) {
  b instanceof jsts.geom.Coordinate || jsts.algorithm.CGAlgorithms.distancePointLine2.apply(this, arguments);
  if (b.x === c.x && b.y === c.y)return a.distance(b);
  var d;
  d = ((a.x - b.x) * (c.x - b.x) + (a.y - b.y) * (c.y - b.y)) / ((c.x - b.x) * (c.x - b.x) + (c.y - b.y) * (c.y - b.y));
  return 0 >= d ? a.distance(b) : 1 <= d ? a.distance(c) : Math.abs(((b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)) / ((c.x - b.x) * (c.x - b.x) + (c.y - b.y) * (c.y - b.y))) * Math.sqrt((c.x - b.x) * (c.x - b.x) + (c.y - b.y) * (c.y - b.y))
};
jsts.algorithm.CGAlgorithms.distancePointLinePerpendicular = function (a, b, c) {
  return Math.abs(((b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y)) / ((c.x - b.x) * (c.x - b.x) + (c.y - b.y) * (c.y - b.y))) * Math.sqrt((c.x - b.x) * (c.x - b.x) + (c.y - b.y) * (c.y - b.y))
};
jsts.algorithm.CGAlgorithms.distancePointLine2 = function (a, b) {
  var c, d, e, f;
  if (0 === b.length)throw new jsts.error.IllegalArgumentError("Line array must contain at least one vertex");
  c = a.distance(b[0]);
  d = 0;
  for (e = b.length - 1; d < e; d++)f = jsts.algorithm.CGAlgorithms.distancePointLine(a, b[d], b[d + 1]), f < c && (c = f);
  return c
};
jsts.algorithm.CGAlgorithms.distanceLineLine = function (a, b, c, d) {
  if (a.equals(b))return jsts.algorithm.CGAlgorithms.distancePointLine(a, c, d);
  if (c.equals(d))return jsts.algorithm.CGAlgorithms.distancePointLine(d, a, b);
  var e, f, g, h;
  e = (a.y - c.y) * (d.x - c.x) - (a.x - c.x) * (d.y - c.y);
  f = (b.x - a.x) * (d.y - c.y) - (b.y - a.y) * (d.x - c.x);
  g = (a.y - c.y) * (b.x - a.x) - (a.x - c.x) * (b.y - a.y);
  h = (b.x - a.x) * (d.y - c.y) - (b.y - a.y) * (d.x - c.x);
  if (0 === f || 0 === h)return Math.min(jsts.algorithm.CGAlgorithms.distancePointLine(a, c, d), Math.min(jsts.algorithm.CGAlgorithms.distancePointLine(b,
    c, d), Math.min(jsts.algorithm.CGAlgorithms.distancePointLine(c, a, b), jsts.algorithm.CGAlgorithms.distancePointLine(d, a, b))));
  g /= h;
  e /= f;
  return 0 > e || 1 < e || 0 > g || 1 < g ? Math.min(jsts.algorithm.CGAlgorithms.distancePointLine(a, c, d), Math.min(jsts.algorithm.CGAlgorithms.distancePointLine(b, c, d), Math.min(jsts.algorithm.CGAlgorithms.distancePointLine(c, a, b), jsts.algorithm.CGAlgorithms.distancePointLine(d, a, b)))) : 0
};
jsts.algorithm.CGAlgorithms.signedArea = function (a) {
  if (3 > a.length)return 0;
  var b, c, d, e, f, g, h;
  c = b = 0;
  for (d = a.length - 1; c < d; c++)e = a[c].x, f = a[c].y, g = a[c + 1].x, h = a[c + 1].y, b += (e + g) * (h - f);
  return -b / 2
};
jsts.algorithm.CGAlgorithms.signedArea = function (a) {
  var b, c, d, e, f, g, h;
  b = a.length;
  if (3 > b)return 0;
  c = 0;
  d = a[0];
  e = d.x;
  f = d.y;
  for (g = 1; g < b; g++)d = a[g], h = d.x, d = d.y, c += (e + h) * (d - f), e = h, f = d;
  return -c / 2
};
jsts.algorithm.CGAlgorithms.computeLength = function (a) {
  var b = a.length, c, d, e, f, g, h;
  if (1 >= b)return 0;
  c = 0;
  g = a[0];
  d = g.x;
  e = g.y;
  h = 1;
  for (h; h < b; h++)g = a[h], f = g.x, g = g.y, d = f - d, e = g - e, c += Math.sqrt(d * d + e * e), d = f, e = g;
  return c
};
jsts.algorithm.CGAlgorithms.length = function () {
};
jsts.algorithm.Angle = function () {
};
jsts.algorithm.Angle.PI_TIMES_2 = 2 * Math.PI;
jsts.algorithm.Angle.PI_OVER_2 = Math.PI / 2;
jsts.algorithm.Angle.PI_OVER_4 = Math.PI / 4;
jsts.algorithm.Angle.COUNTERCLOCKWISE = jsts.algorithm.CGAlgorithms.prototype.COUNTERCLOCKWISE;
jsts.algorithm.Angle.CLOCKWISE = jsts.algorithm.CGAlgorithms.prototype.CLOCKWISE;
jsts.algorithm.Angle.NONE = jsts.algorithm.CGAlgorithms.prototype.COLLINEAR;
jsts.algorithm.Angle.toDegrees = function (a) {
  return 180 * a / Math.PI
};
jsts.algorithm.Angle.toRadians = function (a) {
  return a * Math.PI / 180
};
jsts.algorithm.Angle.angle = function () {
  return 1 === arguments.length ? jsts.algorithm.Angle.angleFromOrigo(arguments[0]) : jsts.algorithm.Angle.angleBetweenCoords(arguments[0], arguments[1])
};
jsts.algorithm.Angle.angleBetweenCoords = function (a, b) {
  return Math.atan2(b.y - a.y, b.x - a.x)
};
jsts.algorithm.Angle.angleFromOrigo = function (a) {
  return Math.atan2(a.y, a.x)
};
jsts.algorithm.Angle.isAcute = function (a, b, c) {
  return 0 < (a.x - b.x) * (c.x - b.x) + (a.y - b.y) * (c.y - b.y)
};
jsts.algorithm.Angle.isObtuse = function (a, b, c) {
  return 0 > (a.x - b.x) * (c.x - b.x) + (a.y - b.y) * (c.y - b.y)
};
jsts.algorithm.Angle.angleBetween = function (a, b, c) {
  a = jsts.algorithm.Angle.angle(b, a);
  b = jsts.algorithm.Angle.angle(b, c);
  return jsts.algorithm.Angle.diff(a, b)
};
jsts.algorithm.Angle.angleBetweenOriented = function (a, b, c) {
  a = jsts.algorithm.Angle.angle(b, a);
  b = jsts.algorithm.Angle.angle(b, c) - a;
  return b <= -Math.PI ? b + jsts.algorithm.Angle.PI_TIMES_2 : b > Math.PI ? b - jsts.algorithm.Angle.PI_TIMES_2 : b
};
jsts.algorithm.Angle.interiorAngle = function (a, b, c) {
  a = jsts.algorithm.Angle.angle(b, a);
  b = jsts.algorithm.Angle.angle(b, c);
  return Math.abs(b - a)
};
jsts.algorithm.Angle.getTurn = function (a, b) {
  var c = Math.sin(b - a);
  return 0 < c ? jsts.algorithm.Angle.COUNTERCLOCKWISE : 0 > c ? jsts.algorithm.Angle.CLOCKWISE : jsts.algorithm.Angle.NONE
};
jsts.algorithm.Angle.normalize = function (a) {
  for (; a > Math.PI;)a -= jsts.algorithm.Angle.PI_TIMES_2;
  for (; a <= -Math.PI;)a += jsts.algorithm.Angle.PI_TIMES_2;
  return a
};
jsts.algorithm.Angle.normalizePositive = function (a) {
  if (0 > a) {
    for (; 0 > a;)a += jsts.algorithm.Angle.PI_TIMES_2;
    a >= jsts.algorithm.Angle.PI_TIMES_2 && (a = 0)
  } else {
    for (; a >= jsts.algorithm.Angle.PI_TIMES_2;)a -= jsts.algorithm.Angle.PI_TIMES_2;
    0 > a && (a = 0)
  }
  return a
};
jsts.algorithm.Angle.diff = function (a, b) {
  var c;
  c = a < b ? b - a : a - b;
  c > Math.PI && (c = 2 * Math.PI - c);
  return c
};
jsts.geom.GeometryComponentFilter = function () {
};
jsts.geom.GeometryComponentFilter.prototype.filter = function (a) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.util.LinearComponentExtracter = function (a, b) {
  this.lines = a;
  this.isForcedToLineString = b
};
jsts.geom.util.LinearComponentExtracter.prototype = new jsts.geom.GeometryComponentFilter;
jsts.geom.util.LinearComponentExtracter.prototype.lines = null;
jsts.geom.util.LinearComponentExtracter.prototype.isForcedToLineString = !1;
jsts.geom.util.LinearComponentExtracter.getLines = function (a, b) {
  if (1 == arguments.length)return jsts.geom.util.LinearComponentExtracter.getLines5.apply(this, arguments);
  if (2 == arguments.length && "boolean" === typeof b)return jsts.geom.util.LinearComponentExtracter.getLines6.apply(this, arguments);
  if (2 == arguments.length && a instanceof jsts.geom.Geometry)return jsts.geom.util.LinearComponentExtracter.getLines3.apply(this, arguments);
  if (3 == arguments.length && a instanceof jsts.geom.Geometry)return jsts.geom.util.LinearComponentExtracter.getLines4.apply(this,
    arguments);
  if (3 == arguments.length)return jsts.geom.util.LinearComponentExtracter.getLines2.apply(this, arguments);
  for (var c = 0; c < a.length; c++)jsts.geom.util.LinearComponentExtracter.getLines3(a[c], b);
  return b
};
jsts.geom.util.LinearComponentExtracter.getLines2 = function (a, b, c) {
  for (var d = 0; d < a.length; d++)jsts.geom.util.LinearComponentExtracter.getLines4(a[d], b, c);
  return b
};
jsts.geom.util.LinearComponentExtracter.getLines3 = function (a, b) {
  a instanceof LineString ? b.add(a) : a.apply(new jsts.geom.util.LinearComponentExtracter(b));
  return b
};
jsts.geom.util.LinearComponentExtracter.getLines4 = function (a, b, c) {
  a.apply(new jsts.geom.util.LinearComponentExtracter(b, c));
  return b
};
jsts.geom.util.LinearComponentExtracter.getLines5 = function (a) {
  return jsts.geom.util.LinearComponentExtracter.getLines6(a, !1)
};
jsts.geom.util.LinearComponentExtracter.getLines6 = function (a, b) {
  var c = [];
  a.apply(new jsts.geom.util.LinearComponentExtracter(c, b));
  return c
};
jsts.geom.util.LinearComponentExtracter.prototype.setForceToLineString = function (a) {
  this.isForcedToLineString = a
};
jsts.geom.util.LinearComponentExtracter.prototype.filter = function (a) {
  this.isForcedToLineString && a instanceof jsts.geom.LinearRing ? (a = a.getFactory().createLineString(a.getCoordinateSequence()), this.lines.push(a)) : (a instanceof jsts.geom.LineString || a instanceof jsts.geom.LinearRing) && this.lines.push(a)
};
(function () {
  var a = function () {
  };
  a.setVisited = function (a, c) {
    for (; a.hasNext();)a.next().setVisited(c)
  };
  a.setMarked = function (a, c) {
    for (; a.hasNext();)a.next().setMarked(c)
  };
  a.getComponentWithVisitedState = function (a, c) {
    for (; a.hasNext();) {
      var d = a.next();
      if (d.isVisited() == c)return d
    }
    return null
  };
  a.prototype._isMarked = !1;
  a.prototype._isVisited = !1;
  a.prototype.data;
  a.prototype.isVisited = function () {
    return this._isVisited
  };
  a.prototype.setVisited = function (a) {
    this._isVisited = a
  };
  a.prototype.isMarked = function () {
    return this._isMarked
  };
  a.prototype.setMarked = function (a) {
    this._isMarked = a
  };
  a.prototype.setContext = function (a) {
    this.data = a
  };
  a.prototype.getContext = function () {
    return data
  };
  a.prototype.setData = function (a) {
    this.data = a
  };
  a.prototype.getData = function () {
    return data
  };
  a.prototype.isRemoved = function () {
    throw new jsts.error.AbstractMethodInvocationError;
  };
  jsts.planargraph.GraphComponent = a
})();
(function () {
  var a = javascript.util.ArrayList, b = function () {
    this.outEdges = new a
  };
  b.prototype.outEdges = null;
  b.prototype.sorted = !1;
  b.prototype.add = function (a) {
    this.outEdges.add(a);
    this.sorted = !1
  };
  b.prototype.remove = function (a) {
    this.outEdges.remove(a)
  };
  b.prototype.iterator = function () {
    this.sortEdges();
    return this.outEdges.iterator()
  };
  b.prototype.getDegree = function () {
    return this.outEdges.size()
  };
  b.prototype.getCoordinate = function () {
    var a = iterator();
    return a.hasNext() ? a.next().getCoordinate() : null
  };
  b.prototype.getEdges =
    function () {
      this.sortEdges();
      return this.outEdges
    };
  b.prototype.sortEdges = function () {
    if (!this.sorted) {
      var a = this.outEdges.toArray();
      a.sort(function (a, b) {
        return a.compareTo(b)
      });
      this.outEdges = javascript.util.Arrays.asList(a);
      this.sorted = !0
    }
  };
  b.prototype.getIndex = function (a) {
    if (a instanceof jsts.planargraph.DirectedEdge)return this.getIndex2(a);
    if ("number" === typeof a)return this.getIndex3(a);
    this.sortEdges();
    for (var b = 0; b < this.outEdges.size(); b++)if (this.outEdges.get(b).getEdge() == a)return b;
    return -1
  };
  b.prototype.getIndex2 = function (a) {
    this.sortEdges();
    for (var b = 0; b < this.outEdges.size(); b++)if (this.outEdges.get(b) == a)return b;
    return -1
  };
  b.prototype.getIndex3 = function (a) {
    a = toInt(a % this.outEdges.size());
    0 > a && (a += this.outEdges.size());
    return a
  };
  b.prototype.getNextEdge = function (a) {
    a = this.getIndex(a);
    return this.outEdges.get(getIndex(a + 1))
  };
  b.prototype.getNextCWEdge = function (a) {
    a = this.getIndex(a);
    return this.outEdges.get(getIndex(a - 1))
  };
  jsts.planargraph.DirectedEdgeStar = b
})();
(function () {
  var a = jsts.planargraph.DirectedEdgeStar, b = function (b, d) {
    this.pt = b;
    this.deStar = d || new a
  };
  b.prototype = new jsts.planargraph.GraphComponent;
  b.getEdgesBetween = function (a, b) {
    var e = DirectedEdge.toEdges(a.getOutEdges().getEdges()), e = new javascript.util.HashSet(e),
      f = DirectedEdge.toEdges(b.getOutEdges().getEdges());
    e.retainAll(f);
    return e
  };
  b.prototype.pt = null;
  b.prototype.deStar = null;
  b.prototype.getCoordinate = function () {
    return this.pt
  };
  b.prototype.addOutEdge = function (a) {
    this.deStar.add(a)
  };
  b.prototype.getOutEdges =
    function () {
      return this.deStar
    };
  b.prototype.getDegree = function () {
    return this.deStar.getDegree()
  };
  b.prototype.getIndex = function (a) {
    return this.deStar.getIndex(a)
  };
  b.prototype.remove = function (a) {
    if (void 0 === a)return this.remove2();
    this.deStar.remove(a)
  };
  b.prototype.remove2 = function () {
    this.pt = null
  };
  b.prototype.isRemoved = function () {
    return null == this.pt
  };
  jsts.planargraph.Node = b
})();
(function () {
  jsts.io.GeoJSONReader = function (a) {
    this.geometryFactory = a || new jsts.geom.GeometryFactory;
    this.precisionModel = this.geometryFactory.getPrecisionModel();
    this.parser = new jsts.io.GeoJSONParser(this.geometryFactory)
  };
  jsts.io.GeoJSONReader.prototype.read = function (a) {
    a = this.parser.read(a);
    this.precisionModel.getType() === jsts.geom.PrecisionModel.FIXED && this.reducePrecision(a);
    return a
  };
  jsts.io.GeoJSONReader.prototype.reducePrecision = function (a) {
    var b, c;
    if (a.coordinate) this.precisionModel.makePrecise(a.coordinate);
    else if (a.points)for (b = 0, c = a.points.length; b < c; b++)this.precisionModel.makePrecise(a.points[b]); else if (a.geometries)for (b = 0, c = a.geometries.length; b < c; b++)this.reducePrecision(a.geometries[b])
  }
})();
jsts.geom.Geometry = function (a) {
  this.factory = a
};
jsts.geom.Geometry.prototype.envelope = null;
jsts.geom.Geometry.prototype.factory = null;
jsts.geom.Geometry.prototype.getGeometryType = function () {
  return "Geometry"
};
jsts.geom.Geometry.hasNonEmptyElements = function (a) {
  var b;
  for (b = 0; b < a.length; b++)if (!a[b].isEmpty())return !0;
  return !1
};
jsts.geom.Geometry.hasNullElements = function (a) {
  var b;
  for (b = 0; b < a.length; b++)if (null === a[b])return !0;
  return !1
};
jsts.geom.Geometry.prototype.getFactory = function () {
  if (null === this.factory || void 0 === this.factory) this.factory = new jsts.geom.GeometryFactory;
  return this.factory
};
jsts.geom.Geometry.prototype.getNumGeometries = function () {
  return 1
};
jsts.geom.Geometry.prototype.getGeometryN = function (a) {
  return this
};
jsts.geom.Geometry.prototype.getPrecisionModel = function () {
  return this.getFactory().getPrecisionModel()
};
jsts.geom.Geometry.prototype.getCoordinate = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.Geometry.prototype.getCoordinates = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.Geometry.prototype.getNumPoints = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.Geometry.prototype.isSimple = function () {
  this.checkNotGeometryCollection(this);
  return (new jsts.operation.IsSimpleOp(this)).isSimple()
};
jsts.geom.Geometry.prototype.isValid = function () {
  return (new jsts.operation.valid.IsValidOp(this)).isValid()
};
jsts.geom.Geometry.prototype.isEmpty = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.Geometry.prototype.distance = function (a) {
  return jsts.operation.distance.DistanceOp.distance(this, a)
};
jsts.geom.Geometry.prototype.isWithinDistance = function (a, b) {
  return this.getEnvelopeInternal().distance(a.getEnvelopeInternal()) > b ? !1 : DistanceOp.isWithinDistance(this, a, b)
};
jsts.geom.Geometry.prototype.isRectangle = function () {
  return !1
};
jsts.geom.Geometry.prototype.getArea = function () {
  return 0
};
jsts.geom.Geometry.prototype.getLength = function () {
  return 0
};
jsts.geom.Geometry.prototype.getCentroid = function () {
  if (this.isEmpty())return null;
  var a;
  a = null;
  a = this.getDimension();
  a = 0 === a ? new jsts.algorithm.CentroidPoint : 1 === a ? new jsts.algorithm.CentroidLine : new jsts.algorithm.CentroidArea;
  a.add(this);
  a = a.getCentroid();
  return this.createPointFromInternalCoord(a, this)
};
jsts.geom.Geometry.prototype.getInteriorPoint = function () {
  var a = null, a = this.getDimension(),
    a = (0 === a ? new InteriorPointPoint(this) : 1 === a ? new InteriorPointLine(this) : new InteriorPointArea(this)).getInteriorPoint();
  return this.createPointFromInternalCoord(a, this)
};
jsts.geom.Geometry.prototype.getDimension = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.Geometry.prototype.getBoundary = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.Geometry.prototype.getBoundaryDimension = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.Geometry.prototype.getEnvelope = function () {
  return this.getFactory().toGeometry(this.getEnvelopeInternal())
};
jsts.geom.Geometry.prototype.getEnvelopeInternal = function () {
  null === this.envelope && (this.envelope = this.computeEnvelopeInternal());
  return this.envelope
};
jsts.geom.Geometry.prototype.disjoint = function (a) {
  return !this.intersects(a)
};
jsts.geom.Geometry.prototype.touches = function (a) {
  return this.getEnvelopeInternal().intersects(a.getEnvelopeInternal()) ? this.relate(a).isTouches(this.getDimension(), a.getDimension()) : !1
};
jsts.geom.Geometry.prototype.intersects = function (a) {
  return this.getEnvelopeInternal().intersects(a.getEnvelopeInternal()) ? this.isRectangle() ? RectangleIntersects.intersects(this, a) : a.isRectangle() ? RectangleIntersects.intersects(a, this) : this.relate(a).isIntersects() : !1
};
jsts.geom.Geometry.prototype.crosses = function (a) {
  return this.getEnvelopeInternal().intersects(a.getEnvelopeInternal()) ? this.relate(a).isCrosses(this.getDimension(), a.getDimension()) : !1
};
jsts.geom.Geometry.prototype.within = function (a) {
  return a.contains(this)
};
jsts.geom.Geometry.prototype.contains = function (a) {
  return this.getEnvelopeInternal().contains(a.getEnvelopeInternal()) ? this.isRectangle() ? RectangleContains.contains(this, a) : this.relate(a).isContains() : !1
};
jsts.geom.Geometry.prototype.overlaps = function (a) {
  return this.getEnvelopeInternal().intersects(a.getEnvelopeInternal()) ? this.relate(a).isOverlaps(this.getDimension(), a.getDimension()) : !1
};
jsts.geom.Geometry.prototype.covers = function (a) {
  return this.getEnvelopeInternal().covers(a.getEnvelopeInternal()) ? this.isRectangle() ? !0 : this.relate(a).isCovers() : !1
};
jsts.geom.Geometry.prototype.coveredBy = function (a) {
  return a.covers(this)
};
jsts.geom.Geometry.prototype.relate = function (a, b) {
  return 1 === arguments.length ? this.relate2.apply(this, arguments) : this.relate2(a).matches(b)
};
jsts.geom.Geometry.prototype.relate2 = function (a) {
  this.checkNotGeometryCollection(this);
  this.checkNotGeometryCollection(a);
  return jsts.operation.relate.RelateOp.relate(this, a)
};
jsts.geom.Geometry.prototype.equalsTopo = function (a) {
  return this.getEnvelopeInternal().equals(a.getEnvelopeInternal()) ? this.relate(a).isEquals(this.getDimension(), a.getDimension()) : !1
};
jsts.geom.Geometry.prototype.equals = function (a) {
  return a instanceof jsts.geom.Geometry || a instanceof jsts.geom.LinearRing || a instanceof jsts.geom.Polygon || a instanceof jsts.geom.GeometryCollection || a instanceof jsts.geom.MultiPoint || a instanceof jsts.geom.MultiLineString || a instanceof jsts.geom.MultiPolygon ? this.equalsExact(a) : !1
};
jsts.geom.Geometry.prototype.buffer = function (a, b, c) {
  b = new jsts.operation.buffer.BufferParameters(b, c);
  return jsts.operation.buffer.BufferOp.bufferOp2(this, a, b)
};
jsts.geom.Geometry.prototype.convexHull = function () {
  return (new jsts.algorithm.ConvexHull(this)).getConvexHull()
};
jsts.geom.Geometry.prototype.intersection = function (a) {
  if (this.isEmpty() || a.isEmpty())return this.getFactory().createGeometryCollection(null);
  this.isGeometryCollection(this);
  this.checkNotGeometryCollection(this);
  this.checkNotGeometryCollection(a);
  return jsts.operation.overlay.snap.SnapIfNeededOverlayOp.overlayOp(this, a, jsts.operation.overlay.OverlayOp.INTERSECTION)
};
jsts.geom.Geometry.prototype.union = function (a) {
  if (0 === arguments.length)return jsts.operation.union.UnaryUnionOp.union(this);
  if (this.isEmpty())return a.clone();
  if (a.isEmpty())return this.clone();
  this.checkNotGeometryCollection(this);
  this.checkNotGeometryCollection(a);
  return jsts.operation.overlay.snap.SnapIfNeededOverlayOp.overlayOp(this, a, jsts.operation.overlay.OverlayOp.UNION)
};
jsts.geom.Geometry.prototype.difference = function (a) {
  if (this.isEmpty())return this.getFactory().createGeometryCollection(null);
  if (a.isEmpty())return this.clone();
  this.checkNotGeometryCollection(this);
  this.checkNotGeometryCollection(a);
  return jsts.operation.overlay.snap.SnapIfNeededOverlayOp.overlayOp(this, a, jsts.operation.overlay.OverlayOp.DIFFERENCE)
};
jsts.geom.Geometry.prototype.symDifference = function (a) {
  if (this.isEmpty())return a.clone();
  if (a.isEmpty())return this.clone();
  this.checkNotGeometryCollection(this);
  this.checkNotGeometryCollection(a);
  return jsts.operation.overlay.snap.SnapIfNeededOverlayOp.overlayOp(this, a, jsts.operation.overlay.OverlayOp.SYMDIFFERENCE)
};
jsts.geom.Geometry.prototype.equalsExact = function (a, b) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.Geometry.prototype.equalsNorm = function (a) {
  return null === a || void 0 === a ? !1 : this.norm().equalsExact(a.norm())
};
jsts.geom.Geometry.prototype.apply = function (a) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.Geometry.prototype.clone = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.Geometry.prototype.normalize = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.Geometry.prototype.norm = function () {
  var a = this.clone();
  a.normalize();
  return a
};
jsts.geom.Geometry.prototype.compareTo = function (a) {
  return this.getClassSortIndex() !== a.getClassSortIndex() ? this.getClassSortIndex() - a.getClassSortIndex() : this.isEmpty() && a.isEmpty() ? 0 : this.isEmpty() ? -1 : a.isEmpty() ? 1 : this.compareToSameClass(a)
};
jsts.geom.Geometry.prototype.isEquivalentClass = function (a) {
  return this instanceof jsts.geom.Point && a instanceof jsts.geom.Point || this instanceof jsts.geom.LineString && a instanceof jsts.geom.LineString | a instanceof jsts.geom.LinearRing || this instanceof jsts.geom.LinearRing && a instanceof jsts.geom.LineString | a instanceof jsts.geom.LinearRing || this instanceof jsts.geom.Polygon && a instanceof jsts.geom.Polygon || this instanceof jsts.geom.MultiPoint && a instanceof jsts.geom.MultiPoint || this instanceof jsts.geom.MultiLineString &&
  a instanceof jsts.geom.MultiLineString || this instanceof jsts.geom.MultiPolygon && a instanceof jsts.geom.MultiPolygon || this instanceof jsts.geom.GeometryCollection && a instanceof jsts.geom.GeometryCollection ? !0 : !1
};
jsts.geom.Geometry.prototype.checkNotGeometryCollection = function (a) {
  if (a.isGeometryCollectionBase())throw new jsts.error.IllegalArgumentError("This method does not support GeometryCollection");
};
jsts.geom.Geometry.prototype.isGeometryCollection = function () {
  return this instanceof jsts.geom.GeometryCollection
};
jsts.geom.Geometry.prototype.isGeometryCollectionBase = function () {
  return "jsts.geom.GeometryCollection" === this.CLASS_NAME
};
jsts.geom.Geometry.prototype.computeEnvelopeInternal = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.Geometry.prototype.compareToSameClass = function (a) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.Geometry.prototype.compare = function (a, b) {
  for (var c = a.iterator(), d = b.iterator(); c.hasNext() && d.hasNext();) {
    var e = c.next(), f = d.next(), e = e.compareTo(f);
    if (0 !== e)return e
  }
  return c.hasNext() ? 1 : d.hasNext() ? -1 : 0
};
jsts.geom.Geometry.prototype.equal = function (a, b, c) {
  return void 0 === c || null === c || 0 === c ? a.equals(b) : a.distance(b) <= c
};
jsts.geom.Geometry.prototype.getClassSortIndex = function () {
  for (var a = [jsts.geom.Point, jsts.geom.MultiPoint, jsts.geom.LineString, jsts.geom.LinearRing, jsts.geom.MultiLineString, jsts.geom.Polygon, jsts.geom.MultiPolygon, jsts.geom.GeometryCollection], b = 0; b < a.length; b++)if (this instanceof a[b])return b;
  jsts.util.Assert.shouldNeverReachHere("Class not supported: " + this);
  return -1
};
jsts.geom.Geometry.prototype.toString = function () {
  return (new jsts.io.WKTWriter).write(this)
};
jsts.geom.Geometry.prototype.createPointFromInternalCoord = function (a, b) {
  b.getPrecisionModel().makePrecise(a);
  return b.getFactory().createPoint(a)
};
(function () {
  jsts.geom.Coordinate = function (a, b) {
    "number" === typeof a ? (this.x = a, this.y = b) : a instanceof jsts.geom.Coordinate ? (this.x = parseFloat(a.x), this.y = parseFloat(a.y)) : void 0 === a || null === a ? this.y = this.x = 0 : "string" === typeof a && (this.x = parseFloat(a), this.y = parseFloat(b))
  };
  jsts.geom.Coordinate.prototype.setCoordinate = function (a) {
    this.x = a.x;
    this.y = a.y
  };
  jsts.geom.Coordinate.prototype.clone = function () {
    return new jsts.geom.Coordinate(this.x, this.y)
  };
  jsts.geom.Coordinate.prototype.distance = function (a) {
    var b =
      this.x - a.x;
    a = this.y - a.y;
    return Math.sqrt(b * b + a * a)
  };
  jsts.geom.Coordinate.prototype.equals2D = function (a) {
    return this.x !== a.x || this.y !== a.y ? !1 : !0
  };
  jsts.geom.Coordinate.prototype.equals = function (a) {
    return !a instanceof jsts.geom.Coordinate || void 0 === a ? !1 : this.equals2D(a)
  };
  jsts.geom.Coordinate.prototype.compareTo = function (a) {
    return this.x < a.x ? -1 : this.x > a.x ? 1 : this.y < a.y ? -1 : this.y > a.y ? 1 : 0
  };
  jsts.geom.Coordinate.prototype.toString = function () {
    return "(" + this.x + ", " + this.y + ")"
  }
})();
jsts.geom.Envelope = function () {
  jsts.geom.Envelope.prototype.init.apply(this, arguments)
};
jsts.geom.Envelope.prototype.minx = null;
jsts.geom.Envelope.prototype.maxx = null;
jsts.geom.Envelope.prototype.miny = null;
jsts.geom.Envelope.prototype.maxy = null;
jsts.geom.Envelope.prototype.init = function () {
  "number" === typeof arguments[0] && 4 === arguments.length ? this.initFromValues(arguments[0], arguments[1], arguments[2], arguments[3]) : arguments[0] instanceof jsts.geom.Coordinate && 1 === arguments.length ? this.initFromCoordinate(arguments[0]) : arguments[0] instanceof jsts.geom.Coordinate && 2 === arguments.length ? this.initFromCoordinates(arguments[0], arguments[1]) : arguments[0] instanceof jsts.geom.Envelope && 1 === arguments.length ? this.initFromEnvelope(arguments[0]) : this.setToNull()
};
jsts.geom.Envelope.prototype.initFromValues = function (a, b, c, d) {
  a < b ? (this.minx = a, this.maxx = b) : (this.minx = b, this.maxx = a);
  c < d ? (this.miny = c, this.maxy = d) : (this.miny = d, this.maxy = c)
};
jsts.geom.Envelope.prototype.initFromCoordinates = function (a, b) {
  this.initFromValues(a.x, b.x, a.y, b.y)
};
jsts.geom.Envelope.prototype.initFromCoordinate = function (a) {
  this.initFromValues(a.x, a.x, a.y, a.y)
};
jsts.geom.Envelope.prototype.initFromEnvelope = function (a) {
  this.minx = a.minx;
  this.maxx = a.maxx;
  this.miny = a.miny;
  this.maxy = a.maxy
};
jsts.geom.Envelope.prototype.setToNull = function () {
  this.minx = 0;
  this.maxx = -1;
  this.miny = 0;
  this.maxy = -1
};
jsts.geom.Envelope.prototype.isNull = function () {
  return this.maxx < this.minx
};
jsts.geom.Envelope.prototype.getHeight = function () {
  return this.isNull() ? 0 : this.maxy - this.miny
};
jsts.geom.Envelope.prototype.getWidth = function () {
  return this.isNull() ? 0 : this.maxx - this.minx
};
jsts.geom.Envelope.prototype.getMinX = function () {
  return this.minx
};
jsts.geom.Envelope.prototype.getMaxX = function () {
  return this.maxx
};
jsts.geom.Envelope.prototype.getMinY = function () {
  return this.miny
};
jsts.geom.Envelope.prototype.getMaxY = function () {
  return this.maxy
};
jsts.geom.Envelope.prototype.getArea = function () {
  return this.getWidth() * this.getHeight()
};
jsts.geom.Envelope.prototype.expandToInclude = function (a, b) {
  a instanceof jsts.geom.Coordinate ? this.expandToIncludeCoordinate(a) : a instanceof jsts.geom.Envelope ? this.expandToIncludeEnvelope(a) : this.expandToIncludeValues(a, b)
};
jsts.geom.Envelope.prototype.expandToIncludeCoordinate = function (a) {
  this.expandToIncludeValues(a.x, a.y)
};
jsts.geom.Envelope.prototype.expandToIncludeValues = function (a, b) {
  this.isNull() ? (this.maxx = this.minx = a, this.maxy = this.miny = b) : (a < this.minx && (this.minx = a), a > this.maxx && (this.maxx = a), b < this.miny && (this.miny = b), b > this.maxy && (this.maxy = b))
};
jsts.geom.Envelope.prototype.expandToIncludeEnvelope = function (a) {
  a.isNull() || (this.isNull() ? (this.minx = a.getMinX(), this.maxx = a.getMaxX(), this.miny = a.getMinY(), this.maxy = a.getMaxY()) : (a.minx < this.minx && (this.minx = a.minx), a.maxx > this.maxx && (this.maxx = a.maxx), a.miny < this.miny && (this.miny = a.miny), a.maxy > this.maxy && (this.maxy = a.maxy)))
};
jsts.geom.Envelope.prototype.expandBy = function () {
  1 === arguments.length ? this.expandByDistance(arguments[0]) : this.expandByDistances(arguments[0], arguments[1])
};
jsts.geom.Envelope.prototype.expandByDistance = function (a) {
  this.expandByDistances(a, a)
};
jsts.geom.Envelope.prototype.expandByDistances = function (a, b) {
  this.isNull() || (this.minx -= a, this.maxx += a, this.miny -= b, this.maxy += b, (this.minx > this.maxx || this.miny > this.maxy) && this.setToNull())
};
jsts.geom.Envelope.prototype.translate = function (a, b) {
  this.isNull() || this.init(this.minx + a, this.maxx + a, this.miny + b, this.maxy + b)
};
jsts.geom.Envelope.prototype.centre = function () {
  return this.isNull() ? null : new jsts.geom.Coordinate((this.minx + this.maxx) / 2, (this.miny + this.maxy) / 2)
};
jsts.geom.Envelope.prototype.intersection = function (a) {
  return this.isNull() || a.isNull() || !this.intersects(a) ? new jsts.geom.Envelope : new jsts.geom.Envelope(this.minx > a.minx ? this.minx : a.minx, this.maxx < a.maxx ? this.maxx : a.maxx, this.miny > a.miny ? this.miny : a.miny, this.maxy < a.maxy ? this.maxy : a.maxy)
};
jsts.geom.Envelope.prototype.intersects = function (a, b) {
  return a instanceof jsts.geom.Envelope ? this.intersectsEnvelope(a) : a instanceof jsts.geom.Coordinate ? this.intersectsCoordinate(a) : this.intersectsValues(a, b)
};
jsts.geom.Envelope.prototype.intersectsEnvelope = function (a) {
  return this.isNull() || a.isNull() ? !1 : !(a.minx > this.maxx || a.maxx < this.minx || a.miny > this.maxy || a.maxy < this.miny)
};
jsts.geom.Envelope.prototype.intersectsCoordinate = function (a) {
  return this.intersectsValues(a.x, a.y)
};
jsts.geom.Envelope.prototype.intersectsValues = function (a, b) {
  return this.isNull() ? !1 : !(a > this.maxx || a < this.minx || b > this.maxy || b < this.miny)
};
jsts.geom.Envelope.prototype.contains = function (a, b) {
  return a instanceof jsts.geom.Envelope ? this.containsEnvelope(a) : a instanceof jsts.geom.Coordinate ? this.containsCoordinate(a) : this.containsValues(a, b)
};
jsts.geom.Envelope.prototype.containsEnvelope = function (a) {
  return this.coversEnvelope(a)
};
jsts.geom.Envelope.prototype.containsCoordinate = function (a) {
  return this.coversCoordinate(a)
};
jsts.geom.Envelope.prototype.containsValues = function (a, b) {
  return this.coversValues(a, b)
};
jsts.geom.Envelope.prototype.covers = function (a, b) {
  p instanceof jsts.geom.Envelope ? this.coversEnvelope(a) : p instanceof jsts.geom.Coordinate ? this.coversCoordinate(a) : this.coversValues(a, b)
};
jsts.geom.Envelope.prototype.coversValues = function (a, b) {
  return this.isNull() ? !1 : a >= this.minx && a <= this.maxx && b >= this.miny && b <= this.maxy
};
jsts.geom.Envelope.prototype.coversCoordinate = function (a) {
  return this.coversValues(a.x, a.y)
};
jsts.geom.Envelope.prototype.coversEnvelope = function (a) {
  return this.isNull() || a.isNull() ? !1 : a.minx >= this.minx && a.maxx <= this.maxx && a.miny >= this.miny && a.maxy <= this.maxy
};
jsts.geom.Envelope.prototype.distance = function (a) {
  if (this.intersects(a))return 0;
  var b = 0;
  this.maxx < a.minx && (b = a.minx - this.maxx);
  this.minx > a.maxx && (b = this.minx - a.maxx);
  var c = 0;
  this.maxy < a.miny && (c = a.miny - this.maxy);
  this.miny > a.maxy && (c = this.miny - a.maxy);
  return 0 === b ? c : 0 === c ? b : Math.sqrt(b * b + c * c)
};
jsts.geom.Envelope.prototype.equals = function (a) {
  return this.isNull() ? a.isNull() : this.maxx === a.maxx && this.maxy === a.maxy && this.minx === a.minx && this.miny === a.miny
};
jsts.geom.Envelope.prototype.toString = function () {
  return "Env[" + this.minx + " : " + this.maxx + ", " + this.miny + " : " + this.maxy + "]"
};
jsts.geom.Envelope.intersects = function (a, b, c) {
  if (4 === arguments.length)return jsts.geom.Envelope.intersectsEnvelope(arguments[0], arguments[1], arguments[2], arguments[3]);
  var d = a.x > b.x ? a.x : b.x, e = a.y < b.y ? a.y : b.y, f = a.y > b.y ? a.y : b.y;
  return c.x >= (a.x < b.x ? a.x : b.x) && c.x <= d && c.y >= e && c.y <= f ? !0 : !1
};
jsts.geom.Envelope.intersectsEnvelope = function (a, b, c, d) {
  var e = Math.min(c.x, d.x), f = Math.max(c.x, d.x), g = Math.min(a.x, b.x), h = Math.max(a.x, b.x);
  if (g > f || h < e)return !1;
  e = Math.min(c.y, d.y);
  f = Math.max(c.y, d.y);
  g = Math.min(a.y, b.y);
  h = Math.max(a.y, b.y);
  return g > f || h < e ? !1 : !0
};
jsts.geom.Envelope.prototype.clone = function () {
  return new jsts.geom.Envelope(this.minx, this.maxx, this.miny, this.maxy)
};
jsts.geom.util.GeometryCombiner = function (a) {
  this.geomFactory = jsts.geom.util.GeometryCombiner.extractFactory(a);
  this.inputGeoms = a
};
jsts.geom.util.GeometryCombiner.combine = function (a) {
  return 1 < arguments.length ? this.combine2.apply(this, arguments) : (new jsts.geom.util.GeometryCombiner(a)).combine()
};
jsts.geom.util.GeometryCombiner.combine2 = function () {
  var a = new javascript.util.ArrayList;
  arguments.foreach(function (b) {
    a.add(b)
  });
  return jsts.geom.util.GeometryCombiner(a).combine()
};
jsts.geom.util.GeometryCombiner.prototype.geomFactory = null;
jsts.geom.util.GeometryCombiner.prototype.skipEmpty = !1;
jsts.geom.util.GeometryCombiner.prototype.inputGeoms;
jsts.geom.util.GeometryCombiner.extractFactory = function (a) {
  return a.isEmpty() ? null : a.iterator().next().getFactory()
};
jsts.geom.util.GeometryCombiner.prototype.combine = function () {
  var a = new javascript.util.ArrayList, b;
  for (b = this.inputGeoms.iterator(); b.hasNext();) {
    var c = b.next();
    this.extractElements(c, a)
  }
  return 0 === a.size() ? null !== this.geomFactory ? geomFactory.createGeometryCollection(null) : null : this.geomFactory.buildGeometry(a)
};
jsts.geom.util.GeometryCombiner.prototype.extractElements = function (a, b) {
  if (null !== a)for (var c = 0; c < a.getNumGeometries(); c++) {
    var d = a.getGeometryN(c);
    this.skipEmpty && d.isEmpty() || b.add(d)
  }
};
jsts.geom.PrecisionModel = function (a) {
  "number" === typeof a ? (this.modelType = jsts.geom.PrecisionModel.FIXED, this.scale = a) : (this.modelType = a || jsts.geom.PrecisionModel.FLOATING, this.modelType === jsts.geom.PrecisionModel.FIXED && (this.scale = 1))
};
jsts.geom.PrecisionModel.FLOATING = "FLOATING";
jsts.geom.PrecisionModel.FIXED = "FIXED";
jsts.geom.PrecisionModel.FLOATING_SINGLE = "FLOATING_SINGLE";
jsts.geom.PrecisionModel.prototype.scale = null;
jsts.geom.PrecisionModel.prototype.modelType = null;
jsts.geom.PrecisionModel.prototype.isFloating = function () {
  return this.modelType === jsts.geom.PrecisionModel.FLOATING || this.modelType === jsts.geom.PrecisionModel.FLOATING_SINLGE
};
jsts.geom.PrecisionModel.prototype.getScale = function () {
  return this.scale
};
jsts.geom.PrecisionModel.prototype.getType = function () {
  return this.modelType
};
jsts.geom.PrecisionModel.prototype.equals = function (a) {
  return !0
};
jsts.geom.PrecisionModel.prototype.makePrecise = function (a) {
  if (a instanceof jsts.geom.Coordinate) this.makePrecise2(a); else return isNaN(a) ? a : this.modelType === jsts.geom.PrecisionModel.FIXED ? Math.round(a * this.scale) / this.scale : a
};
jsts.geom.PrecisionModel.prototype.makePrecise2 = function (a) {
  this.modelType !== jsts.geom.PrecisionModel.FLOATING && (a.x = this.makePrecise(a.x), a.y = this.makePrecise(a.y))
};
jsts.geom.PrecisionModel.prototype.compareTo = function (a) {
  return 0
};
jsts.geom.CoordinateFilter = function () {
};
jsts.geom.CoordinateFilter.prototype.filter = function (a) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.Point = function (a, b) {
  this.factory = b;
  void 0 !== a && (this.coordinate = a)
};
jsts.geom.Point.prototype = new jsts.geom.Geometry;
jsts.geom.Point.constructor = jsts.geom.Point;
jsts.geom.Point.CLASS_NAME = "jsts.geom.Point";
jsts.geom.Point.prototype.coordinate = null;
jsts.geom.Point.prototype.getX = function () {
  return this.coordinate.x
};
jsts.geom.Point.prototype.getY = function () {
  return this.coordinate.y
};
jsts.geom.Point.prototype.getCoordinate = function () {
  return this.coordinate
};
jsts.geom.Point.prototype.getCoordinates = function () {
  return this.isEmpty() ? [] : [this.coordinate]
};
jsts.geom.Point.prototype.isEmpty = function () {
  return null === this.coordinate
};
jsts.geom.Point.prototype.equalsExact = function (a, b) {
  return this.isEquivalentClass(a) ? this.isEmpty() && a.isEmpty() ? !0 : this.equal(a.getCoordinate(), this.getCoordinate(), b) : !1
};
jsts.geom.Point.prototype.getNumPoints = function () {
  return this.isEmpty() ? 0 : 1
};
jsts.geom.Point.prototype.isSimple = function () {
  return !0
};
jsts.geom.Point.prototype.getBoundary = function () {
  return new jsts.geom.GeometryCollection(null)
};
jsts.geom.Point.prototype.computeEnvelopeInternal = function () {
  return this.isEmpty() ? new jsts.geom.Envelope : new jsts.geom.Envelope(this.coordinate)
};
jsts.geom.Point.prototype.apply = function (a) {
  a instanceof jsts.geom.GeometryFilter || a instanceof jsts.geom.GeometryComponentFilter ? a.filter(this) : a instanceof jsts.geom.CoordinateFilter && !this.isEmpty() && a.filter(this.getCoordinate())
};
jsts.geom.Point.prototype.clone = function () {
  return new jsts.geom.Point(this.coordinate.clone(), this.factory)
};
jsts.geom.Point.prototype.getDimension = function () {
  return 0
};
jsts.geom.Point.prototype.getBoundaryDimension = function () {
  return jsts.geom.Dimension.FALSE
};
jsts.geom.Point.prototype.reverse = function () {
  return this.clone()
};
jsts.geom.Point.prototype.isValid = function () {
  return jsts.operation.valid.IsValidOp.isValid(this.getCoordinate()) ? !0 : !1
};
jsts.geom.Point.prototype.normalize = function () {
};
jsts.geom.Point.prototype.compareToSameClass = function (a) {
  return this.getCoordinate().compareTo(a.getCoordinate())
};
jsts.geom.Point.prototype.getGeometryType = function () {
  return "Point"
};
jsts.geom.Point.prototype.hashCode = function () {
  return "Point_" + this.coordinate.hashCode()
};
jsts.geom.Point.prototype.CLASS_NAME = "jsts.geom.Point";
jsts.geomgraph.EdgeIntersection = function (a, b, c) {
  this.coord = new jsts.geom.Coordinate(a);
  this.segmentIndex = b;
  this.dist = c
};
jsts.geomgraph.EdgeIntersection.prototype.coord = null;
jsts.geomgraph.EdgeIntersection.prototype.segmentIndex = null;
jsts.geomgraph.EdgeIntersection.prototype.dist = null;
jsts.geomgraph.EdgeIntersection.prototype.getCoordinate = function () {
  return this.coord
};
jsts.geomgraph.EdgeIntersection.prototype.getSegmentIndex = function () {
  return this.segmentIndex
};
jsts.geomgraph.EdgeIntersection.prototype.getDistance = function () {
  return this.dist
};
jsts.geomgraph.EdgeIntersection.prototype.compareTo = function (a) {
  return this.compare(a.segmentIndex, a.dist)
};
jsts.geomgraph.EdgeIntersection.prototype.compare = function (a, b) {
  return this.segmentIndex < a ? -1 : this.segmentIndex > a ? 1 : this.dist < b ? -1 : this.dist > b ? 1 : 0
};
jsts.geomgraph.EdgeIntersection.prototype.isEndPoint = function (a) {
  return 0 === this.segmentIndex && 0 === this.dist || this.segmentIndex === a ? !0 : !1
};
jsts.geomgraph.EdgeIntersection.prototype.toString = function () {
  return "" + this.segmentIndex + this.dist
};
(function () {
  var a = jsts.geomgraph.EdgeIntersection, b = javascript.util.TreeMap;
  jsts.geomgraph.EdgeIntersectionList = function (a) {
    this.nodeMap = new b;
    this.edge = a
  };
  jsts.geomgraph.EdgeIntersectionList.prototype.nodeMap = null;
  jsts.geomgraph.EdgeIntersectionList.prototype.edge = null;
  jsts.geomgraph.EdgeIntersectionList.prototype.isIntersection = function (a) {
    for (var b = this.iterator(); b.hasNext();)if (b.next().coord.equals(a))return !0;
    return !1
  };
  jsts.geomgraph.EdgeIntersectionList.prototype.add = function (b, d, e) {
    b = new a(b,
      d, e);
    d = this.nodeMap.get(b);
    if (null !== d)return d;
    this.nodeMap.put(b, b);
    return b
  };
  jsts.geomgraph.EdgeIntersectionList.prototype.iterator = function () {
    return this.nodeMap.values().iterator()
  };
  jsts.geomgraph.EdgeIntersectionList.prototype.addEndpoints = function () {
    var a = this.edge.pts.length - 1;
    this.add(this.edge.pts[0], 0, 0);
    this.add(this.edge.pts[a], a, 0)
  };
  jsts.geomgraph.EdgeIntersectionList.prototype.addSplitEdges = function (a) {
    this.addEndpoints();
    for (var b = this.iterator(), e = b.next(); b.hasNext();) {
      var f = b.next(),
        e = this.createSplitEdge(e, f);
      a.add(e);
      e = f
    }
  };
  jsts.geomgraph.EdgeIntersectionList.prototype.createSplitEdge = function (a, b) {
    var e = this.edge.pts[b.segmentIndex], e = 0 < b.dist || !b.coord.equals2D(e), f = [], g = 0;
    f[g++] = new jsts.geom.Coordinate(a.coord);
    for (var h = a.segmentIndex + 1; h <= b.segmentIndex; h++)f[g++] = this.edge.pts[h];
    e && (f[g] = b.coord);
    return new jsts.geomgraph.Edge(f, new jsts.geomgraph.Label(this.edge.label))
  }
})();
jsts.geom.Location = function () {
};
jsts.geom.Location.INTERIOR = 0;
jsts.geom.Location.BOUNDARY = 1;
jsts.geom.Location.EXTERIOR = 2;
jsts.geom.Location.NONE = -1;
jsts.geom.Location.toLocationSymbol = function (a) {
  switch (a) {
    case jsts.geom.Location.EXTERIOR:
      return "e";
    case jsts.geom.Location.BOUNDARY:
      return "b";
    case jsts.geom.Location.INTERIOR:
      return "i";
    case jsts.geom.Location.NONE:
      return "-"
  }
  throw new jsts.IllegalArgumentError("Unknown location value: " + a);
};
(function () {
  var a = function (a) {
    this.message = a
  };
  a.prototype = Error();
  a.prototype.name = "AssertionFailedException";
  jsts.util.AssertionFailedException = a
})();
(function () {
  var a = jsts.util.AssertionFailedException;
  jsts.util.Assert = function () {
  };
  jsts.util.Assert.isTrue = function (b, c) {
    if (!b) {
      if (null === c)throw new a;
      throw new a(c);
    }
  };
  jsts.util.Assert.equals = function (b, c, d) {
    if (!c.equals(b))throw new a("Expected " + b + " but encountered " + c + (null != d ? ": " + d : ""));
  };
  jsts.util.Assert.shouldNeverReachHere = function (b) {
    throw new a("Should never reach here" + (null != b ? ": " + b : ""));
  }
})();
(function () {
  var a = jsts.geom.Location, b = jsts.util.Assert, c = javascript.util.ArrayList;
  jsts.operation.relate.RelateComputer = function (a) {
    this.li = new jsts.algorithm.RobustLineIntersector;
    this.ptLocator = new jsts.algorithm.PointLocator;
    this.nodes = new jsts.geomgraph.NodeMap(new jsts.operation.relate.RelateNodeFactory);
    this.isolatedEdges = new c;
    this.arg = a
  };
  jsts.operation.relate.RelateComputer.prototype.li = null;
  jsts.operation.relate.RelateComputer.prototype.ptLocator = null;
  jsts.operation.relate.RelateComputer.prototype.arg =
    null;
  jsts.operation.relate.RelateComputer.prototype.nodes = null;
  jsts.operation.relate.RelateComputer.prototype.im = null;
  jsts.operation.relate.RelateComputer.prototype.isolatedEdges = null;
  jsts.operation.relate.RelateComputer.prototype.invalidPoint = null;
  jsts.operation.relate.RelateComputer.prototype.computeIM = function () {
    var b = new jsts.geom.IntersectionMatrix;
    b.set(a.EXTERIOR, a.EXTERIOR, 2);
    if (!this.arg[0].getGeometry().getEnvelopeInternal().intersects(this.arg[1].getGeometry().getEnvelopeInternal()))return this.computeDisjointIM(b),
      b;
    this.arg[0].computeSelfNodes(this.li, !1);
    this.arg[1].computeSelfNodes(this.li, !1);
    var c = this.arg[0].computeEdgeIntersections(this.arg[1], this.li, !1);
    this.computeIntersectionNodes(0);
    this.computeIntersectionNodes(1);
    this.copyNodesAndLabels(0);
    this.copyNodesAndLabels(1);
    this.labelIsolatedNodes();
    this.computeProperIntersectionIM(c, b);
    var c = new jsts.operation.relate.EdgeEndBuilder, f = c.computeEdgeEnds(this.arg[0].getEdgeIterator());
    this.insertEdgeEnds(f);
    c = c.computeEdgeEnds(this.arg[1].getEdgeIterator());
    this.insertEdgeEnds(c);
    this.labelNodeEdges();
    this.labelIsolatedEdges(0, 1);
    this.labelIsolatedEdges(1, 0);
    this.updateIM(b);
    return b
  };
  jsts.operation.relate.RelateComputer.prototype.insertEdgeEnds = function (a) {
    for (a = a.iterator(); a.hasNext();) {
      var b = a.next();
      this.nodes.add(b)
    }
  };
  jsts.operation.relate.RelateComputer.prototype.computeProperIntersectionIM = function (a, b) {
    var c = this.arg[0].getGeometry().getDimension(), g = this.arg[1].getGeometry().getDimension(),
      h = a.hasProperIntersection(), l = a.hasProperInteriorIntersection();
    2 === c && 2 === g ? h && b.setAtLeast("212101212") : 2 === c && 1 === g ? (h && b.setAtLeast("FFF0FFFF2"), l && b.setAtLeast("1FFFFF1FF")) : 1 === c && 2 === g ? (h && b.setAtLeast("F0FFFFFF2"), l && b.setAtLeast("1F1FFFFFF")) : 1 === c && 1 === g && l && b.setAtLeast("0FFFFFFFF")
  };
  jsts.operation.relate.RelateComputer.prototype.copyNodesAndLabels = function (a) {
    for (var b = this.arg[a].getNodeIterator(); b.hasNext();) {
      var c = b.next();
      this.nodes.addNode(c.getCoordinate()).setLabel(a, c.getLabel().getLocation(a))
    }
  };
  jsts.operation.relate.RelateComputer.prototype.computeIntersectionNodes =
    function (b) {
      for (var c = this.arg[b].getEdgeIterator(); c.hasNext();)for (var f = c.next(), g = f.getLabel().getLocation(b), f = f.getEdgeIntersectionList().iterator(); f.hasNext();) {
        var h = f.next(), h = this.nodes.addNode(h.coord);
        g === a.BOUNDARY ? h.setLabelBoundary(b) : h.getLabel().isNull(b) && h.setLabel(b, a.INTERIOR)
      }
    };
  jsts.operation.relate.RelateComputer.prototype.labelIntersectionNodes = function (b) {
    for (var c = this.arg[b].getEdgeIterator(); c.hasNext();)for (var f = c.next(), g = f.getLabel().getLocation(b), f = f.getEdgeIntersectionList().iterator(); f.hasNext();) {
      var h =
        f.next(), h = this.nodes.find(h.coord);
      h.getLabel().isNull(b) && (g === a.BOUNDARY ? h.setLabelBoundary(b) : h.setLabel(b, a.INTERIOR))
    }
  };
  jsts.operation.relate.RelateComputer.prototype.computeDisjointIM = function (b) {
    var c = this.arg[0].getGeometry();
    c.isEmpty() || (b.set(a.INTERIOR, a.EXTERIOR, c.getDimension()), b.set(a.BOUNDARY, a.EXTERIOR, c.getBoundaryDimension()));
    c = this.arg[1].getGeometry();
    c.isEmpty() || (b.set(a.EXTERIOR, a.INTERIOR, c.getDimension()), b.set(a.EXTERIOR, a.BOUNDARY, c.getBoundaryDimension()))
  };
  jsts.operation.relate.RelateComputer.prototype.labelNodeEdges =
    function () {
      for (var a = this.nodes.iterator(); a.hasNext();)a.next().getEdges().computeLabelling(this.arg)
    };
  jsts.operation.relate.RelateComputer.prototype.updateIM = function (a) {
    for (var b = this.isolatedEdges.iterator(); b.hasNext();)b.next().updateIM(a);
    for (b = this.nodes.iterator(); b.hasNext();) {
      var c = b.next();
      c.updateIM(a);
      c.updateIMFromEdges(a)
    }
  };
  jsts.operation.relate.RelateComputer.prototype.labelIsolatedEdges = function (a, b) {
    for (var c = this.arg[a].getEdgeIterator(); c.hasNext();) {
      var g = c.next();
      g.isIsolated() &&
      (this.labelIsolatedEdge(g, b, this.arg[b].getGeometry()), this.isolatedEdges.add(g))
    }
  };
  jsts.operation.relate.RelateComputer.prototype.labelIsolatedEdge = function (b, c, f) {
    0 < f.getDimension() ? (f = this.ptLocator.locate(b.getCoordinate(), f), b.getLabel().setAllLocations(c, f)) : b.getLabel().setAllLocations(c, a.EXTERIOR)
  };
  jsts.operation.relate.RelateComputer.prototype.labelIsolatedNodes = function () {
    for (var a = this.nodes.iterator(); a.hasNext();) {
      var c = a.next(), f = c.getLabel();
      b.isTrue(0 < f.getGeometryCount(), "node with empty label found");
      c.isIsolated() && (f.isNull(0) ? this.labelIsolatedNode(c, 0) : this.labelIsolatedNode(c, 1))
    }
  };
  jsts.operation.relate.RelateComputer.prototype.labelIsolatedNode = function (a, b) {
    var c = this.ptLocator.locate(a.getCoordinate(), this.arg[b].getGeometry());
    a.getLabel().setAllLocations(b, c)
  }
})();
(function () {
  var a = jsts.util.Assert;
  jsts.geomgraph.GraphComponent = function (a) {
    this.label = a
  };
  jsts.geomgraph.GraphComponent.prototype.label = null;
  jsts.geomgraph.GraphComponent.prototype._isInResult = !1;
  jsts.geomgraph.GraphComponent.prototype._isCovered = !1;
  jsts.geomgraph.GraphComponent.prototype._isCoveredSet = !1;
  jsts.geomgraph.GraphComponent.prototype._isVisited = !1;
  jsts.geomgraph.GraphComponent.prototype.getLabel = function () {
    return this.label
  };
  jsts.geomgraph.GraphComponent.prototype.setLabel = function (a) {
    2 ===
    arguments.length ? this.setLabel2.apply(this, arguments) : this.label = a
  };
  jsts.geomgraph.GraphComponent.prototype.setInResult = function (a) {
    this._isInResult = a
  };
  jsts.geomgraph.GraphComponent.prototype.isInResult = function () {
    return this._isInResult
  };
  jsts.geomgraph.GraphComponent.prototype.setCovered = function (a) {
    this._isCovered = a;
    this._isCoveredSet = !0
  };
  jsts.geomgraph.GraphComponent.prototype.isCovered = function () {
    return this._isCovered
  };
  jsts.geomgraph.GraphComponent.prototype.isCoveredSet = function () {
    return this._isCoveredSet
  };
  jsts.geomgraph.GraphComponent.prototype.isVisited = function () {
    return this._isVisited
  };
  jsts.geomgraph.GraphComponent.prototype.setVisited = function (a) {
    this._isVisited = a
  };
  jsts.geomgraph.GraphComponent.prototype.getCoordinate = function () {
    throw new jsts.error.AbstractMethodInvocationError;
  };
  jsts.geomgraph.GraphComponent.prototype.computeIM = function (a) {
    throw new jsts.error.AbstractMethodInvocationError;
  };
  jsts.geomgraph.GraphComponent.prototype.isIsolated = function () {
    throw new jsts.error.AbstractMethodInvocationError;
  };
  jsts.geomgraph.GraphComponent.prototype.updateIM = function (b) {
    a.isTrue(2 <= this.label.getGeometryCount(), "found partial label");
    this.computeIM(b)
  }
})();
jsts.geomgraph.Node = function (a, b) {
  this.coord = a;
  this.edges = b;
  this.label = new jsts.geomgraph.Label(0, jsts.geom.Location.NONE)
};
jsts.geomgraph.Node.prototype = new jsts.geomgraph.GraphComponent;
jsts.geomgraph.Node.prototype.coord = null;
jsts.geomgraph.Node.prototype.edges = null;
jsts.geomgraph.Node.prototype.isIsolated = function () {
  return 1 == this.label.getGeometryCount()
};
jsts.geomgraph.Node.prototype.setLabel2 = function (a, b) {
  null === this.label ? this.label = new jsts.geomgraph.Label(a, b) : this.label.setLocation(a, b)
};
jsts.geomgraph.Node.prototype.setLabelBoundary = function (a) {
  var b = jsts.geom.Location.NONE;
  null !== this.label && (b = this.label.getLocation(a));
  switch (b) {
    case jsts.geom.Location.BOUNDARY:
      b = jsts.geom.Location.INTERIOR;
      break;
    case jsts.geom.Location.INTERIOR:
      b = jsts.geom.Location.BOUNDARY;
      break;
    default:
      b = jsts.geom.Location.BOUNDARY
  }
  this.label.setLocation(a, b)
};
jsts.geomgraph.Node.prototype.add = function (a) {
  this.edges.insert(a);
  a.setNode(this)
};
jsts.geomgraph.Node.prototype.getCoordinate = function () {
  return this.coord
};
jsts.geomgraph.Node.prototype.getEdges = function () {
  return this.edges
};
jsts.geomgraph.Node.prototype.isIncidentEdgeInResult = function () {
  for (var a = this.getEdges().getEdges().iterator(); a.hasNext();)if (a.next().getEdge().isInResult())return !0;
  return !1
};
(function () {
  var a = function (a) {
    this.deList = new javascript.util.ArrayList;
    this.factory = a
  };
  a.findEdgeRingContaining = function (a, c) {
    for (var d = a.getRing(), e = d.getEnvelopeInternal(), f = d.getCoordinateN(0), g = null, h = null, l = c.iterator(); l.hasNext();) {
      var k = l.next(), m = k.getRing(), r = m.getEnvelopeInternal();
      null != g && (h = g.getRing().getEnvelopeInternal());
      var n = !1;
      r.equals(e) || (f = jsts.geom.CoordinateArrays.ptNotInList(d.getCoordinates(), m.getCoordinates()), r.contains(e) && jsts.algorithm.CGAlgorithms.isPointInRing(f,
        m.getCoordinates()) && (n = !0), n && (null == g || h.contains(r)) && (g = k))
    }
    return g
  };
  a.ptNotInList = function (a, c) {
    for (var d = 0; d < a.length; d++) {
      var e = a[d];
      if (!isInList(e, c))return e
    }
    return null
  };
  a.isInList = function (a, c) {
    for (var d = 0; d < c.length; d++)if (a.equals(c[d]))return !0;
    return !1
  };
  a.prototype.factory = null;
  a.prototype.deList = null;
  a.prototype.ring = null;
  a.prototype.ringPts = null;
  a.prototype.holes = null;
  a.prototype.add = function (a) {
    this.deList.add(a)
  };
  a.prototype.isHole = function () {
    var a = this.getRing();
    return jsts.algorithm.CGAlgorithms.isCCW(a.getCoordinates())
  };
  a.prototype.addHole = function (a) {
    null == this.holes && (this.holes = new javascript.util.ArrayList);
    this.holes.add(a)
  };
  a.prototype.getPolygon = function () {
    var a = null;
    if (null != this.holes)for (var a = [], c = 0; c < this.holes.size(); c++)a[c] = this.holes.get(c);
    return this.factory.createPolygon(this.ring, a)
  };
  a.prototype.isValid = function () {
    this.getCoordinates();
    if (3 >= this.ringPts.length)return !1;
    this.getRing();
    return this.ring.isValid()
  };
  a.prototype.getCoordinates = function () {
    if (null == this.ringPts) {
      for (var b = new jsts.geom.CoordinateList,
             c = this.deList.iterator(); c.hasNext();) {
        var d = c.next(), e = d.getEdge();
        a.addEdge(e.getLine().getCoordinates(), d.getEdgeDirection(), b)
      }
      this.ringPts = b.toCoordinateArray()
    }
    return this.ringPts
  };
  a.prototype.getLineString = function () {
    this.getCoordinates();
    return this.factory.createLineString(this.ringPts)
  };
  a.prototype.getRing = function () {
    if (null != this.ring)return this.ring;
    this.getCoordinates();
    3 > this.ringPts.length && console.log(this.ringPts);
    try {
      this.ring = this.factory.createLinearRing(this.ringPts)
    } catch (a) {
      console.log(this.ringPts)
    }
    return this.ring
  };
  a.addEdge = function (a, c, d) {
    if (c)for (c = 0; c < a.length; c++)d.add(a[c], !1); else for (c = a.length - 1; 0 <= c; c--)d.add(a[c], !1)
  };
  jsts.operation.polygonize.EdgeRing = a
})();
(function () {
  var a = function (a, c) {
    void 0 !== a && this.setDirectedEdges(a, c)
  };
  a.prototype = new jsts.planargraph.GraphComponent;
  a.prototype.dirEdge = null;
  a.prototype.setDirectedEdges = function (a, c) {
    this.dirEdge = [a, c];
    a.setEdge(this);
    c.setEdge(this);
    a.setSym(c);
    c.setSym(a);
    a.getFromNode().addOutEdge(a);
    c.getFromNode().addOutEdge(c)
  };
  a.prototype.getDirEdge = function (a) {
    a instanceof jsts.planargraph.Node && this.getDirEdge2(a);
    return this.dirEdge[a]
  };
  a.prototype.getDirEdge2 = function (a) {
    return this.dirEdge[0].getFromNode() ==
    a ? this.dirEdge[0] : this.dirEdge[1].getFromNode() == a ? this.dirEdge[1] : null
  };
  a.prototype.getOppositeNode = function (a) {
    return this.dirEdge[0].getFromNode() == a ? this.dirEdge[0].getToNode() : this.dirEdge[1].getFromNode() == a ? this.dirEdge[1].getToNode() : null
  };
  a.prototype.remove = function () {
    this.dirEdge = null
  };
  a.prototype.isRemoved = function () {
    return null == dirEdge
  };
  jsts.planargraph.Edge = a
})();
jsts.operation.polygonize.PolygonizeEdge = function (a) {
  this.line = a
};
jsts.operation.polygonize.PolygonizeEdge.prototype = new jsts.planargraph.Edge;
jsts.operation.polygonize.PolygonizeEdge.prototype.line = null;
jsts.operation.polygonize.PolygonizeEdge.prototype.getLine = function () {
  return this.line
};
(function () {
  var a = javascript.util.ArrayList, b = function (a, b, e, f) {
    void 0 !== a && (this.from = a, this.to = b, this.edgeDirection = f, this.p0 = a.getCoordinate(), this.p1 = e, a = this.p1.x - this.p0.x, b = this.p1.y - this.p0.y, this.quadrant = jsts.geomgraph.Quadrant.quadrant(a, b), this.angle = Math.atan2(b, a))
  };
  b.prototype = new jsts.planargraph.GraphComponent;
  b.toEdges = function (b) {
    var d = new a;
    for (b = b.iterator(); b.hasNext();)d.add(b.next().parentEdge);
    return d
  };
  b.prototype.parentEdge = null;
  b.prototype.from = null;
  b.prototype.to = null;
  b.prototype.p0 = null;
  b.prototype.p1 = null;
  b.prototype.sym = null;
  b.prototype.edgeDirection = null;
  b.prototype.quadrant = null;
  b.prototype.angle = null;
  b.prototype.getEdge = function () {
    return this.parentEdge
  };
  b.prototype.setEdge = function (a) {
    this.parentEdge = a
  };
  b.prototype.getQuadrant = function () {
    return this.quadrant
  };
  b.prototype.getDirectionPt = function () {
    return this.p1
  };
  b.prototype.getEdgeDirection = function () {
    return this.edgeDirection
  };
  b.prototype.getFromNode = function () {
    return this.from
  };
  b.prototype.getToNode = function () {
    return this.to
  };
  b.prototype.getCoordinate = function () {
    return this.from.getCoordinate()
  };
  b.prototype.getAngle = function () {
    return this.angle
  };
  b.prototype.getSym = function () {
    return this.sym
  };
  b.prototype.setSym = function (a) {
    this.sym = a
  };
  b.prototype.remove = function () {
    this.parentEdge = this.sym = null
  };
  b.prototype.isRemoved = function () {
    return null == this.parentEdge
  };
  b.prototype.compareTo = function (a) {
    return this.compareDirection(a)
  };
  b.prototype.compareDirection = function (a) {
    return this.quadrant > a.quadrant ? 1 : this.quadrant < a.quadrant ?
      -1 : jsts.algorithm.CGAlgorithms.computeOrientation(a.p0, a.p1, this.p1)
  };
  jsts.planargraph.DirectedEdge = b
})();
(function () {
  var a = jsts.planargraph.DirectedEdge, b = function (b, d, e, f) {
    a.apply(this, arguments)
  };
  b.prototype = new a;
  b.prototype.edgeRing = null;
  b.prototype.next = null;
  b.prototype.label = -1;
  b.prototype.getLabel = function () {
    return this.label
  };
  b.prototype.setLabel = function (a) {
    this.label = a
  };
  b.prototype.getNext = function () {
    return this.next
  };
  b.prototype.setNext = function (a) {
    this.next = a
  };
  b.prototype.isInRing = function () {
    return null != this.edgeRing
  };
  b.prototype.setRing = function (a) {
    this.edgeRing = a
  };
  jsts.operation.polygonize.PolygonizeDirectedEdge =
    b
})();
(function () {
  var a = function () {
    this.nodeMap = new javascript.util.TreeMap
  };
  a.prototype.nodeMap = null;
  a.prototype.add = function (a) {
    this.nodeMap.put(a.getCoordinate(), a);
    return a
  };
  a.prototype.remove = function (a) {
    return this.nodeMap.remove(a)
  };
  a.prototype.find = function (a) {
    return this.nodeMap.get(a)
  };
  a.prototype.iterator = function () {
    return this.nodeMap.values().iterator()
  };
  a.prototype.values = function () {
    return this.nodeMap.values()
  };
  jsts.planargraph.NodeMap = a
})();
(function () {
  var a = javascript.util.ArrayList, b = function () {
    this.edges = new javascript.util.HashSet;
    this.dirEdges = new javascript.util.HashSet;
    this.nodeMap = new jsts.planargraph.NodeMap
  };
  b.prototype.edges = null;
  b.prototype.dirEdges = null;
  b.prototype.nodeMap = null;
  b.prototype.findNode = function (a) {
    return this.nodeMap.find(a)
  };
  b.prototype.add = function (a) {
    if (a instanceof jsts.planargraph.Edge)return this.add2(a);
    if (a instanceof jsts.planargraph.DirectedEdge)return this.add3(a);
    this.nodeMap.add(a)
  };
  b.prototype.add2 =
    function (a) {
      this.edges.add(a);
      this.add(a.getDirEdge(0));
      this.add(a.getDirEdge(1))
    };
  b.prototype.add3 = function (a) {
    this.dirEdges.add(a)
  };
  b.prototype.nodeIterator = function () {
    return this.nodeMap.iterator()
  };
  b.prototype.contains = function (a) {
    return a instanceof jsts.planargraph.DirectedEdge ? this.contains2(a) : this.edges.contains(a)
  };
  b.prototype.contains2 = function (a) {
    return this.dirEdges.contains(a)
  };
  b.prototype.getNodes = function () {
    return this.nodeMap.values()
  };
  b.prototype.dirEdgeIterator = function () {
    return this.dirEdges.iterator()
  };
  b.prototype.edgeIterator = function () {
    return this.edges.iterator()
  };
  b.prototype.getEdges = function () {
    return this.edges
  };
  b.prototype.remove = function (a) {
    if (a instanceof jsts.planargraph.DirectedEdge)return this.remove2(a);
    this.remove(a.getDirEdge(0));
    this.remove(a.getDirEdge(1));
    this.edges.remove(a);
    this.edge.remove()
  };
  b.prototype.remove2 = function (a) {
    if (a instanceof jsts.planargraph.Node)return this.remove3(a);
    var b = a.getSym();
    null != b && b.setSym(null);
    a.getFromNode().remove(a);
    a.remove();
    this.dirEdges.remove(a)
  };
  b.prototype.remove3 = function (a) {
    for (var b = a.getOutEdges().getEdges().iterator(); b.hasNext();) {
      var e = b.next(), f = e.getSym();
      null != f && this.remove(f);
      this.dirEdges.remove(e);
      e = e.getEdge();
      null != e && this.edges.remove(e)
    }
    this.nodeMap.remove(a.getCoordinate());
    a.remove()
  };
  b.prototype.findNodesOfDegree = function (b) {
    for (var d = new a, e = this.nodeIterator(); e.hasNext();) {
      var f = e.next();
      f.getDegree() == b && d.add(f)
    }
    return d
  };
  jsts.planargraph.PlanarGraph = b
})();
(function () {
  var a = javascript.util.ArrayList, b = javascript.util.Stack, c = javascript.util.HashSet, d = jsts.util.Assert,
    e = jsts.operation.polygonize.EdgeRing, f = jsts.operation.polygonize.PolygonizeEdge,
    g = jsts.operation.polygonize.PolygonizeDirectedEdge, h = jsts.planargraph.PlanarGraph, l = jsts.planargraph.Node,
    k = function (a) {
      h.apply(this);
      this.factory = a
    };
  k.prototype = new h;
  k.getDegreeNonDeleted = function (a) {
    var b = 0;
    for (a = a.getOutEdges().getEdges().iterator(); a.hasNext();)a.next().isMarked() || b++;
    return b
  };
  k.getDegree =
    function (a, b) {
      for (var c = 0, d = a.getOutEdges().getEdges().iterator(); d.hasNext();)d.next().getLabel() == b && c++;
      return c
    };
  k.deleteAllEdges = function (a) {
    for (a = a.getOutEdges().getEdges().iterator(); a.hasNext();) {
      var b = a.next();
      b.setMarked(!0);
      b = b.getSym();
      null != b && b.setMarked(!0)
    }
  };
  k.prototype.factory = null;
  k.prototype.addEdge = function (a) {
    if (!a.isEmpty()) {
      var b = jsts.geom.CoordinateArrays.removeRepeatedPoints(a.getCoordinates());
      if (!(2 > b.length)) {
        var c = b[b.length - 1], d = this.getNode(b[0]), e = this.getNode(c), c =
          new g(d, e, b[1], !0), b = new g(e, d, b[b.length - 2], !1);
        a = new f(a);
        a.setDirectedEdges(c, b);
        this.add(a)
      }
    }
  };
  k.prototype.getNode = function (a) {
    var b = this.findNode(a);
    null == b && (b = new l(a), this.add(b));
    return b
  };
  k.prototype.computeNextCWEdges = function () {
    for (var a = this.nodeIterator(); a.hasNext();) {
      var b = a.next();
      k.computeNextCWEdges(b)
    }
  };
  k.prototype.convertMaximalToMinimalEdgeRings = function (a) {
    for (a = a.iterator(); a.hasNext();) {
      var b = a.next(), c = b.getLabel(), b = k.findIntersectionNodes(b, c);
      if (null != b)for (b = b.iterator(); b.hasNext();) {
        var d =
          b.next();
        k.computeNextCCWEdges(d, c)
      }
    }
  };
  k.findIntersectionNodes = function (b, c) {
    var e = b, f = null;
    do {
      var g = e.getFromNode();
      1 < k.getDegree(g, c) && (null == f && (f = new a), f.add(g));
      e = e.getNext();
      d.isTrue(null != e, "found null DE in ring");
      d.isTrue(e == b || !e.isInRing(), "found DE already in ring")
    } while (e != b);
    return f
  };
  k.prototype.getEdgeRings = function () {
    this.computeNextCWEdges();
    k.label(this.dirEdges, -1);
    var b = k.findLabeledEdgeRings(this.dirEdges);
    this.convertMaximalToMinimalEdgeRings(b);
    for (var b = new a, c = this.dirEdges.iterator(); c.hasNext();) {
      var d =
        c.next();
      d.isMarked() || d.isInRing() || (d = this.findEdgeRing(d), b.add(d))
    }
    return b
  };
  k.findLabeledEdgeRings = function (b) {
    var c = new a, d = 1;
    for (b = b.iterator(); b.hasNext();) {
      var e = b.next();
      e.isMarked() || 0 <= e.getLabel() || (c.add(e), e = k.findDirEdgesInRing(e), k.label(e, d), d++)
    }
    return c
  };
  k.prototype.deleteCutEdges = function () {
    this.computeNextCWEdges();
    k.findLabeledEdgeRings(this.dirEdges);
    for (var b = new a, c = this.dirEdges.iterator(); c.hasNext();) {
      var d = c.next();
      if (!d.isMarked()) {
        var e = d.getSym();
        d.getLabel() == e.getLabel() &&
        (d.setMarked(!0), e.setMarked(!0), d = d.getEdge(), b.add(d.getLine()))
      }
    }
    return b
  };
  k.label = function (a, b) {
    for (var c = a.iterator(); c.hasNext();)c.next().setLabel(b)
  };
  k.computeNextCWEdges = function (a) {
    var b = null, c = null;
    for (a = a.getOutEdges().getEdges().iterator(); a.hasNext();) {
      var d = a.next();
      d.isMarked() || (null == b && (b = d), null != c && (c = c.getSym(), c.setNext(d)), c = d)
    }
    null != c && (c = c.getSym(), c.setNext(b))
  };
  k.computeNextCCWEdges = function (a, b) {
    for (var c = null, e = null, f = a.getOutEdges().getEdges(), g = f.size() - 1; 0 <= g; g--) {
      var h =
        f.get(g), l = h.getSym(), k = null;
      h.getLabel() == b && (k = h);
      h = null;
      l.getLabel() == b && (h = l);
      if (null != k || null != h) null != h && (e = h), null != k && (null != e && (e.setNext(k), e = null), null == c && (c = k))
    }
    null != e && (d.isTrue(null != c), e.setNext(c))
  };
  k.findDirEdgesInRing = function (b) {
    var c = b, e = new a;
    do e.add(c), c = c.getNext(), d.isTrue(null != c, "found null DE in ring"), d.isTrue(c == b || !c.isInRing(), "found DE already in ring"); while (c != b);
    return e
  };
  k.prototype.findEdgeRing = function (a) {
    var b = a, c = new e(this.factory);
    do c.add(b), b.setRing(c),
      b = b.getNext(), d.isTrue(null != b, "found null DE in ring"), d.isTrue(b == a || !b.isInRing(), "found DE already in ring"); while (b != a);
    return c
  };
  k.prototype.deleteDangles = function () {
    for (var a = this.findNodesOfDegree(1), d = new c, e = new b, a = a.iterator(); a.hasNext();)e.push(a.next());
    for (; !e.isEmpty();)for (a = e.pop(), k.deleteAllEdges(a), a = a.getOutEdges().getEdges().iterator(); a.hasNext();) {
      var f = a.next();
      f.setMarked(!0);
      var g = f.getSym();
      null != g && g.setMarked(!0);
      g = f.getEdge();
      d.add(g.getLine());
      f = f.getToNode();
      1 ==
      k.getDegreeNonDeleted(f) && e.push(f)
    }
    return d
  };
  k.prototype.computeDepthParity = function () {
    for (; ;)break
  };
  k.prototype.computeDepthParity = function (a) {
  };
  jsts.operation.polygonize.PolygonizeGraph = k
})();
jsts.index.strtree.Interval = function () {
  var a;
  if (1 === arguments.length)return a = arguments[0], jsts.index.strtree.Interval(a.min, a.max);
  2 === arguments.length && (jsts.util.Assert.isTrue(this.min <= this.max), this.min = arguments[0], this.max = arguments[1])
};
jsts.index.strtree.Interval.prototype.min = null;
jsts.index.strtree.Interval.prototype.max = null;
jsts.index.strtree.Interval.prototype.getCentre = function () {
  return (this.min + this.max) / 2
};
jsts.index.strtree.Interval.prototype.expandToInclude = function (a) {
  this.max = Math.max(this.max, a.max);
  this.min = Math.min(this.min, a.min);
  return this
};
jsts.index.strtree.Interval.prototype.intersects = function (a) {
  return !(a.min > this.max || a.max < this.min)
};
jsts.index.strtree.Interval.prototype.equals = function (a) {
  if (!(a instanceof jsts.index.strtree.Interval))return !1;
  other = a;
  return this.min === other.min && this.max === other.max
};
jsts.geom.GeometryFactory = function (a) {
  this.precisionModel = a || new jsts.geom.PrecisionModel
};
jsts.geom.GeometryFactory.prototype.precisionModel = null;
jsts.geom.GeometryFactory.prototype.getPrecisionModel = function () {
  return this.precisionModel
};
jsts.geom.GeometryFactory.prototype.createPoint = function (a) {
  return new jsts.geom.Point(a, this)
};
jsts.geom.GeometryFactory.prototype.createLineString = function (a) {
  return new jsts.geom.LineString(a, this)
};
jsts.geom.GeometryFactory.prototype.createLinearRing = function (a) {
  return new jsts.geom.LinearRing(a, this)
};
jsts.geom.GeometryFactory.prototype.createPolygon = function (a, b) {
  return new jsts.geom.Polygon(a, b, this)
};
jsts.geom.GeometryFactory.prototype.createMultiPoint = function (a) {
  if (a && a[0] instanceof jsts.geom.Coordinate) {
    var b = [], c;
    for (c = 0; c < a.length; c++)b.push(this.createPoint(a[c]));
    a = b
  }
  return new jsts.geom.MultiPoint(a, this)
};
jsts.geom.GeometryFactory.prototype.createMultiLineString = function (a) {
  return new jsts.geom.MultiLineString(a, this)
};
jsts.geom.GeometryFactory.prototype.createMultiPolygon = function (a) {
  return new jsts.geom.MultiPolygon(a, this)
};
jsts.geom.GeometryFactory.prototype.buildGeometry = function (a) {
  for (var b = null, c = !1, d = !1, e = a.iterator(); e.hasNext();) {
    var f = e.next(), g = f.CLASS_NAME;
    null === b && (b = g);
    g !== b && (c = !0);
    f.isGeometryCollectionBase() && (d = !0)
  }
  if (null === b)return this.createGeometryCollection(null);
  if (c || d)return this.createGeometryCollection(a.toArray());
  b = a.get(0);
  if (1 < a.size()) {
    if (b instanceof jsts.geom.Polygon)return this.createMultiPolygon(a.toArray());
    if (b instanceof jsts.geom.LineString)return this.createMultiLineString(a.toArray());
    if (b instanceof jsts.geom.Point)return this.createMultiPoint(a.toArray());
    jsts.util.Assert.shouldNeverReachHere("Unhandled class: " + b)
  }
  return b
};
jsts.geom.GeometryFactory.prototype.createGeometryCollection = function (a) {
  return new jsts.geom.GeometryCollection(a, this)
};
jsts.geom.GeometryFactory.prototype.toGeometry = function (a) {
  return a.isNull() ? this.createPoint(null) : a.getMinX() === a.getMaxX() && a.getMinY() === a.getMaxY() ? this.createPoint(new jsts.geom.Coordinate(a.getMinX(), a.getMinY())) : a.getMinX() === a.getMaxX() || a.getMinY() === a.getMaxY() ? this.createLineString([new jsts.geom.Coordinate(a.getMinX(), a.getMinY()), new jsts.geom.Coordinate(a.getMaxX(), a.getMaxY())]) : this.createPolygon(this.createLinearRing([new jsts.geom.Coordinate(a.getMinX(), a.getMinY()), new jsts.geom.Coordinate(a.getMinX(),
    a.getMaxY()), new jsts.geom.Coordinate(a.getMaxX(), a.getMaxY()), new jsts.geom.Coordinate(a.getMaxX(), a.getMinY()), new jsts.geom.Coordinate(a.getMinX(), a.getMinY())]), null)
};
jsts.geomgraph.NodeFactory = function () {
};
jsts.geomgraph.NodeFactory.prototype.createNode = function (a) {
  return new jsts.geomgraph.Node(a, null)
};
(function () {
  jsts.geomgraph.Position = function () {
  };
  jsts.geomgraph.Position.ON = 0;
  jsts.geomgraph.Position.LEFT = 1;
  jsts.geomgraph.Position.RIGHT = 2;
  jsts.geomgraph.Position.opposite = function (a) {
    return a === jsts.geomgraph.Position.LEFT ? jsts.geomgraph.Position.RIGHT : a === jsts.geomgraph.Position.RIGHT ? jsts.geomgraph.Position.LEFT : a
  }
})();
jsts.geomgraph.TopologyLocation = function () {
  this.location = [];
  if (3 === arguments.length) {
    var a = arguments[0], b = arguments[1], c = arguments[2];
    this.init(3);
    this.location[jsts.geomgraph.Position.ON] = a;
    this.location[jsts.geomgraph.Position.LEFT] = b;
    this.location[jsts.geomgraph.Position.RIGHT] = c
  } else if (arguments[0] instanceof jsts.geomgraph.TopologyLocation) {
    if (a = arguments[0], this.init(a.location.length), null != a)for (b = 0; b < this.location.length; b++)this.location[b] = a.location[b]
  } else"number" === typeof arguments[0] ?
    (a = arguments[0], this.init(1), this.location[jsts.geomgraph.Position.ON] = a) : arguments[0] instanceof Array && this.init(arguments[0].length)
};
jsts.geomgraph.TopologyLocation.prototype.location = null;
jsts.geomgraph.TopologyLocation.prototype.init = function (a) {
  this.location[a - 1] = null;
  this.setAllLocations(jsts.geom.Location.NONE)
};
jsts.geomgraph.TopologyLocation.prototype.get = function (a) {
  return a < this.location.length ? this.location[a] : jsts.geom.Location.NONE
};
jsts.geomgraph.TopologyLocation.prototype.isNull = function () {
  for (var a = 0; a < this.location.length; a++)if (this.location[a] !== jsts.geom.Location.NONE)return !1;
  return !0
};
jsts.geomgraph.TopologyLocation.prototype.isAnyNull = function () {
  for (var a = 0; a < this.location.length; a++)if (this.location[a] === jsts.geom.Location.NONE)return !0;
  return !1
};
jsts.geomgraph.TopologyLocation.prototype.isEqualOnSide = function (a, b) {
  return this.location[b] == a.location[b]
};
jsts.geomgraph.TopologyLocation.prototype.isArea = function () {
  return 1 < this.location.length
};
jsts.geomgraph.TopologyLocation.prototype.isLine = function () {
  return 1 === this.location.length
};
jsts.geomgraph.TopologyLocation.prototype.flip = function () {
  if (!(1 >= this.location.length)) {
    var a = this.location[jsts.geomgraph.Position.LEFT];
    this.location[jsts.geomgraph.Position.LEFT] = this.location[jsts.geomgraph.Position.RIGHT];
    this.location[jsts.geomgraph.Position.RIGHT] = a
  }
};
jsts.geomgraph.TopologyLocation.prototype.setAllLocations = function (a) {
  for (var b = 0; b < this.location.length; b++)this.location[b] = a
};
jsts.geomgraph.TopologyLocation.prototype.setAllLocationsIfNull = function (a) {
  for (var b = 0; b < this.location.length; b++)this.location[b] === jsts.geom.Location.NONE && (this.location[b] = a)
};
jsts.geomgraph.TopologyLocation.prototype.setLocation = function (a, b) {
  void 0 !== b ? this.location[a] = b : this.setLocation(jsts.geomgraph.Position.ON, a)
};
jsts.geomgraph.TopologyLocation.prototype.getLocations = function () {
  return location
};
jsts.geomgraph.TopologyLocation.prototype.setLocations = function (a, b, c) {
  this.location[jsts.geomgraph.Position.ON] = a;
  this.location[jsts.geomgraph.Position.LEFT] = b;
  this.location[jsts.geomgraph.Position.RIGHT] = c
};
jsts.geomgraph.TopologyLocation.prototype.allPositionsEqual = function (a) {
  for (var b = 0; b < this.location.length; b++)if (this.location[b] !== a)return !1;
  return !0
};
jsts.geomgraph.TopologyLocation.prototype.merge = function (a) {
  if (a.location.length > this.location.length) {
    var b = [];
    b[jsts.geomgraph.Position.ON] = this.location[jsts.geomgraph.Position.ON];
    b[jsts.geomgraph.Position.LEFT] = jsts.geom.Location.NONE;
    b[jsts.geomgraph.Position.RIGHT] = jsts.geom.Location.NONE;
    this.location = b
  }
  for (b = 0; b < this.location.length; b++)this.location[b] === jsts.geom.Location.NONE && b < a.location.length && (this.location[b] = a.location[b])
};
jsts.geomgraph.Label = function () {
  this.elt = [];
  var a, b, c, d;
  4 === arguments.length ? (a = arguments[0], b = arguments[1], c = arguments[2], d = arguments[3], this.elt[0] = new jsts.geomgraph.TopologyLocation(jsts.geom.Location.NONE, jsts.geom.Location.NONE, jsts.geom.Location.NONE), this.elt[1] = new jsts.geomgraph.TopologyLocation(jsts.geom.Location.NONE, jsts.geom.Location.NONE, jsts.geom.Location.NONE), this.elt[a].setLocations(b, c, d)) : 3 === arguments.length ? (b = arguments[0], c = arguments[1], d = arguments[2], this.elt[0] = new jsts.geomgraph.TopologyLocation(b,
    c, d), this.elt[1] = new jsts.geomgraph.TopologyLocation(b, c, d)) : 2 === arguments.length ? (a = arguments[0], b = arguments[1], this.elt[0] = new jsts.geomgraph.TopologyLocation(jsts.geom.Location.NONE), this.elt[1] = new jsts.geomgraph.TopologyLocation(jsts.geom.Location.NONE), this.elt[a].setLocation(b)) : arguments[0] instanceof jsts.geomgraph.Label ? (a = arguments[0], this.elt[0] = new jsts.geomgraph.TopologyLocation(a.elt[0]), this.elt[1] = new jsts.geomgraph.TopologyLocation(a.elt[1])) : "number" === typeof arguments[0] && (b = arguments[0],
      this.elt[0] = new jsts.geomgraph.TopologyLocation(b), this.elt[1] = new jsts.geomgraph.TopologyLocation(b))
};
jsts.geomgraph.Label.toLineLabel = function (a) {
  var b, c = new jsts.geomgraph.Label(jsts.geom.Location.NONE);
  for (b = 0; 2 > b; b++)c.setLocation(b, a.getLocation(b));
  return c
};
jsts.geomgraph.Label.prototype.elt = null;
jsts.geomgraph.Label.prototype.flip = function () {
  this.elt[0].flip();
  this.elt[1].flip()
};
jsts.geomgraph.Label.prototype.getLocation = function (a, b) {
  return 1 == arguments.length ? this.getLocation2.apply(this, arguments) : this.elt[a].get(b)
};
jsts.geomgraph.Label.prototype.getLocation2 = function (a) {
  return this.elt[a].get(jsts.geomgraph.Position.ON)
};
jsts.geomgraph.Label.prototype.setLocation = function (a, b, c) {
  2 == arguments.length ? this.setLocation2.apply(this, arguments) : this.elt[a].setLocation(b, c)
};
jsts.geomgraph.Label.prototype.setLocation2 = function (a, b) {
  this.elt[a].setLocation(jsts.geomgraph.Position.ON, b)
};
jsts.geomgraph.Label.prototype.setAllLocations = function (a, b) {
  this.elt[a].setAllLocations(b)
};
jsts.geomgraph.Label.prototype.setAllLocationsIfNull = function (a, b) {
  1 == arguments.length ? this.setAllLocationsIfNull2.apply(this, arguments) : this.elt[a].setAllLocationsIfNull(b)
};
jsts.geomgraph.Label.prototype.setAllLocationsIfNull2 = function (a) {
  this.setAllLocationsIfNull(0, a);
  this.setAllLocationsIfNull(1, a)
};
jsts.geomgraph.Label.prototype.merge = function (a) {
  var b;
  for (b = 0; 2 > b; b++)null === this.elt[b] && null !== a.elt[b] ? this.elt[b] = new jsts.geomgraph.TopologyLocation(a.elt[b]) : this.elt[b].merge(a.elt[b])
};
jsts.geomgraph.Label.prototype.getGeometryCount = function () {
  var a = 0;
  this.elt[0].isNull() || a++;
  this.elt[1].isNull() || a++;
  return a
};
jsts.geomgraph.Label.prototype.isNull = function (a) {
  return this.elt[a].isNull()
};
jsts.geomgraph.Label.prototype.isAnyNull = function (a) {
  return this.elt[a].isAnyNull()
};
jsts.geomgraph.Label.prototype.isArea = function () {
  return 1 == arguments.length ? this.isArea2(arguments[0]) : this.elt[0].isArea() || this.elt[1].isArea()
};
jsts.geomgraph.Label.prototype.isArea2 = function (a) {
  return this.elt[a].isArea()
};
jsts.geomgraph.Label.prototype.isLine = function (a) {
  return this.elt[a].isLine()
};
jsts.geomgraph.Label.prototype.isEqualOnSide = function (a, b) {
  return this.elt[0].isEqualOnSide(a.elt[0], b) && this.elt[1].isEqualOnSide(a.elt[1], b)
};
jsts.geomgraph.Label.prototype.allPositionsEqual = function (a, b) {
  return this.elt[a].allPositionsEqual(b)
};
jsts.geomgraph.Label.prototype.toLine = function (a) {
  this.elt[a].isArea() && (this.elt[a] = new jsts.geomgraph.TopologyLocation(this.elt[a].location[0]))
};
jsts.geomgraph.EdgeRing = function (a, b) {
  this.edges = [];
  this.pts = [];
  this.holes = [];
  this.label = new jsts.geomgraph.Label(jsts.geom.Location.NONE);
  this.geometryFactory = b;
  a && (this.computePoints(a), this.computeRing())
};
jsts.geomgraph.EdgeRing.prototype.startDe = null;
jsts.geomgraph.EdgeRing.prototype.maxNodeDegree = -1;
jsts.geomgraph.EdgeRing.prototype.edges = null;
jsts.geomgraph.EdgeRing.prototype.pts = null;
jsts.geomgraph.EdgeRing.prototype.label = null;
jsts.geomgraph.EdgeRing.prototype.ring = null;
jsts.geomgraph.EdgeRing.prototype._isHole = null;
jsts.geomgraph.EdgeRing.prototype.shell = null;
jsts.geomgraph.EdgeRing.prototype.holes = null;
jsts.geomgraph.EdgeRing.prototype.geometryFactory = null;
jsts.geomgraph.EdgeRing.prototype.isIsolated = function () {
  return 1 == this.label.getGeometryCount()
};
jsts.geomgraph.EdgeRing.prototype.isHole = function () {
  return this._isHole
};
jsts.geomgraph.EdgeRing.prototype.getCoordinate = function (a) {
  return this.pts[a]
};
jsts.geomgraph.EdgeRing.prototype.getLinearRing = function () {
  return this.ring
};
jsts.geomgraph.EdgeRing.prototype.getLabel = function () {
  return this.label
};
jsts.geomgraph.EdgeRing.prototype.isShell = function () {
  return null === this.shell
};
jsts.geomgraph.EdgeRing.prototype.getShell = function () {
  return this.shell
};
jsts.geomgraph.EdgeRing.prototype.setShell = function (a) {
  this.shell = a;
  null !== a && a.addHole(this)
};
jsts.geomgraph.EdgeRing.prototype.addHole = function (a) {
  this.holes.push(a)
};
jsts.geomgraph.EdgeRing.prototype.toPolygon = function (a) {
  a = [];
  for (var b = 0; b < this.holes.length; b++)a[b] = this.holes[b].getLinearRing();
  return this.geometryFactory.createPolygon(this.getLinearRing(), a)
};
jsts.geomgraph.EdgeRing.prototype.computeRing = function () {
  if (null === this.ring) {
    for (var a = [], b = 0; b < this.pts.length; b++)a[b] = this.pts[b];
    this.ring = this.geometryFactory.createLinearRing(a);
    this._isHole = jsts.algorithm.CGAlgorithms.isCCW(this.ring.getCoordinates())
  }
};
jsts.geomgraph.EdgeRing.prototype.getNext = function (a) {
  throw new jsts.error.AbstractInvocationError;
};
jsts.geomgraph.EdgeRing.prototype.setEdgeRing = function (a, b) {
  throw new jsts.error.AbstractInvocationError;
};
jsts.geomgraph.EdgeRing.prototype.getEdges = function () {
  return this.edges
};
jsts.geomgraph.EdgeRing.prototype.computePoints = function (a) {
  this.startDe = a;
  var b = !0;
  do {
    if (null === a)throw new jsts.error.TopologyError("Found null DirectedEdge");
    if (a.getEdgeRing() === this)throw new jsts.error.TopologyError("Directed Edge visited twice during ring-building at " + a.getCoordinate());
    this.edges.push(a);
    var c = a.getLabel();
    jsts.util.Assert.isTrue(c.isArea());
    this.mergeLabel(c);
    this.addPoints(a.getEdge(), a.isForward(), b);
    b = !1;
    this.setEdgeRing(a, this);
    a = this.getNext(a)
  } while (a !== this.startDe)
};
jsts.geomgraph.EdgeRing.prototype.getMaxNodeDegree = function () {
  0 > this.maxNodeDegree && this.computeMaxNodeDegree();
  return this.maxNodeDegree
};
jsts.geomgraph.EdgeRing.prototype.computeMaxNodeDegree = function () {
  this.maxNodeDegree = 0;
  var a = this.startDe;
  do {
    var b = a.getNode().getEdges().getOutgoingDegree(this);
    b > this.maxNodeDegree && (this.maxNodeDegree = b);
    a = this.getNext(a)
  } while (a !== this.startDe);
  this.maxNodeDegree *= 2
};
jsts.geomgraph.EdgeRing.prototype.setInResult = function () {
  var a = this.startDe;
  do a.getEdge().setInResult(!0), a = a.getNext(); while (a != this.startDe)
};
jsts.geomgraph.EdgeRing.prototype.mergeLabel = function (a) {
  this.mergeLabel2(a, 0);
  this.mergeLabel2(a, 1)
};
jsts.geomgraph.EdgeRing.prototype.mergeLabel2 = function (a, b) {
  var c = a.getLocation(b, jsts.geomgraph.Position.RIGHT);
  c != jsts.geom.Location.NONE && this.label.getLocation(b) === jsts.geom.Location.NONE && this.label.setLocation(b, c)
};
jsts.geomgraph.EdgeRing.prototype.addPoints = function (a, b, c) {
  a = a.getCoordinates();
  if (b)for (b = 1, c && (b = 0), c = b; c < a.length; c++)this.pts.push(a[c]); else for (b = a.length - 2, c && (b = a.length - 1), c = b; 0 <= c; c--)this.pts.push(a[c])
};
jsts.geomgraph.EdgeRing.prototype.containsPoint = function (a) {
  var b = this.getLinearRing();
  if (!b.getEnvelopeInternal().contains(a) || !jsts.algorithm.CGAlgorithms.isPointInRing(a, b.getCoordinates()))return !1;
  for (b = 0; b < this.holes.length; b++)if (this.holes[b].containsPoint(a))return !1;
  return !0
};
jsts.geom.Dimension = function () {
};
jsts.geom.Dimension.P = 0;
jsts.geom.Dimension.L = 1;
jsts.geom.Dimension.A = 2;
jsts.geom.Dimension.FALSE = -1;
jsts.geom.Dimension.TRUE = -2;
jsts.geom.Dimension.DONTCARE = -3;
jsts.geom.Dimension.toDimensionSymbol = function (a) {
  switch (a) {
    case jsts.geom.Dimension.FALSE:
      return "F";
    case jsts.geom.Dimension.TRUE:
      return "T";
    case jsts.geom.Dimension.DONTCARE:
      return "*";
    case jsts.geom.Dimension.P:
      return "0";
    case jsts.geom.Dimension.L:
      return "1";
    case jsts.geom.Dimension.A:
      return "2"
  }
  throw new jsts.IllegalArgumentError("Unknown dimension value: " + a);
};
jsts.geom.Dimension.toDimensionValue = function (a) {
  switch (a.toUpperCase()) {
    case "F":
      return jsts.geom.Dimension.FALSE;
    case "T":
      return jsts.geom.Dimension.TRUE;
    case "*":
      return jsts.geom.Dimension.DONTCARE;
    case "0":
      return jsts.geom.Dimension.P;
    case "1":
      return jsts.geom.Dimension.L;
    case "2":
      return jsts.geom.Dimension.A
  }
  throw new jsts.error.IllegalArgumentError("Unknown dimension symbol: " + a);
};
(function () {
  var a = jsts.geom.Dimension;
  jsts.geom.LineString = function (a, c) {
    this.factory = c;
    this.points = a || []
  };
  jsts.geom.LineString.prototype = new jsts.geom.Geometry;
  jsts.geom.LineString.constructor = jsts.geom.LineString;
  jsts.geom.LineString.prototype.points = null;
  jsts.geom.LineString.prototype.getCoordinates = function () {
    return this.points
  };
  jsts.geom.LineString.prototype.getCoordinateSequence = function () {
    return this.points
  };
  jsts.geom.LineString.prototype.getCoordinateN = function (a) {
    return this.points[a]
  };
  jsts.geom.LineString.prototype.getCoordinate =
    function () {
      return this.isEmpty() ? null : this.getCoordinateN(0)
    };
  jsts.geom.LineString.prototype.getDimension = function () {
    return 1
  };
  jsts.geom.LineString.prototype.getBoundaryDimension = function () {
    return this.isClosed() ? a.FALSE : 0
  };
  jsts.geom.LineString.prototype.isEmpty = function () {
    return 0 === this.points.length
  };
  jsts.geom.LineString.prototype.getNumPoints = function () {
    return this.points.length
  };
  jsts.geom.LineString.prototype.getPointN = function (a) {
    return this.getFactory().createPoint(this.points[a])
  };
  jsts.geom.LineString.prototype.getStartPoint =
    function () {
      return this.isEmpty() ? null : this.getPointN(0)
    };
  jsts.geom.LineString.prototype.getEndPoint = function () {
    return this.isEmpty() ? null : this.getPointN(this.getNumPoints() - 1)
  };
  jsts.geom.LineString.prototype.isClosed = function () {
    return this.isEmpty() ? !1 : this.getCoordinateN(0).equals2D(this.getCoordinateN(this.points.length - 1))
  };
  jsts.geom.LineString.prototype.isRing = function () {
    return this.isClosed() && this.isSimple()
  };
  jsts.geom.LineString.prototype.getGeometryType = function () {
    return "LineString"
  };
  jsts.geom.LineString.prototype.getLength =
    function () {
      return jsts.algorithm.CGAlgorithms.computeLength(this.points)
    };
  jsts.geom.LineString.prototype.getBoundary = function () {
    return (new jsts.operation.BoundaryOp(this)).getBoundary()
  };
  jsts.geom.LineString.prototype.computeEnvelopeInternal = function () {
    if (this.isEmpty())return new jsts.geom.Envelope;
    var a = new jsts.geom.Envelope;
    this.points.forEach(function (c) {
      a.expandToInclude(c)
    });
    return a
  };
  jsts.geom.LineString.prototype.equalsExact = function (a, c) {
    return this.isEquivalentClass(a) && this.points.length ===
    a.points.length ? this.isEmpty() && a.isEmpty() ? !0 : this.points.reduce(function (d, e, f) {
      return d && jsts.geom.Geometry.prototype.equal(e, a.points[f], c)
    }) : !1
  };
  jsts.geom.LineString.prototype.isEquivalentClass = function (a) {
    return a instanceof jsts.geom.LineString
  };
  jsts.geom.LineString.prototype.compareToSameClass = function (a) {
    for (var c = 0, d = this.points.length, e = 0, f = a.points.length; c < d && e < f;) {
      var g = this.points[c].compareTo(a.points[e]);
      if (0 !== g)return g;
      c++;
      e++
    }
    return c < d ? 1 : e < f ? -1 : 0
  };
  jsts.geom.LineString.prototype.apply =
    function (a) {
      if (a instanceof jsts.geom.GeometryFilter || a instanceof jsts.geom.GeometryComponentFilter) a.filter(this); else if (a instanceof jsts.geom.CoordinateFilter)for (var c = 0, d = this.points.length; c < d; c++)a.filter(this.points[c]); else a instanceof jsts.geom.CoordinateSequenceFilter && this.apply2.apply(this, arguments)
    };
  jsts.geom.LineString.prototype.apply2 = function (a) {
    if (0 !== this.points.length) {
      for (var c = 0; c < this.points.length && (a.filter(this.points, c), !a.isDone()); c++);
      a.isGeometryChanged()
    }
  };
  jsts.geom.LineString.prototype.clone =
    function () {
      for (var a = [], c = 0, d = this.points.length; c < d; c++)a.push(this.points[c].clone());
      return this.factory.createLineString(a)
    };
  jsts.geom.LineString.prototype.normalize = function () {
    var a, c, d, e, f;
    f = this.points.length;
    c = parseInt(f / 2);
    for (a = 0; a < c; a++)if (d = f - 1 - a, e = this.points[a], d = this.points[d], !e.equals(d)) {
      0 < e.compareTo(d) && this.points.reverse();
      break
    }
  };
  jsts.geom.LineString.prototype.CLASS_NAME = "jsts.geom.LineString"
})();
(function () {
  jsts.geom.LinearRing = function (a, b) {
    jsts.geom.LineString.apply(this, arguments)
  };
  jsts.geom.LinearRing.prototype = new jsts.geom.LineString;
  jsts.geom.LinearRing.constructor = jsts.geom.LinearRing;
  jsts.geom.LinearRing.prototype.getBoundaryDimension = function () {
    return jsts.geom.Dimension.FALSE
  };
  jsts.geom.LinearRing.prototype.isSimple = function () {
    return !0
  };
  jsts.geom.LinearRing.prototype.getGeometryType = function () {
    return "LinearRing"
  };
  jsts.geom.LinearRing.MINIMUM_VALID_SIZE = 4;
  jsts.geom.LinearRing.prototype.CLASS_NAME =
    "jsts.geom.LinearRing"
})();
jsts.operation.overlay.OverlayNodeFactory = function () {
};
jsts.operation.overlay.OverlayNodeFactory.prototype = new jsts.geomgraph.NodeFactory;
jsts.operation.overlay.OverlayNodeFactory.constructor = jsts.operation.overlay.OverlayNodeFactory;
jsts.operation.overlay.OverlayNodeFactory.prototype.createNode = function (a) {
  return new jsts.geomgraph.Node(a, new jsts.geomgraph.DirectedEdgeStar)
};
jsts.operation.buffer.SubgraphDepthLocater = function (a) {
  this.subgraphs = [];
  this.seg = new jsts.geom.LineSegment;
  this.subgraphs = a
};
jsts.operation.buffer.SubgraphDepthLocater.prototype.subgraphs = null;
jsts.operation.buffer.SubgraphDepthLocater.prototype.seg = null;
jsts.operation.buffer.SubgraphDepthLocater.prototype.getDepth = function (a) {
  a = this.findStabbedSegments(a);
  if (0 === a.length)return 0;
  a.sort();
  return a[0].leftDepth
};
jsts.operation.buffer.SubgraphDepthLocater.prototype.findStabbedSegments = function (a) {
  if (3 === arguments.length) this.findStabbedSegments2.apply(this, arguments); else {
    for (var b = [], c = 0; c < this.subgraphs.length; c++) {
      var d = this.subgraphs[c], e = d.getEnvelope();
      a.y < e.getMinY() || a.y > e.getMaxY() || this.findStabbedSegments2(a, d.getDirectedEdges(), b)
    }
    return b
  }
};
jsts.operation.buffer.SubgraphDepthLocater.prototype.findStabbedSegments2 = function (a, b, c) {
  if (b instanceof jsts.geomgraph.DirectedEdge) this.findStabbedSegments3(a, b, c); else for (b = b.iterator(); b.hasNext();) {
    var d = b.next();
    d.isForward() && this.findStabbedSegments3(a, d, c)
  }
};
jsts.operation.buffer.SubgraphDepthLocater.prototype.findStabbedSegments3 = function (a, b, c) {
  for (var d = b.getEdge().getCoordinates(), e = 0; e < d.length - 1; e++)if (this.seg.p0 = d[e], this.seg.p1 = d[e + 1], this.seg.p0.y > this.seg.p1.y && this.seg.reverse(), !(Math.max(this.seg.p0.x, this.seg.p1.x) < a.x || this.seg.isHorizontal() || a.y < this.seg.p0.y || a.y > this.seg.p1.y || jsts.algorithm.CGAlgorithms.computeOrientation(this.seg.p0, this.seg.p1, a) === jsts.algorithm.CGAlgorithms.RIGHT)) {
    var f = b.getDepth(jsts.geomgraph.Position.LEFT);
    this.seg.p0.equals(d[e]) || (f = b.getDepth(jsts.geomgraph.Position.RIGHT));
    f = new jsts.operation.buffer.SubgraphDepthLocater.DepthSegment(this.seg, f);
    c.push(f)
  }
};
jsts.operation.buffer.SubgraphDepthLocater.DepthSegment = function (a, b) {
  this.upwardSeg = new jsts.geom.LineSegment(a);
  this.leftDepth = b
};
jsts.operation.buffer.SubgraphDepthLocater.DepthSegment.prototype.upwardSeg = null;
jsts.operation.buffer.SubgraphDepthLocater.DepthSegment.prototype.leftDepth = null;
jsts.operation.buffer.SubgraphDepthLocater.DepthSegment.prototype.compareTo = function (a) {
  var b = this.upwardSeg.orientationIndex(a.upwardSeg);
  0 === b && (b = -1 * a.upwardSeg.orientationIndex(upwardSeg));
  return 0 !== b ? b : this.compareX(this.upwardSeg, a.upwardSeg)
};
jsts.operation.buffer.SubgraphDepthLocater.DepthSegment.prototype.compareX = function (a, b) {
  var c = a.p0.compareTo(b.p0);
  return 0 !== c ? c : a.p1.compareTo(b.p1)
};
jsts.index.ItemVisitor = function () {
};
jsts.index.ItemVisitor.prototype.visitItem = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.simplify.LineSegmentIndex = function () {
  this.index = new jsts.index.quadtree.Quadtree
};
jsts.simplify.LineSegmentIndex.prototype.index = null;
jsts.simplify.LineSegmentIndex.prototype.add = function (a) {
  if (a instanceof jsts.geom.LineSegment) this.add2(a); else {
    a = a.getSegments();
    for (var b = 0; b < a.length; b++)this.add2(a[b])
  }
};
jsts.simplify.LineSegmentIndex.prototype.add2 = function (a) {
  this.index.insert(new jsts.geom.Envelope(a.p0, a.p1), a)
};
jsts.simplify.LineSegmentIndex.prototype.remove = function (a) {
  this.index.remove(new jsts.geom.Envelope(a.p0, a.p1), a)
};
jsts.simplify.LineSegmentIndex.prototype.query = function (a) {
  var b = new jsts.geom.Envelope(a.p0, a.p1);
  a = new jsts.simplify.LineSegmentIndex.LineSegmentVisitor(a);
  this.index.query(b, a);
  return a.getItems()
};
jsts.simplify.LineSegmentIndex.LineSegmentVisitor = function (a) {
  this.items = [];
  this.querySeg = a
};
jsts.simplify.LineSegmentIndex.LineSegmentVisitor.prototype = new jsts.index.ItemVisitor;
jsts.simplify.LineSegmentIndex.LineSegmentVisitor.prototype.querySeg = null;
jsts.simplify.LineSegmentIndex.LineSegmentVisitor.prototype.items = null;
jsts.simplify.LineSegmentIndex.LineSegmentVisitor.prototype.visitItem = function (a) {
  jsts.geom.Envelope.intersects(a.p0, a.p1, this.querySeg.p0, this.querySeg.p1) && this.items.push(a)
};
jsts.simplify.LineSegmentIndex.LineSegmentVisitor.prototype.getItems = function () {
  return this.items
};
jsts.geomgraph.EdgeEndStar = function () {
  this.edgeMap = new javascript.util.TreeMap;
  this.edgeList = null;
  this.ptInAreaLocation = [jsts.geom.Location.NONE, jsts.geom.Location.NONE]
};
jsts.geomgraph.EdgeEndStar.prototype.edgeMap = null;
jsts.geomgraph.EdgeEndStar.prototype.edgeList = null;
jsts.geomgraph.EdgeEndStar.prototype.ptInAreaLocation = null;
jsts.geomgraph.EdgeEndStar.prototype.insert = function (a) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geomgraph.EdgeEndStar.prototype.insertEdgeEnd = function (a, b) {
  this.edgeMap.put(a, b);
  this.edgeList = null
};
jsts.geomgraph.EdgeEndStar.prototype.getCoordinate = function () {
  var a = this.iterator();
  return a.hasNext() ? a.next().getCoordinate() : null
};
jsts.geomgraph.EdgeEndStar.prototype.getDegree = function () {
  return this.edgeMap.size()
};
jsts.geomgraph.EdgeEndStar.prototype.iterator = function () {
  return this.getEdges().iterator()
};
jsts.geomgraph.EdgeEndStar.prototype.getEdges = function () {
  null === this.edgeList && (this.edgeList = new javascript.util.ArrayList(this.edgeMap.values()));
  return this.edgeList
};
jsts.geomgraph.EdgeEndStar.prototype.getNextCW = function (a) {
  this.getEdges();
  a = this.edgeList.indexOf(a);
  var b = a - 1;
  0 === a && (b = this.edgeList.length - 1);
  return this.edgeList[b]
};
jsts.geomgraph.EdgeEndStar.prototype.computeLabelling = function (a) {
  this.computeEdgeEndLabels(a[0].getBoundaryNodeRule());
  this.propagateSideLabels(0);
  this.propagateSideLabels(1);
  for (var b = [!1, !1], c = this.iterator(); c.hasNext();)for (var d = c.next(), e = d.getLabel(), f = 0; 2 > f; f++)e.isLine(f) && e.getLocation(f) === jsts.geom.Location.BOUNDARY && (b[f] = !0);
  for (c = this.iterator(); c.hasNext();)for (d = c.next(), e = d.getLabel(), f = 0; 2 > f; f++)if (e.isAnyNull(f)) {
    var g = jsts.geom.Location.NONE;
    b[f] ? g = jsts.geom.Location.EXTERIOR :
      (g = d.getCoordinate(), g = this.getLocation(f, g, a));
    e.setAllLocationsIfNull(f, g)
  }
};
jsts.geomgraph.EdgeEndStar.prototype.computeEdgeEndLabels = function (a) {
  for (var b = this.iterator(); b.hasNext();)b.next().computeLabel(a)
};
jsts.geomgraph.EdgeEndStar.prototype.getLocation = function (a, b, c) {
  this.ptInAreaLocation[a] === jsts.geom.Location.NONE && (this.ptInAreaLocation[a] = jsts.algorithm.locate.SimplePointInAreaLocator.locate(b, c[a].getGeometry()));
  return this.ptInAreaLocation[a]
};
jsts.geomgraph.EdgeEndStar.prototype.isAreaLabelsConsistent = function (a) {
  this.computeEdgeEndLabels(a.getBoundaryNodeRule());
  return this.checkAreaLabelsConsistent(0)
};
jsts.geomgraph.EdgeEndStar.prototype.checkAreaLabelsConsistent = function (a) {
  var b = this.getEdges();
  if (0 >= b.size())return !0;
  var c = b.size() - 1, b = b.get(c).getLabel().getLocation(a, jsts.geomgraph.Position.LEFT);
  jsts.util.Assert.isTrue(b != jsts.geom.Location.NONE, "Found unlabelled area edge");
  for (c = this.iterator(); c.hasNext();) {
    var d = c.next().getLabel();
    jsts.util.Assert.isTrue(d.isArea(a), "Found non-area edge");
    var e = d.getLocation(a, jsts.geomgraph.Position.LEFT), d = d.getLocation(a, jsts.geomgraph.Position.RIGHT);
    if (e === d || d !== b)return !1;
    b = e
  }
  return !0
};
jsts.geomgraph.EdgeEndStar.prototype.propagateSideLabels = function (a) {
  for (var b = jsts.geom.Location.NONE, c = this.iterator(); c.hasNext();) {
    var d = c.next(), e = d.getLabel();
    e.isArea(a) && e.getLocation(a, jsts.geomgraph.Position.LEFT) !== jsts.geom.Location.NONE && (b = e.getLocation(a, jsts.geomgraph.Position.LEFT))
  }
  if (b !== jsts.geom.Location.NONE)for (c = this.iterator(); c.hasNext();)if (d = c.next(), e = d.getLabel(), e.getLocation(a, jsts.geomgraph.Position.ON) === jsts.geom.Location.NONE && e.setLocation(a, jsts.geomgraph.Position.ON,
      b), e.isArea(a)) {
    var f = e.getLocation(a, jsts.geomgraph.Position.LEFT), g = e.getLocation(a, jsts.geomgraph.Position.RIGHT);
    if (g !== jsts.geom.Location.NONE) {
      if (g !== b)throw new jsts.error.TopologyError("side location conflict", d.getCoordinate());
      f === jsts.geom.Location.NONE && jsts.util.Assert.shouldNeverReachHere("found single null side (at " + d.getCoordinate() + ")");
      b = f
    } else jsts.util.Assert.isTrue(e.getLocation(a, jsts.geomgraph.Position.LEFT) === jsts.geom.Location.NONE, "found single null side"), e.setLocation(a,
      jsts.geomgraph.Position.RIGHT, b), e.setLocation(a, jsts.geomgraph.Position.LEFT, b)
  }
};
jsts.geomgraph.EdgeEndStar.prototype.findIndex = function (a) {
  this.iterator();
  for (var b = 0; b < this.edgeList.size(); b++)if (this.edgeList.get(b) === a)return b;
  return -1
};
jsts.operation.relate.EdgeEndBundleStar = function () {
  jsts.geomgraph.EdgeEndStar.apply(this, arguments)
};
jsts.operation.relate.EdgeEndBundleStar.prototype = new jsts.geomgraph.EdgeEndStar;
jsts.operation.relate.EdgeEndBundleStar.prototype.insert = function (a) {
  var b = this.edgeMap.get(a);
  null === b ? (b = new jsts.operation.relate.EdgeEndBundle(a), this.insertEdgeEnd(a, b)) : b.insert(a)
};
jsts.operation.relate.EdgeEndBundleStar.prototype.updateIM = function (a) {
  for (var b = this.iterator(); b.hasNext();)b.next().updateIM(a)
};
(function () {
  jsts.geom.Polygon = function (a, b, c) {
    this.shell = a || c.createLinearRing(null);
    this.holes = b || [];
    this.factory = c
  };
  jsts.geom.Polygon.prototype = new jsts.geom.Geometry;
  jsts.geom.Polygon.constructor = jsts.geom.Polygon;
  jsts.geom.Polygon.prototype.getCoordinate = function () {
    return this.shell.getCoordinate()
  };
  jsts.geom.Polygon.prototype.getCoordinates = function () {
    if (this.isEmpty())return [];
    for (var a = [], b = -1, c = this.shell.getCoordinates(), d = 0; d < c.length; d++)b++, a[b] = c[d];
    for (c = 0; c < this.holes.length; c++)for (var d =
      this.holes[c].getCoordinates(), e = 0; e < d.length; e++)b++, a[b] = d[e];
    return a
  };
  jsts.geom.Polygon.prototype.isEmpty = function () {
    return this.shell.isEmpty()
  };
  jsts.geom.Polygon.prototype.getExteriorRing = function () {
    return this.shell
  };
  jsts.geom.Polygon.prototype.getInteriorRingN = function (a) {
    return this.holes[a]
  };
  jsts.geom.Polygon.prototype.getNumInteriorRing = function () {
    return this.holes.length
  };
  jsts.geom.Polygon.prototype.getArea = function () {
    var a;
    a = 0 + Math.abs(jsts.algorithm.CGAlgorithms.signedArea(this.shell.getCoordinateSequence()));
    for (var b = 0; b < this.holes.length; b++)a -= Math.abs(jsts.algorithm.CGAlgorithms.signedArea(this.holes[b].getCoordinateSequence()));
    return a
  };
  jsts.geom.Polygon.prototype.getLength = function () {
    var a;
    a = 0 + this.shell.getLength();
    for (var b = 0; b < this.holes.length; b++)a += this.holes[b].getLength();
    return a
  };
  jsts.geom.Polygon.prototype.getBoundary = function () {
    if (this.isEmpty())return this.getFactory().createMultiLineString(null);
    var a = [];
    a[0] = this.shell.clone();
    for (var b = 0, c = this.holes.length; b < c; b++)a[b + 1] = this.holes[b].clone();
    return 1 >= a.length ? a[0] : this.getFactory().createMultiLineString(a)
  };
  jsts.geom.Polygon.prototype.computeEnvelopeInternal = function () {
    return this.shell.getEnvelopeInternal()
  };
  jsts.geom.Polygon.prototype.getDimension = function () {
    return 2
  };
  jsts.geom.Polygon.prototype.getBoundaryDimension = function () {
    return 1
  };
  jsts.geom.Polygon.prototype.equalsExact = function (a, b) {
    if (!this.isEquivalentClass(a))return !1;
    if (this.isEmpty() && a.isEmpty())return !0;
    if (this.isEmpty() !== a.isEmpty() || !this.shell.equalsExact(a.shell,
        b) || this.holes.length !== a.holes.length || this.holes.length !== a.holes.length)return !1;
    for (var c = 0; c < this.holes.length; c++)if (!this.holes[c].equalsExact(a.holes[c], b))return !1;
    return !0
  };
  jsts.geom.Polygon.prototype.compareToSameClass = function (a) {
    return this.shell.compareToSameClass(a.shell)
  };
  jsts.geom.Polygon.prototype.apply = function (a) {
    if (a instanceof jsts.geom.GeometryComponentFilter) {
      a.filter(this);
      this.shell.apply(a);
      for (var b = 0, c = this.holes.length; b < c; b++)this.holes[b].apply(a)
    } else if (a instanceof
      jsts.geom.GeometryFilter) a.filter(this); else if (a instanceof jsts.geom.CoordinateFilter)for (this.shell.apply(a), b = 0, c = this.holes.length; b < c; b++)this.holes[b].apply(a); else a instanceof jsts.geom.CoordinateSequenceFilter && this.apply2.apply(this, arguments)
  };
  jsts.geom.Polygon.prototype.apply2 = function (a) {
    this.shell.apply(a);
    if (!a.isDone())for (var b = 0; b < this.holes.length && (this.holes[b].apply(a), !a.isDone()); b++);
    a.isGeometryChanged()
  };
  jsts.geom.Polygon.prototype.clone = function () {
    for (var a = [], b = 0, c = this.holes.length; b <
    c; b++)a.push(this.holes[b].clone());
    return this.factory.createPolygon(this.shell.clone(), a)
  };
  jsts.geom.Polygon.prototype.normalize = function () {
    this.normalize2(this.shell, !0);
    for (var a = 0, b = this.holes.length; a < b; a++)this.normalize2(this.holes[a], !1);
    this.holes.sort()
  };
  jsts.geom.Polygon.prototype.normalize2 = function (a, b) {
    if (!a.isEmpty()) {
      var c = a.points.slice(0, a.points.length - 1), d = jsts.geom.CoordinateArrays.minCoordinate(a.points);
      jsts.geom.CoordinateArrays.scroll(c, d);
      a.points = c.concat();
      a.points[c.length] =
        c[0];
      jsts.algorithm.CGAlgorithms.isCCW(a.points) === b && a.points.reverse()
    }
  };
  jsts.geom.Polygon.prototype.CLASS_NAME = "jsts.geom.Polygon"
})();
jsts.algorithm.distance.DistanceToPoint = function () {
};
jsts.algorithm.distance.DistanceToPoint.computeDistance = function (a, b, c) {
  if (a instanceof jsts.geom.LineString) jsts.algorithm.distance.DistanceToPoint.computeDistance2(a, b, c); else if (a instanceof jsts.geom.Polygon) jsts.algorithm.distance.DistanceToPoint.computeDistance4(a, b, c); else if (a instanceof jsts.geom.GeometryCollection)for (var d = 0; d < a.getNumGeometries(); d++) {
    var e = a.getGeometryN(d);
    jsts.algorithm.distance.DistanceToPoint.computeDistance(e, b, c)
  } else c.setMinimum(a.getCoordinate(), b)
};
jsts.algorithm.distance.DistanceToPoint.computeDistance2 = function (a, b, c) {
  var d = new jsts.geom.LineSegment;
  a = a.getCoordinates();
  for (var e = 0; e < a.length - 1; e++) {
    d.setCoordinates(a[e], a[e + 1]);
    var f = d.closestPoint(b);
    c.setMinimum(f, b)
  }
};
jsts.algorithm.distance.DistanceToPoint.computeDistance3 = function (a, b, c) {
  a = a.closestPoint(b);
  c.setMinimum(a, b)
};
jsts.algorithm.distance.DistanceToPoint.computeDistance4 = function (a, b, c) {
  jsts.algorithm.distance.DistanceToPoint.computeDistance2(a.getExteriorRing(), b, c);
  for (var d = 0; d < a.getNumInteriorRing(); d++)jsts.algorithm.distance.DistanceToPoint.computeDistance2(a.getInteriorRingN(d), b, c)
};
jsts.index.strtree.Boundable = function () {
};
jsts.index.strtree.Boundable.prototype.getBounds = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.index.strtree.ItemBoundable = function (a, b) {
  this.bounds = a;
  this.item = b
};
jsts.index.strtree.ItemBoundable.prototype = new jsts.index.strtree.Boundable;
jsts.index.strtree.ItemBoundable.constructor = jsts.index.strtree.ItemBoundable;
jsts.index.strtree.ItemBoundable.prototype.bounds = null;
jsts.index.strtree.ItemBoundable.prototype.item = null;
jsts.index.strtree.ItemBoundable.prototype.getBounds = function () {
  return this.bounds
};
jsts.index.strtree.ItemBoundable.prototype.getItem = function () {
  return this.item
};
jsts.noding.SegmentPointComparator = function () {
};
jsts.noding.SegmentPointComparator.compare = function (a, b, c) {
  if (b.equals2D(c))return 0;
  var d = jsts.noding.SegmentPointComparator.relativeSign(b.x, c.x);
  b = jsts.noding.SegmentPointComparator.relativeSign(b.y, c.y);
  switch (a) {
    case 0:
      return jsts.noding.SegmentPointComparator.compareValue(d, b);
    case 1:
      return jsts.noding.SegmentPointComparator.compareValue(b, d);
    case 2:
      return jsts.noding.SegmentPointComparator.compareValue(b, -d);
    case 3:
      return jsts.noding.SegmentPointComparator.compareValue(-d, b);
    case 4:
      return jsts.noding.SegmentPointComparator.compareValue(-d,
        -b);
    case 5:
      return jsts.noding.SegmentPointComparator.compareValue(-b, -d);
    case 6:
      return jsts.noding.SegmentPointComparator.compareValue(-b, d);
    case 7:
      return jsts.noding.SegmentPointComparator.compareValue(d, -b)
  }
  return 0
};
jsts.noding.SegmentPointComparator.relativeSign = function (a, b) {
  return a < b ? -1 : a > b ? 1 : 0
};
jsts.noding.SegmentPointComparator.compareValue = function (a, b) {
  return 0 > a ? -1 : 0 < a ? 1 : 0 > b ? -1 : 0 < b ? 1 : 0
};
jsts.operation.IsSimpleOp = function (a) {
  this.geom = a
};
jsts.operation.IsSimpleOp.prototype.geom = null;
jsts.operation.IsSimpleOp.prototype.isClosedEndpointsInInterior = !0;
jsts.operation.IsSimpleOp.prototype.nonSimpleLocation = null;
jsts.operation.IsSimpleOp.prototype.IsSimpleOp = function (a) {
  this.geom = a
};
jsts.operation.IsSimpleOp.prototype.isSimple = function () {
  this.nonSimpleLocation = null;
  return this.geom instanceof jsts.geom.LineString || this.geom instanceof jsts.geom.MultiLineString ? this.isSimpleLinearGeometry(this.geom) : this.geom instanceof jsts.geom.MultiPoint ? this.isSimpleMultiPoint(this.geom) : !0
};
jsts.operation.IsSimpleOp.prototype.isSimpleMultiPoint = function (a) {
  if (a.isEmpty())return !0;
  for (var b = [], c = 0; c < a.getNumGeometries(); c++) {
    for (var d = a.getGeometryN(c).getCoordinate(), e = 0; e < b.length; e++)if (d.equals2D(b[e]))return this.nonSimpleLocation = d, !1;
    b.push(d)
  }
  return !0
};
jsts.operation.IsSimpleOp.prototype.isSimpleLinearGeometry = function (a) {
  if (a.isEmpty())return !0;
  a = new jsts.geomgraph.GeometryGraph(0, a);
  var b = new jsts.algorithm.RobustLineIntersector, b = a.computeSelfNodes(b, !0);
  return b.hasIntersection() ? b.hasProperIntersection() ? (this.nonSimpleLocation = b.getProperIntersectionPoint(), !1) : this.hasNonEndpointIntersection(a) || this.isClosedEndpointsInInterior && this.hasClosedEndpointIntersection(a) ? !1 : !0 : !0
};
jsts.operation.IsSimpleOp.prototype.hasNonEndpointIntersection = function (a) {
  for (a = a.getEdgeIterator(); a.hasNext();)for (var b = a.next(), c = b.getMaximumSegmentIndex(), b = b.getEdgeIntersectionList().iterator(); b.hasNext();) {
    var d = b.next();
    if (!d.isEndPoint(c))return this.nonSimpleLocation = d.getCoordinate(), !0
  }
  return !1
};
jsts.operation.IsSimpleOp.prototype.hasClosedEndpointIntersection = function (a) {
  var b = new javascript.util.TreeMap;
  for (a = a.getEdgeIterator(); a.hasNext();) {
    var c = a.next();
    c.getMaximumSegmentIndex();
    var d = c.isClosed(), e = c.getCoordinate(0);
    this.addEndpoint(b, e, d);
    c = c.getCoordinate(c.getNumPoints() - 1);
    this.addEndpoint(b, c, d)
  }
  for (a = b.values().iterator(); a.hasNext();)if (b = a.next(), b.isClosed && 2 != b.degree)return this.nonSimpleLocation = b.getCoordinate(), !0;
  return !1
};
jsts.operation.IsSimpleOp.EndpointInfo = function (a) {
  this.pt = a;
  this.isClosed = !1;
  this.degree = 0
};
jsts.operation.IsSimpleOp.EndpointInfo.prototype.pt = null;
jsts.operation.IsSimpleOp.EndpointInfo.prototype.isClosed = null;
jsts.operation.IsSimpleOp.EndpointInfo.prototype.degree = null;
jsts.operation.IsSimpleOp.EndpointInfo.prototype.getCoordinate = function () {
  return this.pt
};
jsts.operation.IsSimpleOp.EndpointInfo.prototype.addEndpoint = function (a) {
  this.degree++;
  this.isClosed = this.isClosed || a
};
jsts.operation.IsSimpleOp.prototype.addEndpoint = function (a, b, c) {
  var d = a.get(b);
  null === d && (d = new jsts.operation.IsSimpleOp.EndpointInfo(b), a.put(b, d));
  d.addEndpoint(c)
};
(function () {
  var a = function () {
    this.snapTolerance = 0;
    this.seg = new jsts.geom.LineSegment;
    this.isClosed = this.allowSnappingToSourceVertices = !1;
    this.srcPts = [];
    arguments[0] instanceof jsts.geom.LineString ? this.initFromLine.apply(this, arguments) : this.initFromPoints.apply(this, arguments)
  };
  a.prototype.initFromLine = function (a, c) {
    this.initFromPoints(a.getCoordinates(), c)
  };
  a.prototype.initFromPoints = function (a, c) {
    this.srcPts = a;
    this.isClosed = this.calcIsClosed(a);
    this.snapTolerance = c
  };
  a.prototype.setAllowSnappingToSourceVertices =
    function (a) {
      this.allowSnappingToSourceVertices = a
    };
  a.prototype.calcIsClosed = function (a) {
    return 1 >= a.length ? !1 : a[0].equals(a[a.length - 1])
  };
  a.prototype.snapTo = function (a) {
    var c = new jsts.geom.CoordinateList(this.srcPts);
    this.snapVertices(c, a);
    this.snapSegments(c, a);
    return c.toCoordinateArray()
  };
  a.prototype.snapVertices = function (a, c) {
    var d = this.isClosed ? a.size() - 1 : a.size(), e = 0, f;
    for (e; e < d; e++)f = a.get(e), f = this.findSnapForVertex(f, c), null !== f && (a.set(e, new jsts.geom.Coordinate(f)), 0 === e && this.isClosed &&
    a.set(a.size() - 1, new jsts.geom.Coordinate(f)))
  };
  a.prototype.findSnapForVertex = function (a, c) {
    for (var d = 0, e = c.length, d = 0; d < e && !a.equals(c[d]); d++)if (a.distance(c[d]) < this.snapTolerance)return c[d];
    return null
  };
  a.prototype.snapSegments = function (a, c) {
    if (0 !== c.length) {
      var d = c.length, e, f, g;
      1 < c.length && c[0].equals2D(c[c.length - 1]) && (d = c.length - 1);
      e = 0;
      for (e; e < d; e++)f = c[e], g = this.findSegmentIndexToSnap(f, a), 0 <= g && a.add(g + 1, new jsts.geom.Coordinate(f), !1)
    }
  };
  a.prototype.findSegmentIndexToSnap = function (a, c) {
    var d =
      Number.MAX_VALUE, e = -1, f = 0, g;
    for (f; f < c.size() - 1; f++) {
      this.seg.p0 = c.get(f);
      this.seg.p1 = c.get(f + 1);
      if (this.seg.p0.equals(a) || this.seg.p1.equals(a))if (this.allowSnappingToSourceVertices)continue; else return -1;
      g = this.seg.distance(a);
      g < this.snapTolerance && g < d && (d = g, e = f)
    }
    return e
  };
  jsts.operation.overlay.snap.LineStringSnapper = a
})();
jsts.operation.buffer.BufferOp = function (a, b) {
  this.argGeom = a;
  this.bufParams = b ? b : new jsts.operation.buffer.BufferParameters
};
jsts.operation.buffer.BufferOp.MAX_PRECISION_DIGITS = 12;
jsts.operation.buffer.BufferOp.precisionScaleFactor = function (a, b, c) {
  a = a.getEnvelopeInternal();
  b = Math.max(a.getHeight(), a.getWidth()) + 2 * (0 < b ? b : 0);
  return Math.pow(10, -(Math.log(b) / Math.log(10) + 1 - c))
};
jsts.operation.buffer.BufferOp.bufferOp = function (a, b) {
  return 2 < arguments.length ? jsts.operation.buffer.BufferOp.bufferOp2.apply(this, arguments) : (new jsts.operation.buffer.BufferOp(a)).getResultGeometry(b)
};
jsts.operation.buffer.BufferOp.bufferOp2 = function (a, b, c) {
  return 3 < arguments.length ? jsts.operation.buffer.BufferOp.bufferOp3.apply(this, arguments) : (new jsts.operation.buffer.BufferOp(a, c)).getResultGeometry(b)
};
jsts.operation.buffer.BufferOp.bufferOp3 = function (a, b, c) {
  if (4 < arguments.length)return jsts.operation.buffer.BufferOp.bufferOp4.apply(this, arguments);
  var d = new jsts.operation.buffer.BufferOp(a);
  d.setQuadrantSegments(c);
  return d.getResultGeometry(b)
};
jsts.operation.buffer.BufferOp.bufferOp4 = function (a, b, c, d) {
  a = new jsts.operation.buffer.BufferOp(a);
  a.setQuadrantSegments(c);
  a.setEndCapStyle(d);
  return a.getResultGeometry(b)
};
jsts.operation.buffer.BufferOp.prototype.argGeom = null;
jsts.operation.buffer.BufferOp.prototype.distance = null;
jsts.operation.buffer.BufferOp.prototype.bufParams = null;
jsts.operation.buffer.BufferOp.prototype.resultGeometry = null;
jsts.operation.buffer.BufferOp.prototype.setEndCapStyle = function (a) {
  this.bufParams.setEndCapStyle(a)
};
jsts.operation.buffer.BufferOp.prototype.setQuadrantSegments = function (a) {
  this.bufParams.setQuadrantSegments(a)
};
jsts.operation.buffer.BufferOp.prototype.getResultGeometry = function (a) {
  this.distance = a;
  this.computeGeometry();
  return this.resultGeometry
};
jsts.operation.buffer.BufferOp.prototype.computeGeometry = function () {
  this.bufferOriginalPrecision();
  if (null === this.resultGeometry) {
    var a = this.argGeom.getPrecisionModel();
    a.getType() === jsts.geom.PrecisionModel.FIXED ? this.bufferFixedPrecision(a) : this.bufferReducedPrecision()
  }
};
jsts.operation.buffer.BufferOp.prototype.bufferReducedPrecision = function () {
  var a, b = null;
  for (a = jsts.operation.buffer.BufferOp.MAX_PRECISION_DIGITS; 0 <= a; a--) {
    try {
      this.bufferReducedPrecision2(a)
    } catch (c) {
      b = c
    }
    if (null !== this.resultGeometry)return
  }
  throw b;
};
jsts.operation.buffer.BufferOp.prototype.bufferOriginalPrecision = function () {
  try {
    this.resultGeometry = (new jsts.operation.buffer.BufferBuilder(this.bufParams)).buffer(this.argGeom, this.distance)
  } catch (a) {
  }
};
jsts.operation.buffer.BufferOp.prototype.bufferReducedPrecision2 = function (a) {
  a = jsts.operation.buffer.BufferOp.precisionScaleFactor(this.argGeom, this.distance, a);
  a = new jsts.geom.PrecisionModel(a);
  this.bufferFixedPrecision(a)
};
jsts.operation.buffer.BufferOp.prototype.bufferFixedPrecision = function (a) {
  var b = new jsts.noding.ScaledNoder(new jsts.noding.snapround.MCIndexSnapRounder(new jsts.geom.PrecisionModel(1)), a.getScale()),
    c = new jsts.operation.buffer.BufferBuilder(this.bufParams);
  c.setWorkingPrecisionModel(a);
  c.setNoder(b);
  this.resultGeometry = c.buffer(this.argGeom, this.distance)
};
jsts.geomgraph.index.EdgeSetIntersector = function () {
};
jsts.geomgraph.index.EdgeSetIntersector.prototype.computeIntersections = function (a, b, c) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geomgraph.index.EdgeSetIntersector.prototype.computeIntersections2 = function (a, b, c) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geomgraph.index.SimpleMCSweepLineIntersector = function () {
  throw new jsts.error.NotImplementedError;
};
jsts.geomgraph.index.SimpleMCSweepLineIntersector.prototype = new jsts.geomgraph.index.EdgeSetIntersector;
jsts.algorithm.locate.SimplePointInAreaLocator = function (a) {
  this.geom = a
};
jsts.algorithm.locate.SimplePointInAreaLocator.locate = function (a, b) {
  return b.isEmpty() ? jsts.geom.Location.EXTERIOR : jsts.algorithm.locate.SimplePointInAreaLocator.containsPoint(a, b) ? jsts.geom.Location.INTERIOR : jsts.geom.Location.EXTERIOR
};
jsts.algorithm.locate.SimplePointInAreaLocator.containsPoint = function (a, b) {
  if (b instanceof jsts.geom.Polygon)return jsts.algorithm.locate.SimplePointInAreaLocator.containsPointInPolygon(a, b);
  if (b instanceof jsts.geom.GeometryCollection || b instanceof jsts.geom.MultiPoint || b instanceof jsts.geom.MultiLineString || b instanceof jsts.geom.MultiPolygon)for (var c = 0; c < b.geometries.length; c++) {
    var d = b.geometries[c];
    if (d !== b && jsts.algorithm.locate.SimplePointInAreaLocator.containsPoint(a, d))return !0
  }
  return !1
};
jsts.algorithm.locate.SimplePointInAreaLocator.containsPointInPolygon = function (a, b) {
  if (b.isEmpty())return !1;
  var c = b.getExteriorRing();
  if (!jsts.algorithm.locate.SimplePointInAreaLocator.isPointInRing(a, c))return !1;
  for (c = 0; c < b.getNumInteriorRing(); c++) {
    var d = b.getInteriorRingN(c);
    if (jsts.algorithm.locate.SimplePointInAreaLocator.isPointInRing(a, d))return !1
  }
  return !0
};
jsts.algorithm.locate.SimplePointInAreaLocator.isPointInRing = function (a, b) {
  return b.getEnvelopeInternal().intersects(a) ? jsts.algorithm.CGAlgorithms.isPointInRing(a, b.getCoordinates()) : !1
};
jsts.algorithm.locate.SimplePointInAreaLocator.prototype.geom = null;
jsts.algorithm.locate.SimplePointInAreaLocator.prototype.locate = function (a) {
  return jsts.algorithm.locate.SimplePointInAreaLocator.locate(a, geom)
};
(function () {
  var a = jsts.geom.Location, b = jsts.geomgraph.Position, c = jsts.geomgraph.EdgeEndStar, d = jsts.util.Assert;
  jsts.geomgraph.DirectedEdgeStar = function () {
    jsts.geomgraph.EdgeEndStar.call(this)
  };
  jsts.geomgraph.DirectedEdgeStar.prototype = new c;
  jsts.geomgraph.DirectedEdgeStar.constructor = jsts.geomgraph.DirectedEdgeStar;
  jsts.geomgraph.DirectedEdgeStar.prototype.resultAreaEdgeList = null;
  jsts.geomgraph.DirectedEdgeStar.prototype.label = null;
  jsts.geomgraph.DirectedEdgeStar.prototype.insert = function (a) {
    this.insertEdgeEnd(a,
      a)
  };
  jsts.geomgraph.DirectedEdgeStar.prototype.getLabel = function () {
    return this.label
  };
  jsts.geomgraph.DirectedEdgeStar.prototype.getOutgoingDegree = function () {
    for (var a = 0, b = this.iterator(); b.hasNext();)b.next().isInResult() && a++;
    return a
  };
  jsts.geomgraph.DirectedEdgeStar.prototype.getOutgoingDegree = function (a) {
    for (var b = 0, c = this.iterator(); c.hasNext();)c.next().getEdgeRing() === a && b++;
    return b
  };
  jsts.geomgraph.DirectedEdgeStar.prototype.getRightmostEdge = function () {
    var a = this.getEdges(), b = a.size();
    if (1 >
      b)return null;
    var c = a.get(0);
    if (1 == b)return c;
    var a = a.get(b - 1), b = c.getQuadrant(), h = a.getQuadrant();
    if (jsts.geomgraph.Quadrant.isNorthern(b) && jsts.geomgraph.Quadrant.isNorthern(h))return c;
    if (jsts.geomgraph.Quadrant.isNorthern(b) || jsts.geomgraph.Quadrant.isNorthern(h)) {
      if (0 != c.getDy())return c;
      if (0 != a.getDy())return a
    } else return a;
    d.shouldNeverReachHere("found two horizontal edges incident on node");
    return null
  };
  jsts.geomgraph.DirectedEdgeStar.prototype.computeLabelling = function (b) {
    c.prototype.computeLabelling.call(this,
      b);
    this.label = new jsts.geomgraph.Label(a.NONE);
    for (b = this.iterator(); b.hasNext();)for (var d = b.next().getEdge().getLabel(), g = 0; 2 > g; g++) {
      var h = d.getLocation(g);
      h !== a.INTERIOR && h !== a.BOUNDARY || this.label.setLocation(g, a.INTERIOR)
    }
  };
  jsts.geomgraph.DirectedEdgeStar.prototype.mergeSymLabels = function () {
    for (var a = this.iterator(); a.hasNext();) {
      var b = a.next();
      b.getLabel().merge(b.getSym().getLabel())
    }
  };
  jsts.geomgraph.DirectedEdgeStar.prototype.updateLabelling = function (a) {
    for (var b = this.iterator(); b.hasNext();) {
      var c =
        b.next().getLabel();
      c.setAllLocationsIfNull(0, a.getLocation(0));
      c.setAllLocationsIfNull(1, a.getLocation(1))
    }
  };
  jsts.geomgraph.DirectedEdgeStar.prototype.getResultAreaEdges = function () {
    if (null !== this.resultAreaEdgeList)return this.resultAreaEdgeList;
    this.resultAreaEdgeList = new javascript.util.ArrayList;
    for (var a = this.iterator(); a.hasNext();) {
      var b = a.next();
      (b.isInResult() || b.getSym().isInResult()) && this.resultAreaEdgeList.add(b)
    }
    return this.resultAreaEdgeList
  };
  jsts.geomgraph.DirectedEdgeStar.prototype.SCANNING_FOR_INCOMING =
    1;
  jsts.geomgraph.DirectedEdgeStar.prototype.LINKING_TO_OUTGOING = 2;
  jsts.geomgraph.DirectedEdgeStar.prototype.linkResultDirectedEdges = function () {
    this.getResultAreaEdges();
    for (var a = null, b = null, c = this.SCANNING_FOR_INCOMING, h = 0; h < this.resultAreaEdgeList.size(); h++) {
      var l = this.resultAreaEdgeList.get(h), k = l.getSym();
      if (l.getLabel().isArea())switch (null === a && l.isInResult() && (a = l), c) {
        case this.SCANNING_FOR_INCOMING:
          if (!k.isInResult())continue;
          b = k;
          c = this.LINKING_TO_OUTGOING;
          break;
        case this.LINKING_TO_OUTGOING:
          l.isInResult() &&
          (b.setNext(l), c = this.SCANNING_FOR_INCOMING)
      }
    }
    if (c === this.LINKING_TO_OUTGOING) {
      if (null === a)throw new jsts.error.TopologyError("no outgoing dirEdge found", this.getCoordinate());
      d.isTrue(a.isInResult(), "unable to link last incoming dirEdge");
      b.setNext(a)
    }
  };
  jsts.geomgraph.DirectedEdgeStar.prototype.linkMinimalDirectedEdges = function (a) {
    for (var b = null, c = null, h = this.SCANNING_FOR_INCOMING, l = this.resultAreaEdgeList.size() - 1; 0 <= l; l--) {
      var k = this.resultAreaEdgeList.get(l), m = k.getSym();
      null === b && k.getEdgeRing() ===
      a && (b = k);
      switch (h) {
        case this.SCANNING_FOR_INCOMING:
          if (m.getEdgeRing() != a)continue;
          c = m;
          h = this.LINKING_TO_OUTGOING;
          break;
        case this.LINKING_TO_OUTGOING:
          k.getEdgeRing() === a && (c.setNextMin(k), h = this.SCANNING_FOR_INCOMING)
      }
    }
    h === this.LINKING_TO_OUTGOING && (d.isTrue(null !== b, "found null for first outgoing dirEdge"), d.isTrue(b.getEdgeRing() === a, "unable to link last incoming dirEdge"), c.setNextMin(b))
  };
  jsts.geomgraph.DirectedEdgeStar.prototype.linkAllDirectedEdges = function () {
    this.getEdges();
    for (var a = null, b =
      null, c = this.edgeList.size() - 1; 0 <= c; c--) {
      var d = this.edgeList.get(c), l = d.getSym();
      null === b && (b = l);
      null !== a && l.setNext(a);
      a = d
    }
    b.setNext(a)
  };
  jsts.geomgraph.DirectedEdgeStar.prototype.findCoveredLineEdges = function () {
    for (var b = a.NONE, c = this.iterator(); c.hasNext();) {
      var d = c.next(), h = d.getSym();
      if (!d.isLineEdge()) {
        if (d.isInResult()) {
          b = a.INTERIOR;
          break
        }
        if (h.isInResult()) {
          b = a.EXTERIOR;
          break
        }
      }
    }
    if (b !== a.NONE)for (c = this.iterator(); c.hasNext();)d = c.next(), h = d.getSym(), d.isLineEdge() ? d.getEdge().setCovered(b ===
      a.INTERIOR) : (d.isInResult() && (b = a.EXTERIOR), h.isInResult() && (b = a.INTERIOR))
  };
  jsts.geomgraph.DirectedEdgeStar.prototype.computeDepths = function (a) {
    if (2 === arguments.length) this.computeDepths2.apply(this, arguments); else {
      var c = this.findIndex(a);
      a.getLabel();
      var d = a.getDepth(b.LEFT), h = a.getDepth(b.RIGHT), d = this.computeDepths2(c + 1, this.edgeList.size(), d);
      if (this.computeDepths2(0, c, d) != h)throw new jsts.error.TopologyError("depth mismatch at " + a.getCoordinate());
    }
  };
  jsts.geomgraph.DirectedEdgeStar.prototype.computeDepths2 =
    function (a, c, d) {
      for (; a < c; a++) {
        var h = this.edgeList.get(a);
        h.getLabel();
        h.setEdgeDepths(b.RIGHT, d);
        d = h.getDepth(b.LEFT)
      }
      return d
    }
})();
jsts.algorithm.CentroidLine = function () {
  this.centSum = new jsts.geom.Coordinate
};
jsts.algorithm.CentroidLine.prototype.centSum = null;
jsts.algorithm.CentroidLine.prototype.totalLength = 0;
jsts.algorithm.CentroidLine.prototype.add = function (a) {
  if (a instanceof Array) this.add2.apply(this, arguments); else if (a instanceof jsts.geom.LineString) this.add(a.getCoordinates()); else if (a instanceof jsts.geom.Polygon) {
    var b = a;
    this.add(b.getExteriorRing().getCoordinates());
    for (var c = 0; c < b.getNumInteriorRing(); c++)this.add(b.getInteriorRingN(c).getCoordinates())
  } else if (a instanceof jsts.geom.GeometryCollection || a instanceof jsts.geom.MultiPoint || a instanceof jsts.geom.MultiLineString || a instanceof
    jsts.geom.MultiPolygon)for (b = a, c = 0; c < b.getNumGeometries(); c++)this.add(b.getGeometryN(c))
};
jsts.algorithm.CentroidLine.prototype.getCentroid = function () {
  var a = new jsts.geom.Coordinate;
  a.x = this.centSum.x / this.totalLength;
  a.y = this.centSum.y / this.totalLength;
  return a
};
jsts.algorithm.CentroidLine.prototype.add2 = function (a) {
  for (var b = 0; b < a.length - 1; b++) {
    var c = a[b].distance(a[b + 1]);
    this.totalLength += c;
    this.centSum.x += (a[b].x + a[b + 1].x) / 2 * c;
    this.centSum.y += (a[b].y + a[b + 1].y) / 2 * c
  }
};
jsts.algorithm.PointLocator = function (a) {
  this.boundaryRule = a ? a : jsts.algorithm.BoundaryNodeRule.OGC_SFS_BOUNDARY_RULE
};
jsts.algorithm.PointLocator.prototype.boundaryRule = null;
jsts.algorithm.PointLocator.prototype.isIn = null;
jsts.algorithm.PointLocator.prototype.numBoundaries = null;
jsts.algorithm.PointLocator.prototype.intersects = function (a, b) {
  return this.locate(a, b) !== jsts.geom.Location.EXTERIOR
};
jsts.algorithm.PointLocator.prototype.locate = function (a, b) {
  if (b.isEmpty())return jsts.geom.Location.EXTERIOR;
  if (b instanceof jsts.geom.Point)return this.locate2(a, b);
  if (b instanceof jsts.geom.LineString)return this.locate3(a, b);
  if (b instanceof jsts.geom.Polygon)return this.locate4(a, b);
  this.isIn = !1;
  this.numBoundaries = 0;
  this.computeLocation(a, b);
  return this.boundaryRule.isInBoundary(this.numBoundaries) ? jsts.geom.Location.BOUNDARY : 0 < this.numBoundaries || this.isIn ? jsts.geom.Location.INTERIOR : jsts.geom.Location.EXTERIOR
};
jsts.algorithm.PointLocator.prototype.computeLocation = function (a, b) {
  if (b instanceof jsts.geom.Point || b instanceof jsts.geom.LineString || b instanceof jsts.geom.Polygon) this.updateLocationInfo(this.locate(a, b)); else if (b instanceof jsts.geom.MultiLineString)for (var c = 0; c < b.getNumGeometries(); c++) {
    var d = b.getGeometryN(c);
    this.updateLocationInfo(this.locate(a, d))
  } else if (b instanceof jsts.geom.MultiPolygon)for (c = 0; c < b.getNumGeometries(); c++)d = b.getGeometryN(c), this.updateLocationInfo(this.locate(a, d));
  else if (b instanceof jsts.geom.MultiPoint || b instanceof jsts.geom.GeometryCollection)for (c = 0; c < b.getNumGeometries(); c++)d = b.getGeometryN(c), d !== b && this.computeLocation(a, d)
};
jsts.algorithm.PointLocator.prototype.updateLocationInfo = function (a) {
  a === jsts.geom.Location.INTERIOR && (this.isIn = !0);
  a === jsts.geom.Location.BOUNDARY && this.numBoundaries++
};
jsts.algorithm.PointLocator.prototype.locate2 = function (a, b) {
  return b.getCoordinate().equals2D(a) ? jsts.geom.Location.INTERIOR : jsts.geom.Location.EXTERIOR
};
jsts.algorithm.PointLocator.prototype.locate3 = function (a, b) {
  if (!b.getEnvelopeInternal().intersects(a))return jsts.geom.Location.EXTERIOR;
  var c = b.getCoordinates();
  return b.isClosed() || !a.equals(c[0]) && !a.equals(c[c.length - 1]) ? jsts.algorithm.CGAlgorithms.isOnLine(a, c) ? jsts.geom.Location.INTERIOR : jsts.geom.Location.EXTERIOR : jsts.geom.Location.BOUNDARY
};
jsts.algorithm.PointLocator.prototype.locateInPolygonRing = function (a, b) {
  return b.getEnvelopeInternal().intersects(a) ? jsts.algorithm.CGAlgorithms.locatePointInRing(a, b.getCoordinates()) : jsts.geom.Location.EXTERIOR
};
jsts.algorithm.PointLocator.prototype.locate4 = function (a, b) {
  if (b.isEmpty())return jsts.geom.Location.EXTERIOR;
  var c = b.getExteriorRing(), c = this.locateInPolygonRing(a, c);
  if (c === jsts.geom.Location.EXTERIOR)return jsts.geom.Location.EXTERIOR;
  if (c === jsts.geom.Location.BOUNDARY)return jsts.geom.Location.BOUNDARY;
  for (c = 0; c < b.getNumInteriorRing(); c++) {
    var d = b.getInteriorRingN(c), d = this.locateInPolygonRing(a, d);
    if (d === jsts.geom.Location.INTERIOR)return jsts.geom.Location.EXTERIOR;
    if (d === jsts.geom.Location.BOUNDARY)return jsts.geom.Location.BOUNDARY
  }
  return jsts.geom.Location.INTERIOR
};
(function () {
  var a = javascript.util.ArrayList, b = javascript.util.TreeMap;
  jsts.geomgraph.EdgeList = function () {
    this.edges = new a;
    this.ocaMap = new b
  };
  jsts.geomgraph.EdgeList.prototype.edges = null;
  jsts.geomgraph.EdgeList.prototype.ocaMap = null;
  jsts.geomgraph.EdgeList.prototype.add = function (a) {
    this.edges.add(a);
    var b = new jsts.noding.OrientedCoordinateArray(a.getCoordinates());
    this.ocaMap.put(b, a)
  };
  jsts.geomgraph.EdgeList.prototype.addAll = function (a) {
    for (a = a.iterator(); a.hasNext();)this.add(a.next())
  };
  jsts.geomgraph.EdgeList.prototype.getEdges =
    function () {
      return this.edges
    };
  jsts.geomgraph.EdgeList.prototype.findEqualEdge = function (a) {
    a = new jsts.noding.OrientedCoordinateArray(a.getCoordinates());
    return this.ocaMap.get(a)
  };
  jsts.geomgraph.EdgeList.prototype.getEdges = function () {
    return this.edges
  };
  jsts.geomgraph.EdgeList.prototype.iterator = function () {
    return this.edges.iterator()
  };
  jsts.geomgraph.EdgeList.prototype.get = function (a) {
    return this.edges.get(a)
  };
  jsts.geomgraph.EdgeList.prototype.findEdgeIndex = function (a) {
    for (var b = 0; b < this.edges.size(); b++)if (this.edges.get(b).equals(a))return b;
    return -1
  }
})();
(function () {
  var a = jsts.geom.Location, b = javascript.util.ArrayList, c = javascript.util.TreeMap;
  jsts.geomgraph.NodeMap = function (a) {
    this.nodeMap = new c;
    this.nodeFact = a
  };
  jsts.geomgraph.NodeMap.prototype.nodeMap = null;
  jsts.geomgraph.NodeMap.prototype.nodeFact = null;
  jsts.geomgraph.NodeMap.prototype.addNode = function (a) {
    var b, c;
    if (a instanceof jsts.geom.Coordinate)return c = a, b = this.nodeMap.get(c), null === b && (b = this.nodeFact.createNode(c), this.nodeMap.put(c, b)), b;
    if (a instanceof jsts.geomgraph.Node) {
      c = a.getCoordinate();
      b = this.nodeMap.get(c);
      if (null === b)return this.nodeMap.put(c, a), a;
      b.mergeLabel(a);
      return b
    }
  };
  jsts.geomgraph.NodeMap.prototype.add = function (a) {
    var b = a.getCoordinate();
    this.addNode(b).add(a)
  };
  jsts.geomgraph.NodeMap.prototype.find = function (a) {
    return this.nodeMap.get(a)
  };
  jsts.geomgraph.NodeMap.prototype.values = function () {
    return this.nodeMap.values()
  };
  jsts.geomgraph.NodeMap.prototype.iterator = function () {
    return this.values().iterator()
  };
  jsts.geomgraph.NodeMap.prototype.getBoundaryNodes = function (c) {
    for (var e =
      new b, f = this.iterator(); f.hasNext();) {
      var g = f.next();
      g.getLabel().getLocation(c) === a.BOUNDARY && e.add(g)
    }
    return e
  }
})();
(function () {
  var a = javascript.util.ArrayList;
  jsts.geomgraph.PlanarGraph = function (b) {
    this.edges = new a;
    this.edgeEndList = new a;
    this.nodes = new jsts.geomgraph.NodeMap(b || new jsts.geomgraph.NodeFactory)
  };
  jsts.geomgraph.PlanarGraph.prototype.edges = null;
  jsts.geomgraph.PlanarGraph.prototype.nodes = null;
  jsts.geomgraph.PlanarGraph.prototype.edgeEndList = null;
  jsts.geomgraph.PlanarGraph.linkResultDirectedEdges = function (a) {
    for (a = a.iterator(); a.hasNext();)a.next().getEdges().linkResultDirectedEdges()
  };
  jsts.geomgraph.PlanarGraph.prototype.getEdgeIterator =
    function () {
      return this.edges.iterator()
    };
  jsts.geomgraph.PlanarGraph.prototype.getEdgeEnds = function () {
    return this.edgeEndList
  };
  jsts.geomgraph.PlanarGraph.prototype.isBoundaryNode = function (a, c) {
    var d = this.nodes.find(c);
    if (null === d)return !1;
    d = d.getLabel();
    return null !== d && d.getLocation(a) === jsts.geom.Location.BOUNDARY ? !0 : !1
  };
  jsts.geomgraph.PlanarGraph.prototype.insertEdge = function (a) {
    this.edges.add(a)
  };
  jsts.geomgraph.PlanarGraph.prototype.add = function (a) {
    this.nodes.add(a);
    this.edgeEndList.add(a)
  };
  jsts.geomgraph.PlanarGraph.prototype.getNodeIterator =
    function () {
      return this.nodes.iterator()
    };
  jsts.geomgraph.PlanarGraph.prototype.getNodes = function () {
    return this.nodes.values()
  };
  jsts.geomgraph.PlanarGraph.prototype.addNode = function (a) {
    return this.nodes.addNode(a)
  };
  jsts.geomgraph.PlanarGraph.prototype.addEdges = function (a) {
    for (a = a.iterator(); a.hasNext();) {
      var c = a.next();
      this.edges.add(c);
      var d = new jsts.geomgraph.DirectedEdge(c, !0), c = new jsts.geomgraph.DirectedEdge(c, !1);
      d.setSym(c);
      c.setSym(d);
      this.add(d);
      this.add(c)
    }
  };
  jsts.geomgraph.PlanarGraph.prototype.linkResultDirectedEdges =
    function () {
      for (var a = this.nodes.iterator(); a.hasNext();)a.next().getEdges().linkResultDirectedEdges()
    };
  jsts.geomgraph.PlanarGraph.prototype.findEdgeInSameDirection = function (a, c) {
    var d = 0, e = this.edges.size(), f, g;
    for (d; d < e; d++)if (f = this.edges.get(d), g = f.getCoordinates(), this.matchInSameDirection(a, c, g[0], g[1]) || this.matchInSameDirection(a, c, g[g.length - 1], g[g.length - 2]))return f;
    return null
  };
  jsts.geomgraph.PlanarGraph.prototype.matchInSameDirection = function (a, c, d, e) {
    return a.equals(d) ? jsts.algorithm.CGAlgorithms.computeOrientation(a,
      c, e) === jsts.algorithm.CGAlgorithms.COLLINEAR && jsts.geomgraph.Quadrant.quadrant(a, c) === jsts.geomgraph.Quadrant.quadrant(d, e) ? !0 : !1 : !1
  };
  jsts.geomgraph.PlanarGraph.prototype.findEdgeEnd = function (a) {
    for (var c = this.getEdgeEnds().iterator(); c.hasNext();) {
      var d = c.next();
      if (d.getEdge() === a)return d
    }
    return null
  }
})();
jsts.algorithm.LineIntersector = function () {
  this.inputLines = [[], []];
  this.intPt = [null, null];
  this.pa = this.intPt[0];
  this.pb = this.intPt[1];
  this.result = jsts.algorithm.LineIntersector.NO_INTERSECTION
};
jsts.algorithm.LineIntersector.NO_INTERSECTION = 0;
jsts.algorithm.LineIntersector.POINT_INTERSECTION = 1;
jsts.algorithm.LineIntersector.COLLINEAR_INTERSECTION = 2;
jsts.algorithm.LineIntersector.prototype.setPrecisionModel = function (a) {
  this.precisionModel = a
};
jsts.algorithm.LineIntersector.prototype.getEndpoint = function (a, b) {
  return this.inputLines[a][b]
};
jsts.algorithm.LineIntersector.computeEdgeDistance = function (a, b, c) {
  var d = Math.abs(c.x - b.x), e = Math.abs(c.y - b.y), f = -1;
  if (a.equals(b)) f = 0; else if (a.equals(c)) f = d > e ? d : e; else {
    c = Math.abs(a.x - b.x);
    var g = Math.abs(a.y - b.y), f = d > e ? c : g;
    0 !== f || a.equals(b) || (f = Math.max(c, g))
  }
  if (0 === f && !a.equals(b))throw new jsts.error.IllegalArgumentError("Bad distance calculation");
  return f
};
jsts.algorithm.LineIntersector.nonRobustComputeEdgeDistance = function (a, b, c) {
  c = a.x - b.x;
  var d = a.y - b.y;
  c = Math.sqrt(c * c + d * d);
  if (0 !== c || a.equals(b))throw new jsts.error.IllegalArgumentError("Invalid distance calculation");
  return c
};
jsts.algorithm.LineIntersector.prototype.result = null;
jsts.algorithm.LineIntersector.prototype.inputLines = null;
jsts.algorithm.LineIntersector.prototype.intPt = null;
jsts.algorithm.LineIntersector.prototype.intLineIndex = null;
jsts.algorithm.LineIntersector.prototype._isProper = null;
jsts.algorithm.LineIntersector.prototype.pa = null;
jsts.algorithm.LineIntersector.prototype.pb = null;
jsts.algorithm.LineIntersector.prototype.precisionModel = null;
jsts.algorithm.LineIntersector.prototype.computeIntersection = function (a, b, c) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.algorithm.LineIntersector.prototype.isCollinear = function () {
  return this.result === jsts.algorithm.LineIntersector.COLLINEAR_INTERSECTION
};
jsts.algorithm.LineIntersector.prototype.computeIntersection = function (a, b, c, d) {
  this.inputLines[0][0] = a;
  this.inputLines[0][1] = b;
  this.inputLines[1][0] = c;
  this.inputLines[1][1] = d;
  this.result = this.computeIntersect(a, b, c, d)
};
jsts.algorithm.LineIntersector.prototype.computeIntersect = function (a, b, c, d) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.algorithm.LineIntersector.prototype.isEndPoint = function () {
  return this.hasIntersection() && !this._isProper
};
jsts.algorithm.LineIntersector.prototype.hasIntersection = function () {
  return this.result !== jsts.algorithm.LineIntersector.NO_INTERSECTION
};
jsts.algorithm.LineIntersector.prototype.getIntersectionNum = function () {
  return this.result
};
jsts.algorithm.LineIntersector.prototype.getIntersection = function (a) {
  return this.intPt[a]
};
jsts.algorithm.LineIntersector.prototype.computeIntLineIndex = function () {
  null === this.intLineIndex && (this.intLineIndex = [[], []], this.computeIntLineIndex(0), this.computeIntLineIndex(1))
};
jsts.algorithm.LineIntersector.prototype.isIntersection = function (a) {
  var b;
  for (b = 0; b < this.result; b++)if (this.intPt[b].equals2D(a))return !0;
  return !1
};
jsts.algorithm.LineIntersector.prototype.isInteriorIntersection = function () {
  return 1 === arguments.length ? this.isInteriorIntersection2.apply(this, arguments) : this.isInteriorIntersection(0) || this.isInteriorIntersection(1) ? !0 : !1
};
jsts.algorithm.LineIntersector.prototype.isInteriorIntersection2 = function (a) {
  var b;
  for (b = 0; b < this.result; b++)if (!this.intPt[b].equals2D(this.inputLines[a][0]) && !this.intPt[b].equals2D(this.inputLines[a][1]))return !0;
  return !1
};
jsts.algorithm.LineIntersector.prototype.isProper = function () {
  return this.hasIntersection() && this._isProper
};
jsts.algorithm.LineIntersector.prototype.getIntersectionAlongSegment = function (a, b) {
  this.computeIntLineIndex();
  return this.intPt[intLineIndex[a][b]]
};
jsts.algorithm.LineIntersector.prototype.getIndexAlongSegment = function (a, b) {
  this.computeIntLineIndex();
  return this.intLineIndex[a][b]
};
jsts.algorithm.LineIntersector.prototype.computeIntLineIndex = function (a) {
  var b = this.getEdgeDistance(a, 0), c = this.getEdgeDistance(a, 1);
  b > c ? (this.intLineIndex[a][0] = 0, this.intLineIndex[a][1] = 1) : (this.intLineIndex[a][0] = 1, this.intLineIndex[a][1] = 0)
};
jsts.algorithm.LineIntersector.prototype.getEdgeDistance = function (a, b) {
  return jsts.algorithm.LineIntersector.computeEdgeDistance(this.intPt[b], this.inputLines[a][0], this.inputLines[a][1])
};
jsts.algorithm.RobustLineIntersector = function () {
  jsts.algorithm.RobustLineIntersector.prototype.constructor.call(this)
};
jsts.algorithm.RobustLineIntersector.prototype = new jsts.algorithm.LineIntersector;
jsts.algorithm.RobustLineIntersector.prototype.computeIntersection = function (a, b, c) {
  if (4 === arguments.length) jsts.algorithm.LineIntersector.prototype.computeIntersection.apply(this, arguments); else if (this._isProper = !1, jsts.geom.Envelope.intersects(b, c, a) && 0 === jsts.algorithm.CGAlgorithms.orientationIndex(b, c, a) && 0 === jsts.algorithm.CGAlgorithms.orientationIndex(c, b, a)) {
    this._isProper = !0;
    if (a.equals(b) || a.equals(c)) this._isProper = !1;
    this.result = jsts.algorithm.LineIntersector.POINT_INTERSECTION
  } else this.result =
    jsts.algorithm.LineIntersector.NO_INTERSECTION
};
jsts.algorithm.RobustLineIntersector.prototype.computeIntersect = function (a, b, c, d) {
  this._isProper = !1;
  if (!jsts.geom.Envelope.intersects(a, b, c, d))return jsts.algorithm.LineIntersector.NO_INTERSECTION;
  var e = jsts.algorithm.CGAlgorithms.orientationIndex(a, b, c),
    f = jsts.algorithm.CGAlgorithms.orientationIndex(a, b, d);
  if (0 < e && 0 < f || 0 > e && 0 > f)return jsts.algorithm.LineIntersector.NO_INTERSECTION;
  var g = jsts.algorithm.CGAlgorithms.orientationIndex(c, d, a),
    h = jsts.algorithm.CGAlgorithms.orientationIndex(c, d, b);
  if (0 <
    g && 0 < h || 0 > g && 0 > h)return jsts.algorithm.LineIntersector.NO_INTERSECTION;
  if (0 === e && 0 === f && 0 === g && 0 === h)return this.computeCollinearIntersection(a, b, c, d);
  0 === e || 0 === f || 0 === g || 0 === h ? (this._isProper = !1, a.equals2D(c) || a.equals2D(d) ? this.intPt[0] = a : b.equals2D(c) || b.equals2D(d) ? this.intPt[0] = b : 0 === e ? this.intPt[0] = new jsts.geom.Coordinate(c) : 0 === f ? this.intPt[0] = new jsts.geom.Coordinate(d) : 0 === g ? this.intPt[0] = new jsts.geom.Coordinate(a) : 0 === h && (this.intPt[0] = new jsts.geom.Coordinate(b))) : (this._isProper = !0,
    this.intPt[0] = this.intersection(a, b, c, d));
  return jsts.algorithm.LineIntersector.POINT_INTERSECTION
};
jsts.algorithm.RobustLineIntersector.prototype.computeCollinearIntersection = function (a, b, c, d) {
  var e = jsts.geom.Envelope.intersects(a, b, c), f = jsts.geom.Envelope.intersects(a, b, d),
    g = jsts.geom.Envelope.intersects(c, d, a), h = jsts.geom.Envelope.intersects(c, d, b);
  return e && f ? (this.intPt[0] = c, this.intPt[1] = d, jsts.algorithm.LineIntersector.COLLINEAR_INTERSECTION) : g && h ? (this.intPt[0] = a, this.intPt[1] = b, jsts.algorithm.LineIntersector.COLLINEAR_INTERSECTION) : e && g ? (this.intPt[0] = c, this.intPt[1] = a, !c.equals(a) || f ||
  h ? jsts.algorithm.LineIntersector.COLLINEAR_INTERSECTION : jsts.algorithm.LineIntersector.POINT_INTERSECTION) : e && h ? (this.intPt[0] = c, this.intPt[1] = b, !c.equals(b) || f || g ? jsts.algorithm.LineIntersector.COLLINEAR_INTERSECTION : jsts.algorithm.LineIntersector.POINT_INTERSECTION) : f && g ? (this.intPt[0] = d, this.intPt[1] = a, !d.equals(a) || e || h ? jsts.algorithm.LineIntersector.COLLINEAR_INTERSECTION : jsts.algorithm.LineIntersector.POINT_INTERSECTION) : f && h ? (this.intPt[0] = d, this.intPt[1] = b, !d.equals(b) || e || g ? jsts.algorithm.LineIntersector.COLLINEAR_INTERSECTION :
    jsts.algorithm.LineIntersector.POINT_INTERSECTION) : jsts.algorithm.LineIntersector.NO_INTERSECTION
};
jsts.algorithm.RobustLineIntersector.prototype.intersection = function (a, b, c, d) {
  var e = this.intersectionWithNormalization(a, b, c, d);
  this.isInSegmentEnvelopes(e) || (e = jsts.algorithm.CentralEndpointIntersector.getIntersection(a, b, c, d));
  null !== this.precisionModel && this.precisionModel.makePrecise(e);
  return e
};
jsts.algorithm.RobustLineIntersector.prototype.intersectionWithNormalization = function (a, b, c, d) {
  a = new jsts.geom.Coordinate(a);
  b = new jsts.geom.Coordinate(b);
  c = new jsts.geom.Coordinate(c);
  var e = new jsts.geom.Coordinate(d);
  d = new jsts.geom.Coordinate;
  this.normalizeToEnvCentre(a, b, c, e, d);
  a = this.safeHCoordinateIntersection(a, b, c, e);
  a.x += d.x;
  a.y += d.y;
  return a
};
jsts.algorithm.RobustLineIntersector.prototype.safeHCoordinateIntersection = function (a, b, c, d) {
  var e = null;
  try {
    e = jsts.algorithm.HCoordinate.intersection(a, b, c, d)
  } catch (f) {
    if (f instanceof jsts.error.NotRepresentableError) e = jsts.algorithm.CentralEndpointIntersector.getIntersection(a, b, c, d); else throw f;
  }
  return e
};
jsts.algorithm.RobustLineIntersector.prototype.normalizeToMinimum = function (a, b, c, d, e) {
  e.x = this.smallestInAbsValue(a.x, b.x, c.x, d.x);
  e.y = this.smallestInAbsValue(a.y, b.y, c.y, d.y);
  a.x -= e.x;
  a.y -= e.y;
  b.x -= e.x;
  b.y -= e.y;
  c.x -= e.x;
  c.y -= e.y;
  d.x -= e.x;
  d.y -= e.y
};
jsts.algorithm.RobustLineIntersector.prototype.normalizeToEnvCentre = function (a, b, c, d, e) {
  var f = a.x < b.x ? a.x : b.x, g = a.y < b.y ? a.y : b.y, h = a.x > b.x ? a.x : b.x, l = a.y > b.y ? a.y : b.y,
    k = c.x < d.x ? c.x : d.x, m = c.y < d.y ? c.y : d.y, r = c.x > d.x ? c.x : d.x, n = c.y > d.y ? c.y : d.y;
  e.x = ((f > k ? f : k) + (h < r ? h : r)) / 2;
  e.y = ((g > m ? g : m) + (l < n ? l : n)) / 2;
  a.x -= e.x;
  a.y -= e.y;
  b.x -= e.x;
  b.y -= e.y;
  c.x -= e.x;
  c.y -= e.y;
  d.x -= e.x;
  d.y -= e.y
};
jsts.algorithm.RobustLineIntersector.prototype.smallestInAbsValue = function (a, b, c, d) {
  var e = Math.abs(a);
  Math.abs(b) < e && (a = b, e = Math.abs(b));
  Math.abs(c) < e && (a = c, e = Math.abs(c));
  Math.abs(d) < e && (a = d);
  return a
};
jsts.algorithm.RobustLineIntersector.prototype.isInSegmentEnvelopes = function (a) {
  var b = new jsts.geom.Envelope(this.inputLines[0][0], this.inputLines[0][1]),
    c = new jsts.geom.Envelope(this.inputLines[1][0], this.inputLines[1][1]);
  return b.contains(a) && c.contains(a)
};
jsts.noding.SegmentIntersector = function () {
};
jsts.noding.SegmentIntersector.prototype.processIntersections = jsts.abstractFunc;
jsts.noding.SegmentIntersector.prototype.isDone = jsts.abstractFunc;
(function () {
  var a = jsts.noding.SegmentIntersector, b = javascript.util.ArrayList;
  jsts.noding.InteriorIntersectionFinder = function (a) {
    this.li = a;
    this.intersections = new b;
    this.interiorIntersection = null
  };
  jsts.noding.InteriorIntersectionFinder.prototype = new a;
  jsts.noding.InteriorIntersectionFinder.constructor = jsts.noding.InteriorIntersectionFinder;
  jsts.noding.InteriorIntersectionFinder.prototype.findAllIntersections = !1;
  jsts.noding.InteriorIntersectionFinder.prototype.isCheckEndSegmentsOnly = !1;
  jsts.noding.InteriorIntersectionFinder.prototype.li =
    null;
  jsts.noding.InteriorIntersectionFinder.prototype.interiorIntersection = null;
  jsts.noding.InteriorIntersectionFinder.prototype.intSegments = null;
  jsts.noding.InteriorIntersectionFinder.prototype.intersections = null;
  jsts.noding.InteriorIntersectionFinder.prototype.setFindAllIntersections = function (a) {
    this.findAllIntersections = a
  };
  jsts.noding.InteriorIntersectionFinder.prototype.getIntersections = function () {
    return intersections
  };
  jsts.noding.InteriorIntersectionFinder.prototype.setCheckEndSegmentsOnly = function (a) {
    this.isCheckEndSegmentsOnly =
      a
  };
  jsts.noding.InteriorIntersectionFinder.prototype.hasIntersection = function () {
    return null != this.interiorIntersection
  };
  jsts.noding.InteriorIntersectionFinder.prototype.getInteriorIntersection = function () {
    return this.interiorIntersection
  };
  jsts.noding.InteriorIntersectionFinder.prototype.getIntersectionSegments = function () {
    return this.intSegments
  };
  jsts.noding.InteriorIntersectionFinder.prototype.processIntersections = function (a, b, e, f) {
    if (!(this.hasIntersection() || a == e && b == f || this.isCheckEndSegmentsOnly &&
      !this.isEndSegment(a, b) && !isEndSegment(e, f))) {
      var g = a.getCoordinates()[b];
      a = a.getCoordinates()[b + 1];
      b = e.getCoordinates()[f];
      e = e.getCoordinates()[f + 1];
      this.li.computeIntersection(g, a, b, e);
      this.li.hasIntersection() && this.li.isInteriorIntersection() && (this.intSegments = [], this.intSegments[0] = g, this.intSegments[1] = a, this.intSegments[2] = b, this.intSegments[3] = e, this.interiorIntersection = this.li.getIntersection(0), this.intersections.add(this.interiorIntersection))
    }
  };
  jsts.noding.InteriorIntersectionFinder.prototype.isEndSegment =
    function (a, b) {
      return 0 == b || b >= a.size() - 2 ? !0 : !1
    };
  jsts.noding.InteriorIntersectionFinder.prototype.isDone = function () {
    return this.findAllIntersections ? !1 : null != this.interiorIntersection
  }
})();
(function () {
  jsts.noding.Noder = function () {
  };
  jsts.noding.Noder.prototype.computeNodes = jsts.abstractFunc;
  jsts.noding.Noder.prototype.getNodedSubstrings = jsts.abstractFunc
})();
(function () {
  var a = jsts.noding.Noder;
  jsts.noding.SinglePassNoder = function () {
  };
  jsts.noding.SinglePassNoder.prototype = new a;
  jsts.noding.SinglePassNoder.constructor = jsts.noding.SinglePassNoder;
  jsts.noding.SinglePassNoder.prototype.segInt = null;
  jsts.noding.SinglePassNoder.prototype.setSegmentIntersector = function (a) {
    this.segInt = a
  }
})();
jsts.index.SpatialIndex = function () {
};
jsts.index.SpatialIndex.prototype.insert = function (a, b) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.index.SpatialIndex.prototype.query = function (a, b) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.index.SpatialIndex.prototype.remove = function (a, b) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.index.strtree.AbstractSTRtree = function (a) {
  void 0 !== a && (this.itemBoundables = [], jsts.util.Assert.isTrue(1 < a, "Node capacity must be greater than 1"), this.nodeCapacity = a)
};
jsts.index.strtree.AbstractSTRtree.IntersectsOp = function () {
};
jsts.index.strtree.AbstractSTRtree.IntersectsOp.prototype.intersects = function (a, b) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.index.strtree.AbstractSTRtree.prototype.root = null;
jsts.index.strtree.AbstractSTRtree.prototype.built = !1;
jsts.index.strtree.AbstractSTRtree.prototype.itemBoundables = null;
jsts.index.strtree.AbstractSTRtree.prototype.nodeCapacity = null;
jsts.index.strtree.AbstractSTRtree.prototype.build = function () {
  jsts.util.Assert.isTrue(!this.built);
  this.root = 0 === this.itemBoundables.length ? this.createNode(0) : this.createHigherLevels(this.itemBoundables, -1);
  this.built = !0
};
jsts.index.strtree.AbstractSTRtree.prototype.createNode = function (a) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.index.strtree.AbstractSTRtree.prototype.createParentBoundables = function (a, b) {
  jsts.util.Assert.isTrue(0 !== a.length);
  var c = [];
  c.push(this.createNode(b));
  for (var d = [], e = 0; e < a.length; e++)d.push(a[e]);
  d.sort(this.getComparator());
  for (e = 0; e < d.length; e++) {
    var f = d[e];
    this.lastNode(c).getChildBoundables().length === this.getNodeCapacity() && c.push(this.createNode(b));
    this.lastNode(c).addChildBoundable(f)
  }
  return c
};
jsts.index.strtree.AbstractSTRtree.prototype.lastNode = function (a) {
  return a[a.length - 1]
};
jsts.index.strtree.AbstractSTRtree.prototype.compareDoubles = function (a, b) {
  return a > b ? 1 : a < b ? -1 : 0
};
jsts.index.strtree.AbstractSTRtree.prototype.createHigherLevels = function (a, b) {
  jsts.util.Assert.isTrue(0 !== a.length);
  var c = this.createParentBoundables(a, b + 1);
  return 1 === c.length ? c[0] : this.createHigherLevels(c, b + 1)
};
jsts.index.strtree.AbstractSTRtree.prototype.getRoot = function () {
  this.built || this.build();
  return this.root
};
jsts.index.strtree.AbstractSTRtree.prototype.getNodeCapacity = function () {
  return this.nodeCapacity
};
jsts.index.strtree.AbstractSTRtree.prototype.size = function () {
  if (1 === arguments.length)return this.size2(arguments[0]);
  this.built || this.build();
  return 0 === this.itemBoundables.length ? 0 : this.size2(root)
};
jsts.index.strtree.AbstractSTRtree.prototype.size2 = function (a) {
  var b = 0;
  a = a.getChildBoundables();
  for (var c = 0; c < a.length; c++) {
    var d = a[c];
    d instanceof jsts.index.strtree.AbstractNode ? b += this.size(d) : d instanceof jsts.index.strtree.ItemBoundable && (b += 1)
  }
  return b
};
jsts.index.strtree.AbstractSTRtree.prototype.depth = function () {
  if (1 === arguments.length)return this.depth2(arguments[0]);
  this.built || this.build();
  return 0 === this.itemBoundables.length ? 0 : this.depth2(root)
};
jsts.index.strtree.AbstractSTRtree.prototype.depth2 = function () {
  for (var a = 0, b = node.getChildBoundables(), c = 0; c < b.length; c++) {
    var d = b[c];
    d instanceof jsts.index.strtree.AbstractNode && (d = this.depth(d), d > a && (a = d))
  }
  return a + 1
};
jsts.index.strtree.AbstractSTRtree.prototype.insert = function (a, b) {
  jsts.util.Assert.isTrue(!this.built, "Cannot insert items into an STR packed R-tree after it has been built.");
  this.itemBoundables.push(new jsts.index.strtree.ItemBoundable(a, b))
};
jsts.index.strtree.AbstractSTRtree.prototype.query = function (a) {
  1 < arguments.length && this.query2.apply(this, arguments);
  this.built || this.build();
  var b = [];
  if (0 === this.itemBoundables.length)return jsts.util.Assert.isTrue(null === this.root.getBounds()), b;
  this.getIntersectsOp().intersects(this.root.getBounds(), a) && this.query3(a, this.root, b);
  return b
};
jsts.index.strtree.AbstractSTRtree.prototype.query2 = function (a, b) {
  2 < arguments.length && this.query3.apply(this, arguments);
  this.built || this.build();
  0 === this.itemBoundables.length && jsts.util.Assert.isTrue(null === this.root.getBounds());
  this.getIntersectsOp().intersects(this.root.getBounds(), a) && this.query4(a, this.root, b)
};
jsts.index.strtree.AbstractSTRtree.prototype.query3 = function (a, b, c) {
  arguments[2] instanceof Array || this.query4.apply(this, arguments);
  for (var d = b.getChildBoundables(), e = 0; e < d.length; e++) {
    var f = d[e];
    this.getIntersectsOp().intersects(f.getBounds(), a) && (f instanceof jsts.index.strtree.AbstractNode ? this.query3(a, f, c) : f instanceof jsts.index.strtree.ItemBoundable ? c.push(f.getItem()) : jsts.util.Assert.shouldNeverReachHere())
  }
};
jsts.index.strtree.AbstractSTRtree.prototype.query4 = function (a, b, c) {
  b = b.getChildBoundables();
  for (var d = 0; d < b.length; d++) {
    var e = b[d];
    this.getIntersectsOp().intersects(e.getBounds(), a) && (e instanceof jsts.index.strtree.AbstractNode ? this.query4(a, e, c) : e instanceof jsts.index.strtree.ItemBoundable ? c.visitItem(e.getItem()) : jsts.util.Assert.shouldNeverReachHere())
  }
};
jsts.index.strtree.AbstractSTRtree.prototype.getIntersectsOp = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.index.strtree.AbstractSTRtree.prototype.itemsTree = function () {
  if (1 === arguments.length)return this.itemsTree2.apply(this, arguments);
  this.built || this.build();
  var a = this.itemsTree2(this.root);
  return null === a ? [] : a
};
jsts.index.strtree.AbstractSTRtree.prototype.itemsTree2 = function (a) {
  var b = [];
  a = a.getChildBoundables();
  for (var c = 0; c < a.length; c++) {
    var d = a[c];
    d instanceof jsts.index.strtree.AbstractNode ? (d = this.itemsTree(d), null != d && b.push(d)) : d instanceof jsts.index.strtree.ItemBoundable ? b.push(d.getItem()) : jsts.util.Assert.shouldNeverReachHere()
  }
  return 0 >= b.length ? null : b
};
jsts.index.strtree.AbstractSTRtree.prototype.remove = function (a, b) {
  this.built || this.build();
  0 === this.itemBoundables.length && jsts.util.Assert.isTrue(null == this.root.getBounds());
  return this.getIntersectsOp().intersects(this.root.getBounds(), a) ? this.remove2(a, this.root, b) : !1
};
jsts.index.strtree.AbstractSTRtree.prototype.remove2 = function (a, b, c) {
  var d = this.removeItem(b, c);
  if (d)return !0;
  var e = null;
  b = b.getChildBoundables();
  for (var f = 0; f < b.length; f++) {
    var g = b[f];
    if (this.getIntersectsOp().intersects(g.getBounds(), a) && g instanceof jsts.index.strtree.AbstractNode && (d = this.remove(a, g, c))) {
      e = g;
      break
    }
  }
  null != e && 0 === e.getChildBoundables().length && b.splice(b.indexOf(e), 1);
  return d
};
jsts.index.strtree.AbstractSTRtree.prototype.removeItem = function (a, b) {
  for (var c = null, d = a.getChildBoundables(), e = 0; e < d.length; e++) {
    var f = d[e];
    f instanceof jsts.index.strtree.ItemBoundable && f.getItem() === b && (c = f)
  }
  return null !== c ? (d.splice(d.indexOf(c), 1), !0) : !1
};
jsts.index.strtree.AbstractSTRtree.prototype.boundablesAtLevel = function (a) {
  if (1 < arguments.length) this.boundablesAtLevel2.apply(this, arguments); else {
    var b = [];
    this.boundablesAtLevel2(a, this.root, b);
    return b
  }
};
jsts.index.strtree.AbstractSTRtree.prototype.boundablesAtLevel2 = function (a, b, c) {
  jsts.util.Assert.isTrue(-2 < a);
  if (b.getLevel() === a) c.add(b); else {
    b = node.getChildBoundables();
    for (var d = 0; d < b.length; d++) {
      var e = b[d];
      e instanceof jsts.index.strtree.AbstractNode ? this.boundablesAtLevel(a, e, c) : (jsts.util.Assert.isTrue(e instanceof jsts.index.strtree.ItemBoundable), -1 === a && c.add(e))
    }
  }
};
jsts.index.strtree.AbstractSTRtree.prototype.getComparator = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.index.strtree.STRtree = function (a) {
  a = a || jsts.index.strtree.STRtree.DEFAULT_NODE_CAPACITY;
  jsts.index.strtree.AbstractSTRtree.call(this, a)
};
jsts.index.strtree.STRtree.prototype = new jsts.index.strtree.AbstractSTRtree;
jsts.index.strtree.STRtree.constructor = jsts.index.strtree.STRtree;
jsts.index.strtree.STRtree.prototype.xComparator = function (a, b) {
  return jsts.index.strtree.AbstractSTRtree.prototype.compareDoubles(jsts.index.strtree.STRtree.prototype.centreX(a.getBounds()), jsts.index.strtree.STRtree.prototype.centreX(b.getBounds()))
};
jsts.index.strtree.STRtree.prototype.yComparator = function (a, b) {
  return jsts.index.strtree.AbstractSTRtree.prototype.compareDoubles(jsts.index.strtree.STRtree.prototype.centreY(a.getBounds()), jsts.index.strtree.STRtree.prototype.centreY(b.getBounds()))
};
jsts.index.strtree.STRtree.prototype.centreX = function (a) {
  return jsts.index.strtree.STRtree.prototype.avg(a.getMinX(), a.getMaxX())
};
jsts.index.strtree.STRtree.prototype.centreY = function (a) {
  return jsts.index.strtree.STRtree.prototype.avg(a.getMinY(), a.getMaxY())
};
jsts.index.strtree.STRtree.prototype.avg = function (a, b) {
  return (a + b) / 2
};
jsts.index.strtree.STRtree.prototype.intersectsOp = {
  intersects: function (a, b) {
    return a.intersects(b)
  }
};
jsts.index.strtree.STRtree.prototype.createParentBoundables = function (a, b) {
  jsts.util.Assert.isTrue(0 !== a.length);
  for (var c = Math.ceil(a.length / this.getNodeCapacity()), d = [], e = 0; e < a.length; e++)d.push(a[e]);
  d.sort(this.xComparator);
  c = this.verticalSlices(d, Math.ceil(Math.sqrt(c)));
  return this.createParentBoundablesFromVerticalSlices(c, b)
};
jsts.index.strtree.STRtree.prototype.createParentBoundablesFromVerticalSlices = function (a, b) {
  jsts.util.Assert.isTrue(0 < a.length);
  for (var c = [], d = 0; d < a.length; d++)c = c.concat(this.createParentBoundablesFromVerticalSlice(a[d], b));
  return c
};
jsts.index.strtree.STRtree.prototype.createParentBoundablesFromVerticalSlice = function (a, b) {
  return jsts.index.strtree.AbstractSTRtree.prototype.createParentBoundables.call(this, a, b)
};
jsts.index.strtree.STRtree.prototype.verticalSlices = function (a, b) {
  for (var c = Math.ceil(a.length / b), d = [], e = 0, f, g, h = 0; h < b; h++)for (d[h] = [], f = 0; e < a.length && f < c;)g = a[e++], d[h].push(g), f++;
  return d
};
jsts.index.strtree.STRtree.DEFAULT_NODE_CAPACITY = 10;
jsts.index.strtree.STRtree.prototype.createNode = function (a) {
  a = new jsts.index.strtree.AbstractNode(a);
  a.computeBounds = function () {
    for (var a = null, c = this.getChildBoundables(), d = 0; d < c.length; d++) {
      var e = c[d];
      null === a ? a = new jsts.geom.Envelope(e.getBounds()) : a.expandToInclude(e.getBounds())
    }
    return a
  };
  return a
};
jsts.index.strtree.STRtree.prototype.getIntersectsOp = function () {
  return this.intersectsOp
};
jsts.index.strtree.STRtree.prototype.insert = function (a, b) {
  a.isNull() || jsts.index.strtree.AbstractSTRtree.prototype.insert.call(this, a, b)
};
jsts.index.strtree.STRtree.prototype.query = function (a, b) {
  return jsts.index.strtree.AbstractSTRtree.prototype.query.apply(this, arguments)
};
jsts.index.strtree.STRtree.prototype.remove = function (a, b) {
  return jsts.index.strtree.AbstractSTRtree.prototype.remove.call(this, a, b)
};
jsts.index.strtree.STRtree.prototype.size = function () {
  return jsts.index.strtree.AbstractSTRtree.prototype.size.call(this)
};
jsts.index.strtree.STRtree.prototype.depth = function () {
  return jsts.index.strtree.AbstractSTRtree.prototype.depth.call(this)
};
jsts.index.strtree.STRtree.prototype.getComparator = function () {
  return this.yComparator
};
jsts.index.strtree.STRtree.prototype.nearestNeighbour = function (a) {
  a = new jsts.index.strtree.BoundablePair(this.getRoot(), this.getRoot(), a);
  return this.nearestNeighbour4(a)
};
jsts.index.strtree.STRtree.prototype.nearestNeighbour2 = function (a, b, c) {
  a = new jsts.index.strtree.ItemBoundable(a, b);
  c = new jsts.index.strtree.BoundablePair(this.getRoot(), a, c);
  return this.nearestNeighbour4(c)[0]
};
jsts.index.strtree.STRtree.prototype.nearestNeighbour3 = function (a, b) {
  var c = new jsts.index.strtree.BoundablePair(this.getRoot(), a.getRoot(), b);
  return this.nearestNeighbour4(c)
};
jsts.index.strtree.STRtree.prototype.nearestNeighbour4 = function (a) {
  return this.nearestNeighbour5(a, Double.POSITIVE_INFINITY)
};
jsts.index.strtree.STRtree.prototype.nearestNeighbour5 = function (a, b) {
  var c = b, d = null, e = [];
  for (e.push(a); !e.isEmpty() && 0 < c;) {
    var f = e.pop(), g = f.getDistance();
    if (g >= c)break;
    f.isLeaves() ? (c = g, d = f) : f.expandToQueue(e, c)
  }
  return [d.getBoundable(0).getItem(), d.getBoundable(1).getItem()]
};
jsts.noding.SegmentString = function () {
};
jsts.noding.SegmentString.prototype.getData = jsts.abstractFunc;
jsts.noding.SegmentString.prototype.setData = jsts.abstractFunc;
jsts.noding.SegmentString.prototype.size = jsts.abstractFunc;
jsts.noding.SegmentString.prototype.getCoordinate = jsts.abstractFunc;
jsts.noding.SegmentString.prototype.getCoordinates = jsts.abstractFunc;
jsts.noding.SegmentString.prototype.isClosed = jsts.abstractFunc;
jsts.noding.NodableSegmentString = function () {
};
jsts.noding.NodableSegmentString.prototype = new jsts.noding.SegmentString;
jsts.noding.NodableSegmentString.prototype.addIntersection = jsts.abstractFunc;
jsts.noding.NodedSegmentString = function (a, b) {
  this.nodeList = new jsts.noding.SegmentNodeList(this);
  this.pts = a;
  this.data = b
};
jsts.noding.NodedSegmentString.prototype = new jsts.noding.NodableSegmentString;
jsts.noding.NodedSegmentString.constructor = jsts.noding.NodedSegmentString;
jsts.noding.NodedSegmentString.getNodedSubstrings = function (a) {
  if (2 === arguments.length) jsts.noding.NodedSegmentString.getNodedSubstrings2.apply(this, arguments); else {
    var b = new javascript.util.ArrayList;
    jsts.noding.NodedSegmentString.getNodedSubstrings2(a, b);
    return b
  }
};
jsts.noding.NodedSegmentString.getNodedSubstrings2 = function (a, b) {
  for (var c = a.iterator(); c.hasNext();)c.next().getNodeList().addSplitEdges(b)
};
jsts.noding.NodedSegmentString.prototype.nodeList = null;
jsts.noding.NodedSegmentString.prototype.pts = null;
jsts.noding.NodedSegmentString.prototype.data = null;
jsts.noding.NodedSegmentString.prototype.getData = function () {
  return this.data
};
jsts.noding.NodedSegmentString.prototype.setData = function (a) {
  this.data = a
};
jsts.noding.NodedSegmentString.prototype.getNodeList = function () {
  return this.nodeList
};
jsts.noding.NodedSegmentString.prototype.size = function () {
  return this.pts.length
};
jsts.noding.NodedSegmentString.prototype.getCoordinate = function (a) {
  return this.pts[a]
};
jsts.noding.NodedSegmentString.prototype.getCoordinates = function () {
  return this.pts
};
jsts.noding.NodedSegmentString.prototype.isClosed = function () {
  return this.pts[0].equals(this.pts[this.pts.length - 1])
};
jsts.noding.NodedSegmentString.prototype.getSegmentOctant = function (a) {
  return a === this.pts.length - 1 ? -1 : this.safeOctant(this.getCoordinate(a), this.getCoordinate(a + 1))
};
jsts.noding.NodedSegmentString.prototype.safeOctant = function (a, b) {
  return a.equals2D(b) ? 0 : jsts.noding.Octant.octant(a, b)
};
jsts.noding.NodedSegmentString.prototype.addIntersections = function (a, b, c) {
  for (var d = 0; d < a.getIntersectionNum(); d++)this.addIntersection(a, b, c, d)
};
jsts.noding.NodedSegmentString.prototype.addIntersection = function (a, b, c, d) {
  if (a instanceof jsts.geom.Coordinate) this.addIntersection2.apply(this, arguments); else {
    var e = new jsts.geom.Coordinate(a.getIntersection(d));
    this.addIntersection2(e, b)
  }
};
jsts.noding.NodedSegmentString.prototype.addIntersection2 = function (a, b) {
  this.addIntersectionNode(a, b)
};
jsts.noding.NodedSegmentString.prototype.addIntersectionNode = function (a, b) {
  var c = b, d = c + 1;
  d < this.pts.length && a.equals2D(this.pts[d]) && (c = d);
  return this.nodeList.add(a, c)
};
jsts.noding.NodedSegmentString.prototype.toString = function () {
  var a = new jsts.geom.GeometryFactory;
  return (new jsts.io.WKTWriter).write(a.createLineString(this.pts))
};
jsts.index.chain.MonotoneChainBuilder = function () {
};
jsts.index.chain.MonotoneChainBuilder.toIntArray = function (a) {
  for (var b = [], c = 0; c < a.length; c++)b[c] = a[c];
  return b
};
jsts.index.chain.MonotoneChainBuilder.getChains = function (a) {
  return 2 === arguments.length ? jsts.index.chain.MonotoneChainBuilder.getChains2.apply(this, arguments) : jsts.index.chain.MonotoneChainBuilder.getChains2(a, null)
};
jsts.index.chain.MonotoneChainBuilder.getChains2 = function (a, b) {
  for (var c = [], d = jsts.index.chain.MonotoneChainBuilder.getChainStartIndices(a), e = 0; e < d.length - 1; e++) {
    var f = new jsts.index.chain.MonotoneChain(a, d[e], d[e + 1], b);
    c.push(f)
  }
  return c
};
jsts.index.chain.MonotoneChainBuilder.getChainStartIndices = function (a) {
  var b = 0, c = [];
  c.push(b);
  do b = jsts.index.chain.MonotoneChainBuilder.findChainEnd(a, b), c.push(b); while (b < a.length - 1);
  return jsts.index.chain.MonotoneChainBuilder.toIntArray(c)
};
jsts.index.chain.MonotoneChainBuilder.findChainEnd = function (a, b) {
  for (var c = b; c < a.length - 1 && a[c].equals2D(a[c + 1]);)c++;
  if (c >= a.length - 1)return a.length - 1;
  for (var c = jsts.geomgraph.Quadrant.quadrant(a[c], a[c + 1]), d = b + 1; d < a.length && (a[d - 1].equals2D(a[d]) || jsts.geomgraph.Quadrant.quadrant(a[d - 1], a[d]) === c);)d++;
  return d - 1
};
jsts.geom.LineSegment = function (a, b) {
  void 0 === a ? (this.p0 = new jsts.geom.Coordinate, this.p1 = new jsts.geom.Coordinate) : (this.p0 = a, this.p1 = b)
};
jsts.geom.LineSegment.prototype.p0 = null;
jsts.geom.LineSegment.prototype.p1 = null;
jsts.geom.LineSegment.prototype.getLength = function () {
  return this.p0.distance(p1)
};
jsts.geom.LineSegment.prototype.isHorizontal = function () {
  return this.p0.y === this.p1.y
};
jsts.geom.LineSegment.prototype.isVertical = function () {
  return this.p0.x === this.p1.x
};
jsts.geom.LineSegment.prototype.reverse = function () {
  var a = this.p0;
  this.p0 = this.p1;
  this.p1 = a
};
jsts.geom.LineSegment.prototype.projectionFactor = function (a) {
  if (a.equals(this.p0))return 0;
  if (a.equals(this.p1))return 1;
  var b = this.p1.x - this.p0.x, c = this.p1.y - this.p0.y;
  return ((a.x - this.p0.x) * b + (a.y - this.p0.y) * c) / (b * b + c * c)
};
jsts.geom.LineSegment.prototype.closestPoint = function (a) {
  var b = this.projectionFactor(a);
  if (0 < b && 1 > b)return this.project(a);
  b = this.p0.distance(a);
  a = this.p1.distance(a);
  return b < a ? this.p0 : this.p1
};
jsts.geom.LineSegment.prototype.closestPoints = function (a) {
  var b = this.intersection(a);
  if (null !== b)return [b, b];
  var b = [], c = Number.MAX_VALUE, d;
  d = this.closestPoint(a.p0);
  c = d.distance(a.p0);
  b[0] = d;
  b[1] = a.p0;
  var e = this.closestPoint(a.p1);
  d = e.distance(a.p1);
  d < c && (c = d, b[0] = e, b[1] = a.p1);
  e = a.closestPoint(this.p0);
  d = e.distance(this.p0);
  d < c && (c = d, b[0] = this.p0, b[1] = e);
  a = a.closestPoint(this.p1);
  d = a.distance(this.p1);
  d < c && (b[0] = this.p1, b[1] = a);
  return b
};
jsts.geom.LineSegment.prototype.intersection = function (a) {
  var b = new jsts.algorithm.RobustLineIntersector;
  b.computeIntersection(this.p0, this.p1, a.p0, a.p1);
  return b.hasIntersection() ? b.getIntersection(0) : null
};
jsts.geom.LineSegment.prototype.project = function (a) {
  if (a.equals(this.p0) || a.equals(this.p1))return new jsts.geom.Coordinate(a);
  a = this.projectionFactor(a);
  var b = new jsts.geom.Coordinate;
  b.x = this.p0.x + a * (this.p1.x - this.p0.x);
  b.y = this.p0.y + a * (this.p1.y - this.p0.y);
  return b
};
jsts.geom.LineSegment.prototype.setCoordinates = function (a) {
  a instanceof jsts.geom.Coordinate ? this.setCoordinates2.apply(this, arguments) : this.setCoordinates2(a.p0, a.p1)
};
jsts.geom.LineSegment.prototype.setCoordinates2 = function (a, b) {
  this.p0.x = a.x;
  this.p0.y = a.y;
  this.p1.x = b.x;
  this.p1.y = b.y
};
jsts.geom.LineSegment.prototype.distance = function (a) {
  return jsts.algorithm.CGAlgorithms.distancePointLine(a, this.p0, this.p1)
};
jsts.index.chain.MonotoneChainOverlapAction = function () {
  this.tempEnv1 = new jsts.geom.Envelope;
  this.tempEnv2 = new jsts.geom.Envelope;
  this.overlapSeg1 = new jsts.geom.LineSegment;
  this.overlapSeg2 = new jsts.geom.LineSegment
};
jsts.index.chain.MonotoneChainOverlapAction.prototype.tempEnv1 = null;
jsts.index.chain.MonotoneChainOverlapAction.prototype.tempEnv2 = null;
jsts.index.chain.MonotoneChainOverlapAction.prototype.overlapSeg1 = null;
jsts.index.chain.MonotoneChainOverlapAction.prototype.overlapSeg2 = null;
jsts.index.chain.MonotoneChainOverlapAction.prototype.overlap = function (a, b, c, d) {
  this.mc1.getLineSegment(b, this.overlapSeg1);
  this.mc2.getLineSegment(d, this.overlapSeg2);
  this.overlap2(this.overlapSeg1, this.overlapSeg2)
};
jsts.index.chain.MonotoneChainOverlapAction.prototype.overlap2 = function (a, b) {
};
(function () {
  var a = jsts.noding.SinglePassNoder, b = jsts.index.strtree.STRtree, c = jsts.noding.NodedSegmentString,
    d = jsts.index.chain.MonotoneChainBuilder, e = function (a) {
      this.si = a
    };
  e.prototype = new jsts.index.chain.MonotoneChainOverlapAction;
  e.constructor = e;
  e.prototype.si = null;
  e.prototype.overlap = function (a, b, c, d) {
    a = a.getContext();
    c = c.getContext();
    this.si.processIntersections(a, b, c, d)
  };
  jsts.noding.MCIndexNoder = function () {
    this.monoChains = [];
    this.index = new b
  };
  jsts.noding.MCIndexNoder.prototype = new a;
  jsts.noding.MCIndexNoder.constructor =
    jsts.noding.MCIndexNoder;
  jsts.noding.MCIndexNoder.prototype.monoChains = null;
  jsts.noding.MCIndexNoder.prototype.index = null;
  jsts.noding.MCIndexNoder.prototype.idCounter = 0;
  jsts.noding.MCIndexNoder.prototype.nodedSegStrings = null;
  jsts.noding.MCIndexNoder.prototype.nOverlaps = 0;
  jsts.noding.MCIndexNoder.prototype.getMonotoneChains = function () {
    return this.monoChains
  };
  jsts.noding.MCIndexNoder.prototype.getIndex = function () {
    return this.index
  };
  jsts.noding.MCIndexNoder.prototype.getNodedSubstrings = function () {
    return c.getNodedSubstrings(this.nodedSegStrings)
  };
  jsts.noding.MCIndexNoder.prototype.computeNodes = function (a) {
    this.nodedSegStrings = a;
    for (a = a.iterator(); a.hasNext();)this.add(a.next());
    this.intersectChains()
  };
  jsts.noding.MCIndexNoder.prototype.intersectChains = function () {
    for (var a = new e(this.segInt), b = 0; b < this.monoChains.length; b++)for (var c = this.monoChains[b], d = this.index.query(c.getEnvelope()), k = 0; k < d.length; k++) {
      var m = d[k];
      m.getId() > c.getId() && (c.computeOverlaps(m, a), this.nOverlaps++);
      if (this.segInt.isDone())return
    }
  };
  jsts.noding.MCIndexNoder.prototype.add =
    function (a) {
      a = d.getChains(a.getCoordinates(), a);
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        c.setId(this.idCounter++);
        this.index.insert(c.getEnvelope(), c);
        this.monoChains.push(c)
      }
    }
})();
(function () {
  var a = jsts.algorithm.RobustLineIntersector, b = jsts.noding.InteriorIntersectionFinder,
    c = jsts.noding.MCIndexNoder;
  jsts.noding.FastNodingValidator = function (b) {
    this.li = new a;
    this.segStrings = b
  };
  jsts.noding.FastNodingValidator.prototype.li = null;
  jsts.noding.FastNodingValidator.prototype.segStrings = null;
  jsts.noding.FastNodingValidator.prototype.findAllIntersections = !1;
  jsts.noding.FastNodingValidator.prototype.segInt = null;
  jsts.noding.FastNodingValidator.prototype._isValid = !0;
  jsts.noding.FastNodingValidator.prototype.setFindAllIntersections =
    function (a) {
      this.findAllIntersections = a
    };
  jsts.noding.FastNodingValidator.prototype.getIntersections = function () {
    return segInt.getIntersections()
  };
  jsts.noding.FastNodingValidator.prototype.isValid = function () {
    this.execute();
    return this._isValid
  };
  jsts.noding.FastNodingValidator.prototype.getErrorMessage = function () {
    if (this._isValid)return "no intersections found";
    var a = this.segInt.getIntersectionSegments();
    return "found non-noded intersection between " + jsts.io.WKTWriter.toLineString(a[0], a[1]) + " and " + jsts.io.WKTWriter.toLineString(a[2],
        a[3])
  };
  jsts.noding.FastNodingValidator.prototype.checkValid = function () {
    this.execute();
    if (!this._isValid)throw new jsts.error.TopologyError(this.getErrorMessage(), this.segInt.getInteriorIntersection());
  };
  jsts.noding.FastNodingValidator.prototype.execute = function () {
    null == this.segInt && this.checkInteriorIntersections()
  };
  jsts.noding.FastNodingValidator.prototype.checkInteriorIntersections = function () {
    this._isValid = !0;
    this.segInt = new b(this.li);
    this.segInt.setFindAllIntersections(this.findAllIntersections);
    var a = new c;
    a.setSegmentIntersector(this.segInt);
    a.computeNodes(this.segStrings);
    this.segInt.hasIntersection() && (this._isValid = !1)
  }
})();
(function () {
  jsts.noding.BasicSegmentString = function (a, b) {
    this.pts = a;
    this.data = b
  };
  jsts.noding.BasicSegmentString.prototype = new jsts.noding.SegmentString;
  jsts.noding.BasicSegmentString.prototype.pts = null;
  jsts.noding.BasicSegmentString.prototype.data = null;
  jsts.noding.BasicSegmentString.prototype.getData = function () {
    return this.data
  };
  jsts.noding.BasicSegmentString.prototype.setData = function (a) {
    this.data = a
  };
  jsts.noding.BasicSegmentString.prototype.size = function () {
    return this.pts.length
  };
  jsts.noding.BasicSegmentString.prototype.getCoordinate =
    function (a) {
      return this.pts[a]
    };
  jsts.noding.BasicSegmentString.prototype.getCoordinates = function () {
    return this.pts
  };
  jsts.noding.BasicSegmentString.prototype.isClosed = function () {
    return this.pts[0].equals(this.pts[this.pts.length - 1])
  };
  jsts.noding.BasicSegmentString.prototype.getSegmentOctant = function (a) {
    return a == this.pts.length - 1 ? -1 : jsts.noding.Octant.octant(this.getCoordinate(a), this.getCoordinate(a + 1))
  }
})();
(function () {
  var a = jsts.noding.FastNodingValidator, b = jsts.noding.BasicSegmentString, c = javascript.util.ArrayList;
  jsts.geomgraph.EdgeNodingValidator = function (b) {
    this.nv = new a(jsts.geomgraph.EdgeNodingValidator.toSegmentStrings(b))
  };
  jsts.geomgraph.EdgeNodingValidator.checkValid = function (a) {
    (new jsts.geomgraph.EdgeNodingValidator(a)).checkValid()
  };
  jsts.geomgraph.EdgeNodingValidator.toSegmentStrings = function (a) {
    var e = new c;
    for (a = a.iterator(); a.hasNext();) {
      var f = a.next();
      e.add(new b(f.getCoordinates(), f))
    }
    return e
  };
  jsts.geomgraph.EdgeNodingValidator.prototype.nv = null;
  jsts.geomgraph.EdgeNodingValidator.prototype.checkValid = function () {
    this.nv.checkValid()
  }
})();
jsts.operation.GeometryGraphOperation = function (a, b, c) {
  this.li = new jsts.algorithm.RobustLineIntersector;
  this.arg = [];
  void 0 !== a && (void 0 === b ? (this.setComputationPrecision(a.getPrecisionModel()), this.arg[0] = new jsts.geomgraph.GeometryGraph(0, a)) : (c = c || jsts.algorithm.BoundaryNodeRule.OGC_SFS_BOUNDARY_RULE, 0 <= a.getPrecisionModel().compareTo(b.getPrecisionModel()) ? this.setComputationPrecision(a.getPrecisionModel()) : this.setComputationPrecision(b.getPrecisionModel()), this.arg[0] = new jsts.geomgraph.GeometryGraph(0,
    a, c), this.arg[1] = new jsts.geomgraph.GeometryGraph(1, b, c)))
};
jsts.operation.GeometryGraphOperation.prototype.li = null;
jsts.operation.GeometryGraphOperation.prototype.resultPrecisionModel = null;
jsts.operation.GeometryGraphOperation.prototype.arg = null;
jsts.operation.GeometryGraphOperation.prototype.getArgGeometry = function (a) {
  return arg[a].getGeometry()
};
jsts.operation.GeometryGraphOperation.prototype.setComputationPrecision = function (a) {
  this.resultPrecisionModel = a;
  this.li.setPrecisionModel(this.resultPrecisionModel)
};
jsts.operation.overlay.PolygonBuilder = function (a) {
  this.shellList = [];
  this.geometryFactory = a
};
jsts.operation.overlay.PolygonBuilder.prototype.geometryFactory = null;
jsts.operation.overlay.PolygonBuilder.prototype.shellList = null;
jsts.operation.overlay.PolygonBuilder.prototype.add = function (a) {
  2 === arguments.length ? this.add2.apply(this, arguments) : this.add2(a.getEdgeEnds(), a.getNodes())
};
jsts.operation.overlay.PolygonBuilder.prototype.add2 = function (a, b) {
  jsts.geomgraph.PlanarGraph.linkResultDirectedEdges(b);
  var c = this.buildMaximalEdgeRings(a), d = [], c = this.buildMinimalEdgeRings(c, this.shellList, d);
  this.sortShellsAndHoles(c, this.shellList, d);
  this.placeFreeHoles(this.shellList, d)
};
jsts.operation.overlay.PolygonBuilder.prototype.getPolygons = function () {
  return this.computePolygons(this.shellList)
};
jsts.operation.overlay.PolygonBuilder.prototype.buildMaximalEdgeRings = function (a) {
  var b = [];
  for (a = a.iterator(); a.hasNext();) {
    var c = a.next();
    c.isInResult() && c.getLabel().isArea() && null == c.getEdgeRing() && (c = new jsts.operation.overlay.MaximalEdgeRing(c, this.geometryFactory), b.push(c), c.setInResult())
  }
  return b
};
jsts.operation.overlay.PolygonBuilder.prototype.buildMinimalEdgeRings = function (a, b, c) {
  for (var d = [], e = 0; e < a.length; e++) {
    var f = a[e];
    if (2 < f.getMaxNodeDegree()) {
      f.linkDirectedEdgesForMinimalEdgeRings();
      var f = f.buildMinimalRings(), g = this.findShell(f);
      null !== g ? (this.placePolygonHoles(g, f), b.push(g)) : c = c.concat(f)
    } else d.push(f)
  }
  return d
};
jsts.operation.overlay.PolygonBuilder.prototype.findShell = function (a) {
  for (var b = 0, c = null, d = 0; d < a.length; d++) {
    var e = a[d];
    e.isHole() || (c = e, b++)
  }
  jsts.util.Assert.isTrue(1 >= b, "found two shells in MinimalEdgeRing list");
  return c
};
jsts.operation.overlay.PolygonBuilder.prototype.placePolygonHoles = function (a, b) {
  for (var c = 0; c < b.length; c++) {
    var d = b[c];
    d.isHole() && d.setShell(a)
  }
};
jsts.operation.overlay.PolygonBuilder.prototype.sortShellsAndHoles = function (a, b, c) {
  for (var d = 0; d < a.length; d++) {
    var e = a[d];
    e.isHole() ? c.push(e) : b.push(e)
  }
};
jsts.operation.overlay.PolygonBuilder.prototype.placeFreeHoles = function (a, b) {
  for (var c = 0; c < b.length; c++) {
    var d = b[c];
    if (null == d.getShell()) {
      var e = this.findEdgeRingContaining(d, a);
      if (null === e)throw new jsts.error.TopologyError("unable to assign hole to a shell", d.getCoordinate(0));
      d.setShell(e)
    }
  }
};
jsts.operation.overlay.PolygonBuilder.prototype.findEdgeRingContaining = function (a, b) {
  for (var c = a.getLinearRing(), d = c.getEnvelopeInternal(), c = c.getCoordinateN(0), e = null, f = null, g = 0; g < b.length; g++) {
    var h = b[g], l = h.getLinearRing(), k = l.getEnvelopeInternal();
    null !== e && (f = e.getLinearRing().getEnvelopeInternal());
    var m = !1;
    k.contains(d) && jsts.algorithm.CGAlgorithms.isPointInRing(c, l.getCoordinates()) && (m = !0);
    m && (null == e || f.contains(k)) && (e = h)
  }
  return e
};
jsts.operation.overlay.PolygonBuilder.prototype.computePolygons = function (a) {
  for (var b = new javascript.util.ArrayList, c = 0; c < a.length; c++) {
    var d = a[c].toPolygon(this.geometryFactory);
    b.add(d)
  }
  return b
};
jsts.operation.overlay.PolygonBuilder.prototype.containsPoint = function (a) {
  for (var b = 0; b < this.shellList.length; b++)if (this.shellList[b].containsPoint(a))return !0;
  return !1
};
(function () {
  var a = jsts.util.Assert, b = javascript.util.ArrayList, c = function (a, c, f) {
    this.lineEdgesList = new b;
    this.resultLineList = new b;
    this.op = a;
    this.geometryFactory = c;
    this.ptLocator = f
  };
  c.prototype.op = null;
  c.prototype.geometryFactory = null;
  c.prototype.ptLocator = null;
  c.prototype.lineEdgesList = null;
  c.prototype.resultLineList = null;
  c.prototype.build = function (a) {
    this.findCoveredLineEdges();
    this.collectLines(a);
    this.buildLines(a);
    return this.resultLineList
  };
  c.prototype.findCoveredLineEdges = function () {
    for (var a =
      this.op.getGraph().getNodes().iterator(); a.hasNext();)a.next().getEdges().findCoveredLineEdges();
    for (a = this.op.getGraph().getEdgeEnds().iterator(); a.hasNext();) {
      var b = a.next(), c = b.getEdge();
      b.isLineEdge() && !c.isCoveredSet() && (b = this.op.isCoveredByA(b.getCoordinate()), c.setCovered(b))
    }
  };
  c.prototype.collectLines = function (a) {
    for (var b = this.op.getGraph().getEdgeEnds().iterator(); b.hasNext();) {
      var c = b.next();
      this.collectLineEdge(c, a, this.lineEdgesList);
      this.collectBoundaryTouchEdge(c, a, this.lineEdgesList)
    }
  };
  c.prototype.collectLineEdge = function (a, b, c) {
    var g = a.getLabel(), h = a.getEdge();
    a.isLineEdge() && !a.isVisited() && jsts.operation.overlay.OverlayOp.isResultOfOp(g, b) && !h.isCovered() && (c.add(h), a.setVisitedEdge(!0))
  };
  c.prototype.collectBoundaryTouchEdge = function (b, c, f) {
    var g = b.getLabel();
    b.isLineEdge() || b.isVisited() || b.isInteriorAreaEdge() || b.getEdge().isInResult() || (a.isTrue(!(b.isInResult() || b.getSym().isInResult()) || !b.getEdge().isInResult()), jsts.operation.overlay.OverlayOp.isResultOfOp(g, c) && c === jsts.operation.overlay.OverlayOp.INTERSECTION &&
    (f.add(b.getEdge()), b.setVisitedEdge(!0)))
  };
  c.prototype.buildLines = function (a) {
    for (a = this.lineEdgesList.iterator(); a.hasNext();) {
      var b = a.next();
      b.getLabel();
      var c = this.geometryFactory.createLineString(b.getCoordinates());
      this.resultLineList.add(c);
      b.setInResult(!0)
    }
  };
  c.prototype.labelIsolatedLines = function (a) {
    for (a = a.iterator(); a.hasNext();) {
      var b = a.next(), c = b.getLabel();
      b.isIsolated() && (c.isNull(0) ? this.labelIsolatedLine(b, 0) : this.labelIsolatedLine(b, 1))
    }
  };
  c.prototype.labelIsolatedLine = function (a,
                                            b) {
    var c = ptLocator.locate(a.getCoordinate(), op.getArgGeometry(b));
    a.getLabel().setLocation(b, c)
  };
  jsts.operation.overlay.LineBuilder = c
})();
(function () {
  var a = javascript.util.ArrayList, b = function (b, d, e) {
    this.resultPointList = new a;
    this.op = b;
    this.geometryFactory = d
  };
  b.prototype.op = null;
  b.prototype.geometryFactory = null;
  b.prototype.resultPointList = null;
  b.prototype.build = function (a) {
    this.extractNonCoveredResultNodes(a);
    return this.resultPointList
  };
  b.prototype.extractNonCoveredResultNodes = function (a) {
    for (var b = this.op.getGraph().getNodes().iterator(); b.hasNext();) {
      var e = b.next();
      if (!(e.isInResult() || e.isIncidentEdgeInResult() || 0 !== e.getEdges().getDegree() &&
        a !== jsts.operation.overlay.OverlayOp.INTERSECTION)) {
        var f = e.getLabel();
        jsts.operation.overlay.OverlayOp.isResultOfOp(f, a) && this.filterCoveredNodeToPoint(e)
      }
    }
  };
  b.prototype.filterCoveredNodeToPoint = function (a) {
    a = a.getCoordinate();
    this.op.isCoveredByLA(a) || (a = this.geometryFactory.createPoint(a), this.resultPointList.add(a))
  };
  jsts.operation.overlay.PointBuilder = b
})();
(function () {
  var a = jsts.algorithm.PointLocator, b = jsts.geom.Location, c = jsts.geomgraph.EdgeList, d = jsts.geomgraph.Label,
    e = jsts.geomgraph.PlanarGraph, f = jsts.geomgraph.Position, g = jsts.geomgraph.EdgeNodingValidator,
    h = jsts.operation.GeometryGraphOperation, l = jsts.operation.overlay.OverlayNodeFactory,
    k = jsts.operation.overlay.PolygonBuilder, m = jsts.operation.overlay.LineBuilder,
    r = jsts.operation.overlay.PointBuilder, n = jsts.util.Assert, q = javascript.util.ArrayList;
  jsts.operation.overlay.OverlayOp = function (b, d) {
    this.ptLocator =
      new a;
    this.edgeList = new c;
    this.resultPolyList = new q;
    this.resultLineList = new q;
    this.resultPointList = new q;
    h.call(this, b, d);
    this.graph = new e(new l);
    this.geomFact = b.getFactory()
  };
  jsts.operation.overlay.OverlayOp.prototype = new h;
  jsts.operation.overlay.OverlayOp.constructor = jsts.operation.overlay.OverlayOp;
  jsts.operation.overlay.OverlayOp.INTERSECTION = 1;
  jsts.operation.overlay.OverlayOp.UNION = 2;
  jsts.operation.overlay.OverlayOp.DIFFERENCE = 3;
  jsts.operation.overlay.OverlayOp.SYMDIFFERENCE = 4;
  jsts.operation.overlay.OverlayOp.overlayOp =
    function (a, b, c) {
      return (new jsts.operation.overlay.OverlayOp(a, b)).getResultGeometry(c)
    };
  jsts.operation.overlay.OverlayOp.isResultOfOp = function (a, b) {
    if (3 === arguments.length)return jsts.operation.overlay.OverlayOp.isResultOfOp2.apply(this, arguments);
    var c = a.getLocation(0), d = a.getLocation(1);
    return jsts.operation.overlay.OverlayOp.isResultOfOp2(c, d, b)
  };
  jsts.operation.overlay.OverlayOp.isResultOfOp2 = function (a, c, d) {
    a == b.BOUNDARY && (a = b.INTERIOR);
    c == b.BOUNDARY && (c = b.INTERIOR);
    switch (d) {
      case jsts.operation.overlay.OverlayOp.INTERSECTION:
        return a ==
          b.INTERIOR && c == b.INTERIOR;
      case jsts.operation.overlay.OverlayOp.UNION:
        return a == b.INTERIOR || c == b.INTERIOR;
      case jsts.operation.overlay.OverlayOp.DIFFERENCE:
        return a == b.INTERIOR && c != b.INTERIOR;
      case jsts.operation.overlay.OverlayOp.SYMDIFFERENCE:
        return a == b.INTERIOR && c != b.INTERIOR || a != b.INTERIOR && c == b.INTERIOR
    }
    return !1
  };
  jsts.operation.overlay.OverlayOp.prototype.ptLocator = null;
  jsts.operation.overlay.OverlayOp.prototype.geomFact = null;
  jsts.operation.overlay.OverlayOp.prototype.resultGeom = null;
  jsts.operation.overlay.OverlayOp.prototype.graph =
    null;
  jsts.operation.overlay.OverlayOp.prototype.edgeList = null;
  jsts.operation.overlay.OverlayOp.prototype.resultPolyList = null;
  jsts.operation.overlay.OverlayOp.prototype.resultLineList = null;
  jsts.operation.overlay.OverlayOp.prototype.resultPointList = null;
  jsts.operation.overlay.OverlayOp.prototype.getResultGeometry = function (a) {
    this.computeOverlay(a);
    return this.resultGeom
  };
  jsts.operation.overlay.OverlayOp.prototype.getGraph = function () {
    return this.graph
  };
  jsts.operation.overlay.OverlayOp.prototype.computeOverlay =
    function (a) {
      this.copyPoints(0);
      this.copyPoints(1);
      this.arg[0].computeSelfNodes(this.li, !1);
      this.arg[1].computeSelfNodes(this.li, !1);
      this.arg[0].computeEdgeIntersections(this.arg[1], this.li, !0);
      var b = new q;
      this.arg[0].computeSplitEdges(b);
      this.arg[1].computeSplitEdges(b);
      this.insertUniqueEdges(b);
      this.computeLabelsFromDepths();
      this.replaceCollapsedEdges();
      g.checkValid(this.edgeList.getEdges());
      this.graph.addEdges(this.edgeList.getEdges());
      this.computeLabelling();
      this.labelIncompleteNodes();
      this.findResultAreaEdges(a);
      this.cancelDuplicateResultEdges();
      b = new k(this.geomFact);
      b.add(this.graph);
      this.resultPolyList = b.getPolygons();
      this.resultLineList = (new m(this, this.geomFact, this.ptLocator)).build(a);
      this.resultPointList = (new r(this, this.geomFact, this.ptLocator)).build(a);
      this.resultGeom = this.computeGeometry(this.resultPointList, this.resultLineList, this.resultPolyList, a)
    };
  jsts.operation.overlay.OverlayOp.prototype.insertUniqueEdges = function (a) {
    for (a = a.iterator(); a.hasNext();) {
      var b = a.next();
      this.insertUniqueEdge(b)
    }
  };
  jsts.operation.overlay.OverlayOp.prototype.insertUniqueEdge = function (a) {
    var b = this.edgeList.findEqualEdge(a);
    if (null !== b) {
      var c = b.getLabel(), e = a.getLabel();
      b.isPointwiseEqual(a) || (e = new d(a.getLabel()), e.flip());
      a = b.getDepth();
      a.isNull() && a.add(c);
      a.add(e);
      c.merge(e)
    } else this.edgeList.add(a)
  };
  jsts.operation.overlay.OverlayOp.prototype.computeLabelsFromDepths = function () {
    for (var a = this.edgeList.iterator(); a.hasNext();) {
      var b = a.next(), c = b.getLabel(), b = b.getDepth();
      if (!b.isNull()) {
        b.normalize();
        for (var d =
          0; 2 > d; d++)c.isNull(d) || !c.isArea() || b.isNull(d) || (0 == b.getDelta(d) ? c.toLine(d) : (n.isTrue(!b.isNull(d, f.LEFT), "depth of LEFT side has not been initialized"), c.setLocation(d, f.LEFT, b.getLocation(d, f.LEFT)), n.isTrue(!b.isNull(d, f.RIGHT), "depth of RIGHT side has not been initialized"), c.setLocation(d, f.RIGHT, b.getLocation(d, f.RIGHT))))
      }
    }
  };
  jsts.operation.overlay.OverlayOp.prototype.replaceCollapsedEdges = function () {
    for (var a = new q, b = this.edgeList.iterator(); b.hasNext();) {
      var c = b.next();
      c.isCollapsed() &&
      (b.remove(), a.add(c.getCollapsedEdge()))
    }
    this.edgeList.addAll(a)
  };
  jsts.operation.overlay.OverlayOp.prototype.copyPoints = function (a) {
    for (var b = this.arg[a].getNodeIterator(); b.hasNext();) {
      var c = b.next();
      this.graph.addNode(c.getCoordinate()).setLabel(a, c.getLabel().getLocation(a))
    }
  };
  jsts.operation.overlay.OverlayOp.prototype.computeLabelling = function () {
    for (var a = this.graph.getNodes().iterator(); a.hasNext();)a.next().getEdges().computeLabelling(this.arg);
    this.mergeSymLabels();
    this.updateNodeLabelling()
  };
  jsts.operation.overlay.OverlayOp.prototype.mergeSymLabels = function () {
    for (var a = this.graph.getNodes().iterator(); a.hasNext();)a.next().getEdges().mergeSymLabels()
  };
  jsts.operation.overlay.OverlayOp.prototype.updateNodeLabelling = function () {
    for (var a = this.graph.getNodes().iterator(); a.hasNext();) {
      var b = a.next(), c = b.getEdges().getLabel();
      b.getLabel().merge(c)
    }
  };
  jsts.operation.overlay.OverlayOp.prototype.labelIncompleteNodes = function () {
    for (var a = 0, b = this.graph.getNodes().iterator(); b.hasNext();) {
      var c =
        b.next(), d = c.getLabel();
      c.isIsolated() && (a++, d.isNull(0) ? this.labelIncompleteNode(c, 0) : this.labelIncompleteNode(c, 1));
      c.getEdges().updateLabelling(d)
    }
  };
  jsts.operation.overlay.OverlayOp.prototype.labelIncompleteNode = function (a, b) {
    var c = this.ptLocator.locate(a.getCoordinate(), this.arg[b].getGeometry());
    a.getLabel().setLocation(b, c)
  };
  jsts.operation.overlay.OverlayOp.prototype.findResultAreaEdges = function (a) {
    for (var b = this.graph.getEdgeEnds().iterator(); b.hasNext();) {
      var c = b.next(), d = c.getLabel();
      d.isArea() &&
      !c.isInteriorAreaEdge() && jsts.operation.overlay.OverlayOp.isResultOfOp(d.getLocation(0, f.RIGHT), d.getLocation(1, f.RIGHT), a) && c.setInResult(!0)
    }
  };
  jsts.operation.overlay.OverlayOp.prototype.cancelDuplicateResultEdges = function () {
    for (var a = this.graph.getEdgeEnds().iterator(); a.hasNext();) {
      var b = a.next(), c = b.getSym();
      b.isInResult() && c.isInResult() && (b.setInResult(!1), c.setInResult(!1))
    }
  };
  jsts.operation.overlay.OverlayOp.prototype.isCoveredByLA = function (a) {
    return this.isCovered(a, this.resultLineList) ||
    this.isCovered(a, this.resultPolyList) ? !0 : !1
  };
  jsts.operation.overlay.OverlayOp.prototype.isCoveredByA = function (a) {
    return this.isCovered(a, this.resultPolyList) ? !0 : !1
  };
  jsts.operation.overlay.OverlayOp.prototype.isCovered = function (a, c) {
    for (var d = c.iterator(); d.hasNext();) {
      var e = d.next();
      if (this.ptLocator.locate(a, e) != b.EXTERIOR)return !0
    }
    return !1
  };
  jsts.operation.overlay.OverlayOp.prototype.computeGeometry = function (a, b, c, d) {
    d = new q;
    d.addAll(a);
    d.addAll(b);
    d.addAll(c);
    return this.geomFact.buildGeometry(d)
  };
  jsts.operation.overlay.OverlayOp.prototype.createEmptyResult = function (a) {
    var b = null;
    switch (resultDimension(a, this.arg[0].getGeometry(), this.arg[1].getGeometry())) {
      case -1:
        b = geomFact.createGeometryCollection();
        break;
      case 0:
        b = geomFact.createPoint(null);
        break;
      case 1:
        b = geomFact.createLineString(null);
        break;
      case 2:
        b = geomFact.createPolygon(null, null)
    }
    return b
  };
  jsts.operation.overlay.OverlayOp.prototype.resultDimension = function (a, b, c) {
    b = b.getDimension();
    c = c.getDimension();
    var d = -1;
    switch (a) {
      case jsts.operation.overlay.OverlayOp.INTERSECTION:
        d =
          Math.min(b, c);
        break;
      case jsts.operation.overlay.OverlayOp.UNION:
        d = Math.max(b, c);
        break;
      case jsts.operation.overlay.OverlayOp.DIFFERENCE:
        d = b;
        break;
      case jsts.operation.overlay.OverlayOp.SYMDIFFERENCE:
        d = Math.max(b, c)
    }
    return d
  }
})();
(function () {
  var a = function () {
    this.items = new javascript.util.ArrayList;
    this.subnode = [null, null]
  };
  a.getSubnodeIndex = function (a, c) {
    var d = -1;
    a.min >= c && (d = 1);
    a.max <= c && (d = 0);
    return d
  };
  a.prototype.getItems = function () {
    return this.items
  };
  a.prototype.add = function (a) {
    this.items.add(a)
  };
  a.prototype.addAllItems = function (a) {
    a.addAll(this.items);
    var c = 0;
    for (c; 2 > c; c++)null !== this.subnode[c] && this.subnode[c].addAllItems(a);
    return a
  };
  a.prototype.addAllItemsFromOverlapping = function (a, c) {
    if (null === a || this.isSearchMatch(a)) c.addAll(this.items),
    null !== this.subnode[0] && this.subnode[0].addAllItemsFromOverlapping(a, c), null !== this.subnode[1] && this.subnode[1].addAllItemsFromOverlapping(a, c)
  };
  a.prototype.remove = function (a, c) {
    if (!this.isSearchMatch(a))return !1;
    var d = !1, e = 0;
    for (e; 2 > e; e++)if (null !== this.subnode[e] && (d = this.subnode[e].remove(a, c))) {
      this.subnode[e].isPrunable() && (this.subnode[e] = null);
      break
    }
    return d ? d : d = this.items.remove(c)
  };
  a.prototype.isPrunable = function () {
    return !(this.hasChildren() || this.hasItems())
  };
  a.prototype.hasChildren = function () {
    var a =
      0;
    for (a; 2 > a; a++)if (null !== this.subnode[a])return !0;
    return !1
  };
  a.prototype.hasItems = function () {
    return !this.items.isEmpty()
  };
  a.prototype.depth = function () {
    var a = 0, c = 0, d;
    for (c; 2 > c; c++)null !== this.subnode[c] && (d = this.subnode[c].depth(), d > a && (a = d));
    return a + 1
  };
  a.prototype.size = function () {
    var a = 0, c = 0;
    for (c; 2 > c; c++)null !== this.subnode[c] && (a += this.subnode[c].size());
    return a + this.items.size()
  };
  a.prototype.nodeSize = function () {
    var a = 0, c = 0;
    for (c; 2 > c; c++)null !== this.subnode[c] && (a += this.subnode[c].nodeSize());
    return a + 1
  };
  jsts.index.bintree.NodeBase = a
})();
(function () {
  var a = function () {
    this.max = this.min = 0;
    if (1 === arguments.length) {
      var a = arguments[0];
      this.init(a.min, a.max)
    } else 2 === arguments.length && this.init(arguments[0], arguments[1])
  };
  a.prototype.init = function (a, c) {
    this.min = a;
    this.max = c;
    a > c && (this.min = c, this.max = a)
  };
  a.prototype.getMin = function () {
    return this.min
  };
  a.prototype.getMax = function () {
    return this.max
  };
  a.prototype.getWidth = function () {
    return this.max - this.min
  };
  a.prototype.expandToInclude = function (a) {
    a.max > this.max && (this.max = a.max);
    a.min < this.min &&
    (this.min = a.min)
  };
  a.prototype.overlaps = function () {
    return 1 === arguments.length ? this.overlapsInterval.apply(this, arguments) : this.overlapsMinMax.apply(this, arguments)
  };
  a.prototype.overlapsInterval = function (a) {
    return this.overlaps(a.min, a.max)
  };
  a.prototype.overlapsMinMax = function (a, c) {
    return this.min > c || this.max < a ? !1 : !0
  };
  a.prototype.contains = function () {
    var a;
    return arguments[0] instanceof jsts.index.bintree.Interval ? (a = arguments[0], this.containsMinMax(a.min, a.max)) : 1 === arguments.length ? this.containsPoint(arguments[0]) :
      this.containsMinMax(arguments[0], arguments[1])
  };
  a.prototype.containsMinMax = function (a, c) {
    return a >= this.min && c <= this.max
  };
  a.prototype.containsPoint = function (a) {
    return a >= this.min && a <= this.max
  };
  jsts.index.bintree.Interval = a
})();
jsts.index.DoubleBits = function () {
};
jsts.index.DoubleBits.powerOf2 = function (a) {
  return Math.pow(2, a)
};
jsts.index.DoubleBits.exponent = function (a) {
  return jsts.index.DoubleBits.CVTFWD(64, a) - 1023
};
jsts.index.DoubleBits.CVTFWD = function (a, b) {
  var c, d, e, f = {32: {d: 127, c: 128, b: 0, a: 0}, 64: {d: 32752, c: 0, b: 0, a: 0}}, g = {32: 8, 64: 11}[a];
  e || (c = 0 > b || 0 > 1 / b, isFinite(b) || (e = f[a], c && (e.d += 1 << a / 4 - 1), d = Math.pow(2, g) - 1));
  if (!e) {
    d = {32: 127, 64: 1023}[a];
    for (c = Math.abs(b); 2 <= c;)d++, c /= 2;
    for (; 1 > c && 0 < d;)d--, c *= 2;
    32 === a && 254 < d && (d = Math.pow(2, g) - 1)
  }
  return d
};
(function () {
  var a = jsts.index.DoubleBits, b = jsts.index.bintree.Interval, c = function (a) {
    this.level = this.pt = 0;
    this.computeKey(a)
  };
  c.computeLevel = function (b) {
    b = b.getWidth();
    return a.exponent(b) + 1
  };
  c.prototype.getPoint = function () {
    return this.pt
  };
  c.prototype.getLevel = function () {
    return this.level
  };
  c.prototype.getInterval = function () {
    return this.interval
  };
  c.prototype.computeKey = function (a) {
    this.level = c.computeLevel(a);
    this.interval = new b;
    for (this.computeInterval(this.level, a); !this.interval.contains(a);)this.level +=
      1, this.computeInterval(this.level, a)
  };
  c.prototype.computeInterval = function (b, c) {
    var f = a.powerOf2(b);
    this.pt = Math.floor(c.getMin() / f) * f;
    this.interval.init(this.pt, this.pt + f)
  };
  jsts.index.bintree.Key = c
})();
(function () {
  var a = jsts.index.bintree.NodeBase, b = jsts.index.bintree.Key, c = jsts.index.bintree.Interval,
    d = function (a, b) {
      this.items = new javascript.util.ArrayList;
      this.subnode = [null, null];
      this.interval = a;
      this.level = b;
      this.centre = (a.getMin() + a.getMax()) / 2
    };
  d.prototype = new a;
  d.constructor = d;
  d.createNode = function (a) {
    a = new b(a);
    return new d(a.getInterval(), a.getLevel())
  };
  d.createExpanded = function (a, b) {
    var g;
    g = new c(b);
    null !== a && g.expandToInclude(a.interval);
    g = d.createNode(g);
    null !== a && g.insert(a);
    return g
  };
  d.prototype.getInterval = function () {
    return this.interval
  };
  d.prototype.isSearchMatch = function (a) {
    return a.overlaps(this.interval)
  };
  d.prototype.getNode = function (b) {
    var c = a.getSubnodeIndex(b, this.centre);
    return -1 != c ? (c = this.getSubnode(c), c.getNode(b)) : this
  };
  d.prototype.find = function (b) {
    var c = a.getSubnodeIndex(b, this.centre);
    return -1 === c ? this : null !== this.subnode[c] ? (c = this.subnode[c], c.find(b)) : this
  };
  d.prototype.insert = function (b) {
    var c = a.getSubnodeIndex(b.interval, this.centre), d;
    b.level === this.level -
    1 ? this.subnode[c] = b : (d = this.createSubnode(c), d.insert(b), this.subnode[c] = d)
  };
  d.prototype.getSubnode = function (a) {
    null === this.subnode[a] && (this.subnode[a] = this.createSubnode(a));
    return this.subnode[a]
  };
  d.prototype.createSubnode = function (a) {
    var b, g;
    g = b = 0;
    switch (a) {
      case 0:
        b = this.interval.getMin();
        g = this.centre;
        break;
      case 1:
        b = this.centre, g = this.interval.getMax()
    }
    a = new c(b, g);
    return new d(a, this.level - 1)
  };
  jsts.index.bintree.Node = d
})();
(function () {
  var a = jsts.index.bintree.Node, b = jsts.index.bintree.NodeBase, c = function () {
    this.subnode = [null, null];
    this.items = new javascript.util.ArrayList
  };
  c.prototype = new jsts.index.bintree.NodeBase;
  c.constructor = c;
  c.origin = 0;
  c.prototype.insert = function (d, e) {
    var f = b.getSubnodeIndex(d, c.origin), g;
    -1 === f ? this.add(e) : (g = this.subnode[f], null !== g && g.getInterval().contains(d) || (g = a.createExpanded(g, d), this.subnode[f] = g), this.insertContained(this.subnode[f], d, e))
  };
  c.prototype.insertContained = function (a, b, c) {
    (jsts.index.IntervalSize.isZeroWidth(b.getMin(),
      b.getMax()) ? a.find(b) : a.getNode(b)).add(c)
  };
  c.prototype.isSearchMatch = function (a) {
    return !0
  };
  jsts.index.bintree.Root = c
})();
(function () {
  var a = jsts.index.bintree.Interval, b = jsts.index.bintree.Root, c = function () {
    this.root = new b;
    this.minExtent = 1
  };
  c.ensureExtent = function (b, c) {
    var f, g;
    f = b.getMin();
    g = b.getMax();
    if (f !== g)return b;
    f === g && (f -= c / 2, g = f + c / 2);
    return new a(f, g)
  };
  c.prototype.depth = function () {
    return null !== this.root ? this.root.depth() : 0
  };
  c.prototype.size = function () {
    return null !== this.root ? this.root.size() : 0
  };
  c.prototype.nodeSize = function () {
    return null !== this.root ? this.root.nodeSize() : 0
  };
  c.prototype.insert = function (a, b) {
    this.collectStats(a);
    var f = c.ensureExtent(a, this.minExtent);
    this.root.insert(f, b)
  };
  c.prototype.remove = function (a, b) {
    var f = c.ensureExtent(a, this.minExtent);
    return this.root.remove(f, b)
  };
  c.prototype.iterator = function () {
    var a = new javascript.util.ArrayList;
    this.root.addAllItems(a);
    return a.iterator()
  };
  c.prototype.query = function () {
    if (2 === arguments.length) this.queryAndAdd(arguments[0], arguments[1]); else {
      var b = arguments[0];
      !b instanceof a && (b = new a(b, b));
      return this.queryInterval(b)
    }
  };
  c.prototype.queryInterval = function (a) {
    var b =
      new javascript.util.ArrayList;
    this.query(a, b);
    return b
  };
  c.prototype.queryAndAdd = function (a, b) {
    this.root.addAllItemsFromOverlapping(a, b)
  };
  c.prototype.collectStats = function (a) {
    a = a.getWidth();
    a < this.minExtent && 0 < a && (this.minExtent = a)
  };
  jsts.index.bintree.Bintree = c
})();
jsts.index.IntervalSize = function () {
};
jsts.index.IntervalSize.MIN_BINARY_EXPONENT = -50;
jsts.index.IntervalSize.isZeroWidth = function (a, b) {
  var c = b - a;
  return 0 === c ? !0 : jsts.index.DoubleBits.exponent(c / Math.max(Math.abs(a), Math.abs(b))) <= jsts.index.IntervalSize.MIN_BINARY_EXPONENT
};
jsts.geomgraph.index.SimpleEdgeSetIntersector = function () {
};
jsts.geomgraph.index.SimpleEdgeSetIntersector.prototype = new jsts.geomgraph.index.EdgeSetIntersector;
jsts.geomgraph.index.SimpleEdgeSetIntersector.prototype.nOverlaps = 0;
jsts.geomgraph.index.SimpleEdgeSetIntersector.prototype.computeIntersections = function (a, b, c) {
  if (b instanceof javascript.util.List) this.computeIntersections2.apply(this, arguments); else {
    this.nOverlaps = 0;
    for (var d = a.iterator(); d.hasNext();)for (var e = d.next(), f = a.iterator(); f.hasNext();) {
      var g = f.next();
      (c || e != g) && this.computeIntersects(e, g, b)
    }
  }
};
jsts.geomgraph.index.SimpleEdgeSetIntersector.prototype.computeIntersections2 = function (a, b, c) {
  this.nOverlaps = 0;
  for (a = a.iterator(); a.hasNext();)for (var d = a.next(), e = b.iterator(); e.hasNext();) {
    var f = e.next();
    this.computeIntersects(d, f, c)
  }
};
jsts.geomgraph.index.SimpleEdgeSetIntersector.prototype.computeIntersects = function (a, b, c) {
  var d = a.getCoordinates(), e = b.getCoordinates(), f, g;
  for (f = 0; f < d.length - 1; f++)for (g = 0; g < e.length - 1; g++)c.addIntersections(a, f, b, g)
};
jsts.index.ArrayListVisitor = function () {
  this.items = []
};
jsts.index.ArrayListVisitor.prototype.visitItem = function (a) {
  this.items.push(a)
};
jsts.index.ArrayListVisitor.prototype.getItems = function () {
  return this.items
};
(function () {
  var a = javascript.util.ArrayList, b = function () {
  };
  b.prototype.inputGeom = null;
  b.prototype.factory = null;
  b.prototype.pruneEmptyGeometry = !0;
  b.prototype.preserveGeometryCollectionType = !0;
  b.prototype.preserveCollections = !1;
  b.prototype.reserveType = !1;
  b.prototype.getInputGeometry = function () {
    return this.inputGeom
  };
  b.prototype.transform = function (a) {
    this.inputGeom = a;
    this.factory = a.getFactory();
    if (a instanceof jsts.geom.Point)return this.transformPoint(a, null);
    if (a instanceof jsts.geom.MultiPoint)return this.transformMultiPoint(a,
      null);
    if (a instanceof jsts.geom.LinearRing)return this.transformLinearRing(a, null);
    if (a instanceof jsts.geom.LineString)return this.transformLineString(a, null);
    if (a instanceof jsts.geom.MultiLineString)return this.transformMultiLineString(a, null);
    if (a instanceof jsts.geom.Polygon)return this.transformPolygon(a, null);
    if (a instanceof jsts.geom.MultiPolygon)return this.transformMultiPolygon(a, null);
    if (a instanceof jsts.geom.GeometryCollection)return this.transformGeometryCollection(a, null);
    throw new jsts.error.IllegalArgumentException("Unknown Geometry subtype: " +
      a.getClass().getName());
  };
  b.prototype.createCoordinateSequence = function (a) {
    return this.factory.getCoordinateSequenceFactory().create(a)
  };
  b.prototype.copy = function (a) {
    return a.clone()
  };
  b.prototype.transformCoordinates = function (a, b) {
    return this.copy(a)
  };
  b.prototype.transformPoint = function (a, b) {
    return this.factory.createPoint(this.transformCoordinates(a.getCoordinateSequence(), a))
  };
  b.prototype.transformMultiPoint = function (b, d) {
    for (var e = new a, f = 0; f < b.getNumGeometries(); f++) {
      var g = this.transformPoint(b.getGeometryN(f),
        b);
      null != g && (g.isEmpty() || e.add(g))
    }
    return this.factory.buildGeometry(e)
  };
  b.prototype.transformLinearRing = function (a, b) {
    var e = this.transformCoordinates(a.getCoordinateSequence(), a), f = e.length;
    return 0 < f && 4 > f && !this.preserveType ? this.factory.createLineString(e) : this.factory.createLinearRing(e)
  };
  b.prototype.transformLineString = function (a, b) {
    return this.factory.createLineString(this.transformCoordinates(a.getCoordinateSequence(), a))
  };
  b.prototype.transformMultiLineString = function (b, d) {
    for (var e = new a,
           f = 0; f < b.getNumGeometries(); f++) {
      var g = this.transformLineString(b.getGeometryN(f), b);
      null != g && (g.isEmpty() || e.add(g))
    }
    return this.factory.buildGeometry(e)
  };
  b.prototype.transformPolygon = function (b, d) {
    var e = !0, f = this.transformLinearRing(b.getExteriorRing(), b);
    null != f && f instanceof jsts.geom.LinearRing && !f.isEmpty() || (e = !1);
    for (var g = new a, h = 0; h < b.getNumInteriorRing(); h++) {
      var l = this.transformLinearRing(b.getInteriorRingN(h), b);
      null == l || l.isEmpty() || (l instanceof jsts.geom.LinearRing || (e = !1), g.add(l))
    }
    if (e)return this.factory.createPolygon(f,
      g.toArray());
    e = new a;
    null != f && e.add(f);
    e.addAll(g);
    return this.factory.buildGeometry(e)
  };
  b.prototype.transformMultiPolygon = function (b, d) {
    for (var e = new a, f = 0; f < b.getNumGeometries(); f++) {
      var g = this.transformPolygon(b.getGeometryN(f), b);
      null != g && (g.isEmpty() || e.add(g))
    }
    return this.factory.buildGeometry(e)
  };
  b.prototype.transformGeometryCollection = function (b, d) {
    for (var e = new a, f = 0; f < b.getNumGeometries(); f++) {
      var g = this.transform(b.getGeometryN(f));
      null != g && (this.pruneEmptyGeometry && g.isEmpty() || e.add(g))
    }
    return this.preserveGeometryCollectionType ?
      this.factory.createGeometryCollection(GeometryFactory.toGeometryArray(e)) : this.factory.buildGeometry(e)
  };
  jsts.geom.util.GeometryTransformer = b
})();
(function () {
  var a = jsts.operation.overlay.snap.LineStringSnapper, b = jsts.geom.PrecisionModel, c = javascript.util.TreeSet,
    d = function (a, b, c) {
      this.snapTolerance = a;
      this.snapPts = b;
      this.isSelfSnap = c || !1
    };
  d.prototype = new jsts.geom.util.GeometryTransformer;
  d.prototype.snapTolerance = null;
  d.prototype.snapPts = null;
  d.prototype.isSelfSnap = !1;
  d.prototype.transformCoordinates = function (a, b) {
    return this.snapLine(a, this.snapPts)
  };
  d.prototype.snapLine = function (b, c) {
    var d = new a(b, this.snapTolerance);
    d.setAllowSnappingToSourceVertices(this.isSelfSnap);
    return d.snapTo(c)
  };
  var e = function (a) {
    this.srcGeom = a
  };
  e.SNAP_PRECISION_FACTOR = 1E-9;
  e.computeOverlaySnapTolerance = function (a) {
    if (2 === arguments.length)return e.computeOverlaySnapTolerance2.apply(this, arguments);
    var c = this.computeSizeBasedSnapTolerance(a), d = a.getPrecisionModel();
    d.getType() == b.FIXED && (d = 1 / d.getScale() * 2 / 1.415, d > c && (c = d));
    return c
  };
  e.computeSizeBasedSnapTolerance = function (a) {
    a = a.getEnvelopeInternal();
    return Math.min(a.getHeight(), a.getWidth()) * e.SNAP_PRECISION_FACTOR
  };
  e.computeOverlaySnapTolerance2 =
    function (a, b) {
      return Math.min(this.computeOverlaySnapTolerance(a), this.computeOverlaySnapTolerance(b))
    };
  e.snap = function (a, b, c) {
    var d = [];
    a = new e(a);
    d[0] = a.snapTo(b, c);
    b = new e(b);
    d[1] = b.snapTo(d[0], c);
    return d
  };
  e.snapToSelf = function (a, b, c) {
    return (new e(a)).snapToSelf(b, c)
  };
  e.prototype.srcGeom = null;
  e.prototype.snapTo = function (a, b) {
    var c = this.extractTargetCoordinates(a);
    return (new d(b, c)).transform(this.srcGeom)
  };
  e.prototype.snapToSelf = function (a, b) {
    var c = this.extractTargetCoordinates(srcGeom), e = c = (new d(a,
      c, !0)).transform(srcGeom);
    b && e instanceof Polygonal && (e = c.buffer(0));
    return e
  };
  e.prototype.extractTargetCoordinates = function (a) {
    var b = new c;
    a = a.getCoordinates();
    for (var d = 0; d < a.length; d++)b.add(a[d]);
    return b.toArray()
  };
  e.prototype.computeSnapTolerance = function (a) {
    return this.computeMinimumSegmentLength(a) / 10
  };
  e.prototype.computeMinimumSegmentLength = function (a) {
    for (var b = Number.MAX_VALUE, c = 0; c < a.length - 1; c++) {
      var d = a[c].distance(a[c + 1]);
      d < b && (b = d)
    }
    return b
  };
  jsts.operation.overlay.snap.GeometrySnapper =
    e
})();
(function () {
  var a = jsts.operation.overlay.OverlayOp, b = jsts.operation.overlay.snap.GeometrySnapper, c = function (a, b) {
    this.geom = [];
    this.geom[0] = a;
    this.geom[1] = b;
    this.computeSnapTolerance()
  };
  c.overlayOp = function (a, b, f) {
    return (new c(a, b)).getResultGeometry(f)
  };
  c.intersection = function (b, c) {
    return this.overlayOp(b, c, a.INTERSECTION)
  };
  c.union = function (b, c) {
    return this.overlayOp(b, c, a.UNION)
  };
  c.difference = function (b, c) {
    return overlayOp(b, c, a.DIFFERENCE)
  };
  c.symDifference = function (b, c) {
    return overlayOp(b, c, a.SYMDIFFERENCE)
  };
  c.prototype.geom = null;
  c.prototype.snapTolerance = null;
  c.prototype.computeSnapTolerance = function () {
    this.snapTolerance = b.computeOverlaySnapTolerance(this.geom[0], this.geom[1])
  };
  c.prototype.getResultGeometry = function (b) {
    var c = this.snap(this.geom);
    b = a.overlayOp(c[0], c[1], b);
    return this.prepareResult(b)
  };
  c.prototype.selfSnap = function (a) {
    return (new b(a)).snapTo(a, this.snapTolerance)
  };
  c.prototype.snap = function (a) {
    return b.snap(a[0], a[1], this.snapTolerance)
  };
  c.prototype.prepareResult = function (a) {
    return a
  };
  c.prototype.cbr = null;
  c.prototype.removeCommonBits = function (a) {
    this.cbr = new jsts.precision.CommonBitsRemover;
    this.cbr.add(this.geom[0]);
    this.cbr.add(this.geom[1]);
    a = [];
    a[0] = cbr.removeCommonBits(this.geom[0].clone());
    a[1] = cbr.removeCommonBits(this.geom[1].clone());
    return a
  };
  jsts.operation.overlay.snap.SnapOverlayOp = c
})();
jsts.noding.Octant = function () {
  throw jsts.error.AbstractMethodInvocationError();
};
jsts.noding.Octant.octant = function (a, b) {
  if (a instanceof jsts.geom.Coordinate)return jsts.noding.Octant.octant2.apply(this, arguments);
  if (0 === a && 0 === b)throw new jsts.error.IllegalArgumentError("Cannot compute the octant for point ( " + a + ", " + b + " )");
  var c = Math.abs(a), d = Math.abs(b);
  return 0 <= a ? 0 <= b ? c >= d ? 0 : 1 : c >= d ? 7 : 6 : 0 <= b ? c >= d ? 3 : 2 : c >= d ? 4 : 5
};
jsts.noding.Octant.octant2 = function (a, b) {
  var c = b.x - a.x, d = b.y - a.y;
  if (0 === c && 0 === d)throw new jsts.error.IllegalArgumentError("Cannot compute the octant for two identical points " + a);
  return jsts.noding.Octant.octant(c, d)
};
jsts.operation.union.UnionInteracting = function (a, b) {
  this.g0 = a;
  this.g1 = b;
  this.geomFactory = a.getFactory();
  this.interacts0 = [];
  this.interacts1 = []
};
jsts.operation.union.UnionInteracting.union = function (a, b) {
  return (new jsts.operation.union.UnionInteracting(a, b)).union()
};
jsts.operation.union.UnionInteracting.prototype.geomFactory = null;
jsts.operation.union.UnionInteracting.prototype.g0 = null;
jsts.operation.union.UnionInteracting.prototype.g1 = null;
jsts.operation.union.UnionInteracting.prototype.interacts0 = null;
jsts.operation.union.UnionInteracting.prototype.interacts1 = null;
jsts.operation.union.UnionInteracting.prototype.union = function () {
  this.computeInteracting();
  var a = this.extractElements(this.g0, this.interacts0, !0), b = this.extractElements(this.g1, this.interacts1, !0);
  a.isEmpty() || b.isEmpty();
  var a = in0.union(b), b = this.extractElements(this.g0, this.interacts0, !1),
    c = this.extractElements(this.g1, this.interacts1, !1);
  return jsts.geom.util.GeometryCombiner.combine(a, b, c)
};
jsts.operation.union.UnionInteracting.prototype.bufferUnion = function (a, b) {
  return a.getFactory().createGeometryCollection([a, b]).buffer(0)
};
jsts.operation.union.UnionInteracting.prototype.computeInteracting = function (a) {
  if (a) {
    for (var b = !1, c = 0, d = g1.getNumGeometries(); c < d; c++)this.g1.getGeometryN(c).getEnvelopeInternal().intersects(a.getEnvelopeInternal()) && (b = this.interacts1[c] = !0);
    return b
  }
  for (var c = 0, d = this.g0.getNumGeometries(); c < d; c++)a = this.g0.getGeometryN(c), this.interacts0[c] = this.computeInteracting(a)
};
jsts.operation.union.UnionInteracting.prototype.extractElements = function (a, b, c) {
  for (var d = [], e = 0, f = a.getNumGeometries(); e < f; e++) {
    var g = a.getGeometryN(e);
    b[e] === c && d.push(g)
  }
  return this.geomFactory.buildGeometry(d)
};
jsts.operation.union.PointGeometryUnion = function (a, b) {
  this.pointGeom = a;
  this.otherGeom = b;
  this.geomFact = b.getFactory()
};
jsts.operation.union.PointGeometryUnion.union = function (a, b) {
  return (new jsts.operation.union.PointGeometryUnion(a, b)).union()
};
jsts.operation.union.PointGeometryUnion.prototype.pointGeom = null;
jsts.operation.union.PointGeometryUnion.prototype.otherGeom = null;
jsts.operation.union.PointGeometryUnion.prototype.geomFact = null;
jsts.operation.union.PointGeometryUnion.prototype.union = function () {
  for (var a = new jsts.algorithm.PointLocator, b = [], c = 0, d = this.pointGeom.getNumGeometries(); c < d; c++) {
    var e = this.pointGeom.getGeometryN(c).getCoordinate();
    if (a.locate(e, this.otherGeom) === jsts.geom.Location.EXTERIOR) {
      for (var f = !0, g = b.length; c--;)if (b[g].equals(e)) {
        f = !1;
        break
      }
      f && b.push(e)
    }
  }
  b.sort(function (a, b) {
    return a.compareTo(b)
  });
  if (0 === b.length)return this.otherGeom;
  a = null;
  b = jsts.geom.CoordinateArrays.toCoordinateArray(b);
  a = 1 === b.length ?
    this.geomFact.createPoint(b[0]) : this.geomFact.createMultiPoint(b);
  return jsts.geom.util.GeometryCombiner.combine(a, this.otherGeom)
};
jsts.noding.IntersectionFinderAdder = function (a) {
  this.li = a;
  this.interiorIntersections = new javascript.util.ArrayList
};
jsts.noding.IntersectionFinderAdder.prototype = new jsts.noding.SegmentIntersector;
jsts.noding.IntersectionFinderAdder.constructor = jsts.noding.IntersectionFinderAdder;
jsts.noding.IntersectionFinderAdder.prototype.li = null;
jsts.noding.IntersectionFinderAdder.prototype.interiorIntersections = null;
jsts.noding.IntersectionFinderAdder.prototype.getInteriorIntersections = function () {
  return this.interiorIntersections
};
jsts.noding.IntersectionFinderAdder.prototype.processIntersections = function (a, b, c, d) {
  if (a !== c || b !== d) {
    var e = a.getCoordinates()[b], f = a.getCoordinates()[b + 1], g = c.getCoordinates()[d],
      h = c.getCoordinates()[d + 1];
    this.li.computeIntersection(e, f, g, h);
    if (this.li.hasIntersection() && this.li.isInteriorIntersection()) {
      for (e = 0; e < this.li.getIntersectionNum(); e++)this.interiorIntersections.add(this.li.getIntersection(e));
      a.addIntersections(this.li, b, 0);
      c.addIntersections(this.li, d, 1)
    }
  }
};
jsts.noding.IntersectionFinderAdder.prototype.isDone = function () {
  return !1
};
jsts.noding.snapround.MCIndexSnapRounder = function (a) {
  this.pm = a;
  this.li = new jsts.algorithm.RobustLineIntersector;
  this.li.setPrecisionModel(a);
  this.scaleFactor = a.getScale()
};
jsts.noding.snapround.MCIndexSnapRounder.prototype = new jsts.noding.Noder;
jsts.noding.snapround.MCIndexSnapRounder.constructor = jsts.noding.snapround.MCIndexSnapRounder;
jsts.noding.snapround.MCIndexSnapRounder.prototype.pm = null;
jsts.noding.snapround.MCIndexSnapRounder.prototype.li = null;
jsts.noding.snapround.MCIndexSnapRounder.prototype.scaleFactor = null;
jsts.noding.snapround.MCIndexSnapRounder.prototype.noder = null;
jsts.noding.snapround.MCIndexSnapRounder.prototype.pointSnapper = null;
jsts.noding.snapround.MCIndexSnapRounder.prototype.nodedSegStrings = null;
jsts.noding.snapround.MCIndexSnapRounder.prototype.getNodedSubstrings = function () {
  return jsts.noding.NodedSegmentString.getNodedSubstrings(this.nodedSegStrings)
};
jsts.noding.snapround.MCIndexSnapRounder.prototype.computeNodes = function (a) {
  this.nodedSegStrings = a;
  this.noder = new jsts.noding.MCIndexNoder;
  this.pointSnapper = new jsts.noding.snapround.MCIndexPointSnapper(this.noder.getIndex());
  this.snapRound(a, this.li)
};
jsts.noding.snapround.MCIndexSnapRounder.prototype.snapRound = function (a, b) {
  var c = this.findInteriorIntersections(a, b);
  this.computeIntersectionSnaps(c);
  this.computeVertexSnaps(a)
};
jsts.noding.snapround.MCIndexSnapRounder.prototype.findInteriorIntersections = function (a, b) {
  var c = new jsts.noding.IntersectionFinderAdder(b);
  this.noder.setSegmentIntersector(c);
  this.noder.computeNodes(a);
  return c.getInteriorIntersections()
};
jsts.noding.snapround.MCIndexSnapRounder.prototype.computeIntersectionSnaps = function (a) {
  for (a = a.iterator(); a.hasNext();) {
    var b = a.next(), b = new jsts.noding.snapround.HotPixel(b, this.scaleFactor, this.li);
    this.pointSnapper.snap(b)
  }
};
jsts.noding.snapround.MCIndexSnapRounder.prototype.computeVertexSnaps = function (a) {
  if (a instanceof jsts.noding.NodedSegmentString) this.computeVertexSnaps2.apply(this, arguments); else for (var b = a.iterator(); b.hasNext();) {
    var c = b.next();
    this.computeVertexSnaps(c)
  }
};
jsts.noding.snapround.MCIndexSnapRounder.prototype.computeVertexSnaps2 = function (a) {
  for (var b = a.getCoordinates(), c = 0; c < b.length - 1; c++) {
    var d = new jsts.noding.snapround.HotPixel(b[c], this.scaleFactor, this.li);
    this.pointSnapper.snap(d, a, c) && a.addIntersection(b[c], c)
  }
};
jsts.operation.valid.ConnectedInteriorTester = function (a) {
  this.geomGraph = a;
  this.geometryFactory = new jsts.geom.GeometryFactory;
  this.disconnectedRingcoord = null
};
jsts.operation.valid.ConnectedInteriorTester.findDifferentPoint = function (a, b) {
  var c = 0, d = a.length;
  for (c; c < d; c++)if (!a[c].equals(b))return a[c];
  return null
};
jsts.operation.valid.ConnectedInteriorTester.prototype.getCoordinate = function () {
  return this.disconnectedRingcoord
};
jsts.operation.valid.ConnectedInteriorTester.prototype.isInteriorsConnected = function () {
  var a = new javascript.util.ArrayList;
  this.geomGraph.computeSplitEdges(a);
  var b = new jsts.geomgraph.PlanarGraph(new jsts.operation.overlay.OverlayNodeFactory);
  b.addEdges(a);
  this.setInteriorEdgesInResult(b);
  b.linkResultDirectedEdges();
  a = this.buildEdgeRings(b.getEdgeEnds());
  this.visitShellInteriors(this.geomGraph.getGeometry(), b);
  return !this.hasUnvisitedShellEdge(a)
};
jsts.operation.valid.ConnectedInteriorTester.prototype.setInteriorEdgesInResult = function (a) {
  a = a.getEdgeEnds().iterator();
  for (var b; a.hasNext();)b = a.next(), b.getLabel().getLocation(0, jsts.geomgraph.Position.RIGHT) == jsts.geom.Location.INTERIOR && b.setInResult(!0)
};
jsts.operation.valid.ConnectedInteriorTester.prototype.buildEdgeRings = function (a) {
  var b = new javascript.util.ArrayList;
  for (a = a.iterator(); a.hasNext();) {
    var c = a.next();
    if (c.isInResult() && null == c.getEdgeRing()) {
      c = new jsts.operation.overlay.MaximalEdgeRing(c, this.geometryFactory);
      c.linkDirectedEdgesForMinimalEdgeRings();
      var c = c.buildMinimalRings(), d = 0, e = c.length;
      for (d; d < e; d++)b.add(c[d])
    }
  }
  return b
};
jsts.operation.valid.ConnectedInteriorTester.prototype.visitShellInteriors = function (a, b) {
  if (a instanceof jsts.geom.Polygon) {
    var c;
    this.visitInteriorRing(a.getExteriorRing(), b)
  }
  if (a instanceof jsts.geom.MultiPolygon)for (var d = 0; d < a.getNumGeometries(); d++)c = a.getGeometryN(d), this.visitInteriorRing(c.getExteriorRing(), b)
};
jsts.operation.valid.ConnectedInteriorTester.prototype.visitInteriorRing = function (a, b) {
  var c = a.getCoordinates(), d = c[0], c = jsts.operation.valid.ConnectedInteriorTester.findDifferentPoint(c, d),
    d = b.findEdgeInSameDirection(d, c), d = b.findEdgeEnd(d), c = null;
  d.getLabel().getLocation(0, jsts.geomgraph.Position.RIGHT) == jsts.geom.Location.INTERIOR ? c = d : d.getSym().getLabel().getLocation(0, jsts.geomgraph.Position.RIGHT) == jsts.geom.Location.INTERIOR && (c = d.getSym());
  this.visitLinkedDirectedEdges(c)
};
jsts.operation.valid.ConnectedInteriorTester.prototype.visitLinkedDirectedEdges = function (a) {
  var b = a;
  do b.setVisited(!0), b = b.getNext(); while (b != a)
};
jsts.operation.valid.ConnectedInteriorTester.prototype.hasUnvisitedShellEdge = function (a) {
  for (var b = 0; b < a.size(); b++) {
    var c = a.get(b);
    if (!c.isHole()) {
      var c = c.getEdges(), d = c[0];
      if (d.getLabel().getLocation(0, jsts.geomgraph.Position.RIGHT) == jsts.geom.Location.INTERIOR)for (var e = 0; e < c.length; e++)if (d = c[e], !d.isVisited())return disconnectedRingcoord = d.getCoordinate(), !0
    }
  }
  return !1
};
jsts.index.chain.MonotoneChainSelectAction = function () {
  this.tempEnv1 = new jsts.geom.Envelope;
  this.selectedSegment = new jsts.geom.LineSegment
};
jsts.index.chain.MonotoneChainSelectAction.prototype.tempEnv1 = null;
jsts.index.chain.MonotoneChainSelectAction.prototype.selectedSegment = null;
jsts.index.chain.MonotoneChainSelectAction.prototype.select = function (a, b) {
  a.getLineSegment(b, this.selectedSegment);
  this.select2(this.selectedSegment)
};
jsts.index.chain.MonotoneChainSelectAction.prototype.select2 = function (a) {
};
jsts.algorithm.MCPointInRing = function (a) {
  this.ring = a;
  this.tree = null;
  this.crossings = 0;
  this.interval = new jsts.index.bintree.Interval;
  this.buildIndex()
};
jsts.algorithm.MCPointInRing.MCSelecter = function (a, b) {
  this.parent = b;
  this.p = a
};
jsts.algorithm.MCPointInRing.MCSelecter.prototype = new jsts.index.chain.MonotoneChainSelectAction;
jsts.algorithm.MCPointInRing.MCSelecter.prototype.constructor = jsts.algorithm.MCPointInRing.MCSelecter;
jsts.algorithm.MCPointInRing.MCSelecter.prototype.select2 = function (a) {
  this.parent.testLineSegment.apply(this.parent, [this.p, a])
};
jsts.algorithm.MCPointInRing.prototype.buildIndex = function () {
  this.tree = new jsts.index.bintree.Bintree;
  for (var a = jsts.geom.CoordinateArrays.removeRepeatedPoints(this.ring.getCoordinates()), a = jsts.index.chain.MonotoneChainBuilder.getChains(a), b = 0; b < a.length; b++) {
    var c = a[b], d = c.getEnvelope();
    this.interval.min = d.getMinY();
    this.interval.max = d.getMaxY();
    this.tree.insert(this.interval, c)
  }
};
jsts.algorithm.MCPointInRing.prototype.isInside = function (a) {
  this.crossings = 0;
  var b = new jsts.geom.Envelope(-Number.MAX_VALUE, Number.MAX_VALUE, a.y, a.y);
  this.interval.min = a.y;
  this.interval.max = a.y;
  var c = this.tree.query(this.interval);
  a = new jsts.algorithm.MCPointInRing.MCSelecter(a, this);
  for (c = c.iterator(); c.hasNext();) {
    var d = c.next();
    this.testMonotoneChain(b, a, d)
  }
  return 1 == this.crossings % 2 ? !0 : !1
};
jsts.algorithm.MCPointInRing.prototype.testMonotoneChain = function (a, b, c) {
  c.select(a, b)
};
jsts.algorithm.MCPointInRing.prototype.testLineSegment = function (a, b) {
  var c, d, e, f;
  d = b.p0;
  f = b.p1;
  c = d.x - a.x;
  d = d.y - a.y;
  e = f.x - a.x;
  f = f.y - a.y;
  if (0 < d && 0 >= f || 0 < f && 0 >= d) c = jsts.algorithm.RobustDeterminant.signOfDet2x2(c, d, e, f) / (f - d), 0 < c && this.crossings++
};
jsts.operation.valid.TopologyValidationError = function (a, b) {
  this.errorType = a;
  this.pt = null;
  null != b && (this.pt = b.clone())
};
jsts.operation.valid.TopologyValidationError.HOLE_OUTSIDE_SHELL = 2;
jsts.operation.valid.TopologyValidationError.NESTED_HOLES = 3;
jsts.operation.valid.TopologyValidationError.DISCONNECTED_INTERIOR = 4;
jsts.operation.valid.TopologyValidationError.SELF_INTERSECTION = 5;
jsts.operation.valid.TopologyValidationError.RING_SELF_INTERSECTION = 6;
jsts.operation.valid.TopologyValidationError.NESTED_SHELLS = 7;
jsts.operation.valid.TopologyValidationError.DUPLICATE_RINGS = 8;
jsts.operation.valid.TopologyValidationError.TOO_FEW_POINTS = 9;
jsts.operation.valid.TopologyValidationError.INVALID_COORDINATE = 10;
jsts.operation.valid.TopologyValidationError.RING_NOT_CLOSED = 11;
jsts.operation.valid.TopologyValidationError.prototype.errMsg = "Topology Validation Error;Repeated Point;Hole lies outside shell;Holes are nested;Interior is disconnected;Self-intersection;Ring Self-intersection;Nested shells;Duplicate Rings;Too few distinct points in geometry component;Invalid Coordinate;Ring is not closed".split(";");
jsts.operation.valid.TopologyValidationError.prototype.getCoordinate = function () {
  return this.pt
};
jsts.operation.valid.TopologyValidationError.prototype.getErrorType = function () {
  return this.errorType
};
jsts.operation.valid.TopologyValidationError.prototype.getMessage = function () {
  return this.errMsg[this.errorType]
};
jsts.operation.valid.TopologyValidationError.prototype.toString = function () {
  var a = "";
  return null != this.pt ? (a = " at or near point " + this.pt, this.getMessage() + a) : a
};
(function () {
  var a = jsts.geom.Geometry, b = javascript.util.TreeSet, c = javascript.util.Arrays;
  jsts.geom.GeometryCollection = function (a, b) {
    this.geometries = a || [];
    this.factory = b
  };
  jsts.geom.GeometryCollection.prototype = new a;
  jsts.geom.GeometryCollection.constructor = jsts.geom.GeometryCollection;
  jsts.geom.GeometryCollection.prototype.isEmpty = function () {
    for (var a = 0, b = this.geometries.length; a < b; a++)if (!this.getGeometryN(a).isEmpty())return !1;
    return !0
  };
  jsts.geom.Geometry.prototype.getArea = function () {
    for (var a = 0,
           b = 0, c = this.geometries.length; b < c; b++)a += this.getGeometryN(b).getArea();
    return a
  };
  jsts.geom.Geometry.prototype.getLength = function () {
    for (var a = 0, b = 0, c = this.geometries.length; b < c; b++)a += this.getGeometryN(b).getLength();
    return a
  };
  jsts.geom.GeometryCollection.prototype.getCoordinate = function () {
    return this.isEmpty() ? null : this.getGeometryN(0).getCoordinate()
  };
  jsts.geom.GeometryCollection.prototype.getCoordinates = function () {
    for (var a = [], b = -1, c = 0, g = this.geometries.length; c < g; c++)for (var h = this.getGeometryN(c).getCoordinates(),
                                                                                  l = 0; l < h.length; l++)b++, a[b] = h[l];
    return a
  };
  jsts.geom.GeometryCollection.prototype.getNumGeometries = function () {
    return this.geometries.length
  };
  jsts.geom.GeometryCollection.prototype.getGeometryN = function (a) {
    a = this.geometries[a];
    a instanceof jsts.geom.Coordinate && (a = new jsts.geom.Point(a));
    return a
  };
  jsts.geom.GeometryCollection.prototype.equalsExact = function (a, b) {
    if (!this.isEquivalentClass(a) || this.geometries.length !== a.geometries.length)return !1;
    for (var c = 0, g = this.geometries.length; c < g; c++)if (!this.getGeometryN(c).equalsExact(a.getGeometryN(c),
        b))return !1;
    return !0
  };
  jsts.geom.GeometryCollection.prototype.clone = function () {
    for (var a = [], b = 0, c = this.geometries.length; b < c; b++)a.push(this.geometries[b].clone());
    return this.factory.createGeometryCollection(a)
  };
  jsts.geom.GeometryCollection.prototype.normalize = function () {
    for (var a = 0, b = this.geometries.length; a < b; a++)this.getGeometryN(a).normalize();
    this.geometries.sort()
  };
  jsts.geom.GeometryCollection.prototype.compareToSameClass = function (a) {
    var e = new b(c.asList(this.geometries));
    a = new b(c.asList(a.geometries));
    return this.compare(e, a)
  };
  jsts.geom.GeometryCollection.prototype.apply = function (a) {
    if (a instanceof jsts.geom.GeometryFilter || a instanceof jsts.geom.GeometryComponentFilter) {
      a.filter(this);
      for (var b = 0, c = this.geometries.length; b < c; b++)this.getGeometryN(b).apply(a)
    } else if (a instanceof jsts.geom.CoordinateFilter)for (b = 0, c = this.geometries.length; b < c; b++)this.getGeometryN(b).apply(a); else a instanceof jsts.geom.CoordinateSequenceFilter && this.apply2.apply(this, arguments)
  };
  jsts.geom.GeometryCollection.prototype.apply2 =
    function (a) {
      if (0 != this.geometries.length) {
        for (var b = 0; b < this.geometries.length && (this.geometries[b].apply(a), !a.isDone()); b++);
        a.isGeometryChanged()
      }
    };
  jsts.geom.GeometryCollection.prototype.getDimension = function () {
    for (var a = jsts.geom.Dimension.FALSE, b = 0, c = this.geometries.length; b < c; b++)var g = this.getGeometryN(b), a = Math.max(a, g.getDimension());
    return a
  };
  jsts.geom.GeometryCollection.prototype.computeEnvelopeInternal = function () {
    for (var a = new jsts.geom.Envelope, b = 0, c = this.geometries.length; b < c; b++) {
      var g =
        this.getGeometryN(b);
      a.expandToInclude(g.getEnvelopeInternal())
    }
    return a
  };
  jsts.geom.GeometryCollection.prototype.CLASS_NAME = "jsts.geom.GeometryCollection"
})();
(function () {
  jsts.geom.MultiPolygon = function (a, b) {
    this.geometries = a || [];
    this.factory = b
  };
  jsts.geom.MultiPolygon.prototype = new jsts.geom.GeometryCollection;
  jsts.geom.MultiPolygon.constructor = jsts.geom.MultiPolygon;
  jsts.geom.MultiPolygon.prototype.getBoundary = function () {
    if (this.isEmpty())return this.getFactory().createMultiLineString(null);
    for (var a = [], b = 0; b < this.geometries.length; b++)for (var c = this.geometries[b].getBoundary(), d = 0; d < c.getNumGeometries(); d++)a.push(c.getGeometryN(d));
    return this.getFactory().createMultiLineString(a)
  };
  jsts.geom.MultiPolygon.prototype.equalsExact = function (a, b) {
    return this.isEquivalentClass(a) ? jsts.geom.GeometryCollection.prototype.equalsExact.call(this, a, b) : !1
  };
  jsts.geom.MultiPolygon.prototype.CLASS_NAME = "jsts.geom.MultiPolygon"
})();
jsts.geom.CoordinateSequenceFilter = function () {
};
jsts.geom.CoordinateSequenceFilter.prototype.filter = jsts.abstractFunc;
jsts.geom.CoordinateSequenceFilter.prototype.isDone = jsts.abstractFunc;
jsts.geom.CoordinateSequenceFilter.prototype.isGeometryChanged = jsts.abstractFunc;
jsts.noding.snapround.HotPixel = function (a, b, c) {
  this.corner = [];
  this.pt = this.originalPt = a;
  this.scaleFactor = b;
  this.li = c;
  1 !== this.scaleFactor && (this.pt = new jsts.geom.Coordinate(this.scale(a.x), this.scale(a.y)), this.p0Scaled = new jsts.geom.Coordinate, this.p1Scaled = new jsts.geom.Coordinate);
  this.initCorners(this.pt)
};
jsts.noding.snapround.HotPixel.prototype.li = null;
jsts.noding.snapround.HotPixel.prototype.pt = null;
jsts.noding.snapround.HotPixel.prototype.originalPt = null;
jsts.noding.snapround.HotPixel.prototype.ptScaled = null;
jsts.noding.snapround.HotPixel.prototype.p0Scaled = null;
jsts.noding.snapround.HotPixel.prototype.p1Scaled = null;
jsts.noding.snapround.HotPixel.prototype.scaleFactor = void 0;
jsts.noding.snapround.HotPixel.prototype.minx = void 0;
jsts.noding.snapround.HotPixel.prototype.maxx = void 0;
jsts.noding.snapround.HotPixel.prototype.miny = void 0;
jsts.noding.snapround.HotPixel.prototype.maxy = void 0;
jsts.noding.snapround.HotPixel.prototype.corner = null;
jsts.noding.snapround.HotPixel.prototype.safeEnv = null;
jsts.noding.snapround.HotPixel.prototype.getCoordinate = function () {
  return this.originalPt
};
jsts.noding.snapround.HotPixel.SAFE_ENV_EXPANSION_FACTOR = .75;
jsts.noding.snapround.HotPixel.prototype.getSafeEnvelope = function () {
  if (null === this.safeEnv) {
    var a = jsts.noding.snapround.HotPixel.SAFE_ENV_EXPANSION_FACTOR / this.scaleFactor;
    this.safeEnv = new jsts.geom.Envelope(this.originalPt.x - a, this.originalPt.x + a, this.originalPt.y - a, this.originalPt.y + a)
  }
  return this.safeEnv
};
jsts.noding.snapround.HotPixel.prototype.initCorners = function (a) {
  this.minx = a.x - .5;
  this.maxx = a.x + .5;
  this.miny = a.y - .5;
  this.maxy = a.y + .5;
  this.corner[0] = new jsts.geom.Coordinate(this.maxx, this.maxy);
  this.corner[1] = new jsts.geom.Coordinate(this.minx, this.maxy);
  this.corner[2] = new jsts.geom.Coordinate(this.minx, this.miny);
  this.corner[3] = new jsts.geom.Coordinate(this.maxx, this.miny)
};
jsts.noding.snapround.HotPixel.prototype.scale = function (a) {
  return Math.round(a * this.scaleFactor)
};
jsts.noding.snapround.HotPixel.prototype.intersects = function (a, b) {
  if (1 === this.scaleFactor)return this.intersectsScaled(a, b);
  this.copyScaled(a, this.p0Scaled);
  this.copyScaled(b, this.p1Scaled);
  return this.intersectsScaled(this.p0Scaled, this.p1Scaled)
};
jsts.noding.snapround.HotPixel.prototype.copyScaled = function (a, b) {
  b.x = this.scale(a.x);
  b.y = this.scale(a.y)
};
jsts.noding.snapround.HotPixel.prototype.intersectsScaled = function (a, b) {
  var c = Math.max(a.x, b.x), d = Math.min(a.y, b.y), e = Math.max(a.y, b.y);
  if (c = this.maxx < Math.min(a.x, b.x) || this.minx > c || this.maxy < d || this.miny > e)return !1;
  d = this.intersectsToleranceSquare(a, b);
  jsts.util.Assert.isTrue(!(c && d), "Found bad envelope test");
  return d
};
jsts.noding.snapround.HotPixel.prototype.intersectsToleranceSquare = function (a, b) {
  var c = !1, d = !1;
  this.li.computeIntersection(a, b, this.corner[0], this.corner[1]);
  if (this.li.isProper())return !0;
  this.li.computeIntersection(a, b, this.corner[1], this.corner[2]);
  if (this.li.isProper())return !0;
  this.li.hasIntersection() && (c = !0);
  this.li.computeIntersection(a, b, this.corner[2], this.corner[3]);
  if (this.li.isProper())return !0;
  this.li.hasIntersection() && (d = !0);
  this.li.computeIntersection(a, b, this.corner[3], this.corner[0]);
  return this.li.isProper() || c && d || a.equals(this.pt) || b.equals(this.pt) ? !0 : !1
};
jsts.noding.snapround.HotPixel.prototype.intersectsPixelClosure = function (a, b) {
  this.li.computeIntersection(a, b, this.corner[0], this.corner[1]);
  if (this.li.hasIntersection())return !0;
  this.li.computeIntersection(a, b, this.corner[1], this.corner[2]);
  if (this.li.hasIntersection())return !0;
  this.li.computeIntersection(a, b, this.corner[2], this.corner[3]);
  if (this.li.hasIntersection())return !0;
  this.li.computeIntersection(a, b, this.corner[3], this.corner[0]);
  return this.li.hasIntersection() ? !0 : !1
};
jsts.noding.snapround.HotPixel.prototype.addSnappedNode = function (a, b) {
  var c = a.getCoordinate(b), d = a.getCoordinate(b + 1);
  return this.intersects(c, d) ? (a.addIntersection(this.getCoordinate(), b), !0) : !1
};
jsts.operation.buffer.BufferInputLineSimplifier = function (a) {
  this.inputLine = a
};
jsts.operation.buffer.BufferInputLineSimplifier.simplify = function (a, b) {
  return (new jsts.operation.buffer.BufferInputLineSimplifier(a)).simplify(b)
};
jsts.operation.buffer.BufferInputLineSimplifier.INIT = 0;
jsts.operation.buffer.BufferInputLineSimplifier.DELETE = 1;
jsts.operation.buffer.BufferInputLineSimplifier.KEEP = 1;
jsts.operation.buffer.BufferInputLineSimplifier.prototype.inputLine = null;
jsts.operation.buffer.BufferInputLineSimplifier.prototype.distanceTol = null;
jsts.operation.buffer.BufferInputLineSimplifier.prototype.isDeleted = null;
jsts.operation.buffer.BufferInputLineSimplifier.prototype.angleOrientation = jsts.algorithm.CGAlgorithms.COUNTERCLOCKWISE;
jsts.operation.buffer.BufferInputLineSimplifier.prototype.simplify = function (a) {
  this.distanceTol = Math.abs(a);
  0 > a && (this.angleOrientation = jsts.algorithm.CGAlgorithms.CLOCKWISE);
  this.isDeleted = [];
  this.isDeleted.length = this.inputLine.length;
  a = !1;
  do a = this.deleteShallowConcavities(); while (a);
  return this.collapseLine()
};
jsts.operation.buffer.BufferInputLineSimplifier.prototype.deleteShallowConcavities = function () {
  for (var a = 1, b = this.findNextNonDeletedIndex(a), c = this.findNextNonDeletedIndex(b), d = !1; c < this.inputLine.length;) {
    var e = !1;
    this.isDeletable(a, b, c, this.distanceTol) && (this.isDeleted[b] = jsts.operation.buffer.BufferInputLineSimplifier.DELETE, d = e = !0);
    a = e ? c : b;
    b = this.findNextNonDeletedIndex(a);
    c = this.findNextNonDeletedIndex(b)
  }
  return d
};
jsts.operation.buffer.BufferInputLineSimplifier.prototype.findNextNonDeletedIndex = function (a) {
  for (a += 1; a < this.inputLine.length && this.isDeleted[a] === jsts.operation.buffer.BufferInputLineSimplifier.DELETE;)a++;
  return a
};
jsts.operation.buffer.BufferInputLineSimplifier.prototype.collapseLine = function () {
  for (var a = [], b = 0; b < this.inputLine.length; b++)this.isDeleted[b] !== jsts.operation.buffer.BufferInputLineSimplifier.DELETE && a.push(this.inputLine[b]);
  return a
};
jsts.operation.buffer.BufferInputLineSimplifier.prototype.isDeletable = function (a, b, c, d) {
  var e = this.inputLine[a];
  b = this.inputLine[b];
  var f = this.inputLine[c];
  return this.isConcave(e, b, f) && this.isShallow(e, b, f, d) ? this.isShallowSampled(e, b, a, c, d) : !1
};
jsts.operation.buffer.BufferInputLineSimplifier.prototype.isShallowConcavity = function (a, b, c, d) {
  return jsts.algorithm.CGAlgorithms.computeOrientation(a, b, c) !== this.angleOrientation ? !1 : jsts.algorithm.CGAlgorithms.distancePointLine(b, a, c) < d
};
jsts.operation.buffer.BufferInputLineSimplifier.NUM_PTS_TO_CHECK = 10;
jsts.operation.buffer.BufferInputLineSimplifier.prototype.isShallowSampled = function (a, b, c, d, e) {
  var f = parseInt((d - c) / jsts.operation.buffer.BufferInputLineSimplifier.NUM_PTS_TO_CHECK);
  for (0 >= f && (f = 1); c < d; c += f)if (!this.isShallow(a, b, this.inputLine[c], e))return !1;
  return !0
};
jsts.operation.buffer.BufferInputLineSimplifier.prototype.isShallow = function (a, b, c, d) {
  return jsts.algorithm.CGAlgorithms.distancePointLine(b, a, c) < d
};
jsts.operation.buffer.BufferInputLineSimplifier.prototype.isConcave = function (a, b, c) {
  return jsts.algorithm.CGAlgorithms.computeOrientation(a, b, c) === this.angleOrientation
};
jsts.geom.CoordinateList = function (a, b) {
  javascript.util.ArrayList.apply(this, arguments);
  void 0 !== a && this.add(a, void 0 === b ? !0 : b)
};
jsts.geom.CoordinateList.prototype = new javascript.util.ArrayList;
jsts.geom.CoordinateList.prototype.add = function () {
  return 1 < arguments.length ? this.addCoordinates.apply(this, arguments) : javascript.util.ArrayList.prototype.add.apply(this, arguments)
};
jsts.geom.CoordinateList.prototype.addCoordinates = function (a, b, c) {
  if (a instanceof jsts.geom.Coordinate)return this.addCoordinate.apply(this, arguments);
  if ("number" === typeof a)return this.insertCoordinate.apply(this, arguments);
  for (var d = 0; d < a.length; d++)this.addCoordinate(a[d], b);
  return !0
};
jsts.geom.CoordinateList.prototype.addCoordinate = function (a, b) {
  !b && 1 <= this.size() && this.get(this.size() - 1).equals2D(a) || this.add(a)
};
jsts.geom.CoordinateList.prototype.insertCoordinate = function (a, b, c) {
  if (!c) {
    c = 0 < a ? a - 1 : -1;
    if (-1 !== c && this.get(c).equals2D(b))return;
    c = a < this.size() - 1 ? a + 1 : -1;
    if (-1 !== c && this.get(c).equals2D(b))return
  }
  this.array.splice(a, 0, b)
};
jsts.geom.CoordinateList.prototype.closeRing = function () {
  0 < this.size() && this.addCoordinate(new jsts.geom.Coordinate(this.get(0)), !1)
};
jsts.geom.CoordinateList.prototype.toArray = function () {
  var a, b, c;
  a = 0;
  b = this.size();
  c = [];
  for (a; a < b; a++)c[a] = this.get(a);
  return c
};
jsts.geom.CoordinateList.prototype.toCoordinateArray = function () {
  return this.toArray()
};
jsts.operation.overlay.MaximalEdgeRing = function (a, b) {
  jsts.geomgraph.EdgeRing.call(this, a, b)
};
jsts.operation.overlay.MaximalEdgeRing.prototype = new jsts.geomgraph.EdgeRing;
jsts.operation.overlay.MaximalEdgeRing.constructor = jsts.operation.overlay.MaximalEdgeRing;
jsts.operation.overlay.MaximalEdgeRing.prototype.getNext = function (a) {
  return a.getNext()
};
jsts.operation.overlay.MaximalEdgeRing.prototype.setEdgeRing = function (a, b) {
  a.setEdgeRing(b)
};
jsts.operation.overlay.MaximalEdgeRing.prototype.linkDirectedEdgesForMinimalEdgeRings = function () {
  var a = this.startDe;
  do a.getNode().getEdges().linkMinimalDirectedEdges(this), a = a.getNext(); while (a != this.startDe)
};
jsts.operation.overlay.MaximalEdgeRing.prototype.buildMinimalRings = function () {
  var a = [], b = this.startDe;
  do {
    if (null === b.getMinEdgeRing()) {
      var c = new jsts.operation.overlay.MinimalEdgeRing(b, this.geometryFactory);
      a.push(c)
    }
    b = b.getNext()
  } while (b != this.startDe);
  return a
};
jsts.algorithm.CentroidPoint = function () {
  this.centSum = new jsts.geom.Coordinate
};
jsts.algorithm.CentroidPoint.prototype.ptCount = 0;
jsts.algorithm.CentroidPoint.prototype.centSum = null;
jsts.algorithm.CentroidPoint.prototype.add = function (a) {
  if (a instanceof jsts.geom.Point) this.add2(a.getCoordinate()); else if (a instanceof jsts.geom.GeometryCollection || a instanceof jsts.geom.MultiPoint || a instanceof jsts.geom.MultiLineString || a instanceof jsts.geom.MultiPolygon)for (var b = 0; b < a.getNumGeometries(); b++)this.add(a.getGeometryN(b))
};
jsts.algorithm.CentroidPoint.prototype.add2 = function (a) {
  this.ptCount += 1;
  this.centSum.x += a.x;
  this.centSum.y += a.y
};
jsts.algorithm.CentroidPoint.prototype.getCentroid = function () {
  var a = new jsts.geom.Coordinate;
  a.x = this.centSum.x / this.ptCount;
  a.y = this.centSum.y / this.ptCount;
  return a
};
jsts.operation.distance.ConnectedElementLocationFilter = function (a) {
  this.locations = a
};
jsts.operation.distance.ConnectedElementLocationFilter.prototype = new jsts.geom.GeometryFilter;
jsts.operation.distance.ConnectedElementLocationFilter.prototype.locations = null;
jsts.operation.distance.ConnectedElementLocationFilter.getLocations = function (a) {
  var b = [];
  a.apply(new jsts.operation.distance.ConnectedElementLocationFilter(b));
  return b
};
jsts.operation.distance.ConnectedElementLocationFilter.prototype.filter = function (a) {
  (a instanceof jsts.geom.Point || a instanceof jsts.geom.LineString || a instanceof jsts.geom.Polygon) && this.locations.push(new jsts.operation.distance.GeometryLocation(a, 0, a.getCoordinate()))
};
(function () {
  var a = javascript.util.ArrayList;
  jsts.operation.relate.EdgeEndBuilder = function () {
  };
  jsts.operation.relate.EdgeEndBuilder.prototype.computeEdgeEnds = function (b) {
    if (2 == arguments.length) this.computeEdgeEnds2.apply(this, arguments); else {
      for (var c = new a, d = b; d.hasNext();) {
        var e = d.next();
        this.computeEdgeEnds2(e, c)
      }
      return c
    }
  };
  jsts.operation.relate.EdgeEndBuilder.prototype.computeEdgeEnds2 = function (a, c) {
    var d = a.getEdgeIntersectionList();
    d.addEndpoints();
    var d = d.iterator(), e = null, f = null;
    if (d.hasNext()) {
      var g =
        d.next();
      do e = f, f = g, g = null, d.hasNext() && (g = d.next()), null !== f && (this.createEdgeEndForPrev(a, c, f, e), this.createEdgeEndForNext(a, c, f, g)); while (null !== f)
    }
  };
  jsts.operation.relate.EdgeEndBuilder.prototype.createEdgeEndForPrev = function (a, c, d, e) {
    var f = d.segmentIndex;
    if (0 === d.dist) {
      if (0 === f)return;
      f--
    }
    var g = a.getCoordinate(f);
    null !== e && e.segmentIndex >= f && (g = e.coord);
    e = new jsts.geomgraph.Label(a.getLabel());
    e.flip();
    a = new jsts.geomgraph.EdgeEnd(a, d.coord, g, e);
    c.add(a)
  };
  jsts.operation.relate.EdgeEndBuilder.prototype.createEdgeEndForNext =
    function (a, c, d, e) {
      var f = d.segmentIndex + 1;
      f >= a.getNumPoints() && null === e || (f = a.getCoordinate(f), null !== e && e.segmentIndex === d.segmentIndex && (f = e.coord), a = new jsts.geomgraph.EdgeEnd(a, d.coord, f, new jsts.geomgraph.Label(a.getLabel())), c.add(a))
    }
})();
(function () {
  jsts.io.GeoJSONParser = function (a) {
    this.geometryFactory = a || new jsts.geom.GeometryFactory;
    this.geometryTypes = "Point MultiPoint LineString MultiLineString Polygon MultiPolygon".split(" ")
  };
  jsts.io.GeoJSONParser.prototype.read = function (a) {
    a = "string" === typeof a ? JSON.parse(a) : a;
    var b = a.type;
    if (!this.parse[b])throw Error("Unknown GeoJSON type: " + a.type);
    return -1 != this.geometryTypes.indexOf(b) ? this.parse[b].apply(this, [a.coordinates]) : "GeometryCollection" === b ? this.parse[b].apply(this, [a.geometries]) :
      this.parse[b].apply(this, [a])
  };
  jsts.io.GeoJSONParser.prototype.parse = {
    Feature: function (a) {
      var b = {}, c;
      for (c in a)b[c] = a[c];
      if (a.geometry) {
        if (!this.parse[a.geometry.type])throw Error("Unknown GeoJSON type: " + a.type);
        b.geometry = this.read(a.geometry)
      }
      a.bbox && (b.bbox = this.parse.bbox.apply(this, [a.bbox]));
      return b
    }, FeatureCollection: function (a) {
      var b = {};
      if (a.features) {
        b.features = [];
        for (var c = 0; c < a.features.length; ++c)b.features.push(this.read(a.features[c]))
      }
      a.bbox && (b.bbox = this.parse.bbox.apply(this, [a.bbox]));
      return b
    }, coordinates: function (a) {
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        b.push(new jsts.geom.Coordinate(d[0], d[1]))
      }
      return b
    }, bbox: function (a) {
      return this.geometryFactory.createLinearRing([new jsts.geom.Coordinate(a[0], a[1]), new jsts.geom.Coordinate(a[2], a[1]), new jsts.geom.Coordinate(a[2], a[3]), new jsts.geom.Coordinate(a[0], a[3]), new jsts.geom.Coordinate(a[0], a[1])])
    }, Point: function (a) {
      a = new jsts.geom.Coordinate(a[0], a[1]);
      return this.geometryFactory.createPoint(a)
    }, MultiPoint: function (a) {
      for (var b =
        [], c = 0; c < a.length; ++c)b.push(this.parse.Point.apply(this, [a[c]]));
      return this.geometryFactory.createMultiPoint(b)
    }, LineString: function (a) {
      a = this.parse.coordinates.apply(this, [a]);
      return this.geometryFactory.createLineString(a)
    }, MultiLineString: function (a) {
      for (var b = [], c = 0; c < a.length; ++c)b.push(this.parse.LineString.apply(this, [a[c]]));
      return this.geometryFactory.createMultiLineString(b)
    }, Polygon: function (a) {
      for (var b = this.parse.coordinates.apply(this, [a[0]]), b = this.geometryFactory.createLinearRing(b),
             c = [], d = 1; d < a.length; ++d) {
        var e = this.parse.coordinates.apply(this, [a[d]]), e = this.geometryFactory.createLinearRing(e);
        c.push(e)
      }
      return this.geometryFactory.createPolygon(b, c)
    }, MultiPolygon: function (a) {
      for (var b = [], c = 0; c < a.length; ++c)b.push(this.parse.Polygon.apply(this, [a[c]]));
      return this.geometryFactory.createMultiPolygon(b)
    }, GeometryCollection: function (a) {
      for (var b = [], c = 0; c < a.length; ++c)b.push(this.read(a[c]));
      return this.geometryFactory.createGeometryCollection(b)
    }
  };
  jsts.io.GeoJSONParser.prototype.write =
    function (a) {
      var b = a.CLASS_NAME.slice(10);
      if (!this.extract[b])throw Error("Geometry is not supported");
      return this.extract[b].apply(this, [a])
    };
  jsts.io.GeoJSONParser.prototype.extract = {
    coordinate: function (a) {
      return [a.x, a.y]
    }, Point: function (a) {
      return {type: "Point", coordinates: this.extract.coordinate.apply(this, [a.coordinate])}
    }, MultiPoint: function (a) {
      for (var b = [], c = 0; c < a.geometries.length; ++c) {
        var d = this.extract.Point.apply(this, [a.geometries[c]]);
        b.push(d.coordinates)
      }
      return {type: "MultiPoint", coordinates: b}
    },
    LineString: function (a) {
      for (var b = [], c = 0; c < a.points.length; ++c)b.push(this.extract.coordinate.apply(this, [a.points[c]]));
      return {type: "LineString", coordinates: b}
    }, MultiLineString: function (a) {
      for (var b = [], c = 0; c < a.geometries.length; ++c) {
        var d = this.extract.LineString.apply(this, [a.geometries[c]]);
        b.push(d.coordinates)
      }
      return {type: "MultiLineString", coordinates: b}
    }, Polygon: function (a) {
      var b = [], c = this.extract.LineString.apply(this, [a.shell]);
      b.push(c.coordinates);
      for (c = 0; c < a.holes.length; ++c) {
        var d = this.extract.LineString.apply(this,
          [a.holes[c]]);
        b.push(d.coordinates)
      }
      return {type: "Polygon", coordinates: b}
    }, MultiPolygon: function (a) {
      for (var b = [], c = 0; c < a.geometries.length; ++c) {
        var d = this.extract.Polygon.apply(this, [a.geometries[c]]);
        b.push(d.coordinates)
      }
      return {type: "MultiPolygon", coordinates: b}
    }, GeometryCollection: function (a) {
      for (var b = [], c = 0; c < a.geometries.length; ++c) {
        var d = a.geometries[c], e = d.CLASS_NAME.slice(10);
        b.push(this.extract[e].apply(this, [d]))
      }
      return {type: "GeometryCollection", geometries: b}
    }
  }
})();
jsts.geomgraph.Edge = function (a, b) {
  this.pts = a;
  this.label = b;
  this.eiList = new jsts.geomgraph.EdgeIntersectionList(this);
  this.depth = new jsts.geomgraph.Depth
};
jsts.geomgraph.Edge.prototype = new jsts.geomgraph.GraphComponent;
jsts.geomgraph.Edge.constructor = jsts.geomgraph.Edge;
jsts.geomgraph.Edge.updateIM = function (a, b) {
  b.setAtLeastIfValid(a.getLocation(0, jsts.geomgraph.Position.ON), a.getLocation(1, jsts.geomgraph.Position.ON), 1);
  a.isArea() && (b.setAtLeastIfValid(a.getLocation(0, jsts.geomgraph.Position.LEFT), a.getLocation(1, jsts.geomgraph.Position.LEFT), 2), b.setAtLeastIfValid(a.getLocation(0, jsts.geomgraph.Position.RIGHT), a.getLocation(1, jsts.geomgraph.Position.RIGHT), 2))
};
jsts.geomgraph.Edge.prototype.pts = null;
jsts.geomgraph.Edge.prototype.env = null;
jsts.geomgraph.Edge.prototype.name = null;
jsts.geomgraph.Edge.prototype.mce = null;
jsts.geomgraph.Edge.prototype._isIsolated = !0;
jsts.geomgraph.Edge.prototype.depth = null;
jsts.geomgraph.Edge.prototype.depthDelta = 0;
jsts.geomgraph.Edge.prototype.eiList = null;
jsts.geomgraph.Edge.prototype.getNumPoints = function () {
  return this.pts.length
};
jsts.geomgraph.Edge.prototype.getEnvelope = function () {
  if (null === this.env) {
    this.env = new jsts.geom.Envelope;
    for (var a = 0; a < this.pts.length; a++)this.env.expandToInclude(pts[a])
  }
  return env
};
jsts.geomgraph.Edge.prototype.getDepth = function () {
  return this.depth
};
jsts.geomgraph.Edge.prototype.getDepthDelta = function () {
  return this.depthDelta
};
jsts.geomgraph.Edge.prototype.setDepthDelta = function (a) {
  this.depthDelta = a
};
jsts.geomgraph.Edge.prototype.getCoordinates = function () {
  return this.pts
};
jsts.geomgraph.Edge.prototype.getCoordinate = function (a) {
  return void 0 === a ? 0 < this.pts.length ? this.pts[0] : null : this.pts[a]
};
jsts.geomgraph.Edge.prototype.isClosed = function () {
  return this.pts[0].equals(this.pts[this.pts.length - 1])
};
jsts.geomgraph.Edge.prototype.setIsolated = function (a) {
  this._isIsolated = a
};
jsts.geomgraph.Edge.prototype.isIsolated = function () {
  return this._isIsolated
};
jsts.geomgraph.Edge.prototype.addIntersections = function (a, b, c) {
  for (var d = 0; d < a.getIntersectionNum(); d++)this.addIntersection(a, b, c, d)
};
jsts.geomgraph.Edge.prototype.addIntersection = function (a, b, c, d) {
  var e = new jsts.geom.Coordinate(a.getIntersection(d));
  a = a.getEdgeDistance(c, d);
  c = b + 1;
  c < this.pts.length && e.equals2D(this.pts[c]) && (b = c, a = 0);
  this.eiList.add(e, b, a)
};
jsts.geomgraph.Edge.prototype.getMaximumSegmentIndex = function () {
  return this.pts.length - 1
};
jsts.geomgraph.Edge.prototype.getEdgeIntersectionList = function () {
  return this.eiList
};
jsts.geomgraph.Edge.prototype.isClosed = function () {
  return this.pts[0].equals(this.pts[this.pts.length - 1])
};
jsts.geomgraph.Edge.prototype.isCollapsed = function () {
  return this.label.isArea() && 3 == this.pts.length ? this.pts[0].equals(this.pts[2]) ? !0 : !1 : !1
};
jsts.geomgraph.Edge.prototype.getCollapsedEdge = function () {
  var a = [];
  a[0] = this.pts[0];
  a[1] = this.pts[1];
  return new jsts.geomgraph.Edge(a, jsts.geomgraph.Label.toLineLabel(this.label))
};
jsts.geomgraph.Edge.prototype.computeIM = function (a) {
  jsts.geomgraph.Edge.updateIM(this.label, a)
};
jsts.geomgraph.Edge.prototype.isPointwiseEqual = function (a) {
  if (this.pts.length != a.pts.length)return !1;
  for (var b = 0; b < this.pts.length; b++)if (!this.pts[b].equals2D(a.pts[b]))return !1;
  return !0
};
jsts.operation.valid.IsValidOp = function (a) {
  this.parentGeometry = a;
  this.isSelfTouchingRingFormingHoleValid = !1;
  this.validErr = null
};
jsts.operation.valid.IsValidOp.isValid = function (a) {
  return a instanceof jsts.geom.Coordinate ? isNaN(a.x) || !isFinite(a.x) && !isNaN(a.x) || isNaN(a.y) || !isFinite(a.y) && !isNaN(a.y) ? !1 : !0 : (new jsts.operation.valid.IsValidOp(a)).isValid()
};
jsts.operation.valid.IsValidOp.findPtNotNode = function (a, b, c) {
  b = c.findEdge(b).getEdgeIntersectionList();
  for (c = 0; c < a.length; c++) {
    var d = a[c];
    if (!b.isIntersection(d))return d
  }
  return null
};
jsts.operation.valid.IsValidOp.prototype.setSelfTouchingRingFormingHoleValid = function (a) {
  this.isSelfTouchingRingFormingHoleValid = a
};
jsts.operation.valid.IsValidOp.prototype.isValid = function () {
  this.checkValid(this.parentGeometry);
  return null == this.validErr
};
jsts.operation.valid.IsValidOp.prototype.getValidationError = function () {
  this.checkValid(this.parentGeometry);
  return this.validErr
};
jsts.operation.valid.IsValidOp.prototype.checkValid = function (a) {
  this.validErr = null;
  if (!a.isEmpty())if (a instanceof jsts.geom.Point) this.checkValidPoint(a); else if (a instanceof jsts.geom.MultiPoint) this.checkValidMultiPoint(a); else if (a instanceof jsts.geom.LinearRing) this.checkValidLinearRing(a); else if (a instanceof jsts.geom.LineString) this.checkValidLineString(a); else if (a instanceof jsts.geom.Polygon) this.checkValidPolygon(a); else if (a instanceof jsts.geom.MultiPolygon) this.checkValidMultiPolygon(a);
  else if (a instanceof jsts.geom.GeometryCollection) this.checkValidGeometryCollection(a); else throw a.constructor;
};
jsts.operation.valid.IsValidOp.prototype.checkValidPoint = function (a) {
  this.checkInvalidCoordinates(a.getCoordinates())
};
jsts.operation.valid.IsValidOp.prototype.checkValidMultiPoint = function (a) {
  this.checkInvalidCoordinates(a.getCoordinates())
};
jsts.operation.valid.IsValidOp.prototype.checkValidLineString = function (a) {
  this.checkInvalidCoordinates(a.getCoordinates());
  null == this.validErr && (a = new jsts.geomgraph.GeometryGraph(0, a), this.checkTooFewPoints(a))
};
jsts.operation.valid.IsValidOp.prototype.checkValidLinearRing = function (a) {
  this.checkInvalidCoordinates(a.getCoordinates());
  if (null == this.validErr && (this.checkClosedRing(a), null == this.validErr && (a = new jsts.geomgraph.GeometryGraph(0, a), this.checkTooFewPoints(a), null == this.validErr))) {
    var b = new jsts.algorithm.RobustLineIntersector;
    a.computeSelfNodes(b, !0);
    this.checkNoSelfIntersectingRings(a)
  }
};
jsts.operation.valid.IsValidOp.prototype.checkValidPolygon = function (a) {
  this.checkInvalidCoordinates(a);
  if (null == this.validErr && (this.checkClosedRings(a), null == this.validErr)) {
    var b = new jsts.geomgraph.GeometryGraph(0, a);
    this.checkTooFewPoints(b);
    if (null == this.validErr && (this.checkConsistentArea(b), null == this.validErr)) {
      if (!this.isSelfTouchingRingFormingHoleValid && (this.checkNoSelfIntersectingRings(b), null != this.validErr))return;
      this.checkHolesInShell(a, b);
      null == this.validErr && (this.checkHolesNotNested(a,
        b), null == this.validErr && this.checkConnectedInteriors(b))
    }
  }
};
jsts.operation.valid.IsValidOp.prototype.checkValidMultiPolygon = function (a) {
  for (var b = a.getNumGeometries(), c = 0; c < b; c++) {
    var d = a.getGeometryN(c);
    this.checkInvalidCoordinates(d);
    if (null != this.validErr)return;
    this.checkClosedRings(d);
    if (null != this.validErr)return
  }
  b = new jsts.geomgraph.GeometryGraph(0, a);
  this.checkTooFewPoints(b);
  if (null == this.validErr && (this.checkConsistentArea(b), null == this.validErr)) {
    if (!this.isSelfTouchingRingFormingHoleValid && (this.checkNoSelfIntersectingRings(b), null != this.validErr))return;
    for (c = 0; c < a.getNumGeometries(); c++)if (d = a.getGeometryN(c), this.checkHolesInShell(d, b), null != this.validErr)return;
    for (c = 0; c < a.getNumGeometries(); c++)if (d = a.getGeometryN(c), this.checkHolesNotNested(d, b), null != this.validErr)return;
    this.checkShellsNotNested(a, b);
    null == this.validErr && this.checkConnectedInteriors(b)
  }
};
jsts.operation.valid.IsValidOp.prototype.checkValidGeometryCollection = function (a) {
  for (var b = 0; b < a.getNumGeometries(); b++) {
    var c = a.getGeometryN(b);
    this.checkValid(c);
    if (null != this.validErr)break
  }
};
jsts.operation.valid.IsValidOp.prototype.checkInvalidCoordinates = function (a) {
  if (a instanceof jsts.geom.Polygon) {
    if (this.checkInvalidCoordinates(a.getExteriorRing().getCoordinates()), null == this.validErr)for (var b = 0; b < a.getNumInteriorRing() && (this.checkInvalidCoordinates(a.getInteriorRingN(b).getCoordinates()), null == this.validErr); b++);
  } else for (b = 0; b < a.length; b++)if (!jsts.operation.valid.IsValidOp.isValid(a[b])) {
    this.validErr = new jsts.operation.valid.TopologyValidationError(jsts.operation.valid.TopologyValidationError.INVALID_COORDINATE,
      a[b]);
    break
  }
};
jsts.operation.valid.IsValidOp.prototype.checkClosedRings = function (a) {
  this.checkClosedRing(a.getExteriorRing());
  if (null == this.validErr)for (var b = 0; b < a.getNumInteriorRing() && (this.checkClosedRing(a.getInteriorRingN(b)), null == this.validErr); b++);
};
jsts.operation.valid.IsValidOp.prototype.checkClosedRing = function (a) {
  if (!a.isClosed()) {
    var b = null;
    1 <= a.getNumPoints() && (b = a.getCoordinateN(0));
    this.validErr = new jsts.operation.valid.TopologyValidationError(jsts.operation.valid.TopologyValidationError.RING_NOT_CLOSED, b)
  }
};
jsts.operation.valid.IsValidOp.prototype.checkTooFewPoints = function (a) {
  a.hasTooFewPoints && (this.validErr = new jsts.operation.valid.TopologyValidationError(jsts.operation.valid.TopologyValidationError.TOO_FEW_POINTS, a.getInvalidPoint()))
};
jsts.operation.valid.IsValidOp.prototype.checkConsistentArea = function (a) {
  a = new jsts.operation.valid.ConsistentAreaTester(a);
  a.isNodeConsistentArea() ? a.hasDuplicateRings() && (this.validErr = new jsts.operation.valid.TopologyValidationError(jsts.operation.valid.TopologyValidationError.DUPLICATE_RINGS, a.getInvalidPoint())) : this.validErr = new jsts.operation.valid.TopologyValidationError(jsts.operation.valid.TopologyValidationError.SELF_INTERSECTION, a.getInvalidPoint())
};
jsts.operation.valid.IsValidOp.prototype.checkNoSelfIntersectingRings = function (a) {
  for (a = a.getEdgeIterator(); a.hasNext();) {
    var b = a.next();
    this.checkNoSelfIntersectingRing(b.getEdgeIntersectionList());
    if (null != this.validErr)break
  }
};
jsts.operation.valid.IsValidOp.prototype.checkNoSelfIntersectingRing = function (a) {
  var b = [], c = !0;
  for (a = a.iterator(); a.hasNext();) {
    var d = a.next();
    if (c) c = !1; else if (0 <= b.indexOf(d.coord)) {
      this.validErr = new jsts.operation.valid.TopologyValidationError(jsts.operation.valid.TopologyValidationError.RING_SELF_INTERSECTION, d.coord);
      break
    } else b.push(d.coord)
  }
};
jsts.operation.valid.IsValidOp.prototype.checkHolesInShell = function (a, b) {
  for (var c = a.getExteriorRing(), d = new jsts.algorithm.MCPointInRing(c), e = 0; e < a.getNumInteriorRing(); e++) {
    var f = a.getInteriorRingN(e), f = jsts.operation.valid.IsValidOp.findPtNotNode(f.getCoordinates(), c, b);
    if (null == f)break;
    if (!d.isInside(f)) {
      this.validErr = new jsts.operation.valid.TopologyValidationError(jsts.operation.valid.TopologyValidationError.HOLE_OUTSIDE_SHELL, f);
      break
    }
  }
};
jsts.operation.valid.IsValidOp.prototype.checkHolesNotNested = function (a, b) {
  for (var c = new jsts.operation.valid.IndexedNestedRingTester(b), d = 0; d < a.getNumInteriorRing(); d++) {
    var e = a.getInteriorRingN(d);
    c.add(e)
  }
  c.isNonNested() || (this.validErr = new jsts.operation.valid.TopologyValidationError(jsts.operation.valid.TopologyValidationError.NESTED_HOLES, c.getNestedPoint()))
};
jsts.operation.valid.IsValidOp.prototype.checkShellsNotNested = function (a, b) {
  for (var c = 0; c < a.getNumGeometries(); c++)for (var d = a.getGeometryN(c).getExteriorRing(), e = 0; e < a.getNumGeometries(); e++)if (c != e) {
    var f = a.getGeometryN(e);
    this.checkShellNotNested(d, f, b);
    if (null != this.validErr)return
  }
};
jsts.operation.valid.IsValidOp.prototype.checkShellNotNested = function (a, b, c) {
  var d = a.getCoordinates(), e = b.getExteriorRing(), f = e.getCoordinates(),
    d = jsts.operation.valid.IsValidOp.findPtNotNode(d, e, c);
  if (null != d && jsts.algorithm.CGAlgorithms.isPointInRing(d, f)) {
    if (!(0 >= b.getNumInteriorRing()))for (d = null, f = 0; f < b.getNumInteriorRing(); f++)if (d = b.getInteriorRingN(f), d = this.checkShellInsideHole(a, d, c), null == d)return;
    this.validErr = new jsts.operation.valid.TopologyValidationError(jsts.operation.valid.TopologyValidationError.NESTED_SHELLS,
      d)
  }
};
jsts.operation.valid.IsValidOp.prototype.checkShellInsideHole = function (a, b, c) {
  var d = a.getCoordinates(), e = b.getCoordinates();
  b = jsts.operation.valid.IsValidOp.findPtNotNode(d, b, c);
  if (null != b && !jsts.algorithm.CGAlgorithms.isPointInRing(b, e))return b;
  a = jsts.operation.valid.IsValidOp.findPtNotNode(e, a, c);
  if (null != a)return jsts.algorithm.CGAlgorithms.isPointInRing(a, d) ? a : null;
  jsts.util.Assert.shouldNeverReachHere("points in shell and hole appear to be equal");
  return null
};
jsts.operation.valid.IsValidOp.prototype.checkConnectedInteriors = function (a) {
  a = new jsts.operation.valid.ConnectedInteriorTester(a);
  a.isInteriorsConnected() || (this.validErr = new jsts.operation.valid.TopologyValidationError(jsts.operation.valid.TopologyValidationError.DISCONNECTED_INTERIOR, a.getCoordinate()))
};
jsts.algorithm.RobustDeterminant = function () {
};
jsts.algorithm.RobustDeterminant.signOfDet2x2 = function (a, b, c, d) {
  var e, f;
  e = 1;
  if (0 === a || 0 === d)return 0 === b || 0 === c ? 0 : 0 < b ? 0 < c ? -e : e : 0 < c ? e : -e;
  if (0 === b || 0 === c)return 0 < d ? 0 < a ? e : -e : 0 < a ? -e : e;
  0 < b ? 0 < d ? b > d && (e = -e, f = a, a = c, c = f, f = b, b = d, d = f) : b <= -d ? (e = -e, c = -c, d = -d) : (f = a, a = -c, c = f, f = b, b = -d, d = f) : 0 < d ? -b <= d ? (e = -e, a = -a, b = -b) : (f = -a, a = c, c = f, f = -b, b = d, d = f) : b >= d ? (a = -a, b = -b, c = -c, d = -d) : (e = -e, f = -a, a = -c, c = f, f = -b, b = -d, d = f);
  if (0 < a)if (0 < c) {
    if (a > c)return e
  } else return e; else if (!(0 < c) && a >= c) e = -e, a = -a, c = -c; else return -e;
  for (; ;) {
    f = Math.floor(c /
      a);
    c -= f * a;
    d -= f * b;
    if (0 > d)return -e;
    if (d > b)return e;
    if (a > c + c) {
      if (b < d + d)return e
    } else {
      if (b > d + d)return -e;
      c = a - c;
      d = b - d;
      e = -e
    }
    if (0 === d)return 0 === c ? 0 : -e;
    if (0 === c)return e;
    f = Math.floor(a / c);
    a -= f * c;
    b -= f * d;
    if (0 > b)return e;
    if (b > d)return -e;
    if (c > a + a) {
      if (d < b + b)return -e
    } else {
      if (d > b + b)return e;
      a = c - a;
      b = d - b;
      e = -e
    }
    if (0 === b)return 0 === a ? 0 : e;
    if (0 === a)return -e
  }
};
jsts.algorithm.RobustDeterminant.orientationIndex = function (a, b, c) {
  return jsts.algorithm.RobustDeterminant.signOfDet2x2(b.x - a.x, b.y - a.y, c.x - b.x, c.y - b.y)
};
jsts.index.quadtree.NodeBase = function () {
  this.subnode = Array(4);
  this.subnode[0] = null;
  this.subnode[1] = null;
  this.subnode[2] = null;
  this.subnode[3] = null;
  this.items = []
};
jsts.index.quadtree.NodeBase.prototype.getSubnodeIndex = function (a, b) {
  var c = -1;
  a.getMinX() >= b.x && (a.getMinY() >= b.y && (c = 3), a.getMaxY() <= b.y && (c = 1));
  a.getMaxX() <= b.x && (a.getMinY() >= b.y && (c = 2), a.getMaxY() <= b.y && (c = 0));
  return c
};
jsts.index.quadtree.NodeBase.prototype.getItems = function () {
  return this.items
};
jsts.index.quadtree.NodeBase.prototype.hasItems = function () {
  return 0 < this.items.length
};
jsts.index.quadtree.NodeBase.prototype.add = function (a) {
  this.items.push(a)
};
jsts.index.quadtree.NodeBase.prototype.remove = function (a, b) {
  if (!this.isSearchMatch(a))return !1;
  var c = !1, d = 0;
  for (d; 4 > d; d++)if (null !== this.subnode[d] && (c = this.subnode[d].remove(a, b))) {
    this.subnode[d].isPrunable() && (this.subnode[d] = null);
    break
  }
  if (c)return c;
  if (-1 !== this.items.indexOf(b)) {
    for (d = this.items.length - 1; 0 <= d; d--)this.items[d] === b && this.items.splice(d, 1);
    c = !0
  }
  return c
};
jsts.index.quadtree.NodeBase.prototype.isPrunable = function () {
  return !(this.hasChildren() || this.hasItems())
};
jsts.index.quadtree.NodeBase.prototype.hasChildren = function () {
  var a = 0;
  for (a; 4 > a; a++)if (null !== this.subnode[a])return !0;
  return !1
};
jsts.index.quadtree.NodeBase.prototype.isEmpty = function () {
  var a = !0;
  0 < this.items.length && (a = !1);
  var b = 0;
  for (b; 4 > b; b++)null !== this.subnode[b] && (this.subnode[b].isEmpty() || (a = !1));
  return a
};
jsts.index.quadtree.NodeBase.prototype.addAllItems = function (a) {
  a = a.concat(this.items);
  var b = 0;
  for (b; 4 > b; b++)null !== this.subnode[b] && (a = this.subnode[b].addAllItems(a));
  return a
};
jsts.index.quadtree.NodeBase.prototype.addAllItemsFromOverlapping = function (a, b) {
  if (this.isSearchMatch(a)) {
    b = b.concat(this.items);
    var c = 0;
    for (c; 4 > c; c++)null !== this.subnode[c] && (b = this.subnode[c].addAllItemsFromOverlapping(a, b))
  }
};
jsts.index.quadtree.NodeBase.prototype.visit = function (a, b) {
  if (this.isSearchMatch(a)) {
    this.visitItems(a, b);
    var c = 0;
    for (c; 4 > c; c++)null !== this.subnode[c] && this.subnode[c].visit(a, b)
  }
};
jsts.index.quadtree.NodeBase.prototype.visitItems = function (a, b) {
  var c = 0, d = this.items.length;
  for (c; c < d; c++)b.visitItem(this.items[c])
};
jsts.index.quadtree.NodeBase.prototype.depth = function () {
  var a = 0, b = 0, c;
  for (b; 4 > b; b++)null !== this.subnode[b] && (c = this.subnode[b].depth(), c > a && (a = c));
  return a + 1
};
jsts.index.quadtree.NodeBase.prototype.size = function () {
  var a = 0, b = 0;
  for (b; 4 > b; b++)null !== this.subnode[b] && (a += this.subnode[b].size());
  return a + this.items.length
};
jsts.index.quadtree.NodeBase.prototype.getNodeCount = function () {
  var a = 0, b = 0;
  for (b; 4 > b; b++)null !== this.subnode[b] && (a += this.subnode[b].size());
  return a + 1
};
jsts.index.quadtree.Node = function (a, b) {
  jsts.index.quadtree.NodeBase.prototype.constructor.apply(this, arguments);
  this.env = a;
  this.level = b;
  this.centre = new jsts.geom.Coordinate;
  this.centre.x = (a.getMinX() + a.getMaxX()) / 2;
  this.centre.y = (a.getMinY() + a.getMaxY()) / 2
};
jsts.index.quadtree.Node.prototype = new jsts.index.quadtree.NodeBase;
jsts.index.quadtree.Node.createNode = function (a) {
  a = new jsts.index.quadtree.Key(a);
  return new jsts.index.quadtree.Node(a.getEnvelope(), a.getLevel())
};
jsts.index.quadtree.Node.createExpanded = function (a, b) {
  var c = new jsts.geom.Envelope(b);
  null !== a && c.expandToInclude(a.env);
  c = jsts.index.quadtree.Node.createNode(c);
  null !== a && c.insertNode(a);
  return c
};
jsts.index.quadtree.Node.prototype.getEnvelope = function () {
  return this.env
};
jsts.index.quadtree.Node.prototype.isSearchMatch = function (a) {
  return this.env.intersects(a)
};
jsts.index.quadtree.Node.prototype.getNode = function (a) {
  var b = this.getSubnodeIndex(a, this.centre);
  return -1 !== b ? (b = this.getSubnode(b), b.getNode(a)) : this
};
jsts.index.quadtree.Node.prototype.find = function (a) {
  var b = this.getSubnodeIndex(a, this.centre);
  return -1 === b ? this : null !== this.subnode[b] ? (b = this.subnode[b], b.find(a)) : this
};
jsts.index.quadtree.Node.prototype.insertNode = function (a) {
  var b = this.getSubnodeIndex(a.env, this.centre), c;
  a.level === this.level - 1 ? this.subnode[b] = a : (c = this.createSubnode(b), c.insertNode(a), this.subnode[b] = c)
};
jsts.index.quadtree.Node.prototype.getSubnode = function (a) {
  null === this.subnode[a] && (this.subnode[a] = this.createSubnode(a));
  return this.subnode[a]
};
jsts.index.quadtree.Node.prototype.createSubnode = function (a) {
  var b = 0, c = 0, d = 0, e = 0;
  switch (a) {
    case 0:
      b = this.env.getMinX();
      c = this.centre.x;
      d = this.env.getMinY();
      e = this.centre.y;
      break;
    case 1:
      b = this.centre.x;
      c = this.env.getMaxX();
      d = this.env.getMinY();
      e = this.centre.y;
      break;
    case 2:
      b = this.env.getMinX();
      c = this.centre.x;
      d = this.centre.y;
      e = this.env.getMaxY();
      break;
    case 3:
      b = this.centre.x, c = this.env.getMaxX(), d = this.centre.y, e = this.env.getMaxY()
  }
  a = new jsts.geom.Envelope(b, c, d, e);
  return new jsts.index.quadtree.Node(a,
    this.level - 1)
};
(function () {
  jsts.triangulate.quadedge.QuadEdge = function () {
    this.data = this.next = this.vertex = this.rot = null
  };
  var a = jsts.triangulate.quadedge.QuadEdge;
  jsts.triangulate.quadedge.QuadEdge.makeEdge = function (b, c) {
    var d, e, f, g;
    d = new a;
    e = new a;
    f = new a;
    g = new a;
    d.rot = e;
    e.rot = f;
    f.rot = g;
    g.rot = d;
    d.setNext(d);
    e.setNext(g);
    f.setNext(f);
    g.setNext(e);
    d.setOrig(b);
    d.setDest(c);
    return d
  };
  jsts.triangulate.quadedge.QuadEdge.connect = function (b, c) {
    var d = a.makeEdge(b.dest(), c.orig());
    a.splice(d, b.lNext());
    a.splice(d.sym(), c);
    return d
  };
  jsts.triangulate.quadedge.QuadEdge.splice = function (a, c) {
    var d, e, f, g, h, l;
    d = a.oNext().rot;
    e = c.oNext().rot;
    f = c.oNext();
    g = a.oNext();
    h = e.oNext();
    l = d.oNext();
    a.setNext(f);
    c.setNext(g);
    d.setNext(h);
    e.setNext(l)
  };
  jsts.triangulate.quadedge.QuadEdge.swap = function (b) {
    var c, d;
    c = b.oPrev();
    d = b.sym().oPrev();
    a.splice(b, c);
    a.splice(b.sym(), d);
    a.splice(b, c.lNext());
    a.splice(b.sym(), d.lNext());
    b.setOrig(c.dest());
    b.setDest(d.dest())
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.getPrimary = function () {
    return 0 >=
    this.orig().getCoordinate().compareTo(this.dest().getCoordinate()) ? this : this.sym()
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.setData = function (a) {
    this.data = a
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.getData = function () {
    return this.data
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.delete_jsts = function () {
    this.rot = null
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.isLive = function () {
    return null !== this.rot
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.setNext = function (a) {
    this.next = a
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.invRot =
    function () {
      return this.rot.sym()
    };
  jsts.triangulate.quadedge.QuadEdge.prototype.sym = function () {
    return this.rot.rot
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.oNext = function () {
    return this.next
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.oPrev = function () {
    return this.rot.next.rot
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.dNext = function () {
    return this.sym().oNext().sym()
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.dPrev = function () {
    return this.invRot().oNext().invRot()
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.lNext =
    function () {
      return this.invRot().oNext().rot
    };
  jsts.triangulate.quadedge.QuadEdge.prototype.lPrev = function () {
    return this.next.sym()
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.rNext = function () {
    return this.rot.next.invRot()
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.rPrev = function () {
    return this.sym().oNext()
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.setOrig = function (a) {
    this.vertex = a
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.setDest = function (a) {
    this.sym().setOrig(a)
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.orig =
    function () {
      return this.vertex
    };
  jsts.triangulate.quadedge.QuadEdge.prototype.dest = function () {
    return this.sym().orig()
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.getLength = function () {
    return this.orig().getCoordinate().distance(dest().getCoordinate())
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.equalsNonOriented = function (a) {
    return this.equalsOriented(a) || this.equalsOriented(a.sym()) ? !0 : !1
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.equalsOriented = function (a) {
    return this.orig().getCoordinate().equals2D(a.orig().getCoordinate()) &&
    this.dest().getCoordinate().equals2D(a.dest().getCoordinate()) ? !0 : !1
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.toLineSegment = function () {
    return new jsts.geom.LineSegment(this.vertex.getCoordinate(), this.dest().getCoordinate())
  };
  jsts.triangulate.quadedge.QuadEdge.prototype.toString = function () {
    var a, c;
    a = this.vertex.getCoordinate();
    c = this.dest().getCoordinate();
    return jsts.io.WKTWriter.toLineString(a, c)
  }
})();
(function () {
  var a = jsts.util.Assert;
  jsts.geomgraph.EdgeEnd = function (a, c, d, e) {
    this.edge = a;
    c && d && this.init(c, d);
    e && (this.label = e || null)
  };
  jsts.geomgraph.EdgeEnd.prototype.edge = null;
  jsts.geomgraph.EdgeEnd.prototype.label = null;
  jsts.geomgraph.EdgeEnd.prototype.node = null;
  jsts.geomgraph.EdgeEnd.prototype.p0 = null;
  jsts.geomgraph.EdgeEnd.prototype.p1 = null;
  jsts.geomgraph.EdgeEnd.prototype.dx = null;
  jsts.geomgraph.EdgeEnd.prototype.dy = null;
  jsts.geomgraph.EdgeEnd.prototype.quadrant = null;
  jsts.geomgraph.EdgeEnd.prototype.init =
    function (b, c) {
      this.p0 = b;
      this.p1 = c;
      this.dx = c.x - b.x;
      this.dy = c.y - b.y;
      this.quadrant = jsts.geomgraph.Quadrant.quadrant(this.dx, this.dy);
      a.isTrue(!(0 === this.dx && 0 === this.dy), "EdgeEnd with identical endpoints found")
    };
  jsts.geomgraph.EdgeEnd.prototype.getEdge = function () {
    return this.edge
  };
  jsts.geomgraph.EdgeEnd.prototype.getLabel = function () {
    return this.label
  };
  jsts.geomgraph.EdgeEnd.prototype.getCoordinate = function () {
    return this.p0
  };
  jsts.geomgraph.EdgeEnd.prototype.getDirectedCoordinate = function () {
    return this.p1
  };
  jsts.geomgraph.EdgeEnd.prototype.getQuadrant = function () {
    return this.quadrant
  };
  jsts.geomgraph.EdgeEnd.prototype.getDx = function () {
    return this.dx
  };
  jsts.geomgraph.EdgeEnd.prototype.getDy = function () {
    return this.dy
  };
  jsts.geomgraph.EdgeEnd.prototype.setNode = function (a) {
    this.node = a
  };
  jsts.geomgraph.EdgeEnd.prototype.getNode = function () {
    return this.node
  };
  jsts.geomgraph.EdgeEnd.prototype.compareTo = function (a) {
    return this.compareDirection(a)
  };
  jsts.geomgraph.EdgeEnd.prototype.compareDirection = function (a) {
    return this.dx ===
    a.dx && this.dy === a.dy ? 0 : this.quadrant > a.quadrant ? 1 : this.quadrant < a.quadrant ? -1 : jsts.algorithm.CGAlgorithms.computeOrientation(a.p0, a.p1, this.p1)
  };
  jsts.geomgraph.EdgeEnd.prototype.computeLabel = function (a) {
  }
})();
jsts.triangulate.quadedge.TrianglePredicate = function () {
};
jsts.triangulate.quadedge.TrianglePredicate.isInCircleNonRobust = function (a, b, c, d) {
  return 0 < (a.x * a.x + a.y * a.y) * jsts.triangulate.quadedge.TrianglePredicate.triArea(b, c, d) - (b.x * b.x + b.y * b.y) * jsts.triangulate.quadedge.TrianglePredicate.triArea(a, c, d) + (c.x * c.x + c.y * c.y) * jsts.triangulate.quadedge.TrianglePredicate.triArea(a, b, d) - (d.x * d.x + d.y * d.y) * jsts.triangulate.quadedge.TrianglePredicate.triArea(a, b, c)
};
jsts.triangulate.quadedge.TrianglePredicate.isInCircleNormalized = function (a, b, c, d) {
  var e, f, g;
  e = a.x - d.x;
  a = a.y - d.y;
  f = b.x - d.x;
  b = b.y - d.y;
  g = c.x - d.x;
  c = c.y - d.y;
  return 0 < (e * e + a * a) * (f * c - g * b) + (f * f + b * b) * (g * a - e * c) + (g * g + c * c) * (e * b - f * a)
};
jsts.triangulate.quadedge.TrianglePredicate.triArea = function (a, b, c) {
  return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)
};
jsts.triangulate.quadedge.TrianglePredicate.isInCircleRobust = function (a, b, c, d) {
  return jsts.triangulate.quadedge.TrianglePredicate.isInCircleNormalized(a, b, c, d)
};
jsts.triangulate.quadedge.TrianglePredicate.isInCircleDDSlow = function (a, b, c, d) {
  var e, f, g, h, l, k, m;
  e = jsts.math.DD.valueOf(d.x);
  d = jsts.math.DD.valueOf(d.y);
  f = jsts.math.DD.valueOf(a.x);
  a = jsts.math.DD.valueOf(a.y);
  g = jsts.math.DD.valueOf(b.x);
  b = jsts.math.DD.valueOf(b.y);
  h = jsts.math.DD.valueOf(c.x);
  l = jsts.math.DD.valueOf(c.y);
  c = f.multiply(f).add(a.multiply(a)).multiply(jsts.triangulate.quadedge.TrianglePredicate.triAreaDDSlow(g, b, h, l, e, d));
  k = g.multiply(g).add(b.multiply(b)).multiply(jsts.triangulate.quadedge.TrianglePredicate.triAreaDDSlow(f,
    a, h, l, e, d));
  m = h.multiply(h).add(l.multiply(l)).multiply(jsts.triangulate.quadedge.TrianglePredicate.triAreaDDSlow(f, a, g, b, e, d));
  e = e.multiply(e).add(d.multiply(d)).multiply(jsts.triangulate.quadedge.TrianglePredicate.triAreaDDSlow(f, a, g, b, h, l));
  return 0 < c.subtract(k).add(m).subtract(e).doubleValue()
};
jsts.triangulate.quadedge.TrianglePredicate.triAreaDDSlow = function (a, b, c, d, e, f) {
  return c.subtract(a).multiply(f.subtract(b)).subtract(d.subtract(b).multiply(e.subtract(a)))
};
jsts.triangulate.quadedge.TrianglePredicate.isInCircleDDFast = function (a, b, c, d) {
  var e, f, g;
  e = jsts.math.DD.sqr(a.x).selfAdd(jsts.math.DD.sqr(a.y)).selfMultiply(jsts.triangulate.quadedge.TrianglePredicate.triAreaDDFast(b, c, d));
  f = jsts.math.DD.sqr(b.x).selfAdd(jsts.math.DD.sqr(b.y)).selfMultiply(jsts.triangulate.quadedge.TrianglePredicate.triAreaDDFast(a, c, d));
  g = jsts.math.DD.sqr(c.x).selfAdd(jsts.math.DD.sqr(c.y)).selfMultiply(jsts.triangulate.quadedge.TrianglePredicate.triAreaDDFast(a, b, d));
  a = jsts.math.DD.sqr(d.x).selfAdd(jsts.math.DD.sqr(d.y)).selfMultiply(jsts.triangulate.quadedge.TrianglePredicate.triAreaDDFast(a,
    b, c));
  return 0 < e.selfSubtract(f).selfAdd(g).selfSubtract(a).doubleValue()
};
jsts.triangulate.quadedge.TrianglePredicate.triAreaDDFast = function (a, b, c) {
  var d;
  d = jsts.math.DD.valueOf(b.x).selfSubtract(a.x).selfMultiply(jsts.math.DD.valueOf(c.y).selfSubtract(a.y));
  a = jsts.math.DD.valueOf(b.y).selSubtract(a.y).selfMultiply(jsts.math.DD.valueOf(c.x).selfSubtract(a.x));
  return d.selfSubtract(a)
};
jsts.triangulate.quadedge.TrianglePredicate.isInCircleDDNormalized = function (a, b, c, d) {
  var e, f, g;
  e = jsts.math.DD.valueOf(a.x).selfSubtract(d.x);
  a = jsts.math.DD.valueOf(a.y).selfSubtract(d.y);
  jsts.math.DD.valueOf(b.x).selfSubtract(d.x);
  b = jsts.math.DD.valueOf(b.y).selfSubtract(d.y);
  jsts.math.DD.valueOf(c.x).selfSubtract(d.x);
  f = jsts.math.DD.valueOf(c.y).selfSubtract(d.y);
  c = e.multiply(void 0).selfSubtract(b.multiply(a));
  d = b.multiply(void 0).selfSubtract(f.multiply(void 0));
  g = f.multiply(a).selfSubtract(e.multiply(void 0));
  e = e.multiply(e).selfAdd(a.multiply(a));
  a = b.multiply(b).selfAdd((void 0).multiply(void 0));
  b = f.multiply(f).selfAdd((void 0).multiply(void 0));
  return 0 < e.selfMultiply(d).selfAdd(a.selfMultiply(g)).selfAdd(b.selfMultiply(c)).doubleValue()
};
jsts.triangulate.quadedge.TrianglePredicate.isInCircleCC = function (a, b, c, d) {
  b = jsts.geom.Triangle.circumcentre(a, b, c);
  a = a.distance(b);
  return 0 >= d.distance(b) - a
};
jsts.operation.buffer.RightmostEdgeFinder = function () {
};
jsts.operation.buffer.RightmostEdgeFinder.prototype.minIndex = -1;
jsts.operation.buffer.RightmostEdgeFinder.prototype.minCoord = null;
jsts.operation.buffer.RightmostEdgeFinder.prototype.minDe = null;
jsts.operation.buffer.RightmostEdgeFinder.prototype.orientedDe = null;
jsts.operation.buffer.RightmostEdgeFinder.prototype.getEdge = function () {
  return this.orientedDe
};
jsts.operation.buffer.RightmostEdgeFinder.prototype.getCoordinate = function () {
  return this.minCoord
};
jsts.operation.buffer.RightmostEdgeFinder.prototype.findEdge = function (a) {
  for (a = a.iterator(); a.hasNext();) {
    var b = a.next();
    b.isForward() && this.checkForRightmostCoordinate(b)
  }
  jsts.util.Assert.isTrue(0 !== this.minIndex || this.minCoord.equals(this.minDe.getCoordinate()), "inconsistency in rightmost processing");
  0 === this.minIndex ? this.findRightmostEdgeAtNode() : this.findRightmostEdgeAtVertex();
  this.orientedDe = this.minDe;
  this.getRightmostSide(this.minDe, this.minIndex) == jsts.geomgraph.Position.LEFT && (this.orientedDe =
    this.minDe.getSym())
};
jsts.operation.buffer.RightmostEdgeFinder.prototype.findRightmostEdgeAtNode = function () {
  this.minDe = this.minDe.getNode().getEdges().getRightmostEdge();
  this.minDe.isForward() || (this.minDe = this.minDe.getSym(), this.minIndex = this.minDe.getEdge().getCoordinates().length - 1)
};
jsts.operation.buffer.RightmostEdgeFinder.prototype.findRightmostEdgeAtVertex = function () {
  var a = this.minDe.getEdge().getCoordinates();
  jsts.util.Assert.isTrue(0 < this.minIndex && this.minIndex < a.length, "rightmost point expected to be interior vertex of edge");
  var b = a[this.minIndex - 1], a = a[this.minIndex + 1],
    c = jsts.algorithm.CGAlgorithms.computeOrientation(this.minCoord, a, b), d = !1;
  b.y < this.minCoord.y && a.y < this.minCoord.y && c === jsts.algorithm.CGAlgorithms.COUNTERCLOCKWISE ? d = !0 : b.y > this.minCoord.y && a.y > this.minCoord.y &&
    c === jsts.algorithm.CGAlgorithms.CLOCKWISE && (d = !0);
  d && --this.minIndex
};
jsts.operation.buffer.RightmostEdgeFinder.prototype.checkForRightmostCoordinate = function (a) {
  for (var b = a.getEdge().getCoordinates(), c = 0; c < b.length - 1; c++)if (null === this.minCoord || b[c].x > this.minCoord.x) this.minDe = a, this.minIndex = c, this.minCoord = b[c]
};
jsts.operation.buffer.RightmostEdgeFinder.prototype.getRightmostSide = function (a, b) {
  var c = this.getRightmostSideOfSegment(a, b);
  0 > c && (c = this.getRightmostSideOfSegment(a, b - 1));
  0 > c && (this.minCoord = null, this.checkForRightmostCoordinate(a));
  return c
};
jsts.operation.buffer.RightmostEdgeFinder.prototype.getRightmostSideOfSegment = function (a, b) {
  var c = a.getEdge().getCoordinates();
  if (0 > b || b + 1 >= c.length || c[b].y == c[b + 1].y)return -1;
  var d = jsts.geomgraph.Position.LEFT;
  c[b].y < c[b + 1].y && (d = jsts.geomgraph.Position.RIGHT);
  return d
};
(function () {
  jsts.triangulate.IncrementalDelaunayTriangulator = function (a) {
    this.subdiv = a;
    this.isUsingTolerance = 0 < a.getTolerance()
  };
  jsts.triangulate.IncrementalDelaunayTriangulator.prototype.insertSites = function (a) {
    var b = 0, c = a.length, d;
    for (b; b < c; b++)d = a[b], this.insertSite(d)
  };
  jsts.triangulate.IncrementalDelaunayTriangulator.prototype.insertSite = function (a) {
    var b, c, d, e;
    b = this.subdiv.locate(a);
    if (this.subdiv.isVertexOfEdge(b, a))return b;
    this.subdiv.isOnEdge(b, a.getCoordinate()) && (b = b.oPrev(), this.subdiv.delete_jsts(b.oNext()));
    c = this.subdiv.makeEdge(b.orig(), a);
    jsts.triangulate.quadedge.QuadEdge.splice(c, b);
    d = c;
    do c = this.subdiv.connect(b, c.sym()), b = c.oPrev(); while (b.lNext() != d);
    do if (e = b.oPrev(), e.dest().rightOf(b) && a.isInCircle(b.orig(), e.dest(), b.dest())) jsts.triangulate.quadedge.QuadEdge.swap(b), b = b.oPrev(); else {
      if (b.oNext() == d)return c;
      b = b.oNext().lPrev()
    } while (1)
  }
})();
jsts.noding.OrientedCoordinateArray = function (a) {
  this.pts = a;
  this._orientation = jsts.noding.OrientedCoordinateArray.orientation(a)
};
jsts.noding.OrientedCoordinateArray.prototype.pts = null;
jsts.noding.OrientedCoordinateArray.prototype._orientation = void 0;
jsts.noding.OrientedCoordinateArray.orientation = function (a) {
  return 1 === jsts.geom.CoordinateArrays.increasingDirection(a)
};
jsts.noding.OrientedCoordinateArray.prototype.compareTo = function (a) {
  return jsts.noding.OrientedCoordinateArray.compareOriented(this.pts, this._orientation, a.pts, a._orientation)
};
jsts.noding.OrientedCoordinateArray.compareOriented = function (a, b, c, d) {
  var e = b ? 1 : -1, f = d ? 1 : -1, g = b ? a.length : -1, h = d ? c.length : -1;
  b = b ? 0 : a.length - 1;
  for (d = d ? 0 : c.length - 1; ;) {
    var l = a[b].compareTo(c[d]);
    if (0 !== l)return l;
    b += e;
    d += f;
    var l = b === g, k = d === h;
    if (l && !k)return -1;
    if (!l && k)return 1;
    if (l && k)return 0
  }
};
jsts.index.quadtree.Root = function () {
  jsts.index.quadtree.NodeBase.prototype.constructor.apply(this, arguments);
  this.origin = new jsts.geom.Coordinate(0, 0)
};
jsts.index.quadtree.Root.prototype = new jsts.index.quadtree.NodeBase;
jsts.index.quadtree.Root.prototype.insert = function (a, b) {
  var c = this.getSubnodeIndex(a, this.origin);
  if (-1 === c) this.add(b); else {
    var d = this.subnode[c];
    null !== d && d.getEnvelope().contains(a) || (d = jsts.index.quadtree.Node.createExpanded(d, a), this.subnode[c] = d);
    this.insertContained(this.subnode[c], a, b)
  }
};
jsts.index.quadtree.Root.prototype.insertContained = function (a, b, c) {
  var d, e;
  d = jsts.index.IntervalSize.isZeroWidth(b.getMinX(), b.getMaxX());
  e = jsts.index.IntervalSize.isZeroWidth(b.getMinY(), b.getMaxY());
  (d || e ? a.find(b) : a.getNode(b)).add(c)
};
jsts.index.quadtree.Root.prototype.isSearchMatch = function (a) {
  return !0
};
jsts.triangulate.quadedge.Vertex = function () {
  1 === arguments.length ? this.initFromCoordinate(arguments[0]) : this.initFromXY(arguments[0], arguments[1])
};
jsts.triangulate.quadedge.Vertex.LEFT = 0;
jsts.triangulate.quadedge.Vertex.RIGHT = 1;
jsts.triangulate.quadedge.Vertex.BEYOND = 2;
jsts.triangulate.quadedge.Vertex.BEHIND = 3;
jsts.triangulate.quadedge.Vertex.BETWEEN = 4;
jsts.triangulate.quadedge.Vertex.ORIGIN = 5;
jsts.triangulate.quadedge.Vertex.DESTINATION = 6;
jsts.triangulate.quadedge.Vertex.prototype.initFromXY = function (a, b) {
  this.p = new jsts.geom.Coordinate(a, b)
};
jsts.triangulate.quadedge.Vertex.prototype.initFromCoordinate = function (a) {
  this.p = new jsts.geom.Coordinate(a)
};
jsts.triangulate.quadedge.Vertex.prototype.getX = function () {
  return this.p.x
};
jsts.triangulate.quadedge.Vertex.prototype.getY = function () {
  return this.p.y
};
jsts.triangulate.quadedge.Vertex.prototype.getZ = function () {
  return this.p.z
};
jsts.triangulate.quadedge.Vertex.prototype.setZ = function (a) {
  this.p.z = a
};
jsts.triangulate.quadedge.Vertex.prototype.getCoordinate = function () {
  return this.p
};
jsts.triangulate.quadedge.Vertex.prototype.toString = function () {
  return "POINT (" + this.p.x + " " + this.p.y + ")"
};
jsts.triangulate.quadedge.Vertex.prototype.equals = function () {
  return 1 === arguments.length ? this.equalsExact(arguments[0]) : this.equalsWithTolerance(arguments[0], arguments[1])
};
jsts.triangulate.quadedge.Vertex.prototype.equalsExact = function (a) {
  return this.p.x === a.getX() && this.p.y === a.getY()
};
jsts.triangulate.quadedge.Vertex.prototype.equalsWithTolerance = function (a, b) {
  return this.p.distance(a.getCoordinate()) < b
};
jsts.triangulate.quadedge.Vertex.prototype.classify = function (a, b) {
  var c, d, e;
  c = b.sub(a);
  d = this.sub(a);
  e = c.crossProduct(d);
  return 0 < e ? jsts.triangulate.quadedge.Vertex.LEFT : 0 > e ? jsts.triangulate.quadedge.Vertex.RIGHT : 0 > c.getX() * d.getX() || 0 > c.getY() * d.getY() ? jsts.triangulate.quadedge.Vertex.BEHIND : c.magn() < d.magn() ? jsts.triangulate.quadedge.Vertex.BEYOND : a.equals(this) ? jsts.triangulate.quadedge.Vertex.ORIGIN : b.equals(this) ? jsts.triangulate.quadedge.Vertex.DESTINATION : jsts.triangulate.quadedge.Vertex.BETWEEN
};
jsts.triangulate.quadedge.Vertex.prototype.crossProduct = function (a) {
  return this.p.x * a.getY() - this.p.y * a.getX()
};
jsts.triangulate.quadedge.Vertex.prototype.dot = function (a) {
  return this.p.x * a.getX() + this.p.y * a.getY()
};
jsts.triangulate.quadedge.Vertex.prototype.times = function (a) {
  return new jsts.triangulate.quadedge.Vertex(a * this.p.x, a * this.p.y)
};
jsts.triangulate.quadedge.Vertex.prototype.sum = function (a) {
  return new jsts.triangulate.quadedge.Vertex(this.p.x + a.getX(), this.p.y + a.getY())
};
jsts.triangulate.quadedge.Vertex.prototype.sub = function (a) {
  return new jsts.triangulate.quadedge.Vertex(this.p.x - a.getX(), this.p.y - a.getY())
};
jsts.triangulate.quadedge.Vertex.prototype.magn = function () {
  return Math.sqrt(this.p.x * this.p.x + this.p.y * this.p.y)
};
jsts.triangulate.quadedge.Vertex.prototype.cross = function () {
  return new Vertex(this.p.y, -this.p.x)
};
jsts.triangulate.quadedge.Vertex.prototype.isInCircle = function (a, b, c) {
  return jsts.triangulate.quadedge.TrianglePredicate.isInCircleRobust(a.p, b.p, c.p, this.p)
};
jsts.triangulate.quadedge.Vertex.prototype.isCCW = function (a, b) {
  return 0 < (a.p.x - this.p.x) * (b.p.y - this.p.y) - (a.p.y - this.p.y) * (b.p.x - this.p.x)
};
jsts.triangulate.quadedge.Vertex.prototype.rightOf = function (a) {
  return this.isCCW(a.dest(), a.orig())
};
jsts.triangulate.quadedge.Vertex.prototype.leftOf = function (a) {
  return this.isCCW(a.orig(), a.dest())
};
jsts.triangulate.quadedge.Vertex.prototype.bisector = function (a, b) {
  var c, d, e;
  c = b.getX() - a.getX();
  d = b.getY() - a.getY();
  e = new jsts.algorithm.HCoordinate(a.getX() + c / 2, a.getY() + d / 2, 1);
  c = new jsts.algorithm.HCoordinate(a.getX() - d + c / 2, a.getY() + c + d / 2, 1);
  return new jsts.algorithm.HCoordinate(e, c)
};
jsts.triangulate.quadedge.Vertex.prototype.distance = function (a, b) {
  return a.p.distance(b.p)
};
jsts.triangulate.quadedge.Vertex.prototype.circumRadiusRatio = function (a, b) {
  var c, d, e;
  c = this.circleCenter(a, b);
  c = this.distance(c, a);
  d = this.distance(this, a);
  e = this.distance(a, b);
  e < d && (d = e);
  e = this.distance(b, this);
  e < d && (d = e);
  return c / d
};
jsts.triangulate.quadedge.Vertex.prototype.midPoint = function (a) {
  var b;
  b = (this.p.x + a.getX()) / 2;
  a = (this.p.y + a.getY()) / 2;
  return new jsts.triangulate.quadedge.Vertex(b, a)
};
jsts.triangulate.quadedge.Vertex.prototype.circleCenter = function (a, b) {
  var c, d;
  c = new jsts.triangulate.quadedge.Vertex(this.getX(), this.getY());
  c = this.bisector(c, a);
  d = this.bisector(a, b);
  c = new jsts.algorithm.HCoordinate(c, d);
  d = null;
  try {
    d = new jsts.triangulate.quadedge.Vertex(c.getX(), c.getY())
  } catch (e) {
  }
  return d
};
jsts.noding.SegmentNodeList = function (a) {
  this.nodeMap = new javascript.util.TreeMap;
  this.edge = a
};
jsts.noding.SegmentNodeList.prototype.nodeMap = null;
jsts.noding.SegmentNodeList.prototype.iterator = function () {
  return this.nodeMap.values().iterator()
};
jsts.noding.SegmentNodeList.prototype.edge = null;
jsts.noding.SegmentNodeList.prototype.getEdge = function () {
  return this.edge
};
jsts.noding.SegmentNodeList.prototype.add = function (a, b) {
  var c = new jsts.noding.SegmentNode(this.edge, a, b, this.edge.getSegmentOctant(b)), d = this.nodeMap.get(c);
  if (null !== d)return jsts.util.Assert.isTrue(d.coord.equals2D(a), "Found equal nodes with different coordinates"), d;
  this.nodeMap.put(c, c);
  return c
};
jsts.noding.SegmentNodeList.prototype.addEndpoints = function () {
  var a = this.edge.size() - 1;
  this.add(this.edge.getCoordinate(0), 0);
  this.add(this.edge.getCoordinate(a), a)
};
jsts.noding.SegmentNodeList.prototype.addCollapsedNodes = function () {
  var a = [];
  this.findCollapsesFromInsertedNodes(a);
  this.findCollapsesFromExistingVertices(a);
  for (var b = 0; b < a.length; b++) {
    var c = a[b];
    this.add(this.edge.getCoordinate(c), c)
  }
};
jsts.noding.SegmentNodeList.prototype.findCollapsesFromExistingVertices = function (a) {
  for (var b = 0; b < this.edge.size() - 2; b++) {
    var c = this.edge.getCoordinate(b);
    this.edge.getCoordinate(b + 1);
    var d = this.edge.getCoordinate(b + 2);
    c.equals2D(d) && a.push(b + 1)
  }
};
jsts.noding.SegmentNodeList.prototype.findCollapsesFromInsertedNodes = function (a) {
  for (var b = [null], c = this.iterator(), d = c.next(); c.hasNext();) {
    var e = c.next();
    this.findCollapseIndex(d, e, b) && a.push(b[0]);
    d = e
  }
};
jsts.noding.SegmentNodeList.prototype.findCollapseIndex = function (a, b, c) {
  if (!a.coord.equals2D(b.coord))return !1;
  var d = b.segmentIndex - a.segmentIndex;
  b.isInterior() || d--;
  return 1 === d ? (c[0] = a.segmentIndex + 1, !0) : !1
};
jsts.noding.SegmentNodeList.prototype.addSplitEdges = function (a) {
  this.addEndpoints();
  this.addCollapsedNodes();
  for (var b = this.iterator(), c = b.next(); b.hasNext();) {
    var d = b.next(), c = this.createSplitEdge(c, d);
    a.add(c);
    c = d
  }
};
jsts.noding.SegmentNodeList.prototype.checkSplitEdgesCorrectness = function (a) {
  var b = edge.getCoordinates(), c = a[0].getCoordinate(0);
  if (!c.equals2D(b[0]))throw Error("bad split edge start point at " + c);
  a = a[a.length - 1].getCoordinates();
  a = a[a.length - 1];
  if (!a.equals2D(b[b.length - 1]))throw Error("bad split edge end point at " + a);
};
jsts.noding.SegmentNodeList.prototype.createSplitEdge = function (a, b) {
  var c = this.edge.getCoordinate(b.segmentIndex), c = b.isInterior() || !b.coord.equals2D(c), d = [], e = 0;
  d[e++] = new jsts.geom.Coordinate(a.coord);
  for (var f = a.segmentIndex + 1; f <= b.segmentIndex; f++)d[e++] = this.edge.getCoordinate(f);
  c && (d[e] = b.coord);
  return new jsts.noding.NodedSegmentString(d, this.edge.getData())
};
jsts.operation.union.CascadedPolygonUnion = function (a) {
  this.inputPolys = a
};
jsts.operation.union.CascadedPolygonUnion.union = function (a) {
  return (new jsts.operation.union.CascadedPolygonUnion(a)).union()
};
jsts.operation.union.CascadedPolygonUnion.prototype.inputPolys;
jsts.operation.union.CascadedPolygonUnion.prototype.geomFactory = null;
jsts.operation.union.CascadedPolygonUnion.prototype.STRTREE_NODE_CAPACITY = 4;
jsts.operation.union.CascadedPolygonUnion.prototype.union = function () {
  if (0 === this.inputPolys.length)return null;
  this.geomFactory = this.inputPolys[0].getFactory();
  for (var a = new jsts.index.strtree.STRtree(this.STRTREE_NODE_CAPACITY), b = 0, c = this.inputPolys.length; b < c; b++) {
    var d = this.inputPolys[b];
    a.insert(d.getEnvelopeInternal(), d)
  }
  a = a.itemsTree();
  return this.unionTree(a)
};
jsts.operation.union.CascadedPolygonUnion.prototype.unionTree = function (a) {
  a = this.reduceToGeometries(a);
  return this.bindayUnion(a)
};
jsts.operation.union.CascadedPolygonUnion.prototype.binaryUnion = function (a, b, c) {
  b = b || 0;
  c = c || a.length;
  if (1 >= c - b)return b = this.getGeometry(a, b), this.unionSafe(b, null);
  if (2 === c - b)return this.unionSafe(this.getGeometry(a, b), this.getGeometry(a, b + 1));
  var d = (c + b) / 2;
  b = this.binaryUnion(a, b, d);
  a = this.binaryUnion(a, d, c);
  return this.unionSafe(b, a)
};
jsts.operation.union.CascadedPolygonUnion.getGeometry = function (a, b) {
  return b >= a.length ? null : a[i]
};
jsts.operation.union.CascadedPolygonUnion.prototype.reduceToGeometries = function (a) {
  for (var b = [], c = 0, d = a.length; c < d; c++) {
    var e = a[c], f = null;
    e instanceof Array ? f = this.unionTree(e) : e instanceof jsts.geom.Geometry && (f = e);
    b.push(f)
  }
  return b
};
jsts.operation.union.CascadedPolygonUnion.prototype.unionSafe = function (a, b) {
  return null === a && null === b ? null : null === a ? b.clone() : null === b ? a.clone() : unionOptimized(a, b)
};
jsts.operation.union.CascadedPolygonUnion.prototype.unionOptimized = function (a, b) {
  var c = a.getEnvelopeInternal(), d = b.getEnvelopeInternal();
  if (!c.intersects(d))return jsts.geom.util.GeometryCombiner.combine(a, b);
  if (1 >= a.getNumGeometries && 1 >= b.getNumGeometries)return this.unionActual(a, b);
  c = c.intersection(d);
  return this.unionUsingEnvelopeIntersection(a, b, c)
};
jsts.operation.union.CascadedPolygonUnion.prototype.unionUsingEnvelopeIntersection = function (a, b, c) {
  var d = [];
  a = this.extractByEnvelope(c, a, d);
  b = this.extractByEnvelope(c, b, d);
  b = this.unionActual(a, b);
  d.push(b);
  return jsts.geom.util.GeometryCombiner.combine(d)
};
jsts.operation.union.CascadedPolygonUnion.prototype.extractByEnvelope = function (a, b, c) {
  for (var d = [], e = 0; e < b.getNumGeometries(); e++) {
    var f = b.getGeometryN(e);
    f.getEnvelopeInternal().intersects(a) ? d.push(f) : c.add(f)
  }
  return this.geomFactory.buildGeometry(d)
};
jsts.operation.union.CascadedPolygonUnion.prototype.unionActual = function (a, b) {
  return a.union(b)
};
(function () {
  jsts.geom.MultiPoint = function (a, b) {
    this.geometries = a || [];
    this.factory = b
  };
  jsts.geom.MultiPoint.prototype = new jsts.geom.GeometryCollection;
  jsts.geom.MultiPoint.constructor = jsts.geom.MultiPoint;
  jsts.geom.MultiPoint.prototype.getBoundary = function () {
    return this.getFactory().createGeometryCollection(null)
  };
  jsts.geom.MultiPoint.prototype.getGeometryN = function (a) {
    return this.geometries[a]
  };
  jsts.geom.MultiPoint.prototype.equalsExact = function (a, b) {
    return this.isEquivalentClass(a) ? jsts.geom.GeometryCollection.prototype.equalsExact.call(this,
      a, b) : !1
  };
  jsts.geom.MultiPoint.prototype.CLASS_NAME = "jsts.geom.MultiPoint"
})();
jsts.operation.distance.DistanceOp = function (a, b, c) {
  this.ptLocator = new jsts.algorithm.PointLocator;
  this.geom = [];
  this.geom[0] = a;
  this.geom[1] = b;
  this.terminateDistance = c
};
jsts.operation.distance.DistanceOp.prototype.geom = null;
jsts.operation.distance.DistanceOp.prototype.terminateDistance = 0;
jsts.operation.distance.DistanceOp.prototype.ptLocator = null;
jsts.operation.distance.DistanceOp.prototype.minDistanceLocation = null;
jsts.operation.distance.DistanceOp.prototype.minDistance = Number.MAX_VALUE;
jsts.operation.distance.DistanceOp.distance = function (a, b) {
  return (new jsts.operation.distance.DistanceOp(a, b, 0)).distance()
};
jsts.operation.distance.DistanceOp.isWithinDistance = function (a, b, c) {
  return (new jsts.operation.distance.DistanceOp(a, b, c)).distance() <= c
};
jsts.operation.distance.DistanceOp.nearestPoints = function (a, b) {
  return (new jsts.operation.distance.DistanceOp(a, b, 0)).nearestPoints()
};
jsts.operation.distance.DistanceOp.prototype.distance = function () {
  if (null === this.geom[0] || null === this.geom[1])throw new jsts.error.IllegalArgumentError("null geometries are not supported");
  if (this.geom[0].isEmpty() || this.geom[1].isEmpty())return 0;
  this.computeMinDistance();
  return this.minDistance
};
jsts.operation.distance.DistanceOp.prototype.nearestPoints = function () {
  this.computeMinDistance();
  return [this.minDistanceLocation[0].getCoordinate(), this.minDistanceLocation[1].getCoordinate()]
};
jsts.operation.distance.DistanceOp.prototype.nearestLocations = function () {
  this.computeMinDistance();
  return this.minDistanceLocation
};
jsts.operation.distance.DistanceOp.prototype.updateMinDistance = function (a, b) {
  null !== a[0] && (b ? (this.minDistanceLocation[0] = a[1], this.minDistanceLocation[1] = a[0]) : (this.minDistanceLocation[0] = a[0], this.minDistanceLocation[1] = a[1]))
};
jsts.operation.distance.DistanceOp.prototype.computeMinDistance = function () {
  0 < arguments.length ? this.computeMinDistance2.apply(this, arguments) : null === this.minDistanceLocation && (this.minDistanceLocation = [], this.computeContainmentDistance(), this.minDistance <= this.terminateDistance || this.computeFacetDistance())
};
jsts.operation.distance.DistanceOp.prototype.computeContainmentDistance = function () {
  if (2 === arguments.length) this.computeContainmentDistance2.apply(this, arguments); else if (3 === arguments.length && !arguments[0] instanceof jsts.operation.distance.GeometryLocation) this.computeContainmentDistance3.apply(this, arguments); else if (3 === arguments.length) this.computeContainmentDistance4.apply(this, arguments); else {
    var a = [];
    this.computeContainmentDistance2(0, a);
    this.minDistance <= this.terminateDistance || this.computeContainmentDistance2(1,
      a)
  }
};
jsts.operation.distance.DistanceOp.prototype.computeContainmentDistance2 = function (a, b) {
  var c = 1 - a, d = jsts.geom.util.PolygonExtracter.getPolygons(this.geom[a]);
  if (0 < d.length) {
    var e = jsts.operation.distance.ConnectedElementLocationFilter.getLocations(this.geom[c]);
    this.computeContainmentDistance3(e, d, b);
    this.minDistance <= this.terminateDistance && (this.minDistanceLocation[c] = b[0], this.minDistanceLocation[a] = b[1])
  }
};
jsts.operation.distance.DistanceOp.prototype.computeContainmentDistance3 = function (a, b, c) {
  for (var d = 0; d < a.length; d++)for (var e = a[d], f = 0; f < b.length; f++)if (this.computeContainmentDistance4(e, b[f], c), this.minDistance <= this.terminateDistance)return
};
jsts.operation.distance.DistanceOp.prototype.computeContainmentDistance4 = function (a, b, c) {
  var d = a.getCoordinate();
  jsts.geom.Location.EXTERIOR !== this.ptLocator.locate(d, b) && (this.minDistance = 0, c[0] = a, c[1] = new jsts.operation.distance.GeometryLocation(b, d))
};
jsts.operation.distance.DistanceOp.prototype.computeFacetDistance = function () {
  var a = [], b = jsts.geom.util.LinearComponentExtracter.getLines(this.geom[0]),
    c = jsts.geom.util.LinearComponentExtracter.getLines(this.geom[1]),
    d = jsts.geom.util.PointExtracter.getPoints(this.geom[0]),
    e = jsts.geom.util.PointExtracter.getPoints(this.geom[1]);
  this.computeMinDistanceLines(b, c, a);
  this.updateMinDistance(a, !1);
  this.minDistance <= this.terminateDistance || (a[0] = null, a[1] = null, this.computeMinDistanceLinesPoints(b, e, a), this.updateMinDistance(a,
    !1), this.minDistance <= this.terminateDistance || (a[0] = null, a[1] = null, this.computeMinDistanceLinesPoints(c, d, a), this.updateMinDistance(a, !0), this.minDistance <= this.terminateDistance || (a[0] = null, a[1] = null, this.computeMinDistancePoints(d, e, a), this.updateMinDistance(a, !1))))
};
jsts.operation.distance.DistanceOp.prototype.computeMinDistanceLines = function (a, b, c) {
  for (var d = 0; d < a.length; d++)for (var e = a[d], f = 0; f < b.length; f++)if (this.computeMinDistance(e, b[f], c), this.minDistance <= this.terminateDistance)return
};
jsts.operation.distance.DistanceOp.prototype.computeMinDistancePoints = function (a, b, c) {
  for (var d = 0; d < a.length; d++)for (var e = a[d], f = 0; f < b.length; f++) {
    var g = b[f], h = e.getCoordinate().distance(g.getCoordinate());
    h < this.minDistance && (this.minDistance = h, c[0] = new jsts.operation.distance.GeometryLocation(e, 0, e.getCoordinate()), c[1] = new jsts.operation.distance.GeometryLocation(g, 0, g.getCoordinate()));
    if (this.minDistance <= this.terminateDistance)return
  }
};
jsts.operation.distance.DistanceOp.prototype.computeMinDistanceLinesPoints = function (a, b, c) {
  for (var d = 0; d < a.length; d++)for (var e = a[d], f = 0; f < b.length; f++)if (this.computeMinDistance(e, b[f], c), this.minDistance <= this.terminateDistance)return
};
jsts.operation.distance.DistanceOp.prototype.computeMinDistance2 = function (a, b, c) {
  if (b instanceof jsts.geom.Point) this.computeMinDistance3(a, b, c); else if (!(a.getEnvelopeInternal().distance(b.getEnvelopeInternal()) > this.minDistance))for (var d = a.getCoordinates(), e = b.getCoordinates(), f = 0; f < d.length - 1; f++)for (var g = 0; g < e.length - 1; g++) {
    var h = jsts.algorithm.CGAlgorithms.distanceLineLine(d[f], d[f + 1], e[g], e[g + 1]);
    if (h < this.minDistance) {
      this.minDistance = h;
      var h = new jsts.geom.LineSegment(d[f], d[f + 1]), l = new jsts.geom.LineSegment(e[g],
        e[g + 1]), h = h.closestPoints(l);
      c[0] = new jsts.operation.distance.GeometryLocation(a, f, h[0]);
      c[1] = new jsts.operation.distance.GeometryLocation(b, g, h[1])
    }
    if (this.minDistance <= this.terminateDistance)return
  }
};
jsts.operation.distance.DistanceOp.prototype.computeMinDistance3 = function (a, b, c) {
  if (!(a.getEnvelopeInternal().distance(b.getEnvelopeInternal()) > this.minDistance))for (var d = a.getCoordinates(), e = b.getCoordinate(), f = 0; f < d.length - 1; f++) {
    var g = jsts.algorithm.CGAlgorithms.distancePointLine(e, d[f], d[f + 1]);
    g < this.minDistance && (this.minDistance = g, g = (new jsts.geom.LineSegment(d[f], d[f + 1])).closestPoint(e), c[0] = new jsts.operation.distance.GeometryLocation(a, f, g), c[1] = new jsts.operation.distance.GeometryLocation(b,
      0, e));
    if (this.minDistance <= this.terminateDistance)break
  }
};
(function () {
  var a = function (a, c, d) {
    this.hotPixel = a;
    this.parentEdge = c;
    this.vertexIndex = d
  };
  a.prototype = new jsts.index.chain.MonotoneChainSelectAction;
  a.constructor = a;
  a.prototype.hotPixel = null;
  a.prototype.parentEdge = null;
  a.prototype.vertexIndex = null;
  a.prototype._isNodeAdded = !1;
  a.prototype.isNodeAdded = function () {
    return this._isNodeAdded
  };
  a.prototype.select = function (a, c) {
    var d = a.getContext();
    if (null === this.parentEdge || d !== this.parentEdge || c !== this.vertexIndex) this._isNodeAdded = this.hotPixel.addSnappedNode(d,
      c)
  };
  jsts.noding.snapround.MCIndexPointSnapper = function (a) {
    this.index = a
  };
  jsts.noding.snapround.MCIndexPointSnapper.prototype.index = null;
  jsts.noding.snapround.MCIndexPointSnapper.prototype.snap = function (b, c, d) {
    if (1 === arguments.length) this.snap2.apply(this, arguments); else {
      var e = b.getSafeEnvelope(), f = new a(b, c, d);
      this.index.query(e, {
        visitItem: function (a) {
          a.select(e, f)
        }
      });
      return f.isNodeAdded()
    }
  };
  jsts.noding.snapround.MCIndexPointSnapper.prototype.snap2 = function (a) {
    return this.snap(a, null, -1)
  }
})();
jsts.geomgraph.Quadrant = function () {
};
jsts.geomgraph.Quadrant.NE = 0;
jsts.geomgraph.Quadrant.NW = 1;
jsts.geomgraph.Quadrant.SW = 2;
jsts.geomgraph.Quadrant.SE = 3;
jsts.geomgraph.Quadrant.quadrant = function (a, b) {
  if (a instanceof jsts.geom.Coordinate)return jsts.geomgraph.Quadrant.quadrant2.apply(this, arguments);
  if (0 === a && 0 === b)throw new jsts.error.IllegalArgumentError("Cannot compute the quadrant for point ( " + a + ", " + b + " )");
  return 0 <= a ? 0 <= b ? jsts.geomgraph.Quadrant.NE : jsts.geomgraph.Quadrant.SE : 0 <= b ? jsts.geomgraph.Quadrant.NW : jsts.geomgraph.Quadrant.SW
};
jsts.geomgraph.Quadrant.quadrant2 = function (a, b) {
  if (b.x === a.x && b.y === a.y)throw new jsts.error.IllegalArgumentError("Cannot compute the quadrant for two identical points " + a);
  return b.x >= a.x ? b.y >= a.y ? jsts.geomgraph.Quadrant.NE : jsts.geomgraph.Quadrant.SE : b.y >= a.y ? jsts.geomgraph.Quadrant.NW : jsts.geomgraph.Quadrant.SW
};
jsts.geomgraph.Quadrant.isOpposite = function (a, b) {
  return a === b ? !1 : 2 === (a - b + 4) % 4 ? !0 : !1
};
jsts.geomgraph.Quadrant.commonHalfPlane = function (a, b) {
  if (a === b)return a;
  if (2 === (a - b + 4) % 4)return -1;
  var c = a < b ? a : b;
  return 0 === c && 3 === (a > b ? a : b) ? 3 : c
};
jsts.geomgraph.Quadrant.isInHalfPlane = function (a, b) {
  return b === jsts.geomgraph.Quadrant.SE ? a === jsts.geomgraph.Quadrant.SE || a === jsts.geomgraph.Quadrant.SW : a === b || a === b + 1
};
jsts.geomgraph.Quadrant.isNorthern = function (a) {
  return a === jsts.geomgraph.Quadrant.NE || a === jsts.geomgraph.Quadrant.NW
};
jsts.operation.valid.ConsistentAreaTester = function (a) {
  this.geomGraph = a;
  this.li = new jsts.algorithm.RobustLineIntersector;
  this.nodeGraph = new jsts.operation.relate.RelateNodeGraph;
  this.invalidPoint = null
};
jsts.operation.valid.ConsistentAreaTester.prototype.getInvalidPoint = function () {
  return this.invalidPoint
};
jsts.operation.valid.ConsistentAreaTester.prototype.isNodeConsistentArea = function () {
  var a = this.geomGraph.computeSelfNodes(this.li, !0);
  if (a.hasProperIntersection())return this.invalidPoint = a.getProperIntersectionPoint(), !1;
  this.nodeGraph.build(this.geomGraph);
  return this.isNodeEdgeAreaLabelsConsistent()
};
jsts.operation.valid.ConsistentAreaTester.prototype.isNodeEdgeAreaLabelsConsistent = function () {
  for (var a = this.nodeGraph.getNodeIterator(); a.hasNext();) {
    var b = a.next();
    if (!b.getEdges().isAreaLabelsConsistent(this.geomGraph))return this.invalidPoint = b.getCoordinate().clone(), !1
  }
  return !0
};
jsts.operation.valid.ConsistentAreaTester.prototype.hasDuplicateRings = function () {
  for (var a = this.nodeGraph.getNodeIterator(); a.hasNext();)for (var b = a.next().getEdges().iterator(); b.hasNext();) {
    var c = b.next();
    if (1 < c.getEdgeEnds().length)return invalidPoint = c.getEdge().getCoordinate(0), !0
  }
  return !1
};
jsts.index.strtree.AbstractNode = function (a) {
  this.level = a;
  this.childBoundables = []
};
jsts.index.strtree.AbstractNode.prototype = new jsts.index.strtree.Boundable;
jsts.index.strtree.AbstractNode.constructor = jsts.index.strtree.AbstractNode;
jsts.index.strtree.AbstractNode.prototype.childBoundables = null;
jsts.index.strtree.AbstractNode.prototype.bounds = null;
jsts.index.strtree.AbstractNode.prototype.level = null;
jsts.index.strtree.AbstractNode.prototype.getChildBoundables = function () {
  return this.childBoundables
};
jsts.index.strtree.AbstractNode.prototype.computeBounds = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.index.strtree.AbstractNode.prototype.getBounds = function () {
  null === this.bounds && (this.bounds = this.computeBounds());
  return this.bounds
};
jsts.index.strtree.AbstractNode.prototype.getLevel = function () {
  return this.level
};
jsts.index.strtree.AbstractNode.prototype.addChildBoundable = function (a) {
  this.childBoundables.push(a)
};
(function () {
  var a = jsts.geom.Location, b = jsts.geomgraph.Position, c = jsts.geomgraph.EdgeEnd;
  jsts.geomgraph.DirectedEdge = function (a, b) {
    c.call(this, a);
    this.depth = [0, -999, -999];
    if (this._isForward = b) this.init(a.getCoordinate(0), a.getCoordinate(1)); else {
      var f = a.getNumPoints() - 1;
      this.init(a.getCoordinate(f), a.getCoordinate(f - 1))
    }
    this.computeDirectedLabel()
  };
  jsts.geomgraph.DirectedEdge.prototype = new c;
  jsts.geomgraph.DirectedEdge.constructor = jsts.geomgraph.DirectedEdge;
  jsts.geomgraph.DirectedEdge.depthFactor =
    function (b, c) {
      return b === a.EXTERIOR && c === a.INTERIOR ? 1 : b === a.INTERIOR && c === a.EXTERIOR ? -1 : 0
    };
  jsts.geomgraph.DirectedEdge.prototype._isForward = null;
  jsts.geomgraph.DirectedEdge.prototype._isInResult = !1;
  jsts.geomgraph.DirectedEdge.prototype._isVisited = !1;
  jsts.geomgraph.DirectedEdge.prototype.sym = null;
  jsts.geomgraph.DirectedEdge.prototype.next = null;
  jsts.geomgraph.DirectedEdge.prototype.nextMin = null;
  jsts.geomgraph.DirectedEdge.prototype.edgeRing = null;
  jsts.geomgraph.DirectedEdge.prototype.minEdgeRing = null;
  jsts.geomgraph.DirectedEdge.prototype.depth = null;
  jsts.geomgraph.DirectedEdge.prototype.getEdge = function () {
    return this.edge
  };
  jsts.geomgraph.DirectedEdge.prototype.setInResult = function (a) {
    this._isInResult = a
  };
  jsts.geomgraph.DirectedEdge.prototype.isInResult = function () {
    return this._isInResult
  };
  jsts.geomgraph.DirectedEdge.prototype.isVisited = function () {
    return this._isVisited
  };
  jsts.geomgraph.DirectedEdge.prototype.setVisited = function (a) {
    this._isVisited = a
  };
  jsts.geomgraph.DirectedEdge.prototype.setEdgeRing =
    function (a) {
      this.edgeRing = a
    };
  jsts.geomgraph.DirectedEdge.prototype.getEdgeRing = function () {
    return this.edgeRing
  };
  jsts.geomgraph.DirectedEdge.prototype.setMinEdgeRing = function (a) {
    this.minEdgeRing = a
  };
  jsts.geomgraph.DirectedEdge.prototype.getMinEdgeRing = function () {
    return this.minEdgeRing
  };
  jsts.geomgraph.DirectedEdge.prototype.getDepth = function (a) {
    return this.depth[a]
  };
  jsts.geomgraph.DirectedEdge.prototype.setDepth = function (a, b) {
    if (-999 !== this.depth[a] && this.depth[a] !== b)throw new jsts.error.TopologyError("assigned depths do not match",
      this.getCoordinate());
    this.depth[a] = b
  };
  jsts.geomgraph.DirectedEdge.prototype.getDepthDelta = function () {
    var a = this.edge.getDepthDelta();
    this._isForward || (a = -a);
    return a
  };
  jsts.geomgraph.DirectedEdge.prototype.setVisitedEdge = function (a) {
    this.setVisited(a);
    this.sym.setVisited(a)
  };
  jsts.geomgraph.DirectedEdge.prototype.getSym = function () {
    return this.sym
  };
  jsts.geomgraph.DirectedEdge.prototype.isForward = function () {
    return this._isForward
  };
  jsts.geomgraph.DirectedEdge.prototype.setSym = function (a) {
    this.sym = a
  };
  jsts.geomgraph.DirectedEdge.prototype.getNext = function () {
    return this.next
  };
  jsts.geomgraph.DirectedEdge.prototype.setNext = function (a) {
    this.next = a
  };
  jsts.geomgraph.DirectedEdge.prototype.getNextMin = function () {
    return this.nextMin
  };
  jsts.geomgraph.DirectedEdge.prototype.setNextMin = function (a) {
    this.nextMin = a
  };
  jsts.geomgraph.DirectedEdge.prototype.isLineEdge = function () {
    var b = this.label.isLine(0) || this.label.isLine(1),
      c = !this.label.isArea(0) || this.label.allPositionsEqual(0, a.EXTERIOR), f = !this.label.isArea(1) ||
        this.label.allPositionsEqual(1, a.EXTERIOR);
    return b && c && f
  };
  jsts.geomgraph.DirectedEdge.prototype.isInteriorAreaEdge = function () {
    for (var c = !0, e = 0; 2 > e; e++)this.label.isArea(e) && this.label.getLocation(e, b.LEFT) === a.INTERIOR && this.label.getLocation(e, b.RIGHT) === a.INTERIOR || (c = !1);
    return c
  };
  jsts.geomgraph.DirectedEdge.prototype.computeDirectedLabel = function () {
    this.label = new jsts.geomgraph.Label(this.edge.getLabel());
    this._isForward || this.label.flip()
  };
  jsts.geomgraph.DirectedEdge.prototype.setEdgeDepths =
    function (a, c) {
      var f = this.getEdge().getDepthDelta();
      this._isForward || (f = -f);
      var g = 1;
      a === b.LEFT && (g = -1);
      var h = b.opposite(a), f = c + f * g;
      this.setDepth(a, c);
      this.setDepth(h, f)
    }
})();
jsts.operation.buffer.OffsetCurveBuilder = function (a, b) {
  this.precisionModel = a;
  this.bufParams = b
};
jsts.operation.buffer.OffsetCurveBuilder.prototype.distance = 0;
jsts.operation.buffer.OffsetCurveBuilder.prototype.precisionModel = null;
jsts.operation.buffer.OffsetCurveBuilder.prototype.bufParams = null;
jsts.operation.buffer.OffsetCurveBuilder.prototype.getBufferParameters = function () {
  return this.bufParams
};
jsts.operation.buffer.OffsetCurveBuilder.prototype.getLineCurve = function (a, b) {
  this.distance = b;
  if (0 > this.distance && !this.bufParams.isSingleSided() || 0 == this.distance)return null;
  var c = this.getSegGen(Math.abs(this.distance));
  1 >= a.length ? this.computePointCurve(a[0], c) : this.bufParams.isSingleSided() ? this.computeSingleSidedBufferCurve(a, 0 > b, c) : this.computeLineBufferCurve(a, c);
  return c.getCoordinates()
};
jsts.operation.buffer.OffsetCurveBuilder.prototype.getRingCurve = function (a, b, c) {
  this.distance = c;
  if (2 >= a.length)return this.getLineCurve(a, c);
  if (0 == this.distance)return jsts.operation.buffer.OffsetCurveBuilder.copyCoordinates(a);
  c = this.getSegGen(this.distance);
  this.computeRingBufferCurve(a, b, c);
  return c.getCoordinates()
};
jsts.operation.buffer.OffsetCurveBuilder.prototype.getOffsetCurve = function (a, b) {
  this.distance = b;
  if (0 === this.distance)return null;
  var c = 0 > this.distance, d = this.getSegGen(Math.abs(this.distance));
  1 >= a.length ? this.computePointCurve(a[0], d) : this.computeOffsetCurve(a, c, d);
  d = d.getCoordinates();
  c && d.reverse();
  return d
};
jsts.operation.buffer.OffsetCurveBuilder.copyCoordinates = function (a) {
  for (var b = [], c = 0; c < a.length; c++)b.push(a[c].clone());
  return b
};
jsts.operation.buffer.OffsetCurveBuilder.prototype.getSegGen = function (a) {
  return new jsts.operation.buffer.OffsetSegmentGenerator(this.precisionModel, this.bufParams, a)
};
jsts.operation.buffer.OffsetCurveBuilder.SIMPLIFY_FACTOR = 100;
jsts.operation.buffer.OffsetCurveBuilder.simplifyTolerance = function (a) {
  return a / jsts.operation.buffer.OffsetCurveBuilder.SIMPLIFY_FACTOR
};
jsts.operation.buffer.OffsetCurveBuilder.prototype.computePointCurve = function (a, b) {
  switch (this.bufParams.getEndCapStyle()) {
    case jsts.operation.buffer.BufferParameters.CAP_ROUND:
      b.createCircle(a);
      break;
    case jsts.operation.buffer.BufferParameters.CAP_SQUARE:
      b.createSquare(a)
  }
};
jsts.operation.buffer.OffsetCurveBuilder.prototype.computeLineBufferCurve = function (a, b) {
  var c = jsts.operation.buffer.OffsetCurveBuilder.simplifyTolerance(this.distance),
    d = jsts.operation.buffer.BufferInputLineSimplifier.simplify(a, c), e = d.length - 1;
  b.initSideSegments(d[0], d[1], jsts.geomgraph.Position.LEFT);
  for (var f = 2; f <= e; f++)b.addNextSegment(d[f], !0);
  b.addLastSegment();
  b.addLineEndCap(d[e - 1], d[e]);
  c = jsts.operation.buffer.BufferInputLineSimplifier.simplify(a, -c);
  f = c.length - 1;
  b.initSideSegments(c[f],
    c[f - 1], jsts.geomgraph.Position.LEFT);
  for (f -= 2; 0 <= f; f--)b.addNextSegment(c[f], !0);
  b.addLastSegment();
  b.addLineEndCap(c[1], c[0]);
  b.closeRing()
};
jsts.operation.buffer.OffsetCurveBuilder.prototype.computeSingleSidedBufferCurve = function (a, b, c) {
  var d = jsts.operation.buffer.OffsetCurveBuilder.simplifyTolerance(this.distance);
  if (b)for (c.addSegments(a, !0), b = jsts.operation.buffer.BufferInputLineSimplifier.simplify(a, -d), a = b.length - 1, c.initSideSegments(b[a], b[a - 1], jsts.geomgraph.Position.LEFT), c.addFirstSegment(), a -= 2; 0 <= a; a--)c.addNextSegment(b[a], !0); else for (c.addSegments(a, !1), b = jsts.operation.buffer.BufferInputLineSimplifier.simplify(a, d), d = b.length -
    1, c.initSideSegments(b[0], b[1], jsts.geomgraph.Position.LEFT), c.addFirstSegment(), a = 2; a <= d; a++)c.addNextSegment(b[a], !0);
  c.addLastSegment();
  c.closeRing()
};
jsts.operation.buffer.OffsetCurveBuilder.prototype.computeOffsetCurve = function (a, b, c) {
  var d = jsts.operation.buffer.OffsetCurveBuilder.simplifyTolerance(this.distance);
  if (b)for (b = jsts.operation.buffer.BufferInputLineSimplifier.simplify(a, -d), a = b.length - 1, c.initSideSegments(b[a], b[a - 1], jsts.geomgraph.Position.LEFT), c.addFirstSegment(), a -= 2; 0 <= a; a--)c.addNextSegment(b[a], !0); else for (b = jsts.operation.buffer.BufferInputLineSimplifier.simplify(a, d), d = b.length - 1, c.initSideSegments(b[0], b[1], jsts.geomgraph.Position.LEFT),
                                                                                                                                                                                                                                                       c.addFirstSegment(), a = 2; a <= d; a++)c.addNextSegment(b[a], !0);
  c.addLastSegment()
};
jsts.operation.buffer.OffsetCurveBuilder.prototype.computeRingBufferCurve = function (a, b, c) {
  var d = jsts.operation.buffer.OffsetCurveBuilder.simplifyTolerance(this.distance);
  b === jsts.geomgraph.Position.RIGHT && (d = -d);
  a = jsts.operation.buffer.BufferInputLineSimplifier.simplify(a, d);
  d = a.length - 1;
  c.initSideSegments(a[d - 1], a[0], b);
  for (b = 1; b <= d; b++)c.addNextSegment(a[b], 1 !== b);
  c.closeRing()
};
jsts.index.strtree.SIRtree = function (a) {
  jsts.index.strtree.AbstractSTRtree.call(this, a || 10)
};
jsts.index.strtree.SIRtree.prototype = new jsts.index.strtree.AbstractSTRtree;
jsts.index.strtree.SIRtree.constructor = jsts.index.strtree.SIRtree;
jsts.index.strtree.SIRtree.prototype.comperator = {
  compare: function (a, b) {
    return a.getBounds().getCentre() - b.getBounds().getCentre()
  }
};
jsts.index.strtree.SIRtree.prototype.intersectionOp = {
  intersects: function (a, b) {
    return a.intersects(b)
  }
};
jsts.index.strtree.SIRtree.prototype.createNode = function (a) {
  a = function (a) {
    jsts.index.strtree.AbstractNode.apply(this, arguments)
  };
  a.prototype = new jsts.index.strtree.AbstractNode;
  a.constructor = a;
  a.prototype.computeBounds = function () {
    for (var a = null, c = this.getChildBoundables(), d, e = 0, f = c.length; e < f; e++)d = c[e], null === a ? a = new jsts.index.strtree.Interval(d.getBounds()) : a.expandToInclude(d.getBounds());
    return a
  };
  return a
};
jsts.index.strtree.SIRtree.prototype.insert = function (a, b, c) {
  jsts.index.strtree.AbstractSTRtree.prototype.insert(new jsts.index.strtree.Interval(Math.min(a, b), Math.max(a, b)), c)
};
jsts.index.strtree.SIRtree.prototype.query = function (a, b) {
  b = b || a;
  jsts.index.strtree.AbstractSTRtree.prototype.query(new jsts.index.strtree.Interval(Math.min(a, b), Math.max(a, b)))
};
jsts.index.strtree.SIRtree.prototype.getIntersectsOp = function () {
  return this.intersectionOp
};
jsts.index.strtree.SIRtree.prototype.getComparator = function () {
  return this.comperator
};
(function () {
  var a = jsts.geom.Location;
  jsts.operation.relate.RelateNodeGraph = function () {
    this.nodes = new jsts.geomgraph.NodeMap(new jsts.operation.relate.RelateNodeFactory)
  };
  jsts.operation.relate.RelateNodeGraph.prototype.nodes = null;
  jsts.operation.relate.RelateNodeGraph.prototype.build = function (a) {
    this.computeIntersectionNodes(a, 0);
    this.copyNodesAndLabels(a, 0);
    a = (new jsts.operation.relate.EdgeEndBuilder).computeEdgeEnds(a.getEdgeIterator());
    this.insertEdgeEnds(a)
  };
  jsts.operation.relate.RelateNodeGraph.prototype.computeIntersectionNodes =
    function (b, c) {
      for (var d = b.getEdgeIterator(); d.hasNext();)for (var e = d.next(), f = e.getLabel().getLocation(c), e = e.getEdgeIntersectionList().iterator(); e.hasNext();) {
        var g = e.next(), g = this.nodes.addNode(g.coord);
        f === a.BOUNDARY ? g.setLabelBoundary(c) : g.getLabel().isNull(c) && g.setLabel(c, a.INTERIOR)
      }
    };
  jsts.operation.relate.RelateNodeGraph.prototype.copyNodesAndLabels = function (a, c) {
    for (var d = a.getNodeIterator(); d.hasNext();) {
      var e = d.next();
      this.nodes.addNode(e.getCoordinate()).setLabel(c, e.getLabel().getLocation(c))
    }
  };
  jsts.operation.relate.RelateNodeGraph.prototype.insertEdgeEnds = function (a) {
    for (a = a.iterator(); a.hasNext();) {
      var c = a.next();
      this.nodes.add(c)
    }
  };
  jsts.operation.relate.RelateNodeGraph.prototype.getNodeIterator = function () {
    return this.nodes.iterator()
  }
})();
(function () {
  var a = jsts.geom.Location, b = jsts.geomgraph.Position;
  jsts.geomgraph.Depth = function () {
    this.depth = [[], []];
    for (var a = 0; 2 > a; a++)for (var b = 0; 3 > b; b++)this.depth[a][b] = jsts.geomgraph.Depth.NULL_VALUE
  };
  jsts.geomgraph.Depth.NULL_VALUE = -1;
  jsts.geomgraph.Depth.depthAtLocation = function (b) {
    return b === a.EXTERIOR ? 0 : b === a.INTERIOR ? 1 : jsts.geomgraph.Depth.NULL_VALUE
  };
  jsts.geomgraph.Depth.prototype.depth = null;
  jsts.geomgraph.Depth.prototype.getDepth = function (a, b) {
    return this.depth[a][b]
  };
  jsts.geomgraph.Depth.prototype.setDepth =
    function (a, b, e) {
      this.depth[a][b] = e
    };
  jsts.geomgraph.Depth.prototype.getLocation = function (b, d) {
    return 0 >= this.depth[b][d] ? a.EXTERIOR : a.INTERIOR
  };
  jsts.geomgraph.Depth.prototype.add = function (b, d, e) {
    e === a.INTERIOR && this.depth[b][d]++
  };
  jsts.geomgraph.Depth.prototype.isNull = function () {
    if (0 < arguments.length)return this.isNull2.apply(this, arguments);
    for (var a = 0; 2 > a; a++)for (var b = 0; 3 > b; b++)if (this.depth[a][b] !== jsts.geomgraph.Depth.NULL_VALUE)return !1;
    return !0
  };
  jsts.geomgraph.Depth.prototype.isNull2 = function (a) {
    return 1 <
    arguments.length ? this.isNull3.apply(this, arguments) : this.depth[a][1] == jsts.geomgraph.Depth.NULL_VALUE
  };
  jsts.geomgraph.Depth.prototype.isNull3 = function (a, b) {
    return this.depth[a][b] == jsts.geomgraph.Depth.NULL_VALUE
  };
  jsts.geomgraph.Depth.prototype.add = function (b) {
    for (var d = 0; 2 > d; d++)for (var e = 1; 3 > e; e++) {
      var f = b.getLocation(d, e);
      if (f === a.EXTERIOR || f === a.INTERIOR) this.isNull(d, e) ? this.depth[d][e] = jsts.geomgraph.Depth.depthAtLocation(f) : this.depth[d][e] += jsts.geomgraph.Depth.depthAtLocation(f)
    }
  };
  jsts.geomgraph.Depth.prototype.getDelta =
    function (a) {
      return this.depth[a][b.RIGHT] - this.depth[a][b.LEFT]
    };
  jsts.geomgraph.Depth.prototype.normalize = function () {
    for (var a = 0; 2 > a; a++)if (!this.isNull(a)) {
      var b = this.depth[a][1];
      this.depth[a][2] < b && (b = this.depth[a][2]);
      0 > b && (b = 0);
      for (var e = 1; 3 > e; e++) {
        var f = 0;
        this.depth[a][e] > b && (f = 1);
        this.depth[a][e] = f
      }
    }
  };
  jsts.geomgraph.Depth.prototype.toString = function () {
    return "A: " + this.depth[0][1] + "," + this.depth[0][2] + " B: " + this.depth[1][1] + "," + this.depth[1][2]
  }
})();
jsts.operation.buffer.BufferParameters = function (a, b, c, d) {
  a && this.setQuadrantSegments(a);
  b && this.setEndCapStyle(b);
  c && this.setJoinStyle(c);
  d && this.setMitreLimit(d)
};
jsts.operation.buffer.BufferParameters.CAP_ROUND = 1;
jsts.operation.buffer.BufferParameters.CAP_FLAT = 2;
jsts.operation.buffer.BufferParameters.CAP_SQUARE = 3;
jsts.operation.buffer.BufferParameters.JOIN_ROUND = 1;
jsts.operation.buffer.BufferParameters.JOIN_MITRE = 2;
jsts.operation.buffer.BufferParameters.JOIN_BEVEL = 3;
jsts.operation.buffer.BufferParameters.DEFAULT_QUADRANT_SEGMENTS = 8;
jsts.operation.buffer.BufferParameters.DEFAULT_MITRE_LIMIT = 5;
jsts.operation.buffer.BufferParameters.prototype.quadrantSegments = jsts.operation.buffer.BufferParameters.DEFAULT_QUADRANT_SEGMENTS;
jsts.operation.buffer.BufferParameters.prototype.endCapStyle = jsts.operation.buffer.BufferParameters.CAP_ROUND;
jsts.operation.buffer.BufferParameters.prototype.joinStyle = jsts.operation.buffer.BufferParameters.JOIN_ROUND;
jsts.operation.buffer.BufferParameters.prototype.mitreLimit = jsts.operation.buffer.BufferParameters.DEFAULT_MITRE_LIMIT;
jsts.operation.buffer.BufferParameters.prototype._isSingleSided = !1;
jsts.operation.buffer.BufferParameters.prototype.getQuadrantSegments = function () {
  return this.quadrantSegments
};
jsts.operation.buffer.BufferParameters.prototype.setQuadrantSegments = function (a) {
  this.quadrantSegments = a
};
jsts.operation.buffer.BufferParameters.prototype.setQuadrantSegments = function (a) {
  this.quadrantSegments = a;
  0 === this.quadrantSegments && (this.joinStyle = jsts.operation.buffer.BufferParameters.JOIN_BEVEL);
  0 > this.quadrantSegments && (this.joinStyle = jsts.operation.buffer.BufferParameters.JOIN_MITRE, this.mitreLimit = Math.abs(this.quadrantSegments));
  0 >= a && (this.quadrantSegments = 1);
  this.joinStyle !== jsts.operation.buffer.BufferParameters.JOIN_ROUND && (this.quadrantSegments = jsts.operation.buffer.BufferParameters.DEFAULT_QUADRANT_SEGMENTS)
};
jsts.operation.buffer.BufferParameters.bufferDistanceError = function (a) {
  return 1 - Math.cos(Math.PI / 2 / a / 2)
};
jsts.operation.buffer.BufferParameters.prototype.getEndCapStyle = function () {
  return this.endCapStyle
};
jsts.operation.buffer.BufferParameters.prototype.setEndCapStyle = function (a) {
  this.endCapStyle = a
};
jsts.operation.buffer.BufferParameters.prototype.getJoinStyle = function () {
  return this.joinStyle
};
jsts.operation.buffer.BufferParameters.prototype.setJoinStyle = function (a) {
  this.joinStyle = a
};
jsts.operation.buffer.BufferParameters.prototype.getMitreLimit = function () {
  return this.mitreLimit
};
jsts.operation.buffer.BufferParameters.prototype.setMitreLimit = function (a) {
  this.mitreLimit = a
};
jsts.operation.buffer.BufferParameters.prototype.setSingleSided = function (a) {
  this._isSingleSided = a
};
jsts.operation.buffer.BufferParameters.prototype.isSingleSided = function () {
  return this._isSingleSided
};
jsts.algorithm.distance.PointPairDistance = function () {
  this.pt = [new jsts.geom.Coordinate, new jsts.geom.Coordinate]
};
jsts.algorithm.distance.PointPairDistance.prototype.pt = null;
jsts.algorithm.distance.PointPairDistance.prototype.distance = NaN;
jsts.algorithm.distance.PointPairDistance.prototype.isNull = !0;
jsts.algorithm.distance.PointPairDistance.prototype.initialize = function (a, b, c) {
  void 0 === a ? this.isNull = !0 : (this.pt[0].setCoordinate(a), this.pt[1].setCoordinate(b), this.distance = void 0 !== c ? c : a.distance(b), this.isNull = !1)
};
jsts.algorithm.distance.PointPairDistance.prototype.getDistance = function () {
  return this.distance
};
jsts.algorithm.distance.PointPairDistance.prototype.getCoordinates = function () {
  return this.pt
};
jsts.algorithm.distance.PointPairDistance.prototype.getCoordinate = function (a) {
  return this.pt[a]
};
jsts.algorithm.distance.PointPairDistance.prototype.setMaximum = function (a) {
  2 === arguments.length ? this.setMaximum2.apply(this, arguments) : this.setMaximum(a.pt[0], a.pt[1])
};
jsts.algorithm.distance.PointPairDistance.prototype.setMaximum2 = function (a, b) {
  if (this.isNull) this.initialize(a, b); else {
    var c = a.distance(b);
    c > this.distance && this.initialize(a, b, c)
  }
};
jsts.algorithm.distance.PointPairDistance.prototype.setMinimum = function (a) {
  2 === arguments.length ? this.setMinimum2.apply(this, arguments) : this.setMinimum(a.pt[0], a.pt[1])
};
jsts.algorithm.distance.PointPairDistance.prototype.setMinimum2 = function (a, b) {
  if (this.isNull) this.initialize(a, b); else {
    var c = a.distance(b);
    c < this.distance && this.initialize(a, b, c)
  }
};
(function () {
  var a = jsts.algorithm.distance.PointPairDistance, b = jsts.algorithm.distance.DistanceToPoint, c = function (c) {
    this.maxPtDist = new a;
    this.minPtDist = new a;
    this.euclideanDist = new b;
    this.geom = c
  };
  c.prototype = new jsts.geom.CoordinateFilter;
  c.prototype.maxPtDist = new a;
  c.prototype.minPtDist = new a;
  c.prototype.euclideanDist = new b;
  c.prototype.geom;
  c.prototype.filter = function (a) {
    this.minPtDist.initialize();
    b.computeDistance(this.geom, a, this.minPtDist);
    this.maxPtDist.setMaximum(this.minPtDist)
  };
  c.prototype.getMaxPointDistance =
    function () {
      return this.maxPtDist
    };
  var d = function (b, c) {
    this.maxPtDist = new a;
    this.minPtDist = new a;
    this.geom = b;
    this.numSubSegs = Math.round(1 / c)
  };
  d.prototype = new jsts.geom.CoordinateSequenceFilter;
  d.prototype.maxPtDist = new a;
  d.prototype.minPtDist = new a;
  d.prototype.geom;
  d.prototype.numSubSegs = 0;
  d.prototype.filter = function (a, c) {
    if (0 != c)for (var d = a[c - 1], h = a[c], l = (h.x - d.x) / this.numSubSegs, h = (h.y - d.y) / this.numSubSegs, k = 0; k < this.numSubSegs; k++) {
      var m = new jsts.geom.Coordinate(d.x + k * l, d.y + k * h);
      this.minPtDist.initialize();
      b.computeDistance(this.geom, m, this.minPtDist);
      this.maxPtDist.setMaximum(this.minPtDist)
    }
  };
  d.prototype.isGeometryChanged = function () {
    return !1
  };
  d.prototype.isDone = function () {
    return !1
  };
  d.prototype.getMaxPointDistance = function () {
    return this.maxPtDist
  };
  jsts.algorithm.distance.DiscreteHausdorffDistance = function (a, b) {
    this.g0 = a;
    this.g1 = b;
    this.ptDist = new jsts.algorithm.distance.PointPairDistance
  };
  jsts.algorithm.distance.DiscreteHausdorffDistance.prototype.g0 = null;
  jsts.algorithm.distance.DiscreteHausdorffDistance.prototype.g1 =
    null;
  jsts.algorithm.distance.DiscreteHausdorffDistance.prototype.ptDist = null;
  jsts.algorithm.distance.DiscreteHausdorffDistance.prototype.densifyFrac = 0;
  jsts.algorithm.distance.DiscreteHausdorffDistance.distance = function (a, b, c) {
    a = new jsts.algorithm.distance.DiscreteHausdorffDistance(a, b);
    void 0 !== c && a.setDensifyFraction(c);
    return a.distance()
  };
  jsts.algorithm.distance.DiscreteHausdorffDistance.prototype.setDensifyFraction = function (a) {
    if (1 < a || 0 >= a)throw new jsts.error.IllegalArgumentError("Fraction is not in range (0.0 - 1.0]");
    this.densifyFrac = a
  };
  jsts.algorithm.distance.DiscreteHausdorffDistance.prototype.distance = function () {
    this.compute(this.g0, this.g1);
    return ptDist.getDistance()
  };
  jsts.algorithm.distance.DiscreteHausdorffDistance.prototype.orientedDistance = function () {
    this.computeOrientedDistance(this.g0, this.g1, this.ptDist);
    return this.ptDist.getDistance()
  };
  jsts.algorithm.distance.DiscreteHausdorffDistance.prototype.getCoordinates = function () {
    return ptDist.getCoordinates()
  };
  jsts.algorithm.distance.DiscreteHausdorffDistance.prototype.compute =
    function (a, b) {
      this.computeOrientedDistance(a, b, this.ptDist);
      this.computeOrientedDistance(b, a, this.ptDist)
    };
  jsts.algorithm.distance.DiscreteHausdorffDistance.prototype.computeOrientedDistance = function (a, b, g) {
    var h = new c(b);
    a.apply(h);
    g.setMaximum(h.getMaxPointDistance());
    0 < this.densifyFrac && (b = new d(b, this.densifyFrac), a.apply(b), g.setMaximum(b.getMaxPointDistance()))
  }
})();
jsts.operation.distance.GeometryLocation = function (a, b, c) {
  this.component = a;
  this.segIndex = b;
  this.pt = c
};
jsts.operation.distance.GeometryLocation.INSIDE_AREA = -1;
jsts.operation.distance.GeometryLocation.prototype.component = null;
jsts.operation.distance.GeometryLocation.prototype.segIndex = null;
jsts.operation.distance.GeometryLocation.prototype.pt = null;
jsts.operation.distance.GeometryLocation.prototype.getGeometryComponent = function () {
  return this.component
};
jsts.operation.distance.GeometryLocation.prototype.getSegmentIndex = function () {
  return this.segIndex
};
jsts.operation.distance.GeometryLocation.prototype.getCoordinate = function () {
  return this.pt
};
jsts.operation.distance.GeometryLocation.prototype.isInsideArea = function () {
  return this.segIndex === jsts.operation.distance.GeometryLocation.INSIDE_AREA
};
jsts.geom.util.PointExtracter = function (a) {
  this.pts = a
};
jsts.geom.util.PointExtracter.prototype = new jsts.geom.GeometryFilter;
jsts.geom.util.PointExtracter.prototype.pts = null;
jsts.geom.util.PointExtracter.getPoints = function (a, b) {
  void 0 === b && (b = []);
  a instanceof jsts.geom.Point ? b.push(a) : (a instanceof jsts.geom.GeometryCollection || a instanceof jsts.geom.MultiPoint || a instanceof jsts.geom.MultiLineString || a instanceof jsts.geom.MultiPolygon) && a.apply(new jsts.geom.util.PointExtracter(b));
  return b
};
jsts.geom.util.PointExtracter.prototype.filter = function (a) {
  a instanceof jsts.geom.Point && this.pts.push(a)
};
jsts.noding.ScaledNoder = function (a, b, c, d) {
  this.offsetX = c ? c : 0;
  this.offsetY = d ? d : 0;
  this.noder = a;
  this.scaleFactor = b;
  this.isScaled = !this.isIntegerPrecision()
};
jsts.noding.ScaledNoder.prototype = new jsts.noding.Noder;
jsts.noding.ScaledNoder.constructor = jsts.noding.ScaledNoder;
jsts.noding.ScaledNoder.prototype.noder = null;
jsts.noding.ScaledNoder.prototype.scaleFactor = void 0;
jsts.noding.ScaledNoder.prototype.offsetX = void 0;
jsts.noding.ScaledNoder.prototype.offsetY = void 0;
jsts.noding.ScaledNoder.prototype.isScaled = !1;
jsts.noding.ScaledNoder.prototype.isIntegerPrecision = function () {
  return 1 === this.scaleFactor
};
jsts.noding.ScaledNoder.prototype.getNodedSubstrings = function () {
  var a = this.noder.getNodedSubstrings();
  this.isScaled && this.rescale(a);
  return a
};
jsts.noding.ScaledNoder.prototype.computeNodes = function (a) {
  var b = a;
  this.isScaled && (b = this.scale(a));
  this.noder.computeNodes(b)
};
jsts.noding.ScaledNoder.prototype.scale = function (a) {
  if (a instanceof Array)return this.scale2(a);
  var b = new javascript.util.ArrayList;
  for (a = a.iterator(); a.hasNext();) {
    var c = a.next();
    b.add(new jsts.noding.NodedSegmentString(this.scale(c.getCoordinates()), c.getData()))
  }
  return b
};
jsts.noding.ScaledNoder.prototype.scale2 = function (a) {
  for (var b = [], c = 0; c < a.length; c++)b[c] = new jsts.geom.Coordinate(Math.round((a[c].x - this.offsetX) * this.scaleFactor), Math.round((a[c].y - this.offsetY) * this.scaleFactor));
  return jsts.geom.CoordinateArrays.removeRepeatedPoints(b)
};
jsts.noding.ScaledNoder.prototype.rescale = function (a) {
  if (a instanceof Array) this.rescale2(a); else for (a = a.iterator(); a.hasNext();) {
    var b = a.next();
    this.rescale(b.getCoordinates())
  }
};
jsts.noding.ScaledNoder.prototype.rescale2 = function (a) {
  for (var b = 0; b < a.length; b++)a[b].x = a[b].x / this.scaleFactor + this.offsetX, a[b].y = a[b].y / this.scaleFactor + this.offsetY
};
jsts.noding.IntersectionAdder = function (a) {
  this.li = a
};
jsts.noding.IntersectionAdder.prototype = new jsts.noding.SegmentIntersector;
jsts.noding.IntersectionAdder.constructor = jsts.noding.IntersectionAdder;
jsts.noding.IntersectionAdder.isAdjacentSegments = function (a, b) {
  return 1 === Math.abs(a - b)
};
jsts.noding.IntersectionAdder.prototype._hasIntersection = !1;
jsts.noding.IntersectionAdder.prototype.hasProper = !1;
jsts.noding.IntersectionAdder.prototype.hasProperInterior = !1;
jsts.noding.IntersectionAdder.prototype.hasInterior = !1;
jsts.noding.IntersectionAdder.prototype.properIntersectionPoint = null;
jsts.noding.IntersectionAdder.prototype.li = null;
jsts.noding.IntersectionAdder.prototype.isSelfIntersection = null;
jsts.noding.IntersectionAdder.prototype.numIntersections = 0;
jsts.noding.IntersectionAdder.prototype.numInteriorIntersections = 0;
jsts.noding.IntersectionAdder.prototype.numProperIntersections = 0;
jsts.noding.IntersectionAdder.prototype.numTests = 0;
jsts.noding.IntersectionAdder.prototype.getLineIntersector = function () {
  return this.li
};
jsts.noding.IntersectionAdder.prototype.getProperIntersectionPoint = function () {
  return this.properIntersectionPoint
};
jsts.noding.IntersectionAdder.prototype.hasIntersection = function () {
  return this._hasIntersection
};
jsts.noding.IntersectionAdder.prototype.hasProperIntersection = function () {
  return this.hasProper
};
jsts.noding.IntersectionAdder.prototype.hasProperInteriorIntersection = function () {
  return this.hasProperInterior
};
jsts.noding.IntersectionAdder.prototype.hasInteriorIntersection = function () {
  return this.hasInterior
};
jsts.noding.IntersectionAdder.prototype.isTrivialIntersection = function (a, b, c, d) {
  return a == c && 1 == this.li.getIntersectionNum() && (jsts.noding.IntersectionAdder.isAdjacentSegments(b, d) || a.isClosed() && (a = a.size() - 1, 0 === b && d === a || 0 === d && b === a)) ? !0 : !1
};
jsts.noding.IntersectionAdder.prototype.processIntersections = function (a, b, c, d) {
  if (a !== c || b !== d) {
    this.numTests++;
    var e = a.getCoordinates()[b], f = a.getCoordinates()[b + 1], g = c.getCoordinates()[d],
      h = c.getCoordinates()[d + 1];
    this.li.computeIntersection(e, f, g, h);
    this.li.hasIntersection() && (this.numIntersections++, this.li.isInteriorIntersection() && (this.numInteriorIntersections++, this.hasInterior = !0), this.isTrivialIntersection(a, b, c, d) || (this._hasIntersection = !0, a.addIntersections(this.li, b, 0), c.addIntersections(this.li,
      d, 1), this.li.isProper() && (this.numProperIntersections++, this.hasProperInterior = this.hasProper = !0)))
  }
};
jsts.noding.IntersectionAdder.prototype.isDone = function () {
  return !1
};
jsts.triangulate.VoronoiDiagramBuilder = function () {
  this.siteCoords = null;
  this.tolerance = 0;
  this.diagramEnv = this.clipEnv = this.subdiv = null
};
jsts.triangulate.VoronoiDiagramBuilder.prototype.setSites = function (a) {
  a instanceof jsts.geom.Geometry || a instanceof jsts.geom.Coordinate || a instanceof jsts.geom.Point || a instanceof jsts.geom.MultiPoint || a instanceof jsts.geom.LineString || a instanceof jsts.geom.MultiLineString || a instanceof jsts.geom.LinearRing || a instanceof jsts.geom.Polygon || a instanceof jsts.geom.MultiPolygon ? this.setSitesByGeometry(a) : this.setSitesByArray(a)
};
jsts.triangulate.VoronoiDiagramBuilder.prototype.setSitesByGeometry = function (a) {
  this.siteCoords = jsts.triangulate.DelaunayTriangulationBuilder.extractUniqueCoordinates(a)
};
jsts.triangulate.VoronoiDiagramBuilder.prototype.setSitesByArray = function (a) {
  this.siteCoords = jsts.triangulate.DelaunayTriangulationBuilder.unique(a)
};
jsts.triangulate.VoronoiDiagramBuilder.prototype.setClipEnvelope = function (a) {
  this.clipEnv = a
};
jsts.triangulate.VoronoiDiagramBuilder.prototype.setTolerance = function (a) {
  this.tolerance = a
};
jsts.triangulate.VoronoiDiagramBuilder.prototype.create = function () {
  if (null === this.subdiv) {
    var a, b;
    this.diagramEnv = a = jsts.triangulate.DelaunayTriangulationBuilder.envelope(this.siteCoords);
    b = Math.max(this.diagramEnv.getWidth(), this.diagramEnv.getHeight());
    this.diagramEnv.expandBy(b);
    null !== this.clipEnv && this.diagramEnv.expandToInclude(this.clipEnv);
    b = jsts.triangulate.DelaunayTriangulationBuilder.toVertices(this.siteCoords);
    this.subdiv = new jsts.triangulate.quadedge.QuadEdgeSubdivision(a, this.tolerance);
    (new jsts.triangulate.IncrementalDelaunayTriangulator(this.subdiv)).insertSites(b)
  }
};
jsts.triangulate.VoronoiDiagramBuilder.prototype.getSubdivision = function () {
  this.create();
  return this.subdiv
};
jsts.triangulate.VoronoiDiagramBuilder.prototype.getDiagram = function (a) {
  this.create();
  a = this.subdiv.getVoronoiDiagram(a);
  return this.clipGeometryCollection(a, this.diagramEnv)
};
jsts.triangulate.VoronoiDiagramBuilder.prototype.clipGeometryCollection = function (a, b) {
  var c, d, e, f, g, h;
  c = a.getFactory().toGeometry(b);
  d = [];
  e = 0;
  f = a.getNumGeometries();
  for (e; e < f; e++)g = a.getGeometryN(e), h = null, b.contains(g.getEnvelopeInternal()) ? h = g : b.intersects(g.getEnvelopeInternal()) && (h = c.intersection(g)), null === h || h.isEmpty() || d.push(h);
  return a.getFactory().createGeometryCollection(d)
};
jsts.operation.valid.IndexedNestedRingTester = function (a) {
  this.graph = a;
  this.rings = new javascript.util.ArrayList;
  this.totalEnv = new jsts.geom.Envelope;
  this.nestedPt = this.index = null
};
jsts.operation.valid.IndexedNestedRingTester.prototype.getNestedPoint = function () {
  return this.nestedPt
};
jsts.operation.valid.IndexedNestedRingTester.prototype.add = function (a) {
  this.rings.add(a);
  this.totalEnv.expandToInclude(a.getEnvelopeInternal())
};
jsts.operation.valid.IndexedNestedRingTester.prototype.isNonNested = function () {
  this.buildIndex();
  for (var a = 0; a < this.rings.size(); a++)for (var b = this.rings.get(a), c = b.getCoordinates(), d = this.index.query(b.getEnvelopeInternal()), e = 0; e < d.length; e++) {
    var f = d[e], g = f.getCoordinates();
    if (b != f && b.getEnvelopeInternal().intersects(f.getEnvelopeInternal()) && (f = jsts.operation.valid.IsValidOp.findPtNotNode(c, f, this.graph), null != f && jsts.algorithm.CGAlgorithms.isPointInRing(f, g)))return this.nestedPt = f, !1
  }
  return !0
};
jsts.operation.valid.IndexedNestedRingTester.prototype.buildIndex = function () {
  this.index = new jsts.index.strtree.STRtree;
  for (var a = 0; a < this.rings.size(); a++) {
    var b = this.rings.get(a), c = b.getEnvelopeInternal();
    this.index.insert(c, b)
  }
};
jsts.noding.SegmentNode = function (a, b, c, d) {
  this.segString = a;
  this.coord = new jsts.geom.Coordinate(b);
  this.segmentIndex = c;
  this.segmentOctant = d;
  this._isInterior = !b.equals2D(a.getCoordinate(c))
};
jsts.noding.SegmentNode.prototype.segString = null;
jsts.noding.SegmentNode.prototype.coord = null;
jsts.noding.SegmentNode.prototype.segmentIndex = null;
jsts.noding.SegmentNode.prototype.segmentOctant = null;
jsts.noding.SegmentNode.prototype._isInterior = null;
jsts.noding.SegmentNode.prototype.getCoordinate = function () {
  return this.coord
};
jsts.noding.SegmentNode.prototype.isInterior = function () {
  return this._isInterior
};
jsts.noding.SegmentNode.prototype.isEndPoint = function (a) {
  return 0 === this.segmentIndex && !this._isInterior || this.segmentIndex === this.maxSegmentIndex ? !0 : !1
};
jsts.noding.SegmentNode.prototype.compareTo = function (a) {
  return this.segmentIndex < a.segmentIndex ? -1 : this.segmentIndex > a.segmentIndex ? 1 : this.coord.equals2D(a.coord) ? 0 : jsts.noding.SegmentPointComparator.compare(this.segmentOctant, this.coord, a.coord)
};
(function () {
  jsts.io.GeoJSONWriter = function () {
    this.parser = new jsts.io.GeoJSONParser(this.geometryFactory)
  };
  jsts.io.GeoJSONWriter.prototype.write = function (a) {
    return this.parser.write(a)
  }
})();
jsts.io.OpenLayersParser = function (a) {
  this.geometryFactory = a || new jsts.geom.GeometryFactory
};
jsts.io.OpenLayersParser.prototype.read = function (a) {
  if ("OpenLayers.Geometry.Point" === a.CLASS_NAME)return this.convertFromPoint(a);
  if ("OpenLayers.Geometry.LineString" === a.CLASS_NAME)return this.convertFromLineString(a);
  if ("OpenLayers.Geometry.LinearRing" === a.CLASS_NAME)return this.convertFromLinearRing(a);
  if ("OpenLayers.Geometry.Polygon" === a.CLASS_NAME)return this.convertFromPolygon(a);
  if ("OpenLayers.Geometry.MultiPoint" === a.CLASS_NAME)return this.convertFromMultiPoint(a);
  if ("OpenLayers.Geometry.MultiLineString" ===
    a.CLASS_NAME)return this.convertFromMultiLineString(a);
  if ("OpenLayers.Geometry.MultiPolygon" === a.CLASS_NAME)return this.convertFromMultiPolygon(a);
  if ("OpenLayers.Geometry.Collection" === a.CLASS_NAME)return this.convertFromCollection(a)
};
jsts.io.OpenLayersParser.prototype.convertFromPoint = function (a) {
  return this.geometryFactory.createPoint(new jsts.geom.Coordinate(a.x, a.y))
};
jsts.io.OpenLayersParser.prototype.convertFromLineString = function (a) {
  var b, c = [];
  for (b = 0; b < a.components.length; b++)c.push(new jsts.geom.Coordinate(a.components[b].x, a.components[b].y));
  return this.geometryFactory.createLineString(c)
};
jsts.io.OpenLayersParser.prototype.convertFromLinearRing = function (a) {
  var b, c = [];
  for (b = 0; b < a.components.length; b++)c.push(new jsts.geom.Coordinate(a.components[b].x, a.components[b].y));
  return this.geometryFactory.createLinearRing(c)
};
jsts.io.OpenLayersParser.prototype.convertFromPolygon = function (a) {
  var b, c = null, d = [];
  for (b = 0; b < a.components.length; b++) {
    var e = this.convertFromLinearRing(a.components[b]);
    0 === b ? c = e : d.push(e)
  }
  return this.geometryFactory.createPolygon(c, d)
};
jsts.io.OpenLayersParser.prototype.convertFromMultiPoint = function (a) {
  var b, c = [];
  for (b = 0; b < a.components.length; b++)c.push(this.convertFromPoint(a.components[b]));
  return this.geometryFactory.createMultiPoint(c)
};
jsts.io.OpenLayersParser.prototype.convertFromMultiLineString = function (a) {
  var b, c = [];
  for (b = 0; b < a.components.length; b++)c.push(this.convertFromLineString(a.components[b]));
  return this.geometryFactory.createMultiLineString(c)
};
jsts.io.OpenLayersParser.prototype.convertFromMultiPolygon = function (a) {
  var b, c = [];
  for (b = 0; b < a.components.length; b++)c.push(this.convertFromPolygon(a.components[b]));
  return this.geometryFactory.createMultiPolygon(c)
};
jsts.io.OpenLayersParser.prototype.convertFromCollection = function (a) {
  var b, c = [];
  for (b = 0; b < a.components.length; b++)c.push(this.convertFrom(a.components[b]));
  return this.geometryFactory.createGeometryCollection(c)
};
jsts.io.OpenLayersParser.prototype.write = function (a) {
  if ("jsts.geom.Point" === a.CLASS_NAME)return this.convertToPoint(a.coordinate);
  if ("jsts.geom.LineString" === a.CLASS_NAME)return this.convertToLineString(a);
  if ("jsts.geom.LinearRing" === a.CLASS_NAME)return this.convertToLinearRing(a);
  if ("jsts.geom.Polygon" === a.CLASS_NAME)return this.convertToPolygon(a);
  if ("jsts.geom.MultiPoint" === a.CLASS_NAME)return this.convertToMultiPoint(a);
  if ("jsts.geom.MultiLineString" === a.CLASS_NAME)return this.convertToMultiLineString(a);
  if ("jsts.geom.MultiPolygon" === a.CLASS_NAME)return this.convertToMultiPolygon(a);
  if ("jsts.geom.GeometryCollection" === a.CLASS_NAME)return this.convertToCollection(a)
};
jsts.io.OpenLayersParser.prototype.convertToPoint = function (a) {
  return new OpenLayers.Geometry.Point(a.x, a.y)
};
jsts.io.OpenLayersParser.prototype.convertToLineString = function (a) {
  var b, c = [];
  for (b = 0; b < a.points.length; b++)c.push(this.convertToPoint(a.points[b]));
  return new OpenLayers.Geometry.LineString(c)
};
jsts.io.OpenLayersParser.prototype.convertToLinearRing = function (a) {
  var b, c = [];
  for (b = 0; b < a.points.length; b++)c.push(this.convertToPoint(a.points[b]));
  return new OpenLayers.Geometry.LinearRing(c)
};
jsts.io.OpenLayersParser.prototype.convertToPolygon = function (a) {
  var b, c = [];
  c.push(this.convertToLinearRing(a.shell));
  for (b = 0; b < a.holes.length; b++)c.push(this.convertToLinearRing(a.holes[b]));
  return new OpenLayers.Geometry.Polygon(c)
};
jsts.io.OpenLayersParser.prototype.convertToMultiPoint = function (a) {
  var b, c = [];
  for (b = 0; b < a.geometries.length; b++) {
    var d = a.geometries[b].coordinate;
    c.push(new OpenLayers.Geometry.Point(d.x, d.y))
  }
  return new OpenLayers.Geometry.MultiPoint(c)
};
jsts.io.OpenLayersParser.prototype.convertToMultiLineString = function (a) {
  var b, c = [];
  for (b = 0; b < a.geometries.length; b++)c.push(this.convertToLineString(a.geometries[b]));
  return new OpenLayers.Geometry.MultiLineString(c)
};
jsts.io.OpenLayersParser.prototype.convertToMultiPolygon = function (a) {
  var b, c = [];
  for (b = 0; b < a.geometries.length; b++)c.push(this.convertToPolygon(a.geometries[b]));
  return new OpenLayers.Geometry.MultiPolygon(c)
};
jsts.io.OpenLayersParser.prototype.convertToCollection = function (a) {
  var b, c = [];
  for (b = 0; b < a.geometries.length; b++) {
    var d = this.write(a.geometries[b]);
    c.push(d)
  }
  return new OpenLayers.Geometry.Collection(c)
};
jsts.index.quadtree.Quadtree = function () {
  this.root = new jsts.index.quadtree.Root;
  this.minExtent = 1
};
jsts.index.quadtree.Quadtree.ensureExtent = function (a, b) {
  var c, d, e, f;
  c = a.getMinX();
  d = a.getMaxX();
  e = a.getMinY();
  f = a.getMaxY();
  if (c !== d && e !== f)return a;
  c === d && (c -= b / 2, d = c + b / 2);
  e === f && (e -= b / 2, f = e + b / 2);
  return new jsts.geom.Envelope(c, d, e, f)
};
jsts.index.quadtree.Quadtree.prototype.depth = function () {
  return this.root.depth()
};
jsts.index.quadtree.Quadtree.prototype.size = function () {
  return this.root.size()
};
jsts.index.quadtree.Quadtree.prototype.insert = function (a, b) {
  this.collectStats(a);
  var c = jsts.index.quadtree.Quadtree.ensureExtent(a, this.minExtent);
  this.root.insert(c, b)
};
jsts.index.quadtree.Quadtree.prototype.remove = function (a, b) {
  var c = jsts.index.quadtree.Quadtree.ensureExtent(a, this.minExtent);
  return this.root.remove(c, b)
};
jsts.index.quadtree.Quadtree.prototype.query = function () {
  if (1 === arguments.length)return jsts.index.quadtree.Quadtree.prototype.queryByEnvelope.apply(this, arguments);
  jsts.index.quadtree.Quadtree.prototype.queryWithVisitor.apply(this, arguments)
};
jsts.index.quadtree.Quadtree.prototype.queryByEnvelope = function (a) {
  var b = new jsts.index.ArrayListVisitor;
  this.query(a, b);
  return b.getItems()
};
jsts.index.quadtree.Quadtree.prototype.queryWithVisitor = function (a, b) {
  this.root.visit(a, b)
};
jsts.index.quadtree.Quadtree.prototype.queryAll = function () {
  var a = [];
  return a = this.root.addAllItems(a)
};
jsts.index.quadtree.Quadtree.prototype.collectStats = function (a) {
  var b = a.getWidth();
  b < this.minExtent && 0 < b && (this.minExtent = b);
  a = a.getHeight();
  a < this.minExtent && 0 < a && (this.minExtent = a)
};
jsts.operation.relate.RelateNodeFactory = function () {
};
jsts.operation.relate.RelateNodeFactory.prototype = new jsts.geomgraph.NodeFactory;
jsts.operation.relate.RelateNodeFactory.prototype.createNode = function (a) {
  return new jsts.operation.relate.RelateNode(a, new jsts.operation.relate.EdgeEndBundleStar)
};
jsts.index.quadtree.Key = function (a) {
  this.pt = new jsts.geom.Coordinate;
  this.level = 0;
  this.env = null;
  this.computeKey(a)
};
jsts.index.quadtree.Key.computeQuadLevel = function (a) {
  var b;
  b = a.getWidth();
  a = a.getHeight();
  return jsts.index.DoubleBits.exponent(b > a ? b : a) + 1
};
jsts.index.quadtree.Key.prototype.getPoint = function () {
  return this.pt
};
jsts.index.quadtree.Key.prototype.getLevel = function () {
  return this.level
};
jsts.index.quadtree.Key.prototype.getEnvelope = function () {
  return this.env
};
jsts.index.quadtree.Key.prototype.getCentre = function () {
  var a, b;
  a = (this.env.getMinX() + this.env.getMaxX()) / 2;
  b = (this.env.getMinY() + this.env.getMaxY()) / 2;
  return new jsts.geom.Coordinate(a, b)
};
jsts.index.quadtree.Key.prototype.computeKey = function (a, b) {
  a instanceof jsts.geom.Envelope ? this.computeKeyFromEnvelope(a) : this.computeKeyFromLevel(a, b)
};
jsts.index.quadtree.Key.prototype.computeKeyFromEnvelope = function (a) {
  this.level = jsts.index.quadtree.Key.computeQuadLevel(a);
  this.env = new jsts.geom.Envelope;
  for (this.computeKey(this.level, a); !this.env.contains(a);)this.level += 1, this.computeKey(this.level, a)
};
jsts.index.quadtree.Key.prototype.computeKeyFromLevel = function (a, b) {
  var c = jsts.index.DoubleBits.powerOf2(a);
  this.pt.x = Math.floor(b.getMinX() / c) * c;
  this.pt.y = Math.floor(b.getMinY() / c) * c;
  this.env.init(this.pt.x, this.pt.x + c, this.pt.y, this.pt.y + c)
};
jsts.operation.buffer.OffsetSegmentGenerator = function (a, b, c) {
  this.seg0 = new jsts.geom.LineSegment;
  this.seg1 = new jsts.geom.LineSegment;
  this.offset0 = new jsts.geom.LineSegment;
  this.offset1 = new jsts.geom.LineSegment;
  this.precisionModel = a;
  this.bufParams = b;
  this.li = new jsts.algorithm.RobustLineIntersector;
  this.filletAngleQuantum = Math.PI / 2 / b.getQuadrantSegments();
  8 <= this.bufParams.getQuadrantSegments() && this.bufParams.getJoinStyle() === jsts.operation.buffer.BufferParameters.JOIN_ROUND && (this.closingSegLengthFactor =
    jsts.operation.buffer.OffsetSegmentGenerator.MAX_CLOSING_SEG_LEN_FACTOR);
  this.init(c)
};
jsts.operation.buffer.OffsetSegmentGenerator.OFFSET_SEGMENT_SEPARATION_FACTOR = .001;
jsts.operation.buffer.OffsetSegmentGenerator.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR = .001;
jsts.operation.buffer.OffsetSegmentGenerator.CURVE_VERTEX_SNAP_DISTANCE_FACTOR = 1E-6;
jsts.operation.buffer.OffsetSegmentGenerator.MAX_CLOSING_SEG_LEN_FACTOR = 80;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.maxCurveSegmentError = 0;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.filletAngleQuantum = null;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.closingSegLengthFactor = 1;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.segList = null;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.distance = 0;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.precisionModel = null;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.bufParams = null;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.li = null;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.s0 = null;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.s1 = null;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.s2 = null;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.seg0 = null;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.seg1 = null;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.offset0 = null;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.offset1 = null;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.side = 0;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.hasNarrowConcaveAngle = !1;
jsts.operation.buffer.OffsetSegmentGenerator.prototype.hasNarrowConcaveAngle = function () {
  return this.hasNarrowConcaveAngle
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.init = function (a) {
  this.distance = a;
  this.maxCurveSegmentError = this.distance * (1 - Math.cos(this.filletAngleQuantum / 2));
  this.segList = new jsts.operation.buffer.OffsetSegmentString;
  this.segList.setPrecisionModel(this.precisionModel);
  this.segList.setMinimumVertexDistance(this.distance * jsts.operation.buffer.OffsetSegmentGenerator.CURVE_VERTEX_SNAP_DISTANCE_FACTOR)
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.initSideSegments = function (a, b, c) {
  this.s1 = a;
  this.s2 = b;
  this.side = c;
  this.seg1.setCoordinates(this.s1, this.s2);
  this.computeOffsetSegment(this.seg1, this.side, this.distance, this.offset1)
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.getCoordinates = function () {
  return this.segList.getCoordinates()
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.closeRing = function () {
  this.segList.closeRing()
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.addSegments = function (a, b) {
  this.segList.addPts(a, b)
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.addFirstSegment = function () {
  this.segList.addPt(this.offset1.p0)
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.addLastSegment = function () {
  this.segList.addPt(this.offset1.p1)
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.addNextSegment = function (a, b) {
  this.s0 = this.s1;
  this.s1 = this.s2;
  this.s2 = a;
  this.seg0.setCoordinates(this.s0, this.s1);
  this.computeOffsetSegment(this.seg0, this.side, this.distance, this.offset0);
  this.seg1.setCoordinates(this.s1, this.s2);
  this.computeOffsetSegment(this.seg1, this.side, this.distance, this.offset1);
  if (!this.s1.equals(this.s2)) {
    var c = jsts.algorithm.CGAlgorithms.computeOrientation(this.s0, this.s1, this.s2),
      d = c === jsts.algorithm.CGAlgorithms.CLOCKWISE &&
        this.side === jsts.geomgraph.Position.LEFT || c === jsts.algorithm.CGAlgorithms.COUNTERCLOCKWISE && this.side === jsts.geomgraph.Position.RIGHT;
    0 == c ? this.addCollinear(b) : d ? this.addOutsideTurn(c, b) : this.addInsideTurn(c, b)
  }
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.addCollinear = function (a) {
  this.li.computeIntersection(this.s0, this.s1, this.s1, this.s2);
  2 <= this.li.getIntersectionNum() && (this.bufParams.getJoinStyle() === jsts.operation.buffer.BufferParameters.JOIN_BEVEL || this.bufParams.getJoinStyle() === jsts.operation.buffer.BufferParameters.JOIN_MITRE ? (a && this.segList.addPt(this.offset0.p1), this.segList.addPt(this.offset1.p0)) : this.addFillet(this.s1, this.offset0.p1, this.offset1.p0, jsts.algorithm.CGAlgorithms.CLOCKWISE,
    this.distance))
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.addOutsideTurn = function (a, b) {
  this.offset0.p1.distance(this.offset1.p0) < this.distance * jsts.operation.buffer.OffsetSegmentGenerator.OFFSET_SEGMENT_SEPARATION_FACTOR ? this.segList.addPt(this.offset0.p1) : this.bufParams.getJoinStyle() === jsts.operation.buffer.BufferParameters.JOIN_MITRE ? this.addMitreJoin(this.s1, this.offset0, this.offset1, this.distance) : this.bufParams.getJoinStyle() === jsts.operation.buffer.BufferParameters.JOIN_BEVEL ? this.addBevelJoin(this.offset0,
    this.offset1) : (b && this.segList.addPt(this.offset0.p1), this.addFillet(this.s1, this.offset0.p1, this.offset1.p0, a, this.distance), this.segList.addPt(this.offset1.p0))
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.addInsideTurn = function (a, b) {
  this.li.computeIntersection(this.offset0.p0, this.offset0.p1, this.offset1.p0, this.offset1.p1);
  if (this.li.hasIntersection()) this.segList.addPt(this.li.getIntersection(0)); else if (this.hasNarrowConcaveAngle = !0, this.offset0.p1.distance(this.offset1.p0) < this.distance * jsts.operation.buffer.OffsetSegmentGenerator.INSIDE_TURN_VERTEX_SNAP_DISTANCE_FACTOR) this.segList.addPt(this.offset0.p1); else {
    this.segList.addPt(this.offset0.p1);
    if (0 < this.closingSegLengthFactor) {
      var c = new jsts.geom.Coordinate((this.closingSegLengthFactor * this.offset0.p1.x + this.s1.x) / (this.closingSegLengthFactor + 1), (this.closingSegLengthFactor * this.offset0.p1.y + this.s1.y) / (this.closingSegLengthFactor + 1));
      this.segList.addPt(c);
      c = new jsts.geom.Coordinate((this.closingSegLengthFactor * this.offset1.p0.x + this.s1.x) / (this.closingSegLengthFactor + 1), (this.closingSegLengthFactor * this.offset1.p0.y + this.s1.y) / (this.closingSegLengthFactor + 1));
      this.segList.addPt(c)
    } else this.segList.addPt(this.s1);
    this.segList.addPt(this.offset1.p0)
  }
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.computeOffsetSegment = function (a, b, c, d) {
  b = b === jsts.geomgraph.Position.LEFT ? 1 : -1;
  var e = a.p1.x - a.p0.x, f = a.p1.y - a.p0.y, g = Math.sqrt(e * e + f * f), e = b * c * e / g;
  c = b * c * f / g;
  d.p0.x = a.p0.x - c;
  d.p0.y = a.p0.y + e;
  d.p1.x = a.p1.x - c;
  d.p1.y = a.p1.y + e
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.addLineEndCap = function (a, b) {
  var c = new jsts.geom.LineSegment(a, b), d = new jsts.geom.LineSegment;
  this.computeOffsetSegment(c, jsts.geomgraph.Position.LEFT, this.distance, d);
  var e = new jsts.geom.LineSegment;
  this.computeOffsetSegment(c, jsts.geomgraph.Position.RIGHT, this.distance, e);
  var f = Math.atan2(b.y - a.y, b.x - a.x);
  switch (this.bufParams.getEndCapStyle()) {
    case jsts.operation.buffer.BufferParameters.CAP_ROUND:
      this.segList.addPt(d.p1);
      this.addFillet(b, f +
        Math.PI / 2, f - Math.PI / 2, jsts.algorithm.CGAlgorithms.CLOCKWISE, this.distance);
      this.segList.addPt(e.p1);
      break;
    case jsts.operation.buffer.BufferParameters.CAP_FLAT:
      this.segList.addPt(d.p1);
      this.segList.addPt(e.p1);
      break;
    case jsts.operation.buffer.BufferParameters.CAP_SQUARE:
      c = new jsts.geom.Coordinate, c.x = Math.abs(this.distance) * Math.cos(f), c.y = Math.abs(this.distance) * Math.sin(f), d = new jsts.geom.Coordinate(d.p1.x + c.x, d.p1.y + c.y), e = new jsts.geom.Coordinate(e.p1.x + c.x, e.p1.y + c.y), this.segList.addPt(d), this.segList.addPt(e)
  }
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.addMitreJoin = function (a, b, c, d) {
  var e = null;
  try {
    e = jsts.algorithm.HCoordinate.intersection(b.p0, b.p1, c.p0, c.p1), (0 >= d ? 1 : e.distance(a) / Math.abs(d)) > this.bufParams.getMitreLimit() && (this.isMitreWithinLimit = !1)
  } catch (f) {
    f instanceof jsts.error.NotRepresentableError && (e = new jsts.geom.Coordinate(0, 0), this.isMitreWithinLimit = !1)
  }
  this.segList.addPt(e)
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.addLimitedMitreJoin = function (a, b, c, d) {
  a = this.seg0.p1;
  var e = jsts.algorithm.Angle.angle(a, this.seg0.p0);
  jsts.algorithm.Angle.angle(a, this.seg1.p1);
  b = jsts.algorithm.Angle.angleBetweenOriented(this.seg0.p0, a, this.seg1.p1) / 2;
  e = jsts.algorithm.Angle.normalize(e + b);
  e = jsts.algorithm.Angle.normalize(e + Math.PI);
  d *= c;
  c -= d * Math.abs(Math.sin(b));
  d = new jsts.geom.Coordinate(a.x + d * Math.cos(e), a.y + d * Math.sin(e));
  d = new jsts.geom.LineSegment(a, d);
  a = d.pointAlongOffset(1,
    c);
  c = d.pointAlongOffset(1, -c);
  this.side == jsts.geomgraph.Position.LEFT ? (this.segList.addPt(a), this.segList.addPt(c)) : (this.segList.addPt(c), this.segList.addPt(a))
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.addBevelJoin = function (a, b) {
  this.segList.addPt(a.p1);
  this.segList.addPt(b.p0)
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.addFillet = function (a, b, c, d, e) {
  if (c instanceof jsts.geom.Coordinate) {
    var f = Math.atan2(b.y - a.y, b.x - a.x), g = Math.atan2(c.y - a.y, c.x - a.x);
    d === jsts.algorithm.CGAlgorithms.CLOCKWISE ? f <= g && (f += 2 * Math.PI) : f >= g && (f -= 2 * Math.PI);
    this.segList.addPt(b);
    this.addFillet(a, f, g, d, e);
    this.segList.addPt(c)
  } else this.addFillet2.apply(this, arguments)
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.addFillet2 = function (a, b, c, d, e) {
  d = d === jsts.algorithm.CGAlgorithms.CLOCKWISE ? -1 : 1;
  c = Math.abs(b - c);
  var f = parseInt(c / this.filletAngleQuantum + .5);
  if (!(1 > f))for (var f = c / f, g = 0, h = new jsts.geom.Coordinate; g < c;) {
    var l = b + d * g;
    h.x = a.x + e * Math.cos(l);
    h.y = a.y + e * Math.sin(l);
    this.segList.addPt(h);
    g += f
  }
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.createCircle = function (a) {
  var b = new jsts.geom.Coordinate(a.x + this.distance, a.y);
  this.segList.addPt(b);
  this.addFillet(a, 0, 2 * Math.PI, -1, this.distance);
  this.segList.closeRing()
};
jsts.operation.buffer.OffsetSegmentGenerator.prototype.createSquare = function (a) {
  this.segList.addPt(new jsts.geom.Coordinate(a.x + distance, a.y + distance));
  this.segList.addPt(new jsts.geom.Coordinate(a.x + distance, a.y - distance));
  this.segList.addPt(new jsts.geom.Coordinate(a.x - distance, a.y - distance));
  this.segList.addPt(new jsts.geom.Coordinate(a.x - distance, a.y + distance));
  this.segList.closeRing()
};
jsts.geom.CoordinateArrays = function () {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.geom.CoordinateArrays.removeRepeatedPoints = function (a) {
  return this.hasRepeatedPoints(a) ? (new jsts.geom.CoordinateList(a, !1)).toCoordinateArray() : a
};
jsts.geom.CoordinateArrays.hasRepeatedPoints = function (a) {
  var b;
  for (b = 1; b < a.length; b++)if (a[b - 1].equals(a[b]))return !0;
  return !1
};
jsts.geom.CoordinateArrays.ptNotInList = function (a, b) {
  for (var c = 0; c < a.length; c++) {
    var d = a[c];
    if (0 > jsts.geom.CoordinateArrays.indexOf(d, b))return d
  }
  return null
};
jsts.geom.CoordinateArrays.increasingDirection = function (a) {
  for (var b = 0; b < parseInt(a.length / 2); b++) {
    var c = a[b].compareTo(a[a.length - 1 - b]);
    if (0 != c)return c
  }
  return 1
};
jsts.geom.CoordinateArrays.minCoordinate = function (a) {
  for (var b = null, c = 0; c < a.length; c++)if (null === b || 0 < b.compareTo(a[c])) b = a[c];
  return b
};
jsts.geom.CoordinateArrays.scroll = function (a, b) {
  var c = jsts.geom.CoordinateArrays.indexOf(b, a);
  if (!(0 > c))for (var d = a.slice(c).concat(a.slice(0, c)), c = 0; c < d.length; c++)a[c] = d[c]
};
jsts.geom.CoordinateArrays.indexOf = function (a, b) {
  for (var c = 0; c < b.length; c++)if (a.equals(b[c]))return c;
  return -1
};
jsts.operation.overlay.MinimalEdgeRing = function (a, b) {
  jsts.geomgraph.EdgeRing.call(this, a, b)
};
jsts.operation.overlay.MinimalEdgeRing.prototype = new jsts.geomgraph.EdgeRing;
jsts.operation.overlay.MinimalEdgeRing.constructor = jsts.operation.overlay.MinimalEdgeRing;
jsts.operation.overlay.MinimalEdgeRing.prototype.getNext = function (a) {
  return a.getNextMin()
};
jsts.operation.overlay.MinimalEdgeRing.prototype.setEdgeRing = function (a, b) {
  a.setMinEdgeRing(b)
};
jsts.triangulate.DelaunayTriangulationBuilder = function () {
  this.siteCoords = null;
  this.tolerance = 0;
  this.subdiv = null
};
jsts.triangulate.DelaunayTriangulationBuilder.extractUniqueCoordinates = function (a) {
  if (void 0 === a || null === a)return (new jsts.geom.CoordinateList([], !1)).toArray();
  a = a.getCoordinates();
  return jsts.triangulate.DelaunayTriangulationBuilder.unique(a)
};
jsts.triangulate.DelaunayTriangulationBuilder.unique = function (a) {
  a.sort(function (a, c) {
    return a.compareTo(c)
  });
  return (new jsts.geom.CoordinateList(a, !1)).toArray()
};
jsts.triangulate.DelaunayTriangulationBuilder.toVertices = function (a) {
  var b = Array(a.length), c = 0, d = a.length, e;
  for (c; c < d; c++)e = a[c], b[c] = new jsts.triangulate.quadedge.Vertex(e);
  return b
};
jsts.triangulate.DelaunayTriangulationBuilder.envelope = function (a) {
  var b = new jsts.geom.Envelope, c = 0, d = a.length;
  for (c; c < d; c++)b.expandToInclude(a[c]);
  return b
};
jsts.triangulate.DelaunayTriangulationBuilder.prototype.setSites = function (a) {
  a instanceof jsts.geom.Geometry || a instanceof jsts.geom.Coordinate || a instanceof jsts.geom.Point || a instanceof jsts.geom.MultiPoint || a instanceof jsts.geom.LineString || a instanceof jsts.geom.MultiLineString || a instanceof jsts.geom.LinearRing || a instanceof jsts.geom.Polygon || a instanceof jsts.geom.MultiPolygon ? this.setSitesFromGeometry(a) : this.setSitesFromCollection(a)
};
jsts.triangulate.DelaunayTriangulationBuilder.prototype.setSitesFromGeometry = function (a) {
  this.siteCoords = jsts.triangulate.DelaunayTriangulationBuilder.extractUniqueCoordinates(a)
};
jsts.triangulate.DelaunayTriangulationBuilder.prototype.setSitesFromCollection = function (a) {
  this.siteCoords = jsts.triangulate.DelaunayTriangulationBuilder.unique(a)
};
jsts.triangulate.DelaunayTriangulationBuilder.prototype.setTolerance = function (a) {
  this.tolerance = a
};
jsts.triangulate.DelaunayTriangulationBuilder.prototype.create = function () {
  if (null === this.subdiv) {
    var a, b;
    a = jsts.triangulate.DelaunayTriangulationBuilder.envelope(this.siteCoords);
    b = jsts.triangulate.DelaunayTriangulationBuilder.toVertices(this.siteCoords);
    this.subdiv = new jsts.triangulate.quadedge.QuadEdgeSubdivision(a, this.tolerance);
    (new jsts.triangulate.IncrementalDelaunayTriangulator(this.subdiv)).insertSites(b)
  }
};
jsts.triangulate.DelaunayTriangulationBuilder.prototype.getSubdivision = function () {
  this.create();
  return this.subdiv
};
jsts.triangulate.DelaunayTriangulationBuilder.prototype.getEdges = function (a) {
  this.create();
  return this.subdiv.getEdges(a)
};
jsts.triangulate.DelaunayTriangulationBuilder.prototype.getTriangles = function (a) {
  this.create();
  return this.subdiv.getTriangles(a)
};
jsts.algorithm.RayCrossingCounter = function (a) {
  this.p = a
};
jsts.algorithm.RayCrossingCounter.locatePointInRing = function (a, b) {
  for (var c = new jsts.algorithm.RayCrossingCounter(a), d = 1; d < b.length && (c.countSegment(b[d], b[d - 1]), !c.isOnSegment()); d++);
  return c.getLocation()
};
jsts.algorithm.RayCrossingCounter.prototype.p = null;
jsts.algorithm.RayCrossingCounter.prototype.crossingCount = 0;
jsts.algorithm.RayCrossingCounter.prototype.isPointOnSegment = !1;
jsts.algorithm.RayCrossingCounter.prototype.countSegment = function (a, b) {
  if (!(a.x < this.p.x && b.x < this.p.x))if (this.p.x == b.x && this.p.y === b.y) this.isPointOnSegment = !0; else if (a.y === this.p.y && b.y === this.p.y) {
    var c = a.x, d = b.x;
    c > d && (c = b.x, d = a.x);
    this.p.x >= c && this.p.x <= d && (this.isPointOnSegment = !0)
  } else if (a.y > this.p.y && b.y <= this.p.y || b.y > this.p.y && a.y <= this.p.y) {
    var c = a.y - this.p.y, d = b.y - this.p.y,
      e = jsts.algorithm.RobustDeterminant.signOfDet2x2(a.x - this.p.x, c, b.x - this.p.x, d);
    0 === e ? this.isPointOnSegment = !0 : (d <
    c && (e = -e), 0 < e && this.crossingCount++)
  }
};
jsts.algorithm.RayCrossingCounter.prototype.isOnSegment = function () {
  return jsts.geom.isPointOnSegment
};
jsts.algorithm.RayCrossingCounter.prototype.getLocation = function () {
  return this.isPointOnSegment ? jsts.geom.Location.BOUNDARY : 1 === this.crossingCount % 2 ? jsts.geom.Location.INTERIOR : jsts.geom.Location.EXTERIOR
};
jsts.algorithm.RayCrossingCounter.prototype.isPointInPolygon = function () {
  return this.getLocation() !== jsts.geom.Location.EXTERIOR
};
jsts.operation.BoundaryOp = function (a, b) {
  this.geom = a;
  this.geomFact = a.getFactory();
  this.bnRule = b || jsts.algorithm.BoundaryNodeRule.MOD2_BOUNDARY_RULE
};
jsts.operation.BoundaryOp.prototype.geom = null;
jsts.operation.BoundaryOp.prototype.geomFact = null;
jsts.operation.BoundaryOp.prototype.bnRule = null;
jsts.operation.BoundaryOp.prototype.getBoundary = function () {
  return this.geom instanceof jsts.geom.LineString ? this.boundaryLineString(this.geom) : this.geom instanceof jsts.geom.MultiLineString ? this.boundaryMultiLineString(this.geom) : this.geom.getBoundary()
};
jsts.operation.BoundaryOp.prototype.getEmptyMultiPoint = function () {
  return this.geomFact.createMultiPoint(null)
};
jsts.operation.BoundaryOp.prototype.boundaryMultiLineString = function (a) {
  if (this.geom.isEmpty())return this.getEmptyMultiPoint();
  a = this.computeBoundaryCoordinates(a);
  return 1 == a.length ? this.geomFact.createPoint(a[0]) : this.geomFact.createMultiPoint(a)
};
jsts.operation.BoundaryOp.prototype.endpoints = null;
jsts.operation.BoundaryOp.prototype.computeBoundaryCoordinates = function (a) {
  var b, c, d = [];
  this.endpoints = [];
  for (b = 0; b < a.getNumGeometries(); b++)c = a.getGeometryN(b), 0 != c.getNumPoints() && (this.addEndpoint(c.getCoordinateN(0)), this.addEndpoint(c.getCoordinateN(c.getNumPoints() - 1)));
  for (b = 0; b < this.endpoints.length; b++)a = this.endpoints[b], this.bnRule.isInBoundary(a.count) && d.push(a.coordinate);
  return d
};
jsts.operation.BoundaryOp.prototype.addEndpoint = function (a) {
  var b, c, d = !1;
  for (b = 0; b < this.endpoints.length; b++)if (c = this.endpoints[b], c.coordinate.equals(a)) {
    d = !0;
    break
  }
  d || (c = {}, c.coordinate = a, c.count = 0, this.endpoints.push(c));
  c.count++
};
jsts.operation.BoundaryOp.prototype.boundaryLineString = function (a) {
  return this.geom.isEmpty() ? this.getEmptyMultiPoint() : a.isClosed() ? this.bnRule.isInBoundary(2) ? a.getStartPoint() : this.geomFact.createMultiPoint(null) : this.geomFact.createMultiPoint([a.getStartPoint(), a.getEndPoint()])
};
jsts.operation.buffer.OffsetCurveSetBuilder = function (a, b, c) {
  this.inputGeom = a;
  this.distance = b;
  this.curveBuilder = c;
  this.curveList = new javascript.util.ArrayList
};
jsts.operation.buffer.OffsetCurveSetBuilder.prototype.inputGeom = null;
jsts.operation.buffer.OffsetCurveSetBuilder.prototype.distance = null;
jsts.operation.buffer.OffsetCurveSetBuilder.prototype.curveBuilder = null;
jsts.operation.buffer.OffsetCurveSetBuilder.prototype.curveList = null;
jsts.operation.buffer.OffsetCurveSetBuilder.prototype.getCurves = function () {
  this.add(this.inputGeom);
  return this.curveList
};
jsts.operation.buffer.OffsetCurveSetBuilder.prototype.addCurve = function (a, b, c) {
  null == a || 2 > a.length || (a = new jsts.noding.NodedSegmentString(a, new jsts.geomgraph.Label(0, jsts.geom.Location.BOUNDARY, b, c)), this.curveList.add(a))
};
jsts.operation.buffer.OffsetCurveSetBuilder.prototype.add = function (a) {
  if (!a.isEmpty())if (a instanceof jsts.geom.Polygon) this.addPolygon(a); else if (a instanceof jsts.geom.LineString) this.addLineString(a); else if (a instanceof jsts.geom.Point) this.addPoint(a); else if (a instanceof jsts.geom.MultiPoint) this.addCollection(a); else if (a instanceof jsts.geom.MultiLineString) this.addCollection(a); else if (a instanceof jsts.geom.MultiPolygon) this.addCollection(a); else if (a instanceof jsts.geom.GeometryCollection) this.addCollection(a);
  else throw new jsts.error.IllegalArgumentError;
};
jsts.operation.buffer.OffsetCurveSetBuilder.prototype.addCollection = function (a) {
  for (var b = 0; b < a.getNumGeometries(); b++) {
    var c = a.getGeometryN(b);
    this.add(c)
  }
};
jsts.operation.buffer.OffsetCurveSetBuilder.prototype.addPoint = function (a) {
  0 >= this.distance || (a = a.getCoordinates(), a = this.curveBuilder.getLineCurve(a, this.distance), this.addCurve(a, jsts.geom.Location.EXTERIOR, jsts.geom.Location.INTERIOR))
};
jsts.operation.buffer.OffsetCurveSetBuilder.prototype.addLineString = function (a) {
  0 >= this.distance && !this.curveBuilder.getBufferParameters().isSingleSided() || (a = jsts.geom.CoordinateArrays.removeRepeatedPoints(a.getCoordinates()), a = this.curveBuilder.getLineCurve(a, this.distance), this.addCurve(a, jsts.geom.Location.EXTERIOR, jsts.geom.Location.INTERIOR))
};
jsts.operation.buffer.OffsetCurveSetBuilder.prototype.addPolygon = function (a) {
  var b = this.distance, c = jsts.geomgraph.Position.LEFT;
  0 > this.distance && (b = -this.distance, c = jsts.geomgraph.Position.RIGHT);
  var d = a.getExteriorRing(), e = jsts.geom.CoordinateArrays.removeRepeatedPoints(d.getCoordinates());
  if (!(0 > this.distance && this.isErodedCompletely(d, this.distance) || 0 >= this.distance && 3 > e.length))for (this.addPolygonRing(e, b, c, jsts.geom.Location.EXTERIOR, jsts.geom.Location.INTERIOR), d = 0; d < a.getNumInteriorRing(); d++) {
    var e =
      a.getInteriorRingN(d), f = jsts.geom.CoordinateArrays.removeRepeatedPoints(e.getCoordinates());
    0 < this.distance && this.isErodedCompletely(e, -this.distance) || this.addPolygonRing(f, b, jsts.geomgraph.Position.opposite(c), jsts.geom.Location.INTERIOR, jsts.geom.Location.EXTERIOR)
  }
};
jsts.operation.buffer.OffsetCurveSetBuilder.prototype.addPolygonRing = function (a, b, c, d, e) {
  if (!(0 == b && a.length < jsts.geom.LinearRing.MINIMUM_VALID_SIZE)) {
    var f = d, g = e;
    a.length >= jsts.geom.LinearRing.MINIMUM_VALID_SIZE && jsts.algorithm.CGAlgorithms.isCCW(a) && (f = e, g = d, c = jsts.geomgraph.Position.opposite(c));
    a = this.curveBuilder.getRingCurve(a, c, b);
    this.addCurve(a, f, g)
  }
};
jsts.operation.buffer.OffsetCurveSetBuilder.prototype.isErodedCompletely = function (a, b) {
  var c = a.getCoordinates();
  if (4 > c.length)return 0 > b;
  if (4 == c.length)return this.isTriangleErodedCompletely(c, b);
  c = a.getEnvelopeInternal();
  c = Math.min(c.getHeight(), c.getWidth());
  return 0 > b && 2 * Math.abs(b) > c ? !0 : !1
};
jsts.operation.buffer.OffsetCurveSetBuilder.prototype.isTriangleErodedCompletely = function (a, b) {
  var c = new jsts.geom.Triangle(a[0], a[1], a[2]), d = c.inCentre();
  return jsts.algorithm.CGAlgorithms.distancePointLine(d, c.p0, c.p1) < Math.abs(b)
};
jsts.operation.buffer.BufferSubgraph = function () {
  this.dirEdgeList = new javascript.util.ArrayList;
  this.nodes = new javascript.util.ArrayList;
  this.finder = new jsts.operation.buffer.RightmostEdgeFinder
};
jsts.operation.buffer.BufferSubgraph.prototype.finder = null;
jsts.operation.buffer.BufferSubgraph.prototype.dirEdgeList = null;
jsts.operation.buffer.BufferSubgraph.prototype.nodes = null;
jsts.operation.buffer.BufferSubgraph.prototype.rightMostCoord = null;
jsts.operation.buffer.BufferSubgraph.prototype.env = null;
jsts.operation.buffer.BufferSubgraph.prototype.getDirectedEdges = function () {
  return this.dirEdgeList
};
jsts.operation.buffer.BufferSubgraph.prototype.getNodes = function () {
  return this.nodes
};
jsts.operation.buffer.BufferSubgraph.prototype.getEnvelope = function () {
  if (null === this.env) {
    for (var a = new jsts.geom.Envelope, b = this.dirEdgeList.iterator(); b.hasNext();)for (var c = b.next().getEdge().getCoordinates(), d = 0; d < c.length - 1; d++)a.expandToInclude(c[d]);
    this.env = a
  }
  return this.env
};
jsts.operation.buffer.BufferSubgraph.prototype.getRightmostCoordinate = function () {
  return this.rightMostCoord
};
jsts.operation.buffer.BufferSubgraph.prototype.create = function (a) {
  this.addReachable(a);
  this.finder.findEdge(this.dirEdgeList);
  this.rightMostCoord = this.finder.getCoordinate()
};
jsts.operation.buffer.BufferSubgraph.prototype.addReachable = function (a) {
  var b = [];
  for (b.push(a); 0 !== b.length;)a = b.pop(), this.add(a, b)
};
jsts.operation.buffer.BufferSubgraph.prototype.add = function (a, b) {
  a.setVisited(!0);
  this.nodes.add(a);
  for (var c = a.getEdges().iterator(); c.hasNext();) {
    var d = c.next();
    this.dirEdgeList.add(d);
    d = d.getSym().getNode();
    d.isVisited() || b.push(d)
  }
};
jsts.operation.buffer.BufferSubgraph.prototype.clearVisitedEdges = function () {
  for (var a = this.dirEdgeList.iterator(); a.hasNext();)a.next().setVisited(!1)
};
jsts.operation.buffer.BufferSubgraph.prototype.computeDepth = function (a) {
  this.clearVisitedEdges();
  var b = this.finder.getEdge();
  b.getNode();
  b.getLabel();
  b.setEdgeDepths(jsts.geomgraph.Position.RIGHT, a);
  this.copySymDepths(b);
  this.computeDepths(b)
};
jsts.operation.buffer.BufferSubgraph.prototype.computeDepths = function (a) {
  var b = [], c = [], d = a.getNode();
  c.push(d);
  b.push(d);
  for (a.setVisited(!0); 0 !== c.length;)for (a = c.shift(), b.push(a), this.computeNodeDepth(a), a = a.getEdges().iterator(); a.hasNext();)d = a.next().getSym(), d.isVisited() || (d = d.getNode(), -1 === b.indexOf(d) && (c.push(d), b.push(d)))
};
jsts.operation.buffer.BufferSubgraph.prototype.computeNodeDepth = function (a) {
  for (var b = null, c = a.getEdges().iterator(); c.hasNext();) {
    var d = c.next();
    if (d.isVisited() || d.getSym().isVisited()) {
      b = d;
      break
    }
  }
  if (null == b)throw new jsts.error.TopologyError("unable to find edge to compute depths at " + a.getCoordinate());
  a.getEdges().computeDepths(b);
  for (c = a.getEdges().iterator(); c.hasNext();)d = c.next(), d.setVisited(!0), this.copySymDepths(d)
};
jsts.operation.buffer.BufferSubgraph.prototype.copySymDepths = function (a) {
  var b = a.getSym();
  b.setDepth(jsts.geomgraph.Position.LEFT, a.getDepth(jsts.geomgraph.Position.RIGHT));
  b.setDepth(jsts.geomgraph.Position.RIGHT, a.getDepth(jsts.geomgraph.Position.LEFT))
};
jsts.operation.buffer.BufferSubgraph.prototype.findResultEdges = function () {
  for (var a = this.dirEdgeList.iterator(); a.hasNext();) {
    var b = a.next();
    1 <= b.getDepth(jsts.geomgraph.Position.RIGHT) && 0 >= b.getDepth(jsts.geomgraph.Position.LEFT) && !b.isInteriorAreaEdge() && b.setInResult(!0)
  }
};
jsts.operation.buffer.BufferSubgraph.prototype.compareTo = function (a) {
  return this.rightMostCoord.x < a.rightMostCoord.x ? -1 : this.rightMostCoord.x > a.rightMostCoord.x ? 1 : 0
};
jsts.geom.util.GeometryExtracter = function (a, b) {
  this.clz = a;
  this.comps = b
};
jsts.geom.util.GeometryExtracter.prototype = new jsts.geom.GeometryFilter;
jsts.geom.util.GeometryExtracter.prototype.clz = null;
jsts.geom.util.GeometryExtracter.prototype.comps = null;
jsts.geom.util.GeometryExtracter.extract = function (a, b, c) {
  c = c || new javascript.util.ArrayList;
  a instanceof b ? c.add(a) : (a instanceof jsts.geom.GeometryCollection || a instanceof jsts.geom.MultiPoint || a instanceof jsts.geom.MultiLineString || a instanceof jsts.geom.MultiPolygon) && a.apply(new jsts.geom.util.GeometryExtracter(b, c));
  return c
};
jsts.geom.util.GeometryExtracter.prototype.filter = function (a) {
  (null === this.clz || a instanceof this.clz) && this.comps.add(a)
};
(function () {
  var a = jsts.operation.overlay.OverlayOp, b = jsts.operation.overlay.snap.SnapOverlayOp, c = function (a, b) {
    this.geom = [];
    this.geom[0] = a;
    this.geom[1] = b
  };
  c.overlayOp = function (a, b, f) {
    return (new c(a, b)).getResultGeometry(f)
  };
  c.intersection = function (b, c) {
    return overlayOp(b, c, a.INTERSECTION)
  };
  c.union = function (b, c) {
    return overlayOp(b, c, a.UNION)
  };
  c.difference = function (b, c) {
    return overlayOp(b, c, a.DIFFERENCE)
  };
  c.symDifference = function (b, c) {
    return overlayOp(b, c, a.SYMDIFFERENCE)
  };
  c.prototype.geom = null;
  c.prototype.getResultGeometry =
    function (c) {
      var e = null, f = !1, g = null;
      try {
        e = a.overlayOp(this.geom[0], this.geom[1], c), f = !0
      } catch (h) {
        g = h
      }
      if (!f)try {
        e = b.overlayOp(this.geom[0], this.geom[1], c)
      } catch (h) {
        throw g;
      }
      return e
    };
  jsts.operation.overlay.snap.SnapIfNeededOverlayOp = c
})();
(function () {
  var a = jsts.geom.util.GeometryExtracter, b = jsts.operation.union.CascadedPolygonUnion,
    c = jsts.operation.union.PointGeometryUnion, d = jsts.operation.overlay.OverlayOp,
    e = jsts.operation.overlay.snap.SnapIfNeededOverlayOp, f = javascript.util.ArrayList;
  jsts.operation.union.UnaryUnionOp = function (a, b) {
    this.polygons = new f;
    this.lines = new f;
    this.points = new f;
    b && (this.geomFact = b);
    this.extract(a)
  };
  jsts.operation.union.UnaryUnionOp.union = function (a, b) {
    return (new jsts.operation.union.UnaryUnionOp(a, b)).union()
  };
  jsts.operation.union.UnaryUnionOp.prototype.polygons = null;
  jsts.operation.union.UnaryUnionOp.prototype.lines = null;
  jsts.operation.union.UnaryUnionOp.prototype.points = null;
  jsts.operation.union.UnaryUnionOp.prototype.geomFact = null;
  jsts.operation.union.UnaryUnionOp.prototype.extract = function (b) {
    if (b instanceof f)for (b = b.iterator(); b.hasNext();) {
      var c = b.next();
      this.extract(c)
    } else null === this.geomFact && (this.geomFact = b.getFactory()), a.extract(b, jsts.geom.Polygon, this.polygons), a.extract(b, jsts.geom.LineString,
      this.lines), a.extract(b, jsts.geom.Point, this.points)
  };
  jsts.operation.union.UnaryUnionOp.prototype.union = function () {
    if (null === this.geomFact)return null;
    var a = null;
    0 < this.points.size() && (a = this.geomFact.buildGeometry(this.points), a = this.unionNoOpt(a));
    var d = null;
    0 < this.lines.size() && (d = this.geomFact.buildGeometry(this.lines), d = this.unionNoOpt(d));
    var e = null;
    0 < this.polygons.size() && (e = b.union(this.polygons));
    d = this.unionWithNull(d, e);
    e = null;
    e = null === a ? d : null === d ? a : c(a, d);
    return null === e ? this.geomFact.createGeometryCollection(null) :
      e
  };
  jsts.operation.union.UnaryUnionOp.prototype.unionWithNull = function (a, b) {
    return null === a && null === b ? null : null === b ? a : null === a ? b : a.union(b)
  };
  jsts.operation.union.UnaryUnionOp.prototype.unionNoOpt = function (a) {
    var b = this.geomFact.createPoint(null);
    return e.overlayOp(a, b, d.UNION)
  }
})();
jsts.index.kdtree.KdNode = function () {
  this.right = this.left = null;
  this.count = 1;
  2 === arguments.length ? this.initializeFromCoordinate.apply(this, arguments[0], arguments[1]) : 3 === arguments.length && this.initializeFromXY.apply(this, arguments[0], arguments[1], arguments[2])
};
jsts.index.kdtree.KdNode.prototype.initializeFromXY = function (a, b, c) {
  this.p = new jsts.geom.Coordinate(a, b);
  this.data = c
};
jsts.index.kdtree.KdNode.prototype.initializeFromCoordinate = function (a, b) {
  this.p = a;
  this.data = b
};
jsts.index.kdtree.KdNode.prototype.getX = function () {
  return this.p.x
};
jsts.index.kdtree.KdNode.prototype.getY = function () {
  return this.p.y
};
jsts.index.kdtree.KdNode.prototype.getCoordinate = function () {
  return this.p
};
jsts.index.kdtree.KdNode.prototype.getData = function () {
  return this.data
};
jsts.index.kdtree.KdNode.prototype.getLeft = function () {
  return this.left
};
jsts.index.kdtree.KdNode.prototype.getRight = function () {
  return this.right
};
jsts.index.kdtree.KdNode.prototype.increment = function () {
  this.count += 1
};
jsts.index.kdtree.KdNode.prototype.getCount = function () {
  return this.count
};
jsts.index.kdtree.KdNode.prototype.isRepeated = function () {
  return 1 < count
};
jsts.index.kdtree.KdNode.prototype.setLeft = function (a) {
  this.left = a
};
jsts.index.kdtree.KdNode.prototype.setRight = function (a) {
  this.right = a
};
(function () {
  jsts.geom.MultiLineString = function (a, b) {
    this.geometries = a || [];
    this.factory = b
  };
  jsts.geom.MultiLineString.prototype = new jsts.geom.GeometryCollection;
  jsts.geom.MultiLineString.constructor = jsts.geom.MultiLineString;
  jsts.geom.MultiLineString.prototype.getBoundary = function () {
    return (new jsts.operation.BoundaryOp(this)).getBoundary()
  };
  jsts.geom.MultiLineString.prototype.equalsExact = function (a, b) {
    return this.isEquivalentClass(a) ? jsts.geom.GeometryCollection.prototype.equalsExact.call(this, a, b) :
      !1
  };
  jsts.geom.MultiLineString.prototype.CLASS_NAME = "jsts.geom.MultiLineString"
})();
jsts.algorithm.BoundaryNodeRule = function () {
};
jsts.algorithm.BoundaryNodeRule.prototype.isInBoundary = function (a) {
  throw new jsts.error.AbstractMethodInvocationError;
};
jsts.algorithm.Mod2BoundaryNodeRule = function () {
};
jsts.algorithm.Mod2BoundaryNodeRule.prototype = new jsts.algorithm.BoundaryNodeRule;
jsts.algorithm.Mod2BoundaryNodeRule.prototype.isInBoundary = function (a) {
  return 1 === a % 2
};
jsts.algorithm.BoundaryNodeRule.MOD2_BOUNDARY_RULE = new jsts.algorithm.Mod2BoundaryNodeRule;
jsts.algorithm.BoundaryNodeRule.OGC_SFS_BOUNDARY_RULE = jsts.algorithm.BoundaryNodeRule.MOD2_BOUNDARY_RULE;
jsts.operation.buffer.BufferBuilder = function (a) {
  this.bufParams = a;
  this.edgeList = new jsts.geomgraph.EdgeList
};
jsts.operation.buffer.BufferBuilder.depthDelta = function (a) {
  var b = a.getLocation(0, jsts.geomgraph.Position.LEFT);
  a = a.getLocation(0, jsts.geomgraph.Position.RIGHT);
  return b === jsts.geom.Location.INTERIOR && a === jsts.geom.Location.EXTERIOR ? 1 : b === jsts.geom.Location.EXTERIOR && a === jsts.geom.Location.INTERIOR ? -1 : 0
};
jsts.operation.buffer.BufferBuilder.prototype.bufParams = null;
jsts.operation.buffer.BufferBuilder.prototype.workingPrecisionModel = null;
jsts.operation.buffer.BufferBuilder.prototype.workingNoder = null;
jsts.operation.buffer.BufferBuilder.prototype.geomFact = null;
jsts.operation.buffer.BufferBuilder.prototype.graph = null;
jsts.operation.buffer.BufferBuilder.prototype.edgeList = null;
jsts.operation.buffer.BufferBuilder.prototype.setWorkingPrecisionModel = function (a) {
  this.workingPrecisionModel = a
};
jsts.operation.buffer.BufferBuilder.prototype.setNoder = function (a) {
  this.workingNoder = a
};
jsts.operation.buffer.BufferBuilder.prototype.buffer = function (a, b) {
  var c = this.workingPrecisionModel;
  null === c && (c = a.getPrecisionModel());
  this.geomFact = a.getFactory();
  var d = new jsts.operation.buffer.OffsetCurveBuilder(c, this.bufParams),
    d = (new jsts.operation.buffer.OffsetCurveSetBuilder(a, b, d)).getCurves();
  if (0 >= d.size())return this.createEmptyResultGeometry();
  this.computeNodedEdges(d, c);
  this.graph = new jsts.geomgraph.PlanarGraph(new jsts.operation.overlay.OverlayNodeFactory);
  this.graph.addEdges(this.edgeList.getEdges());
  c = this.createSubgraphs(this.graph);
  d = new jsts.operation.overlay.PolygonBuilder(this.geomFact);
  this.buildSubgraphs(c, d);
  c = d.getPolygons();
  return 0 >= c.size() ? this.createEmptyResultGeometry() : this.geomFact.buildGeometry(c)
};
jsts.operation.buffer.BufferBuilder.prototype.getNoder = function (a) {
  if (null !== this.workingNoder)return this.workingNoder;
  var b = new jsts.noding.MCIndexNoder, c = new jsts.algorithm.RobustLineIntersector;
  c.setPrecisionModel(a);
  b.setSegmentIntersector(new jsts.noding.IntersectionAdder(c));
  return b
};
jsts.operation.buffer.BufferBuilder.prototype.computeNodedEdges = function (a, b) {
  var c = this.getNoder(b);
  c.computeNodes(a);
  for (c = c.getNodedSubstrings().iterator(); c.hasNext();) {
    var d = c.next(), e = d.getData(), d = new jsts.geomgraph.Edge(d.getCoordinates(), new jsts.geomgraph.Label(e));
    this.insertUniqueEdge(d)
  }
};
jsts.operation.buffer.BufferBuilder.prototype.insertUniqueEdge = function (a) {
  var b = this.edgeList.findEqualEdge(a);
  if (null != b) {
    var c = b.getLabel(), d = a.getLabel();
    b.isPointwiseEqual(a) || (d = new jsts.geomgraph.Label(a.getLabel()), d.flip());
    c.merge(d);
    a = jsts.operation.buffer.BufferBuilder.depthDelta(d);
    c = b.getDepthDelta();
    b.setDepthDelta(c + a)
  } else this.edgeList.add(a), a.setDepthDelta(jsts.operation.buffer.BufferBuilder.depthDelta(a.getLabel()))
};
jsts.operation.buffer.BufferBuilder.prototype.createSubgraphs = function (a) {
  var b = [];
  for (a = a.getNodes().iterator(); a.hasNext();) {
    var c = a.next();
    if (!c.isVisited()) {
      var d = new jsts.operation.buffer.BufferSubgraph;
      d.create(c);
      b.push(d)
    }
  }
  b.sort(function (a, b) {
    return a.compareTo(b)
  });
  b.reverse();
  return b
};
jsts.operation.buffer.BufferBuilder.prototype.buildSubgraphs = function (a, b) {
  for (var c = [], d = 0; d < a.length; d++) {
    var e = a[d], f = e.getRightmostCoordinate(), f = (new jsts.operation.buffer.SubgraphDepthLocater(c)).getDepth(f);
    e.computeDepth(f);
    e.findResultEdges();
    c.push(e);
    b.add(e.getDirectedEdges(), e.getNodes())
  }
};
jsts.operation.buffer.BufferBuilder.convertSegStrings = function (a) {
  for (var b = new jsts.geom.GeometryFactory, c = new javascript.util.ArrayList; a.hasNext();) {
    var d = a.next(), d = b.createLineString(d.getCoordinates());
    c.add(d)
  }
  return b.buildGeometry(c)
};
jsts.operation.buffer.BufferBuilder.prototype.createEmptyResultGeometry = function () {
  return this.geomFact.createPolygon(null, null)
};
jsts.operation.relate.EdgeEndBundle = function (a, b) {
  this.edgeEnds = [];
  var c = a instanceof jsts.geomgraph.EdgeEnd ? a : b, d = c.getEdge(), e = c.getCoordinate(),
    f = c.getDirectedCoordinate(), g = new jsts.geomgraph.Label(c.getLabel());
  jsts.geomgraph.EdgeEnd.call(this, d, e, f, g);
  this.insert(c)
};
jsts.operation.relate.EdgeEndBundle.prototype = new jsts.geomgraph.EdgeEnd;
jsts.operation.relate.EdgeEndBundle.prototype.edgeEnds = null;
jsts.operation.relate.EdgeEndBundle.prototype.getLabel = function () {
  return this.label
};
jsts.operation.relate.EdgeEndBundle.prototype.getEdgeEnds = function () {
  return this.edgeEnds
};
jsts.operation.relate.EdgeEndBundle.prototype.insert = function (a) {
  this.edgeEnds.push(a)
};
jsts.operation.relate.EdgeEndBundle.prototype.computeLabel = function (a) {
  for (var b = !1, c = 0; c < this.edgeEnds.length; c++)this.edgeEnds[c].getLabel().isArea() && (b = !0);
  this.label = b ? new jsts.geomgraph.Label(jsts.geom.Location.NONE, jsts.geom.Location.NONE, jsts.geom.Location.NONE) : new jsts.geomgraph.Label(jsts.geom.Location.NONE);
  for (c = 0; 2 > c; c++)this.computeLabelOn(c, a), b && this.computeLabelSides(c)
};
jsts.operation.relate.EdgeEndBundle.prototype.computeLabelOn = function (a, b) {
  for (var c = 0, d = !1, e = 0; e < this.edgeEnds.length; e++) {
    var f = this.edgeEnds[e].getLabel().getLocation(a);
    f == jsts.geom.Location.BOUNDARY && c++;
    f == jsts.geom.Location.INTERIOR && (d = !0)
  }
  f = jsts.geom.Location.NONE;
  d && (f = jsts.geom.Location.INTERIOR);
  0 < c && (f = jsts.geomgraph.GeometryGraph.determineBoundary(b, c));
  this.label.setLocation(a, f)
};
jsts.operation.relate.EdgeEndBundle.prototype.computeLabelSides = function (a) {
  this.computeLabelSide(a, jsts.geomgraph.Position.LEFT);
  this.computeLabelSide(a, jsts.geomgraph.Position.RIGHT)
};
jsts.operation.relate.EdgeEndBundle.prototype.computeLabelSide = function (a, b) {
  for (var c = 0; c < this.edgeEnds.length; c++) {
    var d = this.edgeEnds[c];
    if (d.getLabel().isArea())if (d = d.getLabel().getLocation(a, b), d === jsts.geom.Location.INTERIOR) {
      this.label.setLocation(a, b, jsts.geom.Location.INTERIOR);
      break
    } else d === jsts.geom.Location.EXTERIOR && this.label.setLocation(a, b, jsts.geom.Location.EXTERIOR)
  }
};
jsts.operation.relate.EdgeEndBundle.prototype.updateIM = function (a) {
  jsts.geomgraph.Edge.updateIM(this.label, a)
};
jsts.index.chain.MonotoneChain = function (a, b, c, d) {
  this.pts = a;
  this.start = b;
  this.end = c;
  this.context = d
};
jsts.index.chain.MonotoneChain.prototype.pts = null;
jsts.index.chain.MonotoneChain.prototype.start = null;
jsts.index.chain.MonotoneChain.prototype.end = null;
jsts.index.chain.MonotoneChain.prototype.env = null;
jsts.index.chain.MonotoneChain.prototype.context = null;
jsts.index.chain.MonotoneChain.prototype.id = null;
jsts.index.chain.MonotoneChain.prototype.setId = function (a) {
  this.id = a
};
jsts.index.chain.MonotoneChain.prototype.getId = function () {
  return this.id
};
jsts.index.chain.MonotoneChain.prototype.getContext = function () {
  return this.context
};
jsts.index.chain.MonotoneChain.prototype.getEnvelope = function () {
  null == this.env && (this.env = new jsts.geom.Envelope(this.pts[this.start], this.pts[this.end]));
  return this.env
};
jsts.index.chain.MonotoneChain.prototype.getStartIndex = function () {
  return this.start
};
jsts.index.chain.MonotoneChain.prototype.getEndIndex = function () {
  return this.end
};
jsts.index.chain.MonotoneChain.prototype.getLineSegment = function (a, b) {
  b.p0 = this.pts[a];
  b.p1 = this.pts[a + 1]
};
jsts.index.chain.MonotoneChain.prototype.getCoordinates = function () {
  for (var a = [], b = 0, c = this.start; c <= this.end; c++)a[b++] = this.pts[c];
  return a
};
jsts.index.chain.MonotoneChain.prototype.select = function (a, b) {
  this.computeSelect2(a, this.start, this.end, b)
};
jsts.index.chain.MonotoneChain.prototype.computeSelect2 = function (a, b, c, d) {
  d.tempEnv1.init(this.pts[b], this.pts[c]);
  if (1 === c - b) d.select(this, b); else if (a.intersects(d.tempEnv1)) {
    var e = parseInt((b + c) / 2);
    b < e && this.computeSelect2(a, b, e, d);
    e < c && this.computeSelect2(a, e, c, d)
  }
};
jsts.index.chain.MonotoneChain.prototype.computeOverlaps = function (a, b) {
  if (6 === arguments.length)return this.computeOverlaps2.apply(this, arguments);
  this.computeOverlaps2(this.start, this.end, a, a.start, a.end, b)
};
jsts.index.chain.MonotoneChain.prototype.computeOverlaps2 = function (a, b, c, d, e, f) {
  var g = this.pts[a], h = this.pts[b], l = c.pts[d], k = c.pts[e];
  1 === b - a && 1 === e - d ? f.overlap(this, a, c, d) : (f.tempEnv1.init(g, h), f.tempEnv2.init(l, k), f.tempEnv1.intersects(f.tempEnv2) && (g = parseInt((a + b) / 2), h = parseInt((d + e) / 2), a < g && (d < h && this.computeOverlaps2(a, g, c, d, h, f), h < e && this.computeOverlaps2(a, g, c, h, e, f)), g < b && (d < h && this.computeOverlaps2(g, b, c, d, h, f), h < e && this.computeOverlaps2(g, b, c, h, e, f))))
};
(function () {
  var a = jsts.geom.Location, b = jsts.geom.Dimension;
  jsts.geom.IntersectionMatrix = function (c) {
    void 0 === c || null === c ? (this.matrix = [[], [], []], this.setAll(b.FALSE)) : "string" === typeof c ? this.set(c) : c instanceof jsts.geom.IntersectionMatrix && (this.matrix[a.INTERIOR][a.INTERIOR] = c.matrix[a.INTERIOR][a.INTERIOR], this.matrix[a.INTERIOR][a.BOUNDARY] = c.matrix[a.INTERIOR][a.BOUNDARY], this.matrix[a.INTERIOR][a.EXTERIOR] = c.matrix[a.INTERIOR][a.EXTERIOR], this.matrix[a.BOUNDARY][a.INTERIOR] = c.matrix[a.BOUNDARY][a.INTERIOR],
        this.matrix[a.BOUNDARY][a.BOUNDARY] = c.matrix[a.BOUNDARY][a.BOUNDARY], this.matrix[a.BOUNDARY][a.EXTERIOR] = c.matrix[a.BOUNDARY][a.EXTERIOR], this.matrix[a.EXTERIOR][a.INTERIOR] = c.matrix[a.EXTERIOR][a.INTERIOR], this.matrix[a.EXTERIOR][a.BOUNDARY] = c.matrix[a.EXTERIOR][a.BOUNDARY], this.matrix[a.EXTERIOR][a.EXTERIOR] = c.matrix[a.EXTERIOR][a.EXTERIOR])
  };
  jsts.geom.IntersectionMatrix.prototype.matrix = null;
  jsts.geom.IntersectionMatrix.prototype.add = function (a) {
    var b, e;
    for (b = 0; 3 > b; b++)for (e = 0; 3 > e; e++)this.setAtLeast(b,
      e, a.get(b, e))
  };
  jsts.geom.IntersectionMatrix.matches = function (a, d) {
    return "string" === typeof a ? jsts.geom.IntersectionMatrix.matches2.call(this, arguments) : "*" === d || "T" === d && (0 <= a || a === b.TRUE) || "F" === d && a === b.FALSE || "0" === d && a === b.P || "1" === d && a === b.L || "2" === d && a === b.A ? !0 : !1
  };
  jsts.geom.IntersectionMatrix.matches2 = function (a, b) {
    return (new jsts.geom.IntersectionMatrix(a)).matches(b)
  };
  jsts.geom.IntersectionMatrix.prototype.set = function (a, b, e) {
    "string" === typeof a ? this.set2(a) : this.matrix[a][b] = e
  };
  jsts.geom.IntersectionMatrix.prototype.set2 =
    function (a) {
      for (var d = 0; d < a.length(); d++)this.matrix[d / 3][d % 3] = b.toDimensionValue(a.charAt(d))
    };
  jsts.geom.IntersectionMatrix.prototype.setAtLeast = function (a, b, e) {
    1 === arguments.length ? this.setAtLeast2(arguments[0]) : this.matrix[a][b] < e && (this.matrix[a][b] = e)
  };
  jsts.geom.IntersectionMatrix.prototype.setAtLeastIfValid = function (a, b, e) {
    0 <= a && 0 <= b && this.setAtLeast(a, b, e)
  };
  jsts.geom.IntersectionMatrix.prototype.setAtLeast2 = function (a) {
    var b;
    for (b = 0; b < a.length; b++) {
      var e = parseInt(b / 3), f = parseInt(b % 3);
      this.setAtLeast(e,
        f, jsts.geom.Dimension.toDimensionValue(a.charAt(b)))
    }
  };
  jsts.geom.IntersectionMatrix.prototype.setAll = function (a) {
    var b, e;
    for (b = 0; 3 > b; b++)for (e = 0; 3 > e; e++)this.matrix[b][e] = a
  };
  jsts.geom.IntersectionMatrix.prototype.get = function (a, b) {
    return this.matrix[a][b]
  };
  jsts.geom.IntersectionMatrix.prototype.isDisjoint = function () {
    return this.matrix[a.INTERIOR][a.INTERIOR] === b.FALSE && this.matrix[a.INTERIOR][a.BOUNDARY] === b.FALSE && this.matrix[a.BOUNDARY][a.INTERIOR] === b.FALSE && this.matrix[a.BOUNDARY][a.BOUNDARY] ===
      b.FALSE
  };
  jsts.geom.IntersectionMatrix.prototype.isIntersects = function () {
    return !this.isDisjoint()
  };
  jsts.geom.IntersectionMatrix.prototype.isTouches = function (c, d) {
    return c > d ? this.isTouches(d, c) : c == b.A && d == b.A || c == b.L && d == b.L || c == b.L && d == b.A || c == b.P && d == b.A || c == b.P && d == b.L ? this.matrix[a.INTERIOR][a.INTERIOR] === b.FALSE && (jsts.geom.IntersectionMatrix.matches(this.matrix[a.INTERIOR][a.BOUNDARY], "T") || jsts.geom.IntersectionMatrix.matches(this.matrix[a.BOUNDARY][a.INTERIOR], "T") || jsts.geom.IntersectionMatrix.matches(this.matrix[a.BOUNDARY][a.BOUNDARY],
        "T")) : !1
  };
  jsts.geom.IntersectionMatrix.prototype.isCrosses = function (c, d) {
    return c == b.P && d == b.L || c == b.P && d == b.A || c == b.L && d == b.A ? jsts.geom.IntersectionMatrix.matches(this.matrix[a.INTERIOR][a.INTERIOR], "T") && jsts.geom.IntersectionMatrix.matches(this.matrix[a.INTERIOR][a.EXTERIOR], "T") : c == b.L && d == b.P || c == b.A && d == b.P || c == b.A && d == b.L ? jsts.geom.IntersectionMatrix.matches(matrix[a.INTERIOR][a.INTERIOR], "T") && jsts.geom.IntersectionMatrix.matches(this.matrix[a.EXTERIOR][a.INTERIOR], "T") : c === b.L && d === b.L ? 0 ===
      this.matrix[a.INTERIOR][a.INTERIOR] : !1
  };
  jsts.geom.IntersectionMatrix.prototype.isWithin = function () {
    return jsts.geom.IntersectionMatrix.matches(this.matrix[a.INTERIOR][a.INTERIOR], "T") && this.matrix[a.INTERIOR][a.EXTERIOR] == b.FALSE && this.matrix[a.BOUNDARY][a.EXTERIOR] == b.FALSE
  };
  jsts.geom.IntersectionMatrix.prototype.isContains = function () {
    return jsts.geom.IntersectionMatrix.matches(this.matrix[a.INTERIOR][a.INTERIOR], "T") && this.matrix[a.EXTERIOR][a.INTERIOR] == b.FALSE && this.matrix[a.EXTERIOR][a.BOUNDARY] ==
      b.FALSE
  };
  jsts.geom.IntersectionMatrix.prototype.isCovers = function () {
    return (jsts.geom.IntersectionMatrix.matches(this.matrix[a.INTERIOR][a.INTERIOR], "T") || jsts.geom.IntersectionMatrix.matches(this.matrix[a.INTERIOR][a.BOUNDARY], "T") || jsts.geom.IntersectionMatrix.matches(this.matrix[a.BOUNDARY][a.INTERIOR], "T") || jsts.geom.IntersectionMatrix.matches(this.matrix[a.BOUNDARY][a.BOUNDARY], "T")) && this.matrix[a.EXTERIOR][a.INTERIOR] == b.FALSE && this.matrix[a.EXTERIOR][a.BOUNDARY] == b.FALSE
  };
  jsts.geom.IntersectionMatrix.prototype.isCoveredBy =
    function () {
      return (jsts.geom.IntersectionMatrix.matches(this.matrix[a.INTERIOR][a.INTERIOR], "T") || jsts.geom.IntersectionMatrix.matches(this.matrix[a.INTERIOR][a.BOUNDARY], "T") || jsts.geom.IntersectionMatrix.matches(this.matrix[a.BOUNDARY][a.INTERIOR], "T") || jsts.geom.IntersectionMatrix.matches(this.matrix[a.BOUNDARY][a.BOUNDARY], "T")) && this.matrix[a.INTERIOR][a.EXTERIOR] === b.FALSE && this.matrix[a.BOUNDARY][a.EXTERIOR] === b.FALSE
    };
  jsts.geom.IntersectionMatrix.prototype.isEquals = function (c, d) {
    return c !==
    d ? !1 : jsts.geom.IntersectionMatrix.matches(this.matrix[a.INTERIOR][a.INTERIOR], "T") && this.matrix[a.EXTERIOR][a.INTERIOR] === b.FALSE && this.matrix[a.INTERIOR][a.EXTERIOR] === b.FALSE && this.matrix[a.EXTERIOR][a.BOUNDARY] === b.FALSE && this.matrix[a.BOUNDARY][a.EXTERIOR] === b.FALSE
  };
  jsts.geom.IntersectionMatrix.prototype.isOverlaps = function (c, d) {
    return c == b.P && d === b.P || c == b.A && d === b.A ? jsts.geom.IntersectionMatrix.matches(this.matrix[a.INTERIOR][a.INTERIOR], "T") && jsts.geom.IntersectionMatrix.matches(this.matrix[a.INTERIOR][a.EXTERIOR],
        "T") && jsts.geom.IntersectionMatrix.matches(this.matrix[a.EXTERIOR][a.INTERIOR], "T") : c === b.L && d === b.L ? 1 == this.matrix[a.INTERIOR][a.INTERIOR] && jsts.geom.IntersectionMatrix.matches(this.matrix[a.INTERIOR][a.EXTERIOR], "T") && jsts.geom.IntersectionMatrix.matches(this.matrix[a.EXTERIOR][a.INTERIOR], "T") : !1
  };
  jsts.geom.IntersectionMatrix.prototype.matches = function (a) {
    if (9 != a.length)throw new jsts.error.IllegalArgumentException("Should be length 9: " + a);
    for (var b = 0; 3 > b; b++)for (var e = 0; 3 > e; e++)if (!jsts.geom.IntersectionMatrix.matches(this.matrix[b][e],
        a.charAt(3 * b + e)))return !1;
    return !0
  };
  jsts.geom.IntersectionMatrix.prototype.transpose = function () {
    var a = matrix[1][0];
    this.matrix[1][0] = this.matrix[0][1];
    this.matrix[0][1] = a;
    a = this.matrix[2][0];
    this.matrix[2][0] = this.matrix[0][2];
    this.matrix[0][2] = a;
    a = this.matrix[2][1];
    this.matrix[2][1] = this.matrix[1][2];
    this.matrix[1][2] = a;
    return this
  };
  jsts.geom.IntersectionMatrix.prototype.toString = function () {
    var a, d, e = "";
    for (a = 0; 3 > a; a++)for (d = 0; 3 > d; d++)e += b.toDimensionSymbol(this.matrix[a][d]);
    return e
  }
})();
jsts.triangulate.quadedge.LastFoundQuadEdgeLocator = function (a) {
  this.subdiv = a;
  this.lastEdge = null;
  this.init()
};
jsts.triangulate.quadedge.LastFoundQuadEdgeLocator.prototype.init = function () {
  this.lastEdge = this.findEdge()
};
jsts.triangulate.quadedge.LastFoundQuadEdgeLocator.prototype.findEdge = function () {
  return this.subdiv.getEdges()[0]
};
jsts.triangulate.quadedge.LastFoundQuadEdgeLocator.prototype.locate = function (a) {
  this.lastEdge.isLive() || this.init();
  return this.lastEdge = a = this.subdiv.locateFromEdge(a, this.lastEdge)
};
jsts.io.WKTWriter = function () {
  this.parser = new jsts.io.WKTParser(this.geometryFactory)
};
jsts.io.WKTWriter.prototype.write = function (a) {
  return this.parser.write(a)
};
jsts.io.WKTWriter.toLineString = function (a, b) {
  if (2 !== arguments.length)throw new jsts.error.NotImplementedError;
  return "LINESTRING ( " + a.x + " " + a.y + ", " + b.x + " " + b.y + " )"
};
jsts.io.WKTReader = function (a) {
  this.geometryFactory = a || new jsts.geom.GeometryFactory;
  this.precisionModel = this.geometryFactory.getPrecisionModel();
  this.parser = new jsts.io.WKTParser(this.geometryFactory)
};
jsts.io.WKTReader.prototype.read = function (a) {
  a = this.parser.read(a);
  this.precisionModel.getType() === jsts.geom.PrecisionModel.FIXED && this.reducePrecision(a);
  return a
};
jsts.io.WKTReader.prototype.reducePrecision = function (a) {
  var b, c;
  if (a.coordinate) this.precisionModel.makePrecise(a.coordinate); else if (a.points)for (b = 0, c = a.points.length; b < c; b++)this.precisionModel.makePrecise(a.points[b]); else if (a.geometries)for (b = 0, c = a.geometries.length; b < c; b++)this.reducePrecision(a.geometries[b])
};
jsts.triangulate.quadedge.QuadEdgeSubdivision = function (a, b) {
  this.tolerance = b;
  this.edgeCoincidenceTolerance = b / jsts.triangulate.quadedge.QuadEdgeSubdivision.EDGE_COINCIDENCE_TOL_FACTOR;
  this.visitedKey = 0;
  this.quadEdges = [];
  this.startingEdge;
  this.tolerance;
  this.edgeCoincidenceTolerance;
  this.frameEnv;
  this.locator = null;
  this.seg = new jsts.geom.LineSegment;
  this.triEdges = Array(3);
  this.frameVertex = Array(3);
  this.createFrame(a);
  this.startingEdge = this.initSubdiv();
  this.locator = new jsts.triangulate.quadedge.LastFoundQuadEdgeLocator(this)
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.EDGE_COINCIDENCE_TOL_FACTOR = 1E3;
jsts.triangulate.quadedge.QuadEdgeSubdivision.getTriangleEdges = function (a, b) {
  b[0] = a;
  b[1] = b[0].lNext();
  b[2] = b[1].lNext();
  if (b[2].lNext() != b[0])throw new jsts.IllegalArgumentError("Edges do not form a triangle");
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.createFrame = function (a) {
  var b, c;
  b = a.getWidth();
  c = a.getHeight();
  b = b > c ? 10 * b : 10 * c;
  this.frameVertex[0] = new jsts.triangulate.quadedge.Vertex((a.getMaxX() + a.getMinX()) / 2, a.getMaxY() + b);
  this.frameVertex[1] = new jsts.triangulate.quadedge.Vertex(a.getMinX() - b, a.getMinY() - b);
  this.frameVertex[2] = new jsts.triangulate.quadedge.Vertex(a.getMaxX() + b, a.getMinY() - b);
  this.frameEnv = new jsts.geom.Envelope(this.frameVertex[0].getCoordinate(), this.frameVertex[1].getCoordinate());
  this.frameEnv.expandToInclude(this.frameVertex[2].getCoordinate())
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.initSubdiv = function () {
  var a, b, c;
  a = this.makeEdge(this.frameVertex[0], this.frameVertex[1]);
  b = this.makeEdge(this.frameVertex[1], this.frameVertex[2]);
  jsts.triangulate.quadedge.QuadEdge.splice(a.sym(), b);
  c = this.makeEdge(this.frameVertex[2], this.frameVertex[0]);
  jsts.triangulate.quadedge.QuadEdge.splice(b.sym(), c);
  jsts.triangulate.quadedge.QuadEdge.splice(c.sym(), a);
  return a
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.getTolerance = function () {
  return this.tolerance
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.getEnvelope = function () {
  return new jsts.geom.Envelope(this.frameEnv)
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.getEdges = function () {
  return 0 < arguments.length ? this.getEdgesByFactory(arguments[0]) : this.quadEdges
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.setLocator = function (a) {
  this.locator = a
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.makeEdge = function (a, b) {
  var c = jsts.triangulate.quadedge.QuadEdge.makeEdge(a, b);
  this.quadEdges.push(c);
  return c
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.connect = function (a, b) {
  var c = jsts.triangulate.quadedge.QuadEdge.connect(a, b);
  this.quadEdges.push(c);
  return c
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.delete_jsts = function (a) {
  jsts.triangulate.quadedge.QuadEdge.splice(a, a.oPrev());
  jsts.triangulate.quadedge.QuadEdge.splice(a.sym(), a.sym().oPrev());
  var b, c;
  a.eSym = a.sym();
  b = a.rot;
  c = a.rot.sym();
  var d = this.quadEdges.indexOf(a);
  -1 !== d && this.quadEdges.splice(d, 1);
  d = this.quadEdges.indexOf(void 0);
  -1 !== d && this.quadEdges.splice(d, 1);
  d = this.quadEdges.indexOf(b);
  -1 !== d && this.quadEdges.splice(d, 1);
  d = this.quadEdges.indexOf(c);
  -1 !== d && this.quadEdges.splice(d,
    1);
  a.delete_jsts();
  (void 0).delete_jsts();
  b.delete_jsts();
  c.delete_jsts()
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.locateFromEdge = function (a, b) {
  var c = 0, d = this.quadEdges.length, e;
  for (e = b; ;) {
    c++;
    if (c > d)throw new jsts.error.LocateFailureError(e.toLineSegment());
    if (a.equals(e.orig()) || a.equals(e.dest()))break; else if (a.rightOf(e)) e = e.sym(); else if (a.rightOf(e.oNext()))if (a.rightOf(e.dPrev()))break; else e = e.dPrev(); else e = e.oNext()
  }
  return e
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.locate = function () {
  return 1 === arguments.length ? arguments[0] instanceof jsts.triangulate.quadedge.Vertex ? this.locateByVertex(arguments[0]) : this.locateByCoordinate(arguments[0]) : this.locateByCoordinates(arguments[0], arguments[1])
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.locateByVertex = function (a) {
  return this.locator.locate(a)
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.locateByCoordinate = function (a) {
  return this.locator.locate(new jsts.triangulate.quadedge.Vertex(a))
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.locateByCoordinates = function (a, b) {
  var c, d;
  c = this.locator.locate(new jsts.triangulate.quadedge.Vertex(a));
  if (null === c)return null;
  d = c;
  c.dest().getCoordinate().equals2D(a) && (d = c.sym());
  c = d;
  do {
    if (c.dest().getCoordinate().equals2D(b))return c;
    c = c.oNext()
  } while (c != d);
  return null
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.insertSite = function (a) {
  var b, c;
  b = this.locate(a);
  if (a.equals(b.orig(), this.tolerance) || a.equals(b.dest(), this.tolerance))return b;
  a = this.makeEdge(b.orig(), a);
  jsts.triangulate.quadedge.QuadEdge.splice(a, b);
  c = a;
  do a = this.connect(b, a.sym()), b = a.oPrev(); while (b.lNext() != c);
  return c
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.isFrameEdge = function (a) {
  return this.isFrameVertex(a.orig()) || this.isFrameVertex(a.dest()) ? !0 : !1
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.isFrameBorderEdge = function (a) {
  var b;
  this.getTriangleEdges(a, Array(3));
  b = Array(3);
  this.getTriangleEdges(a.sym(), b);
  b = a.lNext().dest();
  if (this.isFrameVertex(b))return !0;
  a = a.sym().lNext().dest();
  return this.isFrameVertex(a) ? !0 : !1
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.isFrameVertex = function (a) {
  return a.equals(this.frameVertex[0]) || a.equals(this.frameVertex[1]) || a.equals(this.frameVertex[2]) ? !0 : !1
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.isOnEdge = function (a, b) {
  this.seg.setCoordinates(a.orig().getCoordinate(), a.dest().getCoordinate());
  return this.seg.distance(b) < this.edgeCoincidenceTolerance
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.isVertexOfEdge = function (a, b) {
  return b.equals(a.orig(), this.tolerance) || b.equals(a.dest(), this.tolerance) ? !0 : !1
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.getVertices = function (a) {
  var b = [], c, d, e, f;
  c = 0;
  d = this.quadEdges.length;
  for (c; c < d; c++)e = this.quadEdges[c], f = e.orig(), !a && this.isFrameVertex(f) || b.push(f), e = e.dest(), !a && this.isFrameVertex(e) || b.push(e);
  return b
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.getVertexUniqueEdges = function (a) {
  var b, c, d, e, f, g;
  b = [];
  c = [];
  d = 0;
  e = this.quadEdges.length;
  for (d; d < e; d++)f = this.quadEdges[d], g = f.orig(), -1 === c.indexOf(g) && (c.push(g), !a && this.isFrameVertex(g) || b.push(f)), f = f.sym(), g = f.orig(), -1 === c.indexOf(g) && (c.push(g), !a && this.isFrameVertex(g) || b.push(f));
  return b
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.getPrimaryEdges = function (a) {
  this.visitedKey++;
  var b, c, d, e, f;
  b = [];
  c = [];
  c.push(this.startingEdge);
  for (d = []; 0 < c.length;)e = c.pop(), -1 === d.indexOf(e) && (f = e.getPrimary(), !a && this.isFrameEdge(f) || b.push(f), c.push(e.oNext()), c.push(e.sym().oNext()), d.push(e), d.push(e.sym()));
  return b
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.visitTriangles = function (a, b) {
  this.visitedKey++;
  var c, d, e;
  c = [];
  c.push(this.startingEdge);
  for (d = []; 0 < c.length;)e = c.pop(), -1 === d.indexOf(e) && (e = this.fetchTriangleToVisit(e, c, b, d), null !== e && a.visit(e))
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.fetchTriangleToVisit = function (a, b, c, d) {
  var e, f, g, h;
  e = a;
  f = 0;
  g = !1;
  do this.triEdges[f] = e, this.isFrameEdge(e) && (g = !0), h = e.sym(), -1 === d.indexOf(h) && b.push(h), d.push(e), f++, e = e.lNext(); while (e !== a);
  return g && !c ? null : this.triEdges
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.getTriangleEdges = function (a) {
  var b = new jsts.triangulate.quadedge.TriangleEdgesListVisitor;
  this.visitTriangles(b, a);
  return b.getTriangleEdges()
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.getTriangleVertices = function (a) {
  var b = new TriangleVertexListVisitor;
  this.visitTriangles(b, a);
  return b.getTriangleVertices()
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.getTriangleCoordinates = function (a) {
  var b = new jsts.triangulate.quadedge.TriangleCoordinatesVisitor;
  this.visitTriangles(b, a);
  return b.getTriangles()
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.getEdgesByFactory = function (a) {
  var b, c, d, e, f, g;
  b = this.getPrimaryEdges(!1);
  c = [];
  d = 0;
  e = b.length;
  for (d; d < e; d++)f = b[d], g = [], g[0] = f.orig().getCoordinate(), g[1] = f.dest().getCoordinate(), c[d] = a.createLineString(g);
  return a.createMultiLineString(c)
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.getTriangles = function (a) {
  var b, c, d, e, f;
  b = this.getTriangleCoordinates(!1);
  c = Array(b.length);
  e = 0;
  f = b.length;
  for (e; e < f; e++)d = b[e], c[e] = a.createPolygon(a.createLinearRing(d, null));
  return a.createGeometryCollection(c)
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.getVoronoiDiagram = function (a) {
  var b = this.getVoronoiCellPolygons(a);
  return a.createGeometryCollection(b)
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.getVoronoiCellPolygons = function (a) {
  this.visitTriangles(new jsts.triangulate.quadedge.TriangleCircumcentreVisitor, !0);
  var b, c, d, e, f;
  b = [];
  c = this.getVertexUniqueEdges(!1);
  d = 0;
  e = c.length;
  for (d; d < e; d++)f = c[d], b.push(this.getVoronoiCellPolygon(f, a));
  return b
};
jsts.triangulate.quadedge.QuadEdgeSubdivision.prototype.getVoronoiCellPolygon = function (a, b) {
  var c, d;
  c = [];
  startQE = a;
  do d = a.rot.orig().getCoordinate(), c.push(d), a = a.oPrev(); while (a !== startQE);
  d = new jsts.geom.CoordinateList([], !1);
  d.add(c, !1);
  d.closeRing();
  4 > d.size() && d.add(d.get(d.size() - 1), !0);
  c = b.createPolygon(b.createLinearRing(d.toArray()), null);
  startQE.orig();
  return c
};
jsts.triangulate.quadedge.TriangleCircumcentreVisitor = function () {
};
jsts.triangulate.quadedge.TriangleCircumcentreVisitor.prototype.visit = function (a) {
  var b, c, d;
  b = a[0].orig().getCoordinate();
  c = a[1].orig().getCoordinate();
  d = a[2].orig().getCoordinate();
  b = jsts.geom.Triangle.circumcentre(b, c, d);
  b = new jsts.triangulate.quadedge.Vertex(b);
  c = 0;
  for (c; 3 > c; c++)a[c].rot.setOrig(b)
};
jsts.triangulate.quadedge.TriangleEdgesListVisitor = function () {
  this.triList = []
};
jsts.triangulate.quadedge.TriangleEdgesListVisitor.prototype.visit = function (a) {
  a = a.concat();
  this.triList.push(a)
};
jsts.triangulate.quadedge.TriangleEdgesListVisitor.prototype.getTriangleEdges = function () {
  return this.triList
};
jsts.triangulate.quadedge.TriangleVertexListVisitor = function () {
  this.triList = []
};
jsts.triangulate.quadedge.TriangleVertexListVisitor.prototype.visit = function (a) {
  a = [];
  a.push(trieEdges[0].orig());
  a.push(trieEdges[1].orig());
  a.push(trieEdges[2].orig());
  this.triList.push(a)
};
jsts.triangulate.quadedge.TriangleVertexListVisitor.prototype.getTriangleVertices = function () {
  return this.triList
};
jsts.triangulate.quadedge.TriangleCoordinatesVisitor = function () {
  this.coordList = new jsts.geom.CoordinateList([], !1);
  this.triCoords = []
};
jsts.triangulate.quadedge.TriangleCoordinatesVisitor.prototype.visit = function (a) {
  this.coordList = new jsts.geom.CoordinateList([], !1);
  var b = 0, c;
  for (b; 3 > b; b++)c = a[b].orig(), this.coordList.add(c.getCoordinate());
  0 < this.coordList.size() && (this.coordList.closeRing(), a = this.coordList.toArray(), 4 === a.length && this.triCoords.push(a))
};
jsts.triangulate.quadedge.TriangleCoordinatesVisitor.prototype.getTriangles = function () {
  return this.triCoords
};
jsts.index.kdtree.KdTree = function (a) {
  var b = 0;
  void 0 !== a && (b = a);
  this.last = this.root = null;
  this.numberOfNodes = 0;
  this.tolerance = b
};
jsts.index.kdtree.KdTree.prototype.insert = function () {
  return 1 === arguments.length ? this.insertCoordinate.apply(this, arguments[0]) : this.insertWithData.apply(this, arguments[0], arguments[1])
};
jsts.index.kdtree.KdTree.prototype.insertCoordinate = function (a) {
  return this.insertWithData(a, null)
};
jsts.index.kdtree.KdTree.prototype.insertWithData = function (a, b) {
  if (null === this.root)return this.root = new jsts.index.kdtree.KdNode(a, b);
  for (var c = this.root, d = this.root, e = !0, f = !0; c !== last;) {
    f = e ? a.x < c.getX() : a.y < c.getY();
    d = c;
    c = f ? c.getLeft() : c.getRight();
    if (null !== c && a.distance(c.getCoordinate()) <= this.tolerance)return c.increment(), c;
    e = !e
  }
  this.numberOfNodes = numberOfNodes + 1;
  c = new jsts.index.kdtree.KdNode(a, b);
  c.setLeft(this.last);
  c.setRight(this.last);
  f ? d.setLeft(c) : d.setRight(c);
  return c
};
jsts.index.kdtree.KdTree.prototype.queryNode = function (a, b, c, d, e) {
  if (a !== b) {
    var f, g, h;
    d ? (f = c.getMinX(), g = c.getMaxX(), h = a.getX()) : (f = c.getMinY(), g = c.getMaxY(), h = a.getY());
    g = h <= g;
    f < h && this.queryNode(a.getLeft(), b, c, !d, e);
    c.contains(a.getCoordinate()) && e.add(a);
    g && this.queryNode(a.getRight(), b, c, !d, e)
  }
};
jsts.index.kdtree.KdTree.prototype.query = function () {
  return 1 === arguments.length ? this.queryByEnvelope.apply(this, arguments[0]) : this.queryWithArray.apply(this, arguments[0], arguments[1])
};
jsts.index.kdtree.KdTree.prototype.queryByEnvelope = function (a) {
  var b = [];
  this.queryNode(this.root, this.last, a, !0, b);
  return b
};
jsts.index.kdtree.KdTree.prototype.queryWithArray = function (a, b) {
  this.queryNode(this.root, this.last, a, !0, b)
};
jsts.operation.relate.RelateOp = function () {
  jsts.operation.GeometryGraphOperation.apply(this, arguments);
  this._relate = new jsts.operation.relate.RelateComputer(this.arg)
};
jsts.operation.relate.RelateOp.prototype = new jsts.operation.GeometryGraphOperation;
jsts.operation.relate.RelateOp.relate = function (a, b, c) {
  return (new jsts.operation.relate.RelateOp(a, b, c)).getIntersectionMatrix()
};
jsts.operation.relate.RelateOp.prototype._relate = null;
jsts.operation.relate.RelateOp.prototype.getIntersectionMatrix = function () {
  return this._relate.computeIM()
};
jsts.geom.Triangle = function (a, b, c) {
  this.p0 = a;
  this.p1 = b;
  this.p2 = c
};
jsts.geom.Triangle.isAcute = function (a, b, c) {
  return jsts.algorithm.Angle.isAcute(a, b, c) && jsts.algorithm.Angle.isAcute(b, c, a) && jsts.algorithm.Angle.isAcute(c, a, b) ? !0 : !1
};
jsts.geom.Triangle.perpendicularBisector = function (a, b) {
  var c, d, e;
  c = b.x - a.x;
  d = b.y - a.y;
  e = new jsts.algorithm.HCoordinate(a.x + c / 2, a.y + d / 2, 1);
  c = new jsts.algorithm.HCoordinate(a.x - d + c / 2, a.y + c + d / 2, 1);
  return new jsts.algorithm.HCoordinate(e, c)
};
jsts.geom.Triangle.circumcentre = function (a, b, c) {
  var d, e, f, g, h;
  d = c.x;
  c = c.y;
  e = a.x - d;
  a = a.y - c;
  f = b.x - d;
  g = b.y - c;
  b = 2 * jsts.geom.Triangle.det(e, a, f, g);
  h = jsts.geom.Triangle.det(a, e * e + a * a, g, f * f + g * g);
  e = jsts.geom.Triangle.det(e, e * e + a * a, f, f * f + g * g);
  return new jsts.geom.Coordinate(d - h / b, c + e / b)
};
jsts.geom.Triangle.det = function (a, b, c, d) {
  return a * d - b * c
};
jsts.geom.Triangle.inCentre = function (a, b, c) {
  var d, e, f, g;
  d = b.distance(c);
  e = a.distance(c);
  f = a.distance(b);
  g = d + e + f;
  return new jsts.geom.Coordinate((d * a.x + e * b.x + f * c.x) / g, (d * a.y + e * b.y + f * c.y) / g)
};
jsts.geom.Triangle.centroid = function (a, b, c) {
  return new jsts.geom.Coordinate((a.x + b.x + c.x) / 3, (a.y + b.y + c.y) / 3)
};
jsts.geom.Triangle.longestSideLength = function (a, b, c) {
  var d;
  d = a.distance(b);
  b = b.distance(c);
  a = c.distance(a);
  b > d && (d = b);
  a > d && (d = a);
  return d
};
jsts.geom.Triangle.angleBisector = function (a, b, c) {
  var d;
  d = b.distance(a);
  b = b.distance(c);
  d /= d + b;
  return new jsts.geom.Coordinate(a.x + d * (c.x - a.x), a.y + d * (c.y - a.y))
};
jsts.geom.Triangle.area = function (a, b, c) {
  return Math.abs(((c.x - a.x) * (b.y - a.y) - (b.x - a.x) * (c.y - a.y)) / 2)
};
jsts.geom.Triangle.signedArea = function (a, b, c) {
  return ((c.x - a.x) * (b.y - a.y) - (b.x - a.x) * (c.y - a.y)) / 2
};
jsts.geom.Triangle.prototype.inCentre = function () {
  return jsts.geom.Triangle.inCentre(this.p0, this.p1, this.p2)
};
jsts.algorithm.CentroidArea = function () {
  this.basePt = null;
  this.triangleCent3 = new jsts.geom.Coordinate;
  this.centSum = new jsts.geom.Coordinate;
  this.cg3 = new jsts.geom.Coordinate
};
jsts.algorithm.CentroidArea.prototype.basePt = null;
jsts.algorithm.CentroidArea.prototype.triangleCent3 = null;
jsts.algorithm.CentroidArea.prototype.areasum2 = 0;
jsts.algorithm.CentroidArea.prototype.cg3 = null;
jsts.algorithm.CentroidArea.prototype.centSum = null;
jsts.algorithm.CentroidArea.prototype.totalLength = 0;
jsts.algorithm.CentroidArea.prototype.add = function (a) {
  if (a instanceof jsts.geom.Polygon) this.setBasePoint(a.getExteriorRing().getCoordinateN(0)), this.add3(a); else if (a instanceof jsts.geom.GeometryCollection || a instanceof jsts.geom.MultiPolygon)for (var b = 0; b < a.getNumGeometries(); b++)this.add(a.getGeometryN(b)); else a instanceof Array && this.add2(a)
};
jsts.algorithm.CentroidArea.prototype.add2 = function (a) {
  this.setBasePoint(a[0]);
  this.addShell(a)
};
jsts.algorithm.CentroidArea.prototype.getCentroid = function () {
  var a = new jsts.geom.Coordinate;
  0 < Math.abs(this.areasum2) ? (a.x = this.cg3.x / 3 / this.areasum2, a.y = this.cg3.y / 3 / this.areasum2) : (a.x = this.centSum.x / this.totalLength, a.y = this.centSum.y / this.totalLength);
  return a
};
jsts.algorithm.CentroidArea.prototype.setBasePoint = function (a) {
  null == this.basePt && (this.basePt = a)
};
jsts.algorithm.CentroidArea.prototype.add3 = function (a) {
  this.addShell(a.getExteriorRing().getCoordinates());
  for (var b = 0; b < a.getNumInteriorRing(); b++)this.addHole(a.getInteriorRingN(b).getCoordinates())
};
jsts.algorithm.CentroidArea.prototype.addShell = function (a) {
  for (var b = !jsts.algorithm.CGAlgorithms.isCCW(a), c = 0; c < a.length - 1; c++)this.addTriangle(this.basePt, a[c], a[c + 1], b);
  this.addLinearSegments(a)
};
jsts.algorithm.CentroidArea.prototype.addHole = function (a) {
  for (var b = jsts.algorithm.CGAlgorithms.isCCW(a), c = 0; c < a.length - 1; c++)this.addTriangle(this.basePt, a[c], a[c + 1], b);
  this.addLinearSegments(a)
};
jsts.algorithm.CentroidArea.prototype.addTriangle = function (a, b, c, d) {
  d = d ? 1 : -1;
  jsts.algorithm.CentroidArea.centroid3(a, b, c, this.triangleCent3);
  a = jsts.algorithm.CentroidArea.area2(a, b, c);
  this.cg3.x += d * a * this.triangleCent3.x;
  this.cg3.y += d * a * this.triangleCent3.y;
  this.areasum2 += d * a
};
jsts.algorithm.CentroidArea.centroid3 = function (a, b, c, d) {
  d.x = a.x + b.x + c.x;
  d.y = a.y + b.y + c.y
};
jsts.algorithm.CentroidArea.area2 = function (a, b, c) {
  return (b.x - a.x) * (c.y - a.y) - (c.x - a.x) * (b.y - a.y)
};
jsts.algorithm.CentroidArea.prototype.addLinearSegments = function (a) {
  for (var b = 0; b < a.length - 1; b++) {
    var c = a[b].distance(a[b + 1]);
    this.totalLength += c;
    this.centSum.x += (a[b].x + a[b + 1].x) / 2 * c;
    this.centSum.y += (a[b].y + a[b + 1].y) / 2 * c
  }
};
jsts.algorithm.CentralEndpointIntersector = function (a, b, c, d) {
  this.pts = [a, b, c, d];
  this.compute()
};
jsts.algorithm.CentralEndpointIntersector.getIntersection = function (a, b, c, d) {
  return (new jsts.algorithm.CentralEndpointIntersector(a, b, c, d)).getIntersection()
};
jsts.algorithm.CentralEndpointIntersector.prototype.pts = null;
jsts.algorithm.CentralEndpointIntersector.prototype.intPt = null;
jsts.algorithm.CentralEndpointIntersector.prototype.compute = function () {
  var a = jsts.algorithm.CentralEndpointIntersector.average(this.pts);
  this.intPt = this.findNearestPoint(a, this.pts)
};
jsts.algorithm.CentralEndpointIntersector.prototype.getIntersection = function () {
  return this.intPt
};
jsts.algorithm.CentralEndpointIntersector.average = function (a) {
  var b = new jsts.geom.Coordinate, c, d = a.length;
  for (c = 0; c < d; c++)b.x += a[c].x, b.y += a[c].y;
  0 < d && (b.x /= d, b.y /= d);
  return b
};
jsts.algorithm.CentralEndpointIntersector.prototype.findNearestPoint = function (a, b) {
  var c = Number.MAX_VALUE, d, e = null, f;
  for (d = 0; d < b.length; d++)f = a.distance(b[d]), f < c && (c = f, e = b[d]);
  return e
};
(function () {
  var a = javascript.util.ArrayList, b = jsts.geom.GeometryComponentFilter, c = jsts.geom.LineString,
    d = jsts.operation.polygonize.EdgeRing, e = jsts.operation.polygonize.PolygonizeGraph, f = function () {
      var d = this, e = function () {
      };
      e.prototype = new b;
      e.prototype.filter = function (a) {
        a instanceof c && d.add(a)
      };
      this.lineStringAdder = new e;
      this.dangles = new a;
      this.cutEdges = new a;
      this.invalidRingLines = new a
    };
  f.prototype.lineStringAdder = null;
  f.prototype.graph = null;
  f.prototype.dangles = null;
  f.prototype.cutEdges = null;
  f.prototype.invalidRingLines =
    null;
  f.prototype.holeList = null;
  f.prototype.shellList = null;
  f.prototype.polyList = null;
  f.prototype.add = function (a) {
    if (a instanceof jsts.geom.LineString)return this.add3(a);
    if (a instanceof jsts.geom.Geometry)return this.add2(a);
    for (a = a.iterator(); a.hasNext();) {
      var b = a.next();
      this.add2(b)
    }
  };
  f.prototype.add2 = function (a) {
    a.apply(this.lineStringAdder)
  };
  f.prototype.add3 = function (a) {
    null == this.graph && (this.graph = new e(a.getFactory()));
    this.graph.addEdge(a)
  };
  f.prototype.getPolygons = function () {
    this.polygonize();
    return this.polyList
  };
  f.prototype.getDangles = function () {
    this.polygonize();
    return this.dangles
  };
  f.prototype.getCutEdges = function () {
    this.polygonize();
    return this.cutEdges
  };
  f.prototype.getInvalidRingLines = function () {
    this.polygonize();
    return this.invalidRingLines
  };
  f.prototype.polygonize = function () {
    if (null == this.polyList && (this.polyList = new a, null != this.graph)) {
      this.dangles = this.graph.deleteDangles();
      this.cutEdges = this.graph.deleteCutEdges();
      var b = this.graph.getEdgeRings(), c = new a;
      this.invalidRingLines =
        new a;
      this.findValidRings(b, c, this.invalidRingLines);
      this.findShellsAndHoles(c);
      f.assignHolesToShells(this.holeList, this.shellList);
      this.polyList = new a;
      for (b = this.shellList.iterator(); b.hasNext();)c = b.next(), this.polyList.add(c.getPolygon())
    }
  };
  f.prototype.findValidRings = function (a, b, c) {
    for (a = a.iterator(); a.hasNext();) {
      var d = a.next();
      d.isValid() ? b.add(d) : c.add(d.getLineString())
    }
  };
  f.prototype.findShellsAndHoles = function (b) {
    this.holeList = new a;
    this.shellList = new a;
    for (b = b.iterator(); b.hasNext();) {
      var c =
        b.next();
      c.isHole() ? this.holeList.add(c) : this.shellList.add(c)
    }
  };
  f.assignHolesToShells = function (a, b) {
    for (var c = a.iterator(); c.hasNext();) {
      var d = c.next();
      f.assignHoleToShell(d, b)
    }
  };
  f.assignHoleToShell = function (a, b) {
    var c = d.findEdgeRingContaining(a, b);
    null != c && c.addHole(a.getRing())
  };
  jsts.operation.polygonize.Polygonizer = f
})();
jsts.operation.relate.RelateNode = function (a, b) {
  jsts.geomgraph.Node.apply(this, arguments)
};
jsts.operation.relate.RelateNode.prototype = new jsts.geomgraph.Node;
jsts.operation.relate.RelateNode.prototype.computeIM = function (a) {
  a.setAtLeastIfValid(this.label.getLocation(0), this.label.getLocation(1), 0)
};
jsts.operation.relate.RelateNode.prototype.updateIMFromEdges = function (a) {
  this.edges.updateIM(a)
};
jsts.operation.buffer.OffsetSegmentString = function () {
  this.ptList = []
};
jsts.operation.buffer.OffsetSegmentString.prototype.ptList = null;
jsts.operation.buffer.OffsetSegmentString.prototype.precisionModel = null;
jsts.operation.buffer.OffsetSegmentString.prototype.minimimVertexDistance = 0;
jsts.operation.buffer.OffsetSegmentString.prototype.setPrecisionModel = function (a) {
  this.precisionModel = a
};
jsts.operation.buffer.OffsetSegmentString.prototype.setMinimumVertexDistance = function (a) {
  this.minimimVertexDistance = a
};
jsts.operation.buffer.OffsetSegmentString.prototype.addPt = function (a) {
  a = new jsts.geom.Coordinate(a);
  this.precisionModel.makePrecise(a);
  this.isRedundant(a) || this.ptList.push(a)
};
jsts.operation.buffer.OffsetSegmentString.prototype.addPts = function (a, b) {
  if (b)for (var c = 0; c < a.length; c++)this.addPt(a[c]); else for (c = a.length - 1; 0 <= c; c--)this.addPt(a[c])
};
jsts.operation.buffer.OffsetSegmentString.prototype.isRedundant = function (a) {
  return 1 > this.ptList.length ? !1 : a.distance(this.ptList[this.ptList.length - 1]) < this.minimimVertexDistance ? !0 : !1
};
jsts.operation.buffer.OffsetSegmentString.prototype.closeRing = function () {
  if (!(1 > this.ptList.length)) {
    var a = new jsts.geom.Coordinate(this.ptList[0]);
    a.equals(this.ptList[this.ptList.length - 1]) || this.ptList.push(a)
  }
};
jsts.operation.buffer.OffsetSegmentString.prototype.reverse = function () {
};
jsts.operation.buffer.OffsetSegmentString.prototype.getCoordinates = function () {
  return this.ptList
};
(function () {
  var a = javascript.util.ArrayList, b = javascript.util.TreeSet, c = jsts.geom.CoordinateFilter;
  jsts.util.UniqueCoordinateArrayFilter = function () {
    this.treeSet = new b;
    this.list = new a
  };
  jsts.util.UniqueCoordinateArrayFilter.prototype = new c;
  jsts.util.UniqueCoordinateArrayFilter.prototype.treeSet = null;
  jsts.util.UniqueCoordinateArrayFilter.prototype.list = null;
  jsts.util.UniqueCoordinateArrayFilter.prototype.getCoordinates = function () {
    return this.list.toArray()
  };
  jsts.util.UniqueCoordinateArrayFilter.prototype.filter =
    function (a) {
      this.treeSet.contains(a) || (this.list.add(a), this.treeSet.add(a))
    }
})();
(function () {
  var a = jsts.algorithm.CGAlgorithms, b = jsts.util.UniqueCoordinateArrayFilter, c = jsts.util.Assert,
    d = javascript.util.Stack, e = javascript.util.ArrayList, f = javascript.util.Arrays, g = function (a) {
      this.origin = a
    };
  g.prototype.origin = null;
  g.prototype.compare = function (a, b) {
    return g.polarCompare(this.origin, a, b)
  };
  g.polarCompare = function (b, c, d) {
    var e = c.x - b.x, f = c.y - b.y, g = d.x - b.x, q = d.y - b.y;
    b = a.computeOrientation(b, c, d);
    if (b == a.COUNTERCLOCKWISE)return 1;
    if (b == a.CLOCKWISE)return -1;
    e = e * e + f * f;
    g = g * g + q * q;
    return e <
    g ? -1 : e > g ? 1 : 0
  };
  jsts.algorithm.ConvexHull = function () {
    if (1 === arguments.length) {
      var a = arguments[0];
      this.inputPts = jsts.algorithm.ConvexHull.extractCoordinates(a);
      this.geomFactory = a.getFactory()
    } else this.pts = arguments[0], this.geomFactory = arguments[1]
  };
  jsts.algorithm.ConvexHull.prototype.geomFactory = null;
  jsts.algorithm.ConvexHull.prototype.inputPts = null;
  jsts.algorithm.ConvexHull.extractCoordinates = function (a) {
    var c = new b;
    a.apply(c);
    return c.getCoordinates()
  };
  jsts.algorithm.ConvexHull.prototype.getConvexHull =
    function () {
      if (0 == this.inputPts.length)return this.geomFactory.createGeometryCollection(null);
      if (1 == this.inputPts.length)return this.geomFactory.createPoint(this.inputPts[0]);
      if (2 == this.inputPts.length)return this.geomFactory.createLineString(this.inputPts);
      var a = this.inputPts;
      50 < this.inputPts.length && (a = this.reduce(this.inputPts));
      a = this.preSort(a);
      a = this.grahamScan(a).toArray();
      return this.lineOrPolygon(a)
    };
  jsts.algorithm.ConvexHull.prototype.reduce = function (b) {
    var c = this.computeOctRing(b);
    if (null ==
      c)return this.inputPts;
    for (var d = new javascript.util.TreeSet, e = 0; e < c.length; e++)d.add(c[e]);
    for (e = 0; e < b.length; e++)a.isPointInRing(b[e], c) || d.add(b[e]);
    b = d.toArray();
    return 3 > b.length ? this.padArray3(b) : b
  };
  jsts.algorithm.ConvexHull.prototype.padArray3 = function (a) {
    for (var b = [], c = 0; c < b.length; c++)b[c] = c < a.length ? a[c] : a[0];
    return b
  };
  jsts.algorithm.ConvexHull.prototype.preSort = function (a) {
    for (var b, c = 1; c < a.length; c++)if (a[c].y < a[0].y || a[c].y == a[0].y && a[c].x < a[0].x) b = a[0], a[0] = a[c], a[c] = b;
    f.sort(a, 1, a.length,
      new g(a[0]));
    return a
  };
  jsts.algorithm.ConvexHull.prototype.grahamScan = function (b) {
    var c, e = new d;
    e.push(b[0]);
    e.push(b[1]);
    e.push(b[2]);
    for (var f = 3; f < b.length; f++) {
      for (c = e.pop(); !e.empty() && 0 < a.computeOrientation(e.peek(), c, b[f]);)c = e.pop();
      e.push(c);
      e.push(b[f])
    }
    e.push(b[0]);
    return e
  };
  jsts.algorithm.ConvexHull.prototype.isBetween = function (b, c, d) {
    return 0 !== a.computeOrientation(b, c, d) ? !1 : b.x != d.x && (b.x <= c.x && c.x <= d.x || d.x <= c.x && c.x <= b.x) || b.y != d.y && (b.y <= c.y && c.y <= d.y || d.y <= c.y && c.y <= b.y) ? !0 : !1
  };
  jsts.algorithm.ConvexHull.prototype.computeOctRing =
    function (a) {
      a = this.computeOctPts(a);
      var b = new jsts.geom.CoordinateList;
      b.add(a, !1);
      if (3 > b.size())return null;
      b.closeRing();
      return b.toCoordinateArray()
    };
  jsts.algorithm.ConvexHull.prototype.computeOctPts = function (a) {
    for (var b = [], c = 0; 8 > c; c++)b[c] = a[0];
    for (c = 1; c < a.length; c++)a[c].x < b[0].x && (b[0] = a[c]), a[c].x - a[c].y < b[1].x - b[1].y && (b[1] = a[c]), a[c].y > b[2].y && (b[2] = a[c]), a[c].x + a[c].y > b[3].x + b[3].y && (b[3] = a[c]), a[c].x > b[4].x && (b[4] = a[c]), a[c].x - a[c].y > b[5].x - b[5].y && (b[5] = a[c]), a[c].y < b[6].y && (b[6] = a[c]),
    a[c].x + a[c].y < b[7].x + b[7].y && (b[7] = a[c]);
    return b
  };
  jsts.algorithm.ConvexHull.prototype.lineOrPolygon = function (a) {
    a = this.cleanRing(a);
    if (3 == a.length)return this.geomFactory.createLineString([a[0], a[1]]);
    a = this.geomFactory.createLinearRing(a);
    return this.geomFactory.createPolygon(a, null)
  };
  jsts.algorithm.ConvexHull.prototype.cleanRing = function (a) {
    c.equals(a[0], a[a.length - 1]);
    for (var b = new e, d = null, f = 0; f <= a.length - 2; f++) {
      var g = a[f], n = a[f + 1];
      g.equals(n) || null != d && this.isBetween(d, g, n) || (b.add(g), d = g)
    }
    b.add(a[a.length -
    1]);
    return b.toArray([])
  }
})();
(function () {
  jsts.geomgraph.index.SegmentIntersector = function (a, b, c) {
    this.li = a;
    this.includeProper = b;
    this.recordIsolated = c
  };
  jsts.geomgraph.index.SegmentIntersector.isAdjacentSegments = function (a, b) {
    return 1 === Math.abs(a - b)
  };
  jsts.geomgraph.index.SegmentIntersector.prototype._hasIntersection = !1;
  jsts.geomgraph.index.SegmentIntersector.prototype.hasProper = !1;
  jsts.geomgraph.index.SegmentIntersector.prototype.hasProperInterior = !1;
  jsts.geomgraph.index.SegmentIntersector.prototype.properIntersectionPoint = null;
  jsts.geomgraph.index.SegmentIntersector.prototype.li = null;
  jsts.geomgraph.index.SegmentIntersector.prototype.includeProper = null;
  jsts.geomgraph.index.SegmentIntersector.prototype.recordIsolated = null;
  jsts.geomgraph.index.SegmentIntersector.prototype.isSelfIntersection = null;
  jsts.geomgraph.index.SegmentIntersector.prototype.numIntersections = 0;
  jsts.geomgraph.index.SegmentIntersector.prototype.numTests = 0;
  jsts.geomgraph.index.SegmentIntersector.prototype.bdyNodes = null;
  jsts.geomgraph.index.SegmentIntersector.prototype.setBoundaryNodes =
    function (a, b) {
      this.bdyNodes = [];
      this.bdyNodes[0] = a;
      this.bdyNodes[1] = b
    };
  jsts.geomgraph.index.SegmentIntersector.prototype.getProperIntersectionPoint = function () {
    return this.properIntersectionPoint
  };
  jsts.geomgraph.index.SegmentIntersector.prototype.hasIntersection = function () {
    return this._hasIntersection
  };
  jsts.geomgraph.index.SegmentIntersector.prototype.hasProperIntersection = function () {
    return this.hasProper
  };
  jsts.geomgraph.index.SegmentIntersector.prototype.hasProperInteriorIntersection = function () {
    return this.hasProperInterior
  };
  jsts.geomgraph.index.SegmentIntersector.prototype.isTrivialIntersection = function (a, b, c, d) {
    return a === c && 1 === this.li.getIntersectionNum() && (jsts.geomgraph.index.SegmentIntersector.isAdjacentSegments(b, d) || a.isClosed() && (a = a.getNumPoints() - 1, 0 === b && d === a || 0 === d && b === a)) ? !0 : !1
  };
  jsts.geomgraph.index.SegmentIntersector.prototype.addIntersections = function (a, b, c, d) {
    if (a !== c || b !== d) {
      this.numTests++;
      var e = a.getCoordinates()[b], f = a.getCoordinates()[b + 1], g = c.getCoordinates()[d],
        h = c.getCoordinates()[d + 1];
      this.li.computeIntersection(e,
        f, g, h);
      if (this.li.hasIntersection() && (this.recordIsolated && (a.setIsolated(!1), c.setIsolated(!1)), this.numIntersections++, !this.isTrivialIntersection(a, b, c, d))) {
        this._hasIntersection = !0;
        if (this.includeProper || !this.li.isProper()) a.addIntersections(this.li, b, 0), c.addIntersections(this.li, d, 1);
        this.li.isProper() && (this.properIntersectionPoint = this.li.getIntersection(0).clone(), this.hasProper = !0, this.isBoundaryPoint(this.li, this.bdyNodes) || (this.hasProperInterior = !0))
      }
    }
  };
  jsts.geomgraph.index.SegmentIntersector.prototype.isBoundaryPoint =
    function (a, b) {
      if (null === b)return !1;
      if (b instanceof Array) {
        if (this.isBoundaryPoint(a, b[0]) || this.isBoundaryPoint(a, b[1]))return !0
      } else for (var c = b.iterator(); c.hasNext();) {
        var d = c.next().getCoordinate();
        if (a.isIntersection(d))return !0
      }
      return !1
    }
})();
(function () {
  var a = jsts.geom.Location, b = jsts.geomgraph.Position, c = jsts.util.Assert;
  jsts.geomgraph.GeometryGraph = function (a, b, c) {
    jsts.geomgraph.PlanarGraph.call(this);
    this.lineEdgeMap = new javascript.util.HashMap;
    this.ptLocator = new jsts.algorithm.PointLocator;
    this.argIndex = a;
    this.parentGeom = b;
    this.boundaryNodeRule = c || jsts.algorithm.BoundaryNodeRule.OGC_SFS_BOUNDARY_RULE;
    null !== b && this.add(b)
  };
  jsts.geomgraph.GeometryGraph.prototype = new jsts.geomgraph.PlanarGraph;
  jsts.geomgraph.GeometryGraph.constructor =
    jsts.geomgraph.GeometryGraph;
  jsts.geomgraph.GeometryGraph.prototype.createEdgeSetIntersector = function () {
    return new jsts.geomgraph.index.SimpleEdgeSetIntersector
  };
  jsts.geomgraph.GeometryGraph.determineBoundary = function (b, c) {
    return b.isInBoundary(c) ? a.BOUNDARY : a.INTERIOR
  };
  jsts.geomgraph.GeometryGraph.prototype.parentGeom = null;
  jsts.geomgraph.GeometryGraph.prototype.lineEdgeMap = null;
  jsts.geomgraph.GeometryGraph.prototype.boundaryNodeRule = null;
  jsts.geomgraph.GeometryGraph.prototype.useBoundaryDeterminationRule =
    !0;
  jsts.geomgraph.GeometryGraph.prototype.argIndex = null;
  jsts.geomgraph.GeometryGraph.prototype.boundaryNodes = null;
  jsts.geomgraph.GeometryGraph.prototype.hasTooFewPoints = !1;
  jsts.geomgraph.GeometryGraph.prototype.invalidPoint = null;
  jsts.geomgraph.GeometryGraph.prototype.areaPtLocator = null;
  jsts.geomgraph.GeometryGraph.prototype.ptLocator = null;
  jsts.geomgraph.GeometryGraph.prototype.getGeometry = function () {
    return this.parentGeom
  };
  jsts.geomgraph.GeometryGraph.prototype.getBoundaryNodes = function () {
    null ===
    this.boundaryNodes && (this.boundaryNodes = this.nodes.getBoundaryNodes(this.argIndex));
    return this.boundaryNodes
  };
  jsts.geomgraph.GeometryGraph.prototype.getBoundaryNodeRule = function () {
    return this.boundaryNodeRule
  };
  jsts.geomgraph.GeometryGraph.prototype.findEdge = function (a) {
    return this.lineEdgeMap.get(a)
  };
  jsts.geomgraph.GeometryGraph.prototype.computeSplitEdges = function (a) {
    for (var b = this.edges.iterator(); b.hasNext();)b.next().eiList.addSplitEdges(a)
  };
  jsts.geomgraph.GeometryGraph.prototype.add = function (a) {
    if (!a.isEmpty())if (a instanceof
      jsts.geom.MultiPolygon && (this.useBoundaryDeterminationRule = !1), a instanceof jsts.geom.Polygon) this.addPolygon(a); else if (a instanceof jsts.geom.LineString) this.addLineString(a); else if (a instanceof jsts.geom.Point) this.addPoint(a); else if (a instanceof jsts.geom.MultiPoint) this.addCollection(a); else if (a instanceof jsts.geom.MultiLineString) this.addCollection(a); else if (a instanceof jsts.geom.MultiPolygon) this.addCollection(a); else if (a instanceof jsts.geom.GeometryCollection) this.addCollection(a);
    else throw new jsts.error.IllegalArgumentError("Geometry type not supported.");
  };
  jsts.geomgraph.GeometryGraph.prototype.addCollection = function (a) {
    for (var b = 0; b < a.getNumGeometries(); b++) {
      var c = a.getGeometryN(b);
      this.add(c)
    }
  };
  jsts.geomgraph.GeometryGraph.prototype.addEdge = function (b) {
    this.insertEdge(b);
    b = b.getCoordinates();
    this.insertPoint(this.argIndex, b[0], a.BOUNDARY);
    this.insertPoint(this.argIndex, b[b.length - 1], a.BOUNDARY)
  };
  jsts.geomgraph.GeometryGraph.prototype.addPoint = function (b) {
    b = b.getCoordinate();
    this.insertPoint(this.argIndex, b, a.INTERIOR)
  };
  jsts.geomgraph.GeometryGraph.prototype.addLineString = function (b) {
    var e = jsts.geom.CoordinateArrays.removeRepeatedPoints(b.getCoordinates());
    if (2 > e.length) this.hasTooFewPoints = !0, this.invalidPoint = coords[0]; else {
      var f = new jsts.geomgraph.Edge(e, new jsts.geomgraph.Label(this.argIndex, a.INTERIOR));
      this.lineEdgeMap.put(b, f);
      this.insertEdge(f);
      c.isTrue(2 <= e.length, "found LineString with single point");
      this.insertBoundaryPoint(this.argIndex, e[0]);
      this.insertBoundaryPoint(this.argIndex,
        e[e.length - 1])
    }
  };
  jsts.geomgraph.GeometryGraph.prototype.addPolygonRing = function (b, c, f) {
    if (!b.isEmpty()) {
      var g = jsts.geom.CoordinateArrays.removeRepeatedPoints(b.getCoordinates());
      if (4 > g.length) this.hasTooFewPoints = !0, this.invalidPoint = g[0]; else {
        var h = c, l = f;
        jsts.algorithm.CGAlgorithms.isCCW(g) && (h = f, l = c);
        c = new jsts.geomgraph.Edge(g, new jsts.geomgraph.Label(this.argIndex, a.BOUNDARY, h, l));
        this.lineEdgeMap.put(b, c);
        this.insertEdge(c);
        this.insertPoint(this.argIndex, g[0], a.BOUNDARY)
      }
    }
  };
  jsts.geomgraph.GeometryGraph.prototype.addPolygon =
    function (b) {
      this.addPolygonRing(b.getExteriorRing(), a.EXTERIOR, a.INTERIOR);
      for (var c = 0; c < b.getNumInteriorRing(); c++) {
        var f = b.getInteriorRingN(c);
        this.addPolygonRing(f, a.INTERIOR, a.EXTERIOR)
      }
    };
  jsts.geomgraph.GeometryGraph.prototype.computeEdgeIntersections = function (a, b, c) {
    b = new jsts.geomgraph.index.SegmentIntersector(b, c, !0);
    b.setBoundaryNodes(this.getBoundaryNodes(), a.getBoundaryNodes());
    this.createEdgeSetIntersector().computeIntersections(this.edges, a.edges, b);
    return b
  };
  jsts.geomgraph.GeometryGraph.prototype.computeSelfNodes =
    function (a, b) {
      var c = new jsts.geomgraph.index.SegmentIntersector(a, !0, !1), g = this.createEdgeSetIntersector();
      !b && (this.parentGeom instanceof jsts.geom.LinearRing || this.parentGeom instanceof jsts.geom.Polygon || this.parentGeom instanceof jsts.geom.MultiPolygon) ? g.computeIntersections(this.edges, c, !1) : g.computeIntersections(this.edges, c, !0);
      this.addSelfIntersectionNodes(this.argIndex);
      return c
    };
  jsts.geomgraph.GeometryGraph.prototype.insertPoint = function (a, b, c) {
    b = this.nodes.addNode(b);
    var g = b.getLabel();
    null == g ? b.label = new jsts.geomgraph.Label(a, c) : g.setLocation(a, c)
  };
  jsts.geomgraph.GeometryGraph.prototype.insertBoundaryPoint = function (c, e) {
    var f = this.nodes.addNode(e).getLabel(), g = 1, h = a.NONE;
    null !== f && (h = f.getLocation(c, b.ON));
    h === a.BOUNDARY && g++;
    g = jsts.geomgraph.GeometryGraph.determineBoundary(this.boundaryNodeRule, g);
    f.setLocation(c, g)
  };
  jsts.geomgraph.GeometryGraph.prototype.addSelfIntersectionNodes = function (a) {
    for (var b = this.edges.iterator(); b.hasNext();)for (var c = b.next(), g = c.getLabel().getLocation(a),
                                                            c = c.eiList.iterator(); c.hasNext();) {
      var h = c.next();
      this.addSelfIntersectionNode(a, h.coord, g)
    }
  };
  jsts.geomgraph.GeometryGraph.prototype.addSelfIntersectionNode = function (b, c, f) {
    this.isBoundaryNode(b, c) || (f === a.BOUNDARY && this.useBoundaryDeterminationRule ? this.insertBoundaryPoint(b, c) : this.insertPoint(b, c, f))
  };
  jsts.geomgraph.GeometryGraph.prototype.getInvalidPoint = function () {
    return this.invalidPoint
  }
})();
var platform = {version: "1.0.5-SNAPSHOT", buildDate: "2017-07-24 14:54:52"};
Dialog = {
  defaultPosition: "center",
  dialogsPosition: {},
  dialogsResizedPosition: {},
  dialogTitleHeight: 45,
  resizableDialogs: "popupViewAttachmentImage popupViewAttachmentPdf popupAddFeatureOnDraw popupInfoEditFeature popupInfo popupSearch popupNewSearchFromExisting popupSearchReserve popupSearchFoncier popupCreateNewLayer mapAndToolbarContainer thematicGroupsContainer editLayerMetadataPopup popupGeosign popupAddComments popupAddAttachments editLayerMetadataEditValuesPopup popupSearchComments popupSearchAttachments popupCG34ArbresAddComment popupCG34ArbresOperationMode statisticsReport popupRoadSchematic popupEditLayerAttributes".split(" "),
  dialogPositionArray: [],
  dialogIsClosed: function (a) {
    "undefined" !== typeof ImajnetUI && ImajnetUI && a == ImajnetUI.clipboardContainerId && ImajnetUI.removeActiveState(ImajnetUI.btnEnableClipboardDiv);
    var b = "doWhen" + a + "Closed";
    try {
      if ("function" == typeof window.Dialog[b]) window.Dialog[b]()
    } catch (e) {
    }
    if (Dialog.dialogExist(a))try {
      jQuery("#" + a).dialog("destroy")
    } catch (e) {
    }
  },
  resizeDialogContent: function (a) {
    var b = window.innerHeight, e = jQuery("#" + a), c = e.parent().width(), d = e.parent().height();
    Dialog.dialogsResizedPosition[a] =
      Object({width: c, height: d});
    switch (a) {
      case "popupAddAttachments":
        jQuery("#attachmentsContainer").width(c - 20).height(d - 190);
        jQuery(".attachmentTitle").width(c - 150);
        jQuery(".attachmentDescription").width(c - 150);
        break;
      case "popupAddComments":
        jQuery("#commentsContainer").width(c - 20).height(d - 190);
        jQuery(".commentTitle").width(c - 150);
        jQuery(".commentContent").width(c - 150);
        break;
      case "popupViewAttachmentPdf":
        d = e.height();
        jQuery("#popupViewAttachmentPdfContent").css("width", c - 2);
        jQuery("#popupViewAttachmentPdfContent").css("height",
          d - 70);
        jQuery("#pdfView").css("width", c - 2);
        jQuery("#pdfView").css("height", d - 95);
        break;
      case "popupViewAttachmentImage":
        d = e.height();
        jQuery("#popupViewAttachmentImageContent").width(c - 20);
        jQuery("#popupViewAttachmentImageContent").height(d - 50);
        jQuery("#attachmentImage").css("max-width", c - 20);
        jQuery("#attachmentImage").css("max-height", d - 65);
        break;
      case "popupSearch":
      case "popupNewSearchFromExisting":
        jQuery("#" + a + "_ResponseContainer").width(c - 20);
        d = e.height();
        "searchAttributes" == Search.searchType ? (d -=
          jQuery("#" + a + "_LRSConstraintMainContainer").height() + jQuery("#" + a + "_GeographicConstraintMainContainer").height() + jQuery("#" + a + "_LimitByConditionContainer").height() + 185, jQuery("#" + a + "_ResponseContainer").height(d + 20).css("overflow", "hidden"), FeaturesListing.resizeFeaturesListingContainer(a)) : "searchAttachments" == Search.searchType && (d -= 100, jQuery("#attachmentsListingContainer").height(d - 70), jQuery("#" + a + "_ResponseContainer").height(d + 20).css("overflow", "hidden"));
        a = jQuery('table[id\x3d"' + a + "_FeaturesByLayerGrid_" +
          CommonCore.getLayerNameWithoutWorkspace("popupSearch" == a ? Search.getSearchLayerName("popupNewSearchFromExisting") : jQuery("#popupNewSearchFromExisting_SearchableLayers").val()) + '"]');
        FeaturesListing.setGridWidth(a, c - 45);
        FeaturesListing.setGridHeight(a, d - 180);
        break;
      case "popupSearchReserve":
        b = jQuery("#" + a + "_LRSConstraintContainer");
        d = d - (b.is(":visible") ? b.height() : 0) - jQuery("#" + a + "_LimitByConditionContainer").height() - 210;
        jQuery("#" + a + "_ResponseContainer").height(d).css("overflow", "hidden");
        FeaturesListing.resizeFeaturesListingContainer(a);
        a = jQuery('table[id\x3d"' + a + "_FeaturesByLayerGrid_" + CommonCore.getLayerNameWithoutWorkspace(Reserve.reserveLayerName) + '"]');
        FeaturesListing.setGridWidth(a, c - 45);
        FeaturesListing.setGridHeight(a, d - 220);
        break;
      case "popupSearchFoncier":
        d = d - jQuery("#" + a + "_LimitByConditionContainer").height() - 170;
        jQuery("#searchFoncierResponseContainer").width(c - 22).height(d);
        Foncier.searchFoncierGridContainer && (FeaturesListing.setGridWidth(Foncier.searchFoncierGridContainer.jqGrid(), c - 45), FeaturesListing.setGridHeight(Foncier.searchFoncierGridContainer.jqGrid(),
          d - 90));
        break;
      case "popupCG34ArbresAddComment":
        jQuery("#popupCG34ArbresAddCommentContainer").width(c - 180).height(d - 140);
        break;
      case "popupCG34ArbresOperationMode":
        jQuery("#popupCG34ArbresOperationModeContent").width(c - 20).height(d - 140);
        break;
      case "popupSearchComments":
        jQuery("#popupSearchCommentsResponseContainer").width(c - 22).height(d - jQuery("#" + a + "_LimitByConditionContainer").height() - 180);
        jQuery(".searchCommentResultItemMiddle").width(c - 330);
        jQuery(".searchCommentResultLayerName").width(c - 590);
        break;
      case "popupSearchAttachments":
        jQuery("#popupSearchAttachmentsResponseContainer").width(c - 22).height(d - jQuery("#" + a + "_LimitByConditionContainer").height() - 180 - (jQuery("#downloadAllAttachments").is(":visible") ? 30 : 0));
        jQuery(".searchAttachmentResultTitle").width(c - 330);
        jQuery(".searchAttachmentResultDescription").width(c - 330);
        break;
      case "popupInfoEditFeature":
        jQuery("#popupInfoEditFeatureContentAttributes").width(c - 272);
        jQuery("#popupInfoEditFeatureContentAttributes").height(d - 230);
        jQuery("#popupInfoEditFeatureListContentTabs").height(d -
          235);
        jQuery("#popupInfoEditFeature").css("min-width", c + 4);
        jQuery("#infoFeatureLinksTab").height(d - 221);
        c = CommonCore.getFeatureAndLayerForEdit();
        PlatformGraphic.drawFeatureLinks(c.layerName, c.featureId);
        break;
      case "popupInfo":
        d = e.height();
        e.height(d);
        jQuery("#" + a + "Content").width(c - 40).height(d - 10);
        FeaturesListing.resizeFeaturesListingContainer(a);
        a = jQuery(".ui-jqgrid-btable");
        for (d = 0; d < a.length; d++)FeaturesListing.setGridWidth(jQuery(a[d]), c - 45);
        break;
      case "popupAddFeatureOnDraw":
        jQuery("#" + a + "Content").css("width",
          c - 10);
        jQuery("#" + a + "Content").css("height", d - 130);
        break;
      case "popupImajnet":
        ImajnetUI.onImageResize();
        break;
      case "popupAttachFiles":
        buttonCliked = "";
        break;
      case "popupCreateNewLayer":
        d = e.height();
        jQuery("#newLayerAttributesContainer").height(d - 385);
        jQuery("#newLayerAttributesItemsContainer").height(d - 425);
        MainMethods.resizeNewLayerElements(c);
        break;
      case "popupEditLayerAttributes":
        d = e.height();
        jQuery("#newLayerAttributesContainer").height(d - 90);
        jQuery("#newLayerAttributesItemsContainer").height(d - 130);
        MainMethods.resizeNewLayerElements(c);
        break;
      case "editLayerMetadataPopup":
        d = e.height();
        d > b && (d = b - 100);
        jQuery("#editLayerMetadataAttributesContent").width(c - 10).height(d - 190);
        jQuery(".editLayerMetadataItemInput").width(c - 510);
        break;
      case "editLayerMetadataEditValuesPopup":
        d = e.height();
        jQuery("#attributeValuesContainerHTML").width(c - 40).height(d - 190);
        jQuery(".editLayerMetadataEditValuesPopupContentItem").width(c - 180);
        break;
      case "thematicGroupsContainer":
        MainCore.thematicGroupsContainer.height(d - 45);
        MainCore.thematicGroupsParentContainer.height(d - 45);
        MapMethodsCore.recalculateThematicGroupsDimension();
        break;
      case "popupGeosign":
        jQuery("#popupGeosignContentListing").height(d - 125);
        break;
      case "mapAndToolbarContainer":
        MapMethodsCore.setMapAndLRSSchematicDimension(c, e.height());
        break;
      case "popupRoadSchematic":
        jQuery("#" + a + "Content").height(d - 121), jQuery("#" + a + "Content").width(c), RoadSchematic.onResize(c)
    }
  },
  positionAndResizeMapPopup: function (a, b, e) {
    b++;
    Dialog.dialogExist("map") && (jQuery("#map").dialog("option",
      "height", b), a && jQuery("#map").dialog("option", "width", a - dialogMargins), Dialog.setDialogPosition(jQuery("#map"), [e.left, e.top]));
    a && CommonCore.mapContainer.width(a - dialogMargins);
    CommonCore.mapContainer.height(b - Dialog.dialogTitleHeight - dialogMargins);
    map && map.updateSize();
    CommonCore.addPanZoomBarEvents()
  },
  positionAndResizeImajnetPopup: function (a, b) {
    a++;
    isImajnetMode() && (Dialog.dialogTitleHeight = 0);
    var e = a - Dialog.dialogTitleHeight - dialogMargins, c = Math.round(e * ImajnetUI.getImageAspectRatio());
    Dialog.dialogExist(ImajnetUI.imageContainerId) &&
    (jQuery("#" + ImajnetUI.imageContainerId).dialog("option", "width", c), jQuery("#" + ImajnetUI.imageContainerId).dialog("option", "height", a), Dialog.setDialogPosition(jQuery("#" + ImajnetUI.imageContainerId), [Math.ceil(b.left), Math.ceil(b.top)]), ImajnetUI.imageContainer.width(c).height(e), ImajnetUI.resizeImageElements(c, e, !0));
    return c
  },
  positionAndResizeImajnetImageAndMap: function () {
    var a = container.position();
    a.top += getContainerMarginTop();
    var b = Dialog.positionAndResizeImajnetPopup(container.height() * imajnetImageContainerDimensionPercentage.height,
      a);
    Dialog.positionAndResizeMapPopup(container.width() - b - dialogMargins, container.height() * mapContainerDimensionPercentage.height, {
      left: Math.ceil(a.left + b + dialogMargins),
      top: Math.ceil(a.top)
    })
  },
  moveDialogToPosition: function (a) {
    try {
      var b = jQuery("#" + a);
      if (jQuery.isEmptyObject(Dialog.dialogPositionArray[a]))if ("undefined" !== typeof ImajnetUI && ImajnetUI && a == ImajnetUI.clipboardContainerId) Dialog.setDialogPosition(b, "right"); else if ("popupNewSearchFromExisting" == a) {
        var e = jQuery("#popupSearch").dialog("option",
          "position");
        Dialog.setDialogPosition(b, [e[0] + 200, e[1]])
      } else Dialog.setDialogPosition(b, Dialog.defaultPosition); else"popupStyleEditorNewImage" != a && (Dialog.setDialogPosition(b, [Dialog.dialogPositionArray[a].x, 28 > Dialog.dialogPositionArray[a].y && isImajnetMode() ? 28 : Dialog.dialogPositionArray[a].y]), 28 > Dialog.dialogPositionArray[a].y && b.parent().css("top", 28))
    } catch (c) {
    }
  },
  resizeStyleDialog: function () {
    var a = jQuery(window).height(), b = jQuery("#popupStyleEditor");
    if (b.height() > a - 40)try {
      if (b.dialog("option",
          "height", a - 10), b.css("overflow", "auto"), isImajnetMode()) Dialog.defaultPosition = ["center", 30]; else {
        Dialog.defaultPosition = "top";
        var e = b.dialog("option", "position");
        Dialog.setDialogPosition(b, [e[0], Dialog.defaultPosition])
      }
    } catch (c) {
    } else Nigsys.browserIsIE7() && b.addClass("customDialog")
  },
  getDialogButtons: function (a) {
    var b = (CommonCore.isMobile ? "../" : applicationUrl) + "resources/img/";
    return '\x3cdiv class\x3d"dialogButtons"\x3e\x3cdiv class\x3d"collapseDialogButtonContainer dialogButtonsItem"\x3e\x3cimg src\x3d"' +
      b + 'buttons/BTN-FM-3.PNG" /\x3e\x3c/div\x3e\x3cdiv class\x3d"dialogButtonsItem expandDialogButtonContainer"\x3e\x3cimg src\x3d"' + b + 'buttons/BTN-FM-2.PNG" /\x3e\x3c/div\x3e' + (a ? '\x3cdiv class\x3d"dialogButtonsItem fillHeightDialogButtonContainer"\x3e\x3cimg src\x3d"' + b + 'buttons/BTN-FM-1.PNG" /\x3e\x3c/div\x3e\x3cdiv class\x3d"dialogButtonsItem fillScreenDialogButtonContainer"\x3e\x3cimg src\x3d"' + b + 'buttons/BTN-FM-5.PNG" /\x3e\x3c/div\x3e' : "") + "\x3c/div\x3e"
  },
  bindDialogButtonsEvents: function (a) {
    Nigsys.bindClickEvent(a.find(".collapseDialogButtonContainer"),
      Dialog.collapseDialog);
    Nigsys.bindClickEvent(a.find(".expandDialogButtonContainer"), Dialog.expandDialog);
    Nigsys.bindClickEvent(a.find(".fillHeightDialogButtonContainer"), Dialog.fillHeightDialog);
    Nigsys.bindClickEvent(a.find(".fillScreenDialogButtonContainer"), Dialog.fillScreen)
  },
  dialogIsCollapsed: function (a) {
    return jQuery(a).is(":hidden")
  },
  dialogIsResizable: function (a) {
    for (var b = 0; b < Dialog.resizableDialogs.length; b++)if (Dialog.resizableDialogs[b] == a)return !0;
    return !1
  },
  setDialogPosition: function (a,
                               b) {
    a.dialog("option", "position", b);
    "left" == b ? a.parent().css({left: 0}) : "top" == b ? a.parent().css({top: 0}) : !b[0] && 0 != b[0] || !b[1] && 0 != b[1] || a.parent().css({
        top: "top" == b[1] ? 0 : b[1],
        left: "left" == b[0] ? 0 : b[0]
      })
  },
  doWhenDialogExpanded: function (a) {
    Dialog.dialogIsResizable(a.attr("id")) && (a.parent().addClass("dialogResizable"), a.parent().find(".ui-resizable-se").show())
  },
  collapseDialog: function (a) {
    a = jQuery(a.currentTarget.parentNode.parentNode.parentNode.children[1]);
    var b = a.attr("id");
    Dialog.dialogsResizedPosition[b] &&
    Dialog.dialogIsCollapsed(a) ? (Dialog.doWhenDialogExpanded(a), a.parent().addClass("dimensionDialog"), a.dialog("option", "width", Dialog.dialogsResizedPosition[b].width), a.dialog("option", "height", Dialog.dialogsResizedPosition[b].height), Dialog.resizeDialogContent(b)) : (a.parent().removeClass("dimensionDialog").removeClass("dialogResizable").height(0), a.parent().find(".ui-resizable-se").hide(), a.height(0).hide())
  },
  expandDialog: function (a) {
    var b = jQuery(a.currentTarget.parentNode.parentNode.parentNode.children[1]);
    b.parent().addClass("dimensionDialog");
    var e = b.attr("id");
    Dialog.dialogsPosition[e] ? (Dialog.doWhenDialogExpanded(b), b.dialog("option", "width", Dialog.dialogsPosition[e].width), b.dialog("option", "height", Dialog.dialogsPosition[e].height), Dialog.resizeDialogContent(e)) : Dialog.fillHeightDialog(a)
  },
  fillHeightDialog: function (a) {
    a = jQuery(a.currentTarget.parentNode.parentNode.parentNode.children[1]);
    Dialog.doWhenDialogExpanded(a);
    a.parent().addClass("dimensionDialog");
    Dialog.setDialogPosition(a, [a.dialog("option",
      "position")[0], "top"]);
    a.dialog("option", "height", Nigsys.getWindowSize().height);
    Dialog.resizeDialogContent(a.attr("id"));
    jQuery(".expandTable").trigger("click")
  },
  fillScreen: function (a) {
    a = jQuery(a.currentTarget.parentNode.parentNode.parentNode.children[1]);
    a.attr("id");
    Dialog.doWhenDialogExpanded(a);
    a.parent().addClass("dimensionDialog fullScreen");
    Dialog.setDialogPosition(a, [0, 0]);
    var b = Nigsys.getWindowSize();
    a.dialog("option", {width: b.width, height: b.height});
    Dialog.resizeDialogContent(a.attr("id"));
    jQuery(".expandTable").trigger("click")
  },
  dialogResize: function (a) {
    Dialog.resizeDialogContent(a.target.id)
  },
  dialogResizeStop: function (a) {
    a = jQuery("#" + a.target.id);
    a.width(a.parent().width() - parseInt(a.css("padding-left").replace("px", "")) - parseInt(a.css("padding-right").replace("px", "")))
  },
  setDialogZIndex: function (a) {
    jQuery("#" + a).parent().css("z-index", $.ui.dialog.maxZ)
  },
  showDialog: function (a, b, e, c, d, k) {
    Nigsys.hideDialogError(a);
    "undefined" !== typeof ImajnetUI && a == ImajnetUI.imageContainerId && (b || (b =
      ImajnetUI.imajnetImageContainerSize.width), e || (e = ImajnetUI.imajnetImageContainerSize.height));
    if ("undefined" === typeof ImajnetUI || a != ImajnetUI.imageContainerId || "undefined" === typeof MapMethodsCore || !MapMethodsCore.layoutData || MapMethodsCore.layoutData.haveDialogs) {
      var m = Dialog.dialogIsResizable(a);
      if (Dialog.dialogIsOpen(a)) jQuery("#" + a).dialog("moveToTop"), CommonCore.isMobile && Dialog.setDialogZIndex(a); else {
        "popupAddFeatureOnDraw" != a && "popupInfoEditFeature" != a || "LRSSchematic" != MapCore.editModeType ||
        Nigsys.showLoading(container);
        k || (k = "", jQuery.app[a] ? k = jQuery.app[a].title : jQuery.app.map[a] ? k = jQuery.app.map[a].title : jQuery.imajnet[a] && (k = jQuery.imajnet[a].title));
        if (b) {
          var h = b;
          c && c > b && (h = c);
          k.length > h / 9 && (k = k.substring(0, h / 9) + "...")
        } else b = "auto";
        e || (e = "auto");
        var f = jQuery("#" + a), h = f.length ? parseInt(f.css("min-width").replace("px", "")) : 0;
        isImajnetMode() ? "map" == a ? h = "auto" : a !== ImajnetUI.imageContainerId && (h = 330) : "undefined" === typeof ImajnetUI || a != ImajnetUI.imageContainerId && "thematicGroupsContainer" !=
        a ? "popupCreateNewLayer" == a && (h = 560) : h = "auto";
        var l = 150;
        "popupInfo" == a ? l = 370 : "popupSearch" == a ? l = 470 : "popupAddAttachments" == a ? l = 390 : "popupAddFeatureOnDraw" == a ? l = 400 : "popupCreateNewLayer" == a ? l = 615 : "popupInfoEditFeature" == a ? h = 685 : "editLayerMetadataPopup" == a ? l = 550 : "editLayerMetadataEditValuesPopup" == a ? (h = 500, l = 320) : "popupSearchComments" == a ? h = 530 : "popupSearchAttachments" == a ? h = 530 : "popupCG34ArbresOperationMode" == a ? h = 555 : "popupRoadSchematic" == a && (h = RoadSchematic.dialogWidth);
        Dialog.dialogsPosition[a] = Object({
          width: b &&
          "auto" !== b ? b : f.width(), height: e
        });
        Dialog.dialogsResizedPosition[a] = Dialog.dialogsPosition[a];
        b = {
          title: k,
          resizable: m,
          width: b,
          height: e,
          minHeight: l,
          minWidth: h ? h : 350,
          position: Dialog.defaultPosition,
          open: function (a, b) {
            var g = a.target.id;
            if (isImajnetMode())if (g == ImajnetUI.imageContainerId || "map" == g) {
              var f = $(this);
              f.closest(".ui-dialog").find(".ui-dialog-titlebar:first").hide();
              f.addClass("imajnetDialogNoCorner");
              f.parent().addClass("imajnetDialogNoCorner")
            } else"popupSequenceDetails" == g ? jQuery("#" + g).parent().css("z-index",
              999999) : g == ImajnetUI.newsContainerId && $(this).parent().attr("id", "imajnetNewsDialog"); else"popupImajnet" == g ? jQuery("#" + g).parent().children(".ui-dialog-titlebar").addClass("imajnetPopupTitleBar") : "mapAndToolbarContainer" == g ? $(this).closest(".ui-dialog").find(".ui-dialog-titlebar-close").hide() : "popupViewAttachmentImage" == g ? (jQuery("#attachmentImage").css("max-width", c - 1), jQuery("#attachmentImage").css("max-height", d - 110), jQuery("#" + g + "Content").css("max-width", c - 1), jQuery("#" + g + "Content").css("max-height",
              d - 100)) : "popupViewAttachmentPdf" == g ? (jQuery("#pdfView").css("max-width", c - 1), jQuery("#pdfView").css("max-height", d - 110), jQuery("#" + g + "Content").css("max-width", c - 1), jQuery("#" + g + "Content").css("max-height", d - 100)) : "popupAddFeatureOnDraw" == g ? (jQuery("#" + g + "Content").css("min-width", 510), jQuery("#" + g + "Content").css("min-height", 150)) : "popupInfoEditFeature" == g ? ($(this).parent().attr("id", "popupInfoEditFeatureDialog"), Nigsys.browserIsIE7() || jQuery("#submitAddAttachmentOrComment").css("margin-left", 35)) :
              "popupExportFeatures" == g ? Export.fillExportTypes() : "popupSearch" == g ? Attachments.previousSearchAttachmentsActionResponse = "" : "popupStyleEditor" == g ? jQuery("#styleEditorTabsContainer").removeClass("ui-widget-content") : "popupOfflineMode" == g ? $(this).parent().attr("id", "popupOfflineModeDialog") : "mapAndToolbarContainer" == g ? $(this).parent().attr("id", "mapAndToolbarContainerDialog") : "popupAddAttachments" == g ? $(this).parent().attr("id", "popupAddAttachmentsDialog") : "popupReservePicture" == g && $(this).parent().attr("id",
                  "popupReservePictureDialog");
            Dialog.moveDialogToPosition(g);
            var f = jQuery("#" + g), h = f.parent(), k = h.children(".ui-dialog-titlebar");
            if (!isImajnetMode() && "map" != g) {
              try {
                g == ImajnetUI.imageContainerId ? ApplicationStorage.readObject("layout") || f.dialog("option", "height", e + dialogMargins / 2 + Dialog.dialogTitleHeight) : f.dialog("option", "height", e)
              } catch (l) {
              }
              "popupImajnet" != g && (h.addClass("dimensionDialog"), m && "popupViewAttachmentImage" !== g && h.addClass("dialogResizable"), h.children(".ui-resizable-ne").hide(), h.children(".ui-resizable-n").css("width",
                "98%"), h.children(".ui-resizable-e").css("height", "98%").css("margin-top", "2%"), k.append(Dialog.getDialogButtons(m)), Dialog.bindDialogButtonsEvents(h))
            }
            isImajnetMode() && "popupImajnet" == g && h.prop("id", "popupImajnetDialog");
            k.addClass("dialogTitleContainer_" + g)
          },
          beforeClose: function (a) {
            return CommonCore.beforeCloseDialog(a.target.id)
          },
          resize: function (a, b) {
            Dialog.dialogResize(a)
          },
          resizeStop: function (a, b) {
            Dialog.dialogResizeStop(a)
          },
          dragStop: function (a, b) {
            jQuery(".ui-autocomplete").hide();
            "undefined" !==
            typeof ImajnetUI && ImajnetUI && a.target.id == ImajnetUI.imageContainerId && (ImajnetZoom.setDraggableContainment(), ImajnetUI.setSliderDraggableContainment());
            if (isImajnetMode() || CommonCore.isMobile) {
              var c = CommonCore.isMobile ? 0 : 28;
              b.position.top < c && Dialog.setDialogPosition(jQuery("#" + a.target.id), [b.position.left, c])
            }
            "mapAndToolbarContainer" == a.target.id && map.updateSize()
          }
        };
        CommonCore.isMobile && (b.appendTo = "#container");
        isImajnetMode() && "popupSequenceDetails" == a && (b.position = "top", b.focus = function (a, b) {
          f.parent().css("z-index",
            999999)
        });
        "popupImajnet" != a || isImajnetMode() ? f.data("dialog", "true").dialog(b) : f.data("dialog", "true").dialog(b).resizable({
          alsoResize: jQuery(".imajnetPopupTitleBar").parent(),
          aspectRatio: ImajnetUI.imageAspectRatio,
          resize: Dialog.dialogResize
        });
        isImajnetMode() ? a == ImajnetUI.imageContainerId ? (f.dialog("option", "closeOnEscape", !1), f.dialog("option", "resizable", !1), f.dialog("option", "draggable", !1), f.dialog("option", "stack", !1), jQuery("#imajnetImageTitle").hide(), Nigsys.hideImajnetLoading(), CommonCore.showMap(),
          ImajnetPlugin.showImajnetItem("map"), CheckDockingCookie("header"), CommonCore.applyContainerDimension(), Nigsys.onMobile() && f.parent().addClass("uiDialogOnMobile")) : "map" == a ? (f.dialog("option", "closeOnEscape", !1), f.dialog("option", "resizable", !1), f.dialog("option", "draggable", !1), f.dialog("option", "stack", !1), ImajnetWeb.initTimeframeContainer(), Nigsys.onMobile() && f.parent().addClass("uiDialogOnMobile")) : Dialog.moveDialogToPosition(a) : ("undefined" !== typeof ImajnetUI && a == ImajnetUI.imageContainerId ? CommonCore.applyContainerDimension(CommonCore.mapContainer.height()) :
          "mapAndToolbarContainer" == a && (f.dialog("option", "stack", !1), f.parent().addClass("mapDialog")), "thematicGroupsContainer" == a ? f.parent().addClass("thematicGroupsContainer") : f.dialog("option", "stack", !0), "undefined" !== typeof MapCore && "LRSSchematic" == MapCore.editModeType ? "popupAddFeatureOnDraw" == a || "popupInfoEditFeature" == a ? f.parent().addClass("dialogModalWithLoading") : "popupAddAttachments" != a && -1 === a.indexOf("popupViewAttachment") && "popupGenerateLink" != a && "popupGenerateAttachmentLink" != a && "popupSearchFoncier" !=
          a && "popupFoncierSynthese" != a || f.parent().addClass("dialogModalWithLoadingOver") : (f.parent().removeClass("dialogModalWithLoading"), f.parent().removeClass("dialogModalWithLoadingOver")), "wpsSearch" != a && "statisticsReport" != a || f.parent().addClass("dialogModalWithLoadingOver"), Dialog.moveDialogToPosition(a), Dialog.resizeDialogContent(a));
        c && f.dialog("option", "maxWidth", c);
        d && f.dialog("option", "maxHeight", d);
        b = jQuery(".ui-dialog-titlebar");
        b.css("z-index", "2");
        Nigsys.browserIsIE7() || b.css("height", "12px").css("line-height",
          "12px");
        "popupStyleEditor" != a && "thematicGroupsContainer" != a && f.addClass("customDialog");
        CommonCore.isMobile && (f.show(), Dialog.setDialogZIndex(a))
      }
    }
  },
  hideDialog: function (a, b, e) {
    var c = jQuery.Deferred();
    if (!Dialog.dialogIsOpen(a))return c.resolve(), c.promise();
    "popupImajnet" == a && ImageControler.currentGraphic && ImageControler.currentGraphic.clearLRSGUIImageOrientation(ImajnetUI.LRSGUI);
    var d = jQuery("#" + a);
    if (!e && Dialog.dialogExist(a))try {
      var k = d.dialog("widget").position();
      !k || 0 == k.left && 0 == k.top || (Dialog.dialogPositionArray[a] =
        {}, Dialog.dialogPositionArray[a].x = k.left, Dialog.dialogPositionArray[a].y = k.top)
    } catch (m) {
    }
    if (b) Dialog.dialogIsClosed(a); else if (Dialog.dialogExist(a))try {
      d.dialog("destroy")
    } catch (m) {
    }
    "popupAddFeatureOnDraw" == a && (CG34Arbres.onClose(!0), CG34SH.onClose(), PolygonFromPoint.onClose());
    "popup" == a ? (jQuery("#popup").remove(), StyleEditor.checkIfUnsavedFeatures(b, !0).done(function () {
      ThematicGroupsTree.closePopup(!0).done(function () {
        c.resolve()
      }).fail(function () {
        c.resolve()
      })
    }).fail(function () {
      ThematicGroupsTree.closePopup(!0).done(function () {
        c.resolve()
      }).fail(function () {
        c.resolve()
      })
    }),
      MainCore.currentLayer = "", LayerTimeline.timelineSlider = null) : c.resolve();
    "popupReservePicture" == a && $(".ui-dialog").show();
    CommonCore.isMobile && d.hide();
    return c.promise()
  },
  closeAllDialogs: function () {
    for (var a = jQuery.Deferred(), b = [], e = jQuery(".popupTemplate"), c = 0; c < e.length; c++)"popupAddFeatureOnDraw" != e[c].id && "popupInfoEditFeature" != e[c].id && "popupStyleEditor" != e[c].id && "popupSaveWFST" != e[c].id && b.push(Dialog.hideDialog(e[c].id, !0));
    "undefined" !== typeof Feature && b.push(Feature.closePopupInfoEditFeature(!0));
    jQuery.when.apply($, b).done(function () {
      a.resolve()
    }).fail(function (b) {
      a.reject()
    });
    return a.promise()
  },
  dialogExist: function (a) {
    return jQuery("#" + a).is(":data(dialog)")
  },
  dialogIsOpen: function (a) {
    try {
      return Dialog.dialogExist(a) && jQuery("#" + a).dialog("isOpen")
    } catch (b) {
      return !1
    }
  },
  doWhenpopupAddFeatureOnDrawClosed: function () {
    MapMethodsCore.popupAddFeatureOnDrawRemove()
  },
  doWhenpopupExportFeaturesClosed: function () {
    Export.closePopupExportFeatures()
  },
  doWhenpopupPrintClosed: function () {
    Print.disablePrint()
  },
  doWhenpopupClosed: function () {
    Nigsys.browserIsIE7() || Nigsys.browserIsIE8() || "map" == CommonCore.page && jQuery.each(map.layers, function (a, b) {
      if ("undefined" != typeof map.layers[a].params && map.layers[a].params.LAYERS == MainCore.currentLayer)return map.layers[a].setOpacity((100 - Main.initialLayerOpacity) / 100), !1
    });
    MainCore.currentLayer = "";
    LayerTimeline.timelineSlider = null;
    MainCore.editLayerMetadataAttributes = null;
    MainCore.editLayerMetadataParent = null
  },
  doWhenpopupAddAttachmentsClosed: function () {
    CommonCore.buttonClicked =
      "";
    cancelAddAttachments = !0;
    MainCore.addAttachmentIncrementor = 0;
    Nigsys.hideLoading(jQuery("#popupAddAttachments"))
  },
  doWhenpopupInfoClosed: function () {
    FeaturesListing.gridNameChanged = [];
    FeaturesListing.gridFeaturesChangedAttributesIds = [];
    MapMethodsCore.featuresDrawBox.features && MapMethodsCore.featuresDrawBox.features.removeAllFeatures();
    Feature.infoFeaturesTableGeometryChanged = !1;
    CommonCore.removeZoomedWfsFromMap();
    FeaturesListing.removeSelectedFeaturesOnMap()
  },
  doWhenpopupInfoEditFeatureClosed: function () {
    CG34Arbres.onClose(!1);
    CG34SH.onClose();
    PolygonFromPoint.onClose();
    map && (CommonCore.removeZoomedWfsFromMap(), draw && "drawFeature" == CommonCore.buttonClicked && draw.activate());
    CommonCore.buttonClicked = "";
    Feature.removeGetFeatureControl();
    "LRSSchematic" == MapCore.editModeType && Nigsys.hideLoading(container)
  },
  doWhenpopupSearchClosed: function () {
    MainMethodsCore.logoutImajnetNotActive(!0);
    Search.cancelSearch();
    jQuery("#popupSearch_ResponseContainer").html("");
    FeaturesListing.removeSelectedFeaturesOnMap("popupSearch");
    Search.removeGeographicConstraintSelectTool("popupSearch",
      !0)
  },
  doWhenpopupNewSearchFromExistingClosed: function () {
    jQuery("#popupNewSearchFromExisting_ResponseContainer").html("");
    FeaturesListing.removeSelectedFeaturesOnMap("popupNewSearchFromExisting");
    Search.removeGeographicConstraintSelectTool("popupNewSearchFromExisting", !0)
  },
  doWhenpopupSearchReserveClosed: function () {
    MainMethodsCore.logoutImajnetNotActive(!0);
    Reserve.onClose()
  },
  doWhenpopupSearchFoncierClosed: function () {
    Foncier.onClose();
    CommonCore.removeZoomedWfsFromMap()
  },
  doWhenpopupViewAttachmentPdfClosed: function () {
    jQuery("#popupViewAttachmentPdfContent").children("iframe").remove()
  },
  doWhenpopupInsertGPSPositionClosed: function () {
    CommonCore.deactivateButton("olControlInsertGPSPosition")
  },
  doWhenpopupInsertLRSLineClosed: function () {
    CommonCore.deactivateButton("olControlInsertLRSLine")
  },
  doWhengenerateStyleRulesPopupClosed: function () {
    generateStyleRulesPopupRemove()
  },
  doWhensearchLRSContainerClosed: function () {
    MainMethodsCore.logoutImajnetNotActive(!0)
  },
  doWhenpopupMeasureClosed: function () {
    CommonCore.disableMeasurement();
    isImajnetMode() && Imajnet.activateImajnetControl(ImajnetUI.btnClosestImageDiv,
      "closestImage");
    CommonCore.activateMapClick()
  },
  doWhenpopupMeasureSurfaceClosed: function () {
    CommonCore.disableSurfaceMeasurement();
    isImajnetMode() && Imajnet.activateImajnetControl(ImajnetUI.btnClosestImageDiv, "closestImage");
    CommonCore.activateMapClick()
  },
  doWhenpopupOfflineModeClosed: function () {
    Nigsys.disableEventPropagation(event);
    MapCacheUtil.stopSeeding();
    MainMobile.deactivateWMSExtentDraw();
    Nigsys.hideLoading(container)
  },
  doWhenpopupRoadSchematicClosed: function () {
    MapMethodsCore.popupRoadSchematicRemove()
  },
  doWhenpopupGeosignClosed: function () {
    MapMethodsCore.popupGeosignRemove()
  },
  doWhenpopupImajnetClosed: function () {
    ImajnetMap.hideOrientation();
    ImajnetMap.hideImajboxMarker();
    ImajnetAPI.imajnetOrderRequest && ImajnetAPI.imajnetOrderRequest.abort();
    ImajnetMap.currentPosition = null;
    ImajnetUrl.changeUrlParam(ImajnetUrl.LOCATION_URL_PARAM_NAME, "", !0)
  }
};
var map = null, container = null;
CommonCore = {
  currentMapViewIndex: -1,
  mapViewsArray: [],
  isFromNavigationHistory: !1,
  isMobile: !1,
  devMode: !1,
  userInfo: null,
  geometryPropertyName: "the_geom",
  map: null,
  editor: null,
  currentEditorActiveControl: null,
  page: "map",
  container: null,
  loadingContainer: null,
  mapContainer: null,
  measureLine: null,
  measureSurface: null,
  sphericalMercatorBounds: [-2.003750834E7, -2.003750834E7, 2.003750834E7, 2.003750834E7],
  wgs84Crs: "EPSG:4326",
  customerCrs: "EPSG:4326",
  sphericalMercatorCrs: "EPSG:3857",
  numZoomLevels: 25,
  bodyMargins: 0,
  buttonClicked: "",
  baseLayersClassName: ["OpenLayers.Layer", "OpenLayers.Layer.OSM", "OpenLayers.Layer.Bing"],
  BING_TYPE_ROAD: "Road",
  BING_TYPE_SATELLITE: "Aerial",
  BING_TYPE_HYBRID: "AerialWithLabels",
  notificationLoginContainer: null,
  mapMinZoom: 0,
  zoomBar: null,
  zoomBox: null,
  projHash: {},
  searchReserveButton: null,
  polygonFromPointButton: null,
  searchFoncierButton: null,
  navigation: null,
  platformMapInitialized: $.Deferred(),
  overviewMap: null,
  dialogNamesArray: "popupInfo popupMeasure popupMeasureSurface popupInfoEditFeature popupSearchReserve popupSearchFoncier popupFoncierSynthese popupSearchComments popupSearchAttachments".split(" "),
  mapMousePosition: null,
  lastMouseCoordinateX: 0,
  lastMouseCoordinateY: 0,
  mapClickHandlerDisabled: !1,
  bingApiKey: "",
  attachmentOrCommentSelected: "attachment",
  boxControl: {},
  measurementLayer: null,
  mapMainMenuChooseMap: null,
  mapMainMenuChooseMapItems: null,
  mapMainMenuWindowModes: null,
  mapMainMenuWindowModesItems: null,
  currentMeasurement: 0,
  lineMeasureComponentsLength: 2,
  groupBounds: null,
  baseLayersMaxZoom: 20,
  lastBaseLayer: null,
  lastBaseLayerName: null,
  currentBaseLayerName: null,
  LRSMeasurementIsFirstPoint: !0,
  LRSMeasurementFirstPoint: null,
  LRSMeasurementFirstPointLRS: null,
  LRSMeasurementSecondPointLRS: null,
  LRSMeasurementFeatureWrapperPoint: null,
  LRSMeasurementFeatureWrapperFirstPoint: null,
  LRSMeasurementFeatureWrapperSecondPoint: null,
  LRSMeasurementFeatureWrapperLine: null,
  mapClickType: "",
  isWMSLayer: function (a) {
    return "OpenLayers.Layer.WMS" == a || "OpenLayers.Layer.AsyncWMS" == a
  },
  isWFSLayer: function (a) {
    return "OpenLayers.Layer.Vector" == a
  },
  isRootContainerLayer: function (a) {
    return "OpenLayers.Layer.Vector.RootContainer" == a
  },
  getLayerNameWithoutWorkspace: function (a) {
    if (a) {
      a =
        a.toString();
      var b = a.indexOf(":");
      return -1 == b ? a : a.substring(b + 1, a.length)
    }
    return ""
  },
  getLayerNameFromFeatureId: function (a) {
    return a.split(".")[0]
  },
  removeZoomedWfsFromMap: function () {
    if ("undefined" === typeof MapCore || MapCore.zoomedFeatureWFS) ImajnetPlugin.removeLayerFromMap(MapCore.zoomedFeatureWFS), MapCore.zoomedFeatureWFS = null, MapCore.lastZoomedFeatureId = ""
  },
  activateInfo: function () {
    CommonCore.isMobile && app.isOnline() && !appSettings.settings.offlineMode && jQuery("#menuSaveWFSTPanel").is(":visible") ? ImajnetUI.showNotificationInfoOk(jQuery.app.notifications.infoSaveOfflineData,
      "", "center") : MainMethodsCore.checkForUnsavedData(MainMethodsCore.ASK_FOR_SAVE_EDIT).done(function (a, b) {
      if (b) MainMethodsCore.deactivateAskForSave(MainMethodsCore.ASK_FOR_SAVE_EDIT), CommonCore.onInfoPressed(); else if (a) MapCore.saveChangedFeatures().done(function () {
        CommonCore.onInfoPressed()
      }); else CommonCore.onInfoPressed()
    })
  },
  deactivateInfo: function () {
    CommonCore.buttonClicked = "";
    "undefined" !== typeof MapMethodsCore && MapMethodsCore.removeBoxControl("features", null);
    Dialog.hideDialog("popupInfo", !0);
    CommonCore.deactivateButton("olControlInfoFeatures")
  },
  imajnetIsActive: function () {
    return isImajnetMode() || "FULL" == CommonCore.userInfo.imajnetSubscriptionType
  },
  getGeometryShortName: function (a) {
    return a.toString().replace("OpenLayers", "").replace("Geometry", "").replace("PropertyType", "").replace("Curve", "Point").replace("LinearRing", "Line").replace("String", "").replace("Multi", "").replace(/\./g, "")
  },
  getFeatureValuePopupHTMLBlue: function (a) {
    return '\x3cdiv class\x3d"infoFeatureItem semibold15Blue"\x3e\x3cdiv class\x3d"left "\x3e' +
      Nigsys.escapeHtml(a) + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft popupInfoFeatureClearLeft"\x3e\x3c/div\x3e'
  },
  getFeatureInfoPopupItemHTML: function (a, b) {
    return '\x3cdiv class\x3d"infoFeatureItem"\x3e\x3cdiv class\x3d"left infoFeatureLabel"\x3e\x26nbsp;' + a + '\x3c/div\x3e\x3cdiv class\x3d"left popupFeatureInfoItemValue"\x3e' + Nigsys.escapeHtml(b) + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft popupInfoFeatureClearLeft"\x3e\x3c/div\x3e'
  },
  getFeatureInfoPopupItemHTMLId: function (a, b, c) {
    return '\x3cdiv class\x3d"infoFeatureItem"\x3e\x3cdiv id\x3d"' +
      c + '" class\x3d"left imajnetInfoFeatureLabel"\x3e\x26nbsp;' + a + '\x3c/div\x3e\x3cdiv class\x3d"left popupFeatureInfoItemValue" style\x3d"max-width:270px;"\x3e' + Nigsys.escapeHtml(b) + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft popupInfoFeatureClearLeft"\x3e\x3c/div\x3e'
  },
  getFeatureInfoPopupContentBlue: function (a, b, c) {
    a = "";
    c = LRS.getLabelsValueFromSettings(b[3].value, "referential");
    "admin" == ImajnetUser.data.role.name || -1 < ImajnetUser.data.role.name.indexOf("imajnet-") ? (a += CommonCore.getFeatureInfoPopupItemHTMLId("" +
      c.roadLabel + ":", b[1].value, "infoFeatureItemRoad"), a += CommonCore.getFeatureInfoPopupItemHTMLId(jQuery.app.map.popupFeatureInfo[b[2].key], b[2].value, "infoFeatureItemSection")) : a += CommonCore.getFeatureInfoPopupItemHTMLId("" + c.roadLabel + ":", b[0].value, "infoFeatureItemRoad");
    return '\x3cdiv class\x3d"popupFeatureInfo"  onclick\x3d"jQuery(this).remove();"\x3e\x3cdiv class\x3d"imajnetPopupFeatureInfoContainer"\x3e' + ("undefined" === typeof b[0].value ? CommonCore.getFeatureValuePopupHTMLBlue(b[1].value) : CommonCore.getFeatureValuePopupHTMLBlue(b[0].value)) +
      '\x3cdiv id\x3d"popupFeatureInfoLRS"\x3e\x3c/div\x3e' + a + "\x3c/div\x3e\x3c/div\x3e"
  },
  getFeatureInfoPopupContentPR: function (a, b, c) {
    a = LRS.getLabelsValueFromSettings(b[3].value, "referential");
    return '\x3cdiv class\x3d"popupFeatureInfo" onclick\x3d"jQuery(this).remove();"\x3e\x3cdiv class\x3d"imajnetPopupFeatureInfoContainer"\x3e' + CommonCore.getFeatureValuePopupHTMLBlue(b[1].value) + '\x3cdiv id\x3d"popupFeatureInfoLRSPRAbs"\x3e\x3c/div\x3e\x3cdiv id\x3d"popupFeatureInfoLRSPR"\x3e\x3c/div\x3e' + CommonCore.getFeatureInfoPopupItemHTMLId("" +
        a.relativePointLabel + ":", b[0].value, "infoFeaturePr") + CommonCore.getFeatureInfoPopupItemHTMLId("" + a.roadLabel + ":", b[2].value, "infoFeatureItemRoad") + "\x3c/div\x3e\x3c/div\x3e"
  },
  getLRSFieldsForPopup: function (a) {
    var b = LRS.getLabelsValueFromSettings(a.road.type, "referential"), c = "";
    a.relativeAbscisa && (c += CommonCore.getFeatureValuePopupHTMLBlue("" + a.keyPoint.prNumber + "+" + Math.round(a.relativeAbscisa) + ""));
    a.cumulatedAbscisa && ImajnetLRSSettings.LRSSettings.display.addressAndLRS.imajnetSettingsLRSShowCumulated &&
    (c += CommonCore.getFeatureInfoPopupItemHTMLId(b.cumulatedAbscisaLabel + ":", Math.round(a.cumulatedAbscisa), "infoFeatureDist"));
    return c
  },
  getLRSFieldsForPopupPR: function (a) {
    var b = LRS.getLabelsValueFromSettings(a.road.type, "referential"), c = "";
    a.cumulatedAbscisa && ImajnetLRSSettings.LRSSettings.display.addressAndLRS.imajnetSettingsLRSShowCumulated && (c += CommonCore.getFeatureInfoPopupItemHTMLId(b.cumulatedAbscisaLabel + ":", Math.round(a.cumulatedAbscisa), "infoFeatureDist"));
    return c
  },
  getLRSFieldsForPopupPRAbs: function (a) {
    var b =
      "";
    a.relativeAbscisa && (b += CommonCore.getFeatureValuePopupHTMLBlue("" + a.keyPoint.prNumber + "+" + Math.round(a.relativeAbscisa) + ""));
    return b
  },
  onSpanCheckboxClick: function (a) {
    $(a.currentTarget).hasClass("checkboxAsSpanChecked") ? $(a.currentTarget).removeClass("checkboxAsSpanChecked") : $(a.currentTarget).addClass("checkboxAsSpanChecked")
  },
  deleteLastChar: function (a) {
    return a.substring(0, a.length - 1)
  },
  initProj4js: function () {
    if ("undefined" !== typeof Proj4js && Proj4js) {
      "map" != CommonCore.page && "searchReserves" !=
      CommonCore.page || isImajnetMode() || (Proj4js.defs["EPSG:2154"] = "+proj\x3dlcc +lat_1\x3d49 +lat_2\x3d44 +lat_0\x3d46.5 +lon_0\x3d3 +x_0\x3d700000 +y_0\x3d6600000 +ellps\x3dGRS80 +towgs84\x3d0,0,0,0,0,0,0 +units\x3dm +no_defs");
      for (var a in Proj4js.defs)if ("EPSG:32632" != a || "map" == CommonCore.page && !isImajnetMode()) CommonCore.projHash[a] = new Proj4js.Proj(a)
    }
  },
  removeFeatureInfo: function () {
    jQuery(".popupFeatureInfo").remove()
  },
  changePredefinedZoom: function (a, b) {
    0 < b ? (ImajnetPlugin.zoomMapTo(b), isImajnetMode() &&
    ImajnetPlugin.centerMapToPosition({
      lon: ImajnetMap.currentPosition.lon,
      lat: ImajnetMap.currentPosition.lat
    }), CommonCore.deactivateButton("olControlGeneralView")) : CommonCore.groupBounds ? (map.zoomToExtent(CommonCore.groupBounds), CommonCore.enableGeneralView()) : ImajnetPlugin.zoomMapTo(10);
    jQuery("#predefinedZoomLevelsValue").html(a.html());
    jQuery(".buttonExpandedDiv").hide();
    CommonCore.buttonClicked = "";
    jQuery("#predefinedZoomDropDownDiv").hide()
  },
  showHidePredefinedZoomDropDown: function () {
    jQuery("#predefinedZoomDropDownDiv").is(":visible") ?
      (jQuery("#predefinedZoomDropDownDiv").hide(), CommonCore.buttonClicked = "") : ImajnetUI.showAndPositionInside(ImajnetUI.docking.imajnetMapButtons.mainContainer, jQuery("#predefinedZoomDropDownDiv"))
  },
  showHideDropDownDiv: function (a) {
    a ? ("searchDropDownButton" != a.target.id && jQuery("#searchDropDownDiv").hide(), "predefinedZoomLevelsValue" != a.target.id && "predefinedZoomDropDownDiv" != a.target.id && jQuery("#predefinedZoomDropDownDiv").hide(), 0 === jQuery("#allLayersTitleContainer").has(a.target).length && jQuery("#allLayersEditPopup").hide()) :
      (jQuery("#searchDropDownDiv").hide(), jQuery("#predefinedZoomDropDownDiv").hide());
    a && "SELECT" !== a.target.nodeName && "string" === typeof a.target.className && -1 === a.target.className.indexOf("selectboxit") && jQuery(".selectboxit-options").hide()
  },
  buttonIsActive: function (a) {
    return 0 != jQuery("." + a + "ItemActive").length
  },
  enableGeneralView: function () {
    "undefined" !== typeof generalViewButton && generalViewButton && CommonCore.activateButton("olControlGeneralView")
  },
  activateButton: function (a) {
    CommonCore.buttonIsInactive(a) &&
    jQuery("." + a + "ItemInactive").attr("class", a + "ItemActive")
  },
  buttonIsInactive: function (a) {
    return 0 != jQuery("." + a + "ItemInactive").length
  },
  deactivateButton: function (a) {
    CommonCore.buttonIsActive(a) && jQuery("." + a + "ItemActive").attr("class", a + "ItemInactive")
  },
  isBaseMap: function (a) {
    return "emptyBaseLayer" == a || a == ImajnetUrl.OSM_LAYER_PARAM_NAME || a == ImajnetUrl.OSMMAPNIK_LAYER_PARAM_NAME || a == ImajnetUrl.OCM_LAYER_PARAM_NAME || a == ImajnetUrl.OTM_LAYER_PARAM_NAME || a == ImajnetUrl.BING_ROAD_LAYER_PARAM_NAME || a == ImajnetUrl.BING_SATELLITE_LAYER_PARAM_NAME ||
      a == ImajnetUrl.BING_HYBRID_LAYER_PARAM_NAME
  },
  disableGeneralView: function () {
    "undefined" !== typeof generalViewButton && generalViewButton && CommonCore.deactivateButton("olControlGeneralView")
  },
  getPartialLineMeasurement: function (a) {
    var b = "",
      b = a.measure < lastSegmentMeasurement ? 1E3 * a.measure - lastSegmentMeasurement : a.measure - lastSegmentMeasurement;
    return b.toFixed(3)
  },
  onInfoPressed: function () {
    CommonCore.disableCommonControls("info");
    CommonCore.buttonClicked = "info";
    MapMethodsCore.addBoxSelectToMap("features",
      MapCore.onInfoSelectBoxDrawComplete);
    CommonCore.activateButton("olControlInfoFeatures")
  },
  showMap: function () {
    CommonCore.mapContainer.css("opacity", "1")
  },
  getContainerDimension: function (a) {
    var b = Nigsys.getWindowSize(),
      c = b.height - ("undefined" !== typeof footer && footer ? footer.height() : 0) - CommonCore.bodyMargins;
    isImajnetMode() ? ((a || 0 == a) && container && container.length && container.css("margin-top", a), c -= getContainerMarginTop()) : c -= "undefined" !== typeof header && header ? header.height() : 0;
    return {
      width: b.width - CommonCore.bodyMargins,
      height: c
    }
  },
  onApplyContainerDimension: function (a, b) {
    var c = CommonCore.getContainerDimension(a);
    container && container.length && (container.width(c.width), container.height(c.height), CommonCore.mapMainMenuChooseMapItems.css("max-height", c.height - 80));
    b && (Nigsys.positionNotificationCenter(), Nigsys.positionLoginNotificationErrorCenter(), Nigsys.positionLoginNotificationCenter());
    try {
      ImajnetUI.computeImageAspectRatio(), isImajnetMode() && Dialog.positionAndResizeImajnetImageAndMap(), Nigsys.getCookie("IMAJNET", "DOCKING_imageButtons_position") ||
      ImajnetUI.docking.imageButtons.mainContainer.css("top", parseInt(ImajnetUI.imajnetImageContainerSize.height / 2 - ImajnetUI.docking.imageButtons.css.height / 2)), Nigsys.getCookie("IMAJNET", "DOCKING_imageLRSGUI_position") || ImajnetUI.docking.imageLRSGUI.mainContainer.css("top", parseInt(ImajnetUI.imajnetImageContainerSize.height / 2 - ImajnetUI.docking.imageLRSGUI.css.height / 2)), ImajnetUI.setSliderDraggableContainment()
    } catch (e) {
    }
    360 > CommonCore.mapContainer.width() ? jQuery("#imajnetDockingMainContainer_imajnetTimeframe").hide() :
      jQuery("#imajnetDockingMainContainer_imajnetTimeframe").show();
    return c
  },
  applyContainerDimension: function (a, b) {
    CommonCore.onApplyContainerDimension(a, b);
    Nigsys.onMobile() && setTimeout("CommonCore.onApplyContainerDimension('" + a + "', '" + b + "')", 300)
  },
  getBaseLayerName: function () {
    var a = ImajnetUrl.getUrlParamValue(ImajnetUrl.MAP_URL_PARAM_NAME);
    return a ? a : isImajnetMode() ? (a = Nigsys.getCookie("IMAJNET", "SETTINGS_MAP_TYPE")) ? a : ImajnetUrl.OSM_LAYER_PARAM_NAME : Nigsys.getCookie("WEB_APP", "OPTIONS_BASE_LAYER")
  },
  setBaseLayerCookie: function (a) {
    isImajnetMode() ? Nigsys.setCookie("IMAJNET", "SETTINGS_MAP_TYPE", a) : Nigsys.setCookie("WEB_APP", "OPTIONS_BASE_LAYER", a)
  },
  removeAttributionLinks: function () {
    CommonCore.isMobile && jQuery(".olControlAttribution a").prop("href", "javascript: void(0);")
  },
  mapBaseLayerChangeHandler: function (a) {
    var b = "";
    "OpenLayers.Layer.OSM" == a.layer.CLASS_NAME ? b = a.layer.customIdentifier : "OpenLayers.Layer.Bing" == a.layer.CLASS_NAME && (a.layer.type == CommonCore.BING_TYPE_ROAD ? b = ImajnetUrl.BING_ROAD_LAYER_PARAM_NAME :
        a.layer.type == CommonCore.BING_TYPE_SATELLITE ? b = ImajnetUrl.BING_SATELLITE_LAYER_PARAM_NAME : a.layer.type == CommonCore.BING_TYPE_HYBRID && (b = ImajnetUrl.BING_HYBRID_LAYER_PARAM_NAME));
    ImajnetUrl.changeUrlParam(ImajnetUrl.MAP_URL_PARAM_NAME, b);
    CommonCore.setBaseLayerCookie(b);
    CommonCore.updateOverviewMap();
    CommonCore.removeAttributionLinks()
  },
  isEmptyBaseLayer: function (a) {
    return "emptyBaseLayer" == a
  },
  canSetBaseLayer: function () {
    return !CommonCore.isMobile || app.isOnline()
  },
  onCheckForUnsavedDataThematicGroup: function (a,
                                                b, c, e, d, f) {
    MainMethodsCore.haveUnsavedData(MainMethodsCore.ASK_FOR_SAVE_LAYER_SETTINGS) ? ThematicGroupsTree.closePopup(a, b, c, e).done(function () {
      MainMethodsCore.checkForUnsavedData(MainMethodsCore.ASK_FOR_SAVE_THEMATIC_GROUP, {reloadAfterSave: e}).done(function (a) {
        d(f)
      })
    }).fail(function () {
      MainMethodsCore.checkForUnsavedData(MainMethodsCore.ASK_FOR_SAVE_THEMATIC_GROUP, {reloadAfterSave: e}).done(function (a) {
        d(f)
      })
    }) : MainMethodsCore.checkForUnsavedData(MainMethodsCore.ASK_FOR_SAVE_THEMATIC_GROUP, {reloadAfterSave: e}).done(function (a) {
      d(f)
    })
  },
  checkForUnsavedDataThematicGroup: function (a, b, c, e, d, f) {
    if (MainMethodsCore.haveUnsavedData(MainMethodsCore.ASK_FOR_SAVE_LAYER_METADATA_VALUES)) ThematicGroupsTree.closeMetadataValuesPopup(!0, curentLayerMetadata).done(function () {
      MainMethodsCore.haveUnsavedData(MainMethodsCore.ASK_FOR_SAVE_LAYER_METADATA) && ThematicGroupsTree.closeMetadataPopup(!0, {layerName: MainCore.currentLayer}).done(function () {
        CommonCore.onCheckForUnsavedDataThematicGroup(a, b, c, e, d, f)
      }).fail(function () {
        CommonCore.onCheckForUnsavedDataThematicGroup(a,
          b, c, e, d, f)
      })
    }).fail(function () {
      MainMethodsCore.haveUnsavedData(MainMethodsCore.ASK_FOR_SAVE_LAYER_METADATA) && ThematicGroupsTree.closeMetadataPopup(!0, {layerName: MainCore.currentLayer}).done(function () {
        CommonCore.onCheckForUnsavedDataThematicGroup(a, b, c, e, d, f)
      }).fail(function () {
        CommonCore.onCheckForUnsavedDataThematicGroup(a, b, c, e, d, f)
      })
    }); else CommonCore.onCheckForUnsavedDataThematicGroup(a, b, c, e, d, f)
  },
  bindGroupEvents: function (a) {
    if (!CommonCore.isMobile || app.isOnline() && !appSettings.settings.offlineMode ||
      jQuery("#thematicGroupsTreeDiv_" + a).hasClass("groupIsCached")) {
      var b = jQuery("#thematicGroupsTreeDiv_" + a + " a:first-child"), c = "click";
      CommonCore.isMobile && (c = "tap");
      b.off().on(c, function (b) {
        b.preventDefault();
        jQuery(".groupActionsContainer").remove();
        jQuery("#rightExportMenu").hide();
        jQuery("#rightExportSubmenu").hide();
        if (a == ThematicGroupsTreeCore.lastValidGroupId && !CommonCore.isMobile) {
          var c = document.createElement("div");
          c.setAttribute("class", "groupActionsContainer");
          c.appendChild(MainMethodsCore.getNewImageElement("",
            "layerActionsItem button left", applicationUrl + "resources/img/buttons/BTN-CC4.PNG", 25, 25, jQuery.app.map.featuresListing.buttonExport, function () {
              Export.showExportRightMenu(a, b, "Export.exportGroup")
            }));
          jQuery(b.target).parent().parent().parent().append(c);
          return !1
        }
        if (CommonCore.isMobile && a == ThematicGroupsTreeCore.clickedThematicGroupId) ThematicGroupsTree.onGroupTap(); else CommonCore.isMobile || (ImajnetUrl.changeUrlParam(ImajnetUrl.POSITION_URL_PARAM_NAME, ""), ImajnetUrl.changeUrlParam(ImajnetUrl.ZOOM_URL_PARAM_NAME,
          "")), "map" == CommonCore.page ? ThematicGroupsTreeCore.fillGroup(a) : CommonCore.checkForUnsavedDataThematicGroup(!0, Main.layerSettingsIsGeoserverLayer, !0, !0, ThematicGroupsTreeCore.fillGroup, a)
      })
    }
  },
  activateImage: function (a) {
    a.src = a.src.replace("Off", "On")
  },
  deactivateImage: function (a) {
    a.src = a.src.replace("On", "Off")
  },
  onMapChanged: function (a) {
    for (var b = document.getElementsByClassName("mapMainMenuChooseMapItemImage"), c = 0; c < b.length; c++)CommonCore.deactivateImage(b[c]);
    a || (a = Object({
      currentTarget: document.getElementById("set" +
        ImajnetUrl.urlParams[ImajnetUrl.MAP_URL_PARAM_NAME])
    }));
    CommonCore.activateImage(a.currentTarget)
  },
  onHaveEmptyBaseLayer: function (a) {
    CommonCore.mapMainMenuChooseMapItems.hide();
    CommonCore.isMobile && (a = jQuery("#WMSCacheZoomEnd"), a.find('option[value\x3d"19"]').prop("disabled", !1), a.find('option[value\x3d"20"]').prop("disabled", !1), a.val(20 < CommonCore.numZoomLevels ? 20 : CommonCore.numZoomLevels - 1).selectmenu("refresh"))
  },
  onHaveBaseLayer: function (a) {
    CommonCore.mapMainMenuChooseMapItems.hide();
    CommonCore.isMobile &&
    (a = jQuery("#WMSCacheZoomEnd"), a.find('option[value\x3d"19"]').prop("disabled", !0), a.find('option[value\x3d"20"]').prop("disabled", !0), a.val(18).selectmenu("refresh"))
  },
  getSearchDialogContent: function (a) {
    return '\x3cdiv id\x3d"' + a + '" class\x3d"popupTemplate"\x3e\x3cdiv class\x3d"popupContentContainer" style\x3d"height: 35px;"\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"button" value\x3d"' + jQuery.app.map.button.search + '" onclick\x3d"Search.searchMore(\'' + a + '\', false, false);" class\x3d"dialogButton buttonSearch" /\x3e\x26nbsp;\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"button" value\x3d"' +
      jQuery.app.button.cancel + '" onclick\x3d"Dialog.hideDialog(\'' + a + '\', true);" class\x3d"dialogButton dialogButtonCancel" /\x3e\x3c/div\x3e\x3cdiv id\x3d"' + a + 'TotalResults" class\x3d"left searchTotalRecords"\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"' + a + 'LimitByConditionContainer"\x3e\x3c/div\x3e\x3cdiv id\x3d"' + a + 'ResponseContainer" class\x3d"searchResponseContainer scrollable"\x3e\x3c/div\x3e\x3c/div\x3e'
  },
  getDialogHTML: function (a) {
    return "popupInfo" == a ?
      '\x3cdiv id\x3d"' + a + '"\x3e\x3cdiv id\x3d"popupInfoContent" class\x3d"popupContent scrollable"\x3e\x3c/div\x3e\x3c/div\x3e' : "popupMeasure" == a ? '\x3cdiv id\x3d"' + a + '" class\x3d"popupTemplate"\x3e\x3cdiv id\x3d"popupLineMeasureTabs" class\x3d"popupMeasureContent"\x3e\x3cul id\x3d"popupLineMeasureTabsUL"\x3e\x3cli class\x3d"tabsLi"\x3e\x3ca href\x3d"#simpleMeasurementTab" class\x3d"tabs"\x3e' + jQuery.app.map.popupMeasure.simple + '\x3c/a\x3e\x3c/li\x3e\x3cli class\x3d"tabsLi"\x3e\x3ca href\x3d"#LRSMeasurementTab" class\x3d"tabs"\x3e' +
        jQuery.app.map.popupMeasure.LRS + '\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3cdiv id\x3d"simpleMeasurementTab" class\x3d"mainTabContent"\x3e\x3cdiv class\x3d"totalMeasurement"\x3e\x3cdiv class\x3d"left dialogContentTitle measurementItemLabel"\x3e' + jQuery.app.map.popupMeasure.text + ':\x3c/div\x3e\x3cdiv id\x3d"popupMeasureContentText" class\x3d"left"\x3e 0\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"lastSegmentMeasurement" style\x3d"display: none; margin-top: 3px;"\x3e\x3cdiv class\x3d"left dialogContentTitle measurementItemLabel"\x3e' +
        jQuery.app.map.popupMeasure.lastSegment + ':\x3c/div\x3e\x3cdiv id\x3d"lastSegmentMeasurementText" class\x3d"left"\x3e 0\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"LRSMeasurementTab" class\x3d"mainTabContent"\x3e\x3cdiv class\x3d"left dialogContentTitle measurementItemLabel"\x3e' + jQuery.app.map.popupMeasure.road + ':\x3c/div\x3e\x3cdiv id\x3d"LRSMeasurementRoad" class\x3d"left"\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3cdiv class\x3d"left dialogContentTitle measurementItemLabel"\x3e' +
        jQuery.app.map.popupMeasure.text + ':\x3c/div\x3e\x3cdiv id\x3d"LRSMeasurementValue" class\x3d"left"\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e' : "popupMeasureSurface" == a ? '\x3cdiv id\x3d"' + a + '" class\x3d"popupTemplate"\x3e\x3cdiv class\x3d"popupMeasureSurfaceContent"\x3e\x3cdiv class\x3d"totalMeasurement"\x3e\x3cdiv class\x3d"left dialogContentTitle" style\x3d"margin-right: 20px;"\x3e' + jQuery.app.map.popupMeasureSurface.textSurface + ':\x3c/div\x3e\x3cdiv id\x3d"popupMeasureSurfaceContentText" class\x3d"left"\x3e 0\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e' :
        "popupInfoEditFeature" == a ? '\x3cdiv id\x3d"' + a + '" class\x3d"popupTemplate" style\x3d"min-width: 600px;"\x3e\x3cdiv id\x3d"popupInfoEditFeatureContentTabs"\x3e\x3cdiv class\x3d"left"\x3e\x3cul id\x3d"infoEditFeatureTabs"\x3e\x3cli class\x3d"tabsLi"\x3e\x3ca href\x3d"#infoFeatureTab" class\x3d"tabs"\x3e' + jQuery.app.map.popupInfoEditFeature.edit + '\x3c/a\x3e\x3c/li\x3e\x3cli class\x3d"tabsLi"\x3e\x3ca href\x3d"#infoFeatureLinksTab" class\x3d"tabs"\x3e' + jQuery.app.map.popupInfoEditFeature.links + '\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"hidden" id\x3d"feature_to_edit_LAYER_NAME" value\x3d"" /\x3e\x3cdiv id\x3d"feature_to_edit_FID" class\x3d"semibold14Blue"\x3e\x3c/div\x3e\x3cdiv id\x3d"feature_to_edit_representativeField" class\x3d"semibold14Blue"\x3e\x3c/div\x3e' +
          ("undefined" !== typeof Foncier ? '\x3cdiv class\x3d"right" style\x3d"margin-top: 3px;"\x3e\x3cinput type\x3d"button" id\x3d"idFoncierInfo" value\x3d"' + jQuery.foncier.foncierInfo + '"class\x3d"dialogButton hidden" /\x3e\x26nbsp;\x26nbsp;\x3c/div\x3e' : "") + '\x3cdiv class\x3d"right" style\x3d"margin-top: 3px;"\x3e\x3cinput type\x3d"button" id\x3d"generateFeatureReport" value\x3d"' + jQuery.app.generateReport + '"class\x3d"dialogButton hidden" /\x3e\x26nbsp;\x26nbsp;\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e\x3cdiv id\x3d"infoFeatureTab" class\x3d"tabContentContainer"\x3e\x3cdiv id\x3d"popupInfoEditFeatureContentAttributes" class\x3d"scrollable dialogWhite50" style\x3d"clear: both"\x3e\x3c/div\x3e\x3cdiv id\x3d"popupInfoEditFeatureListContentTabs"\x3e\x3cdiv\x3e\x3cul id\x3d"popupInfoEditFeatureListTabs"\x3e\x3cli class\x3d"tabsLi"\x3e\x3ca href\x3d"#popupInfoEditFeatureAttachmentsTab" class\x3d"tabs attachmentTab"\x3e' +
          jQuery.app.attachments.title + '\x3c/a\x3e\x3c/li\x3e\x3cli id\x3d"popupInfoEditFeatureCommentsTabLi" class\x3d"tabsLi"\x3e\x3ca href\x3d"#popupInfoEditFeatureCommentsTab" class\x3d"tabs commentTab"\x3e' + jQuery.app.comments.title + '\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3cdiv id\x3d"popupInfoEditFeatureAttachmentsTab" class\x3d"tabContentContainer"\x3e\x3c/div\x3e\x3cdiv id\x3d"popupInfoEditFeatureCommentsTab" class\x3d"tabContentContainer"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"infoFeatureLinksTab" class\x3d"tabContentContainer"\x3e\x3c/div\x3e\x3cdiv id\x3d"' +
          a + 'DialogErrorsContainer" class\x3d"dialogErrorsContainer"\x3e\x3cdiv class\x3d"dialogErrorsInnerContainer"\x3e\x3cdiv class\x3d"left dialogErrorsCloseContainer"\x3e\x3cimg id\x3d"' + a + 'DialogErrorsClose" class\x3d"dialogErrorsClose" src\x3d"' + (CommonCore.isMobile ? "../" : applicationUrl) + 'resources/img/buttons/BTN-FF7.PNG" /\x3e\x3c/div\x3e\x3cdiv id\x3d"' + a + 'Errors" class\x3d"errors errorsText left"\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"popupInfoEditFeatureButtons"\x3e\x3cdiv class\x3d"left"\x3e\x3cdiv\x3e\x3cinput type\x3d"button" id\x3d"popupInfoEditFeatureButtongenerateLink" value\x3d"' +
          jQuery.app.button.viewLink + '" class\x3d"dialogWhiteButton buttonViewLink" /\x3e\x3cinput type\x3d"button" id\x3d"popupInfoEditFeatureButtonZoomToFeature" value\x3d"' + jQuery.app.button.zoomToFeature + '" class\x3d"dialogWhiteButton buttonZoomToFeature" /\x3e\x3c/div\x3e\x3cdiv style\x3d"margin-top: 10px; "\x3e\x3cinput type\x3d"button" id\x3d"popupInfoEditFeatureButtonEditGeometrySave" value\x3d"' + jQuery.app.button.editGeometry + '" class\x3d"dialogWhiteButton buttonEditGeometry" /\x3e' + (CommonCore.isMobile ?
            "" : '\x3cselect id\x3d"popupInfoEditFeature_ExportSelect" class\x3d"dialogWhiteButton featuresListingExport"\x3e\x3c/select\x3e') + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"right" style\x3d"margin-right: 20px;"\x3e\x3cdiv\x3e\x3cinput type\x3d"button" id\x3d"submitAddAttachmentOrComment" value\x3d"' + jQuery.app.attachments.buttonAddTitle + '" class\x3d"dialogWhiteButton buttonAddAttachment" disabled\x3d"disabled" /\x3e\x3c/div\x3e\x3cdiv style\x3d"margin-top: 10px; "\x3e\x3cinput type\x3d"button" value\x3d"' +
          jQuery.app.button.cancel + '" onclick\x3d"Feature.closePopupInfoEditFeature(true);" class\x3d"dialogButton dialogButtonCancel" /\x3e\x3cinput id\x3d"popupInfoEditFeatureButtonSave" type\x3d"button" value\x3d"' + jQuery.app.button.save + '" class\x3d"dialogButton dialogButtonSave" disabled\x3d"disabled" /\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv style\x3d"display: none;" class\x3d"right" id\x3d"idReserveSearch" onclick\x3d"Reserve.searchById()"\x3e\x3cimg src\x3d"' + applicationUrl + 'resources/img/buttons/BTN-O23_Haut.PNG" title\x3d"' +
          jQuery.app.map.button.searchReserve + '"/\x3e\x3c/div\x3e' + ("undefined" !== typeof CG34Arbres && CG34Arbres ? '\x3cdiv style\x3d"display: none;" class\x3d"right" id\x3d"CG34ArbresSearchChantiers" onclick\x3d"CG34Arbres.searchChantiers()"\x3e\x3cimg src\x3d"' + applicationUrl + 'resources/img/buttons/BTN-CG34Arbres_Haut.PNG" title\x3d"' + jQuery.cg34Arbres.button.searchChantiers + '"/\x3e\x3c/div\x3e' : "") + ("undefined" !== typeof Razel && Razel ? '\x3cdiv style\x3d"display: none;" class\x3d"right" id\x3d"RazelSearchChantiers" onclick\x3d"Razel.searchChantiers()"\x3e\x3cimg src\x3d"' +
            applicationUrl + 'resources/img/buttons/BTN-Razel_Haut.PNG" title\x3d"' + jQuery.razel.searchOperations + '"/\x3e\x3c/div\x3e\x3cdiv style\x3d"display: none;" class\x3d"right" id\x3d"RazelSearchOperationNodes" onclick\x3d"Razel.searchOperationNodes()"\x3e\x3cimg src\x3d"' + applicationUrl + 'resources/img/buttons/BTN-Razel_Haut.PNG" title\x3d"' + jQuery.razel.searchNodes + '"/\x3e\x3c/div\x3e\x3cdiv style\x3d"display: none;" class\x3d"right" id\x3d"RazelSearchOperationDMSR" onclick\x3d"Razel.searchOperationDMSR()"\x3e\x3cimg src\x3d"' +
            applicationUrl + 'resources/img/buttons/BTN-Razel_Haut.PNG" title\x3d"' + jQuery.razel.searchDMSR + '"/\x3e\x3c/div\x3e\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e' : "") + "\x3c/div\x3e\x3c/div\x3e" : "popupSearchReserve" == a ? '\x3cdiv id\x3d"' + a + '" class\x3d"popupTemplate"\x3e\x3cdiv style\x3d"height: 35px;"\x3e\x3cdiv class\x3d"popupContentContainer"\x3e\x3cdiv class\x3d"left"\x3e\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"margin-left: 20px; margin-top: -3px;"\x3e\x3cinput type\x3d"button" value\x3d"' + jQuery.app.button.cancel +
          '" onclick\x3d"Dialog.hideDialog(\'popupSearchReserve\', true);" class\x3d"dialogButton buttonCancel" /\x3e\x3cinput type\x3d"button" value\x3d"' + jQuery.app.map.button.search + '" onclick\x3d"Reserve.search();" class\x3d"dialogButton buttonSearch" /\x3e\x26nbsp;\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"popupSearchReserveLRSConstraintMainContainer"\x3e\x3cdiv class\x3d"separator optionsGroup"\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"checkbox" id\x3d"popupSearchReserve_LRSConstraintCheckbox" onchange\x3d"Search.showHideLRSConstraintSearch(\'popupSearchReserve\');" /\x3e\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"margin-left: 10px;"\x3e' +
          jQuery.app.map.featuresListing.LRSConstraintTitle + '\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3cdiv id\x3d"popupSearchReserve_LRSConstraintContainer" style\x3d"display: none;"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"popupSearchReserveLimitByConditionContainer"\x3e\x3c/div\x3e\x3cdiv id\x3d"' + a + '_ResponseContainer" class\x3d"searchResponseContainer scrollable dialogBorder"\x3e\x3c/div\x3e\x3c/div\x3e' : "popupSearchFoncier" == a && "undefined" !== typeof Foncier ? '\x3cdiv id\x3d"' +
          a + '" class\x3d"popupTemplate"\x3e\x3cdiv style\x3d"height: 35px;"\x3e\x3cdiv class\x3d"popupContentContainer"\x3e\x3cdiv class\x3d"left"\x3e\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"margin-left: 20px; margin-top: -3px;"\x3e\x3cinput type\x3d"button" value\x3d"' + jQuery.app.button.cancel + '" onclick\x3d"Dialog.hideDialog(\'popupSearchFoncier\', true);" class\x3d"dialogButton dialogButtonCancel" /\x3e\x3cinput type\x3d"button" value\x3d"' + jQuery.app.map.button.search + '" onclick\x3d"Foncier.search();" class\x3d"dialogButton buttonSearch" /\x3e\x26nbsp;\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"right" style\x3d"margin-left: 20px; margin-top: -3px;"\x3e\x3cinput type\x3d"button" id\x3d"idAccesDonnes" value\x3d"' +
          jQuery.foncier.accesDonnesSynthese + '" onclick\x3d"Foncier.accesDonnesSynthese();" class\x3d"dialogButton" /\x3e\x26nbsp;\x26nbsp;\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"popupSearchFoncierLimitByConditionContainer"\x3e\x3c/div\x3e\x3cdiv id\x3d"searchFoncierResponseContainer" class\x3d"searchResponseContainer scrollable"\x3e\x3ctable id\x3d"searchFoncierGrid"\x3e\x3c/table\x3e\x3cdiv id\x3d"searchFoncierPagination"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e' :
          "popupFoncierSynthese" == a && "undefined" !== typeof Foncier ? '\x3cdiv id\x3d"' + a + '" class\x3d"popupTemplate"\x3e\x3cdiv style\x3d"height: 35px;"\x3e\x3cdiv class\x3d"popupContentContainer"\x3e\x3cform method\x3d"post" action\x3d"' + applicationUrl + 'foncier/statistics/generateReport?format\x3dHTML" id\x3d"formSynthese" target\x3d"_blank"\x3e\x3cdiv class\x3d"left" style\x3d"margin-left: 20px; margin-top: -3px;"\x3e\x3cdiv class\x3d"left" style\x3d"margin-left: 20px; margin-top: -3px;"\x3e  Format  \x3c/div\x3e\x3cselect id\x3d"idSelectFormat" style\x3d"margin-left: 30px; margin-top: -3px;"\x3e\x3coption value\x3d"HTML"\x3eHTML\x3c/option\x3e\x3coption value\x3d"PDF"\x3ePDF\x3c/option\x3e\x3coption value\x3d"EXCEL"\x3eEXCEL\x3c/option\x3e\x3c/select\x3e\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"margin-right: 1px; margin-top: -3px;"\x3e\x3cdiv class\x3d"left" style\x3d"margin-left: 30px; margin-top: -3px;"\x3e' +
            jQuery.foncier.anneSynthese + '\x3c/div\x3e\x3cselect id\x3d"idSelectAnne" style\x3d"margin-left: 30px; margin-top: -3px;"\x3e\x3coption value\x3d"2016"\x3e2016\x3c/option\x3e\x3coption value\x3d"2015" selected\x3e2015\x3c/option\x3e\x3c/select\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"margin-left: 20px; margin-top: 6px;"\x3e\x3cinput type\x3d"button" id\x3d"idSyntheseAnne" value\x3d"' + jQuery.foncier.voirSyntheseAnne + '" onclick\x3d"Foncier.anneDonnesSynthese();" class\x3d"dialogButton" /\x3e\x26nbsp;\x26nbsp;\x3c/div\x3e\x3cdiv\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"margin-left: 20px; margin-top: 12px;"\x3e\x3cinput type\x3d"button" id\x3d"idSyntheseDomaine" value\x3d"' +
            jQuery.foncier.voirSyntheseDomaine + '" onclick\x3d"Foncier.donnesSyntheseDomaine();" class\x3d"dialogButton" /\x3e\x26nbsp;\x26nbsp;\x3c/div\x3e\x3c/div\x3e\x3c/form\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e' : "popupSearchComments" == a || "popupSearchAttachments" == a ? CommonCore.getSearchDialogContent(a) : ""
  },
  getFeatureAndLayerForEdit: function () {
    return {
      layerName: MainCore.getLayerNameWithWorkspace(jQuery("#feature_to_edit_LAYER_NAME").val()),
      featureId: jQuery("#feature_to_edit_FID").html()
    }
  },
  disableMeasurement: function () {
    CommonCore.measureLine &&
    (CommonCore.deactivateMeasureLine(), CommonCore.resetLRSMeasurement(), CommonCore.unregisterLRSMeasurementClickEvent(), CommonCore.unregisterLRSMeasurementMouseMoveEvent(), CommonCore.deactivateButton("olControlMeasureLineFeatures"), "measureLine" == CommonCore.buttonClicked && (CommonCore.buttonClicked = ""))
  },
  disableSurfaceMeasurement: function () {
    CommonCore.measureSurface && (CommonCore.deactivateMeasureSurface(), CommonCore.deactivateButton("olControlMeasureSurfaceFeatures"), "measureSurface" == CommonCore.buttonClicked &&
    (CommonCore.buttonClicked = ""))
  },
  resetLRSMeasurement: function () {
    CommonCore.LRSMeasurementIsFirstPoint = !0;
    CommonCore.LRSMeasurementFirstPoint = null;
    CommonCore.LRSMeasurementFirstPointLRS = null;
    CommonCore.LRSMeasurementSecondPointLRS = null;
    jQuery("#LRSMeasurementRoad").html("");
    jQuery("#LRSMeasurementValue").html("");
    CommonCore.resetLRSMeasurementGeometry()
  },
  LRSMeasurementMapClick: function (a) {
    CommonCore.LRSMeasurementIsFirstPoint ? (jQuery("#LRSMeasurementRoad").html(""), jQuery("#LRSMeasurementValue").html(""),
      CommonCore.resetLRSMeasurementGeometry(), CommonCore.LRSMeasurementIsFirstPoint = !1, CommonCore.LRSMeasurementFirstPoint = a, LRSRequest.getLRSForPoints(Array({
      lon: a.lon,
      lat: a.lat,
      height: 0
    }), !0, !1).done(function (a) {
      a.linearPosition && a.linearPosition[0] ? (CommonCore.LRSMeasurementFirstPointLRS = a.linearPosition[0], jQuery("#LRSMeasurementRoad").html(a.linearPosition[0].road.name)) : CommonCore.resetLRSMeasurement()
    }).fail(function () {
      CommonCore.resetLRSMeasurement()
    })) : (CommonCore.LRSMeasurementIsFirstPoint = !0,
      LRSRequest.getLRSForPoints(Array({lon: a.lon, lat: a.lat, height: 0}), !0, !1).done(function (a) {
        a.linearPosition && a.linearPosition[0] ? (CommonCore.LRSMeasurementSecondPointLRS = LRS.getLRSByRoadId(a.linearPosition, CommonCore.LRSMeasurementFirstPointLRS.road.id), CommonCore.LRSMeasurementSecondPointLRS ? LRS.getGeometryFromLRS(LRS.getLRSToGeometrySearchObject(CommonCore.LRSMeasurementFirstPointLRS.road.name, CommonCore.LRSMeasurementFirstPointLRS.keyPoint.prNumber, CommonCore.LRSMeasurementFirstPointLRS.relativeAbscisa,
          CommonCore.LRSMeasurementSecondPointLRS.keyPoint.prNumber, CommonCore.LRSMeasurementSecondPointLRS.relativeAbscisa, !1)).done(function (a) {
          if (a.roadTopology && a.roadTopology[0] && a.roadTopology[0].topology) CommonCore.onLRSMeasurementComplete(a.roadTopology[0].topology); else CommonCore.resetLRSMeasurement()
        }).fail(function (a) {
          CommonCore.resetLRSMeasurement()
        }) : CommonCore.resetLRSMeasurement()) : CommonCore.resetLRSMeasurement()
      }).fail(function () {
        CommonCore.resetLRSMeasurement()
      }))
  },
  onMeasureLineTabsChange: function (a) {
    "simpleMeasurementTab" ==
    a ? (CommonCore.activateMeasureLine(), CommonCore.unregisterLRSMeasurementClickEvent(), CommonCore.unregisterLRSMeasurementMouseMoveEvent()) : "LRSMeasurementTab" == a && (CommonCore.deactivateMeasureLine(), CommonCore.registerLRSMeasurementClickEvent(), CommonCore.registerLRSMeasurementMouseMoveEvent())
  },
  appendDialogs: function () {
    for (var a = "", b = 0; b < CommonCore.dialogNamesArray.length; b++)a += CommonCore.getDialogHTML(CommonCore.dialogNamesArray[b]);
    $("body").append(a);
    jQuery("#popupInfoEditFeatureContentTabs").tabs({
      activate: function (a,
                          b) {
        if (b.newPanel[0] && "infoFeatureTab" != b.newPanel[0].id && "infoFeatureLinksTab" == b.newPanel[0].id) {
          var d = CommonCore.getFeatureAndLayerForEdit();
          Feature.drawFeatureLinks(d.layerName, d.featureId)
        }
      }
    });
    jQuery("#infoEditFeatureTabs").removeClass("ui-widget-header");
    jQuery("#popupInfoEditFeatureListContentTabs").tabs({
      activate: function (a, b) {
        if (b.newPanel[0]) {
          var d = CommonCore.getFeatureAndLayerForEdit();
          "popupInfoEditFeatureAttachmentsTab" == b.newPanel[0].id ? (CommonCore.attachmentOrCommentSelected = "attachment",
            Attachments.fillAttachments(d.layerName, d.featureId, !0), jQuery("#submitAddAttachmentOrComment").val(jQuery.app.attachments.buttonAddTitle)) : "popupInfoEditFeatureCommentsTab" == b.newPanel[0].id && (CommonCore.attachmentOrCommentSelected = "comment", Comments.fillComments(d.layerName, d.featureId, !0), jQuery("#submitAddAttachmentOrComment").val(jQuery.app.comments.buttonAddTitle))
        }
      }
    });
    jQuery("#popupInfoEditFeatureListTabs").removeClass("ui-widget-header");
    jQuery("#popupLineMeasureTabs").tabs({
      activate: function (a,
                          b) {
        if (b.newPanel[0]) CommonCore.onMeasureLineTabsChange(b.newPanel[0].id)
      }
    });
    jQuery("#popupLineMeasureTabsUL").removeClass("ui-widget-header")
  },
  changeLanguageHTML: function () {
    languageBar.css("background-image", 'url("' + applicationUrl + "resources/img/language/BTN_LG_" + localeLanguage + '_Actif.png")')
  },
  initLanguageBar: function () {
    CommonCore.isMobile || (languageBar = jQuery("#languageBar"), languageBarComplete = jQuery("#languageBarComplete"), Nigsys.bindClickEvent(languageBar, function (a) {
      a.preventDefault();
      languageBar.hide();
      languageBarComplete.show()
    }), Nigsys.bindClickEvent(languageBarComplete, function (a) {
      a.preventDefault();
      languageBarComplete.hide();
      languageBar.show()
    }), Nigsys.bindClickEvent(jQuery(".languageItemImage"), function (a) {
      a.preventDefault();
      a = a.target.id.replace("languageItemImage_", "");
      a == localeLanguage ? (languageBarComplete.hide(), languageBar.show()) : ImajnetUrl.changeLocale(a)
    }), CommonCore.changeLanguageHTML())
  },
  bindEventsOnGUIModesElements: function () {
    Nigsys.bindClickEvent(jQuery("#windowMode1"), function (a) {
      MapMethodsCore.applyImageLayout({
        index: 0,
        percent: 4, layersContainerPosition: "left", haveDialogs: !0
      })
    });
    Nigsys.bindClickEvent(jQuery("#windowMode2"), function (a) {
      MapMethodsCore.applyImageLayout({index: 1, percent: 2, layersContainerPosition: "bottom"})
    });
    Nigsys.bindClickEvent(jQuery("#windowMode3"), function (a) {
      MapMethodsCore.applyImageLayout(null)
    });
    Nigsys.bindClickEvent(jQuery("#windowMode4"), function (a) {
      MapMethodsCore.applyImageLayout({index: 2, percent: 2, layersContainerPosition: "right"})
    });
    Nigsys.bindClickEvent(jQuery("#windowMode5"), function (a) {
      MapMethodsCore.applyImageLayout({
        index: 3,
        percent: 4, layersContainerPosition: "left"
      })
    })
  },
  initHTMLContainers: function () {
    CommonCore.appendDialogs();
    header = jQuery("#header");
    container = jQuery(".container");
    container.prop("id", "container");
    CommonCore.mapContainer = jQuery("#map");
    "undefined" !== typeof LRSSchematic && (LRSSchematic.container = jQuery("#LRSSchematic"));
    CommonCore.loadingContainer = jQuery("#loadingContainer");
    "map" == CommonCore.page && (CommonCore.mapMainMenuChooseMap = jQuery("#mapMainMenuChooseMap"), CommonCore.mapMainMenuChooseMapItems = jQuery("#mapMainMenuChooseMapItems"),
      CommonCore.mapMainMenuWindowModes = jQuery("#mapMainMenuWindowModes"), CommonCore.mapMainMenuWindowModesItems = jQuery("#mapMainMenuWindowModesItems"), CommonCore.bindEventsOnMapElements(), CommonCore.bindEventsOnGUIModesElements());
    CommonCore.bindCustomRadio($("input:radio"));
    CommonCore.initLanguageBar()
  },
  bindCustomRadio: function (a, b, c) {
    a.iCheck({checkedRadioClass: "checkedRadio", uncheckedRadioClass: "uncheckedRadio"}).on("ifClicked", function (a) {
      "function" === typeof b && b(c, a)
    })
  },
  bindCustomCheckbox: function (a,
                                b, c) {
    a.iCheck({
      checkedCheckboxClass: "checkedCheckbox",
      uncheckedCheckboxClass: "uncheckedCheckbox"
    }).on("ifChanged", function (a) {
      "function" === typeof b && b(c, a)
    })
  },
  updateCustomCheckbox: function (a) {
    a.iCheck("update")
  },
  bindCustomSelect: function (a) {
    a.selectBoxIt()
  },
  refreshCustomSelect: function (a) {
    a && a.data("selectBox-selectBoxIt") && a.data("selectBox-selectBoxIt").refresh()
  },
  activateControl: function (a) {
    "undefined" !== typeof controls && controls && controls[a].activate()
  },
  deactivateControl: function (a) {
    "undefined" !==
    typeof controls && controls && controls[a].deactivate()
  },
  onMapReady: function () {
    CommonCore.isMobile || LRSSchematic.init()
  },
  getLibsPath: function () {
    return CommonCore.isMobile && !MainCore.isWeb ? clientAppUrl + "../resources/" : applicationUrl + "resources/"
  },
  initCommonElements: function () {
    "undefined" !== typeof OpenLayers && (OpenLayers._getScriptLocation = function () {
      if (CommonCore.isMobile && "undefined" !== typeof cordova)return OpenLayers.ImgPath = clientAppUrl + "resources/js/lib/OpenLayers/img/", clientAppUrl + "mobile/lib/OpenLayers/";
      OpenLayers.ImgPath = clientAppUrl + "resources/js/lib/OpenLayers/img/";
      return clientAppUrl + "resources/js/lib/OpenLayers/"
    });
    CommonCore.isMobile && jQuery("#helpButtonLink").prop("href", "http://immergis.fr/help/Manuel_utilisateur_" + themeName + ".pdf");
    if (CommonCore.isMobile || Nigsys.onMobile()) CommonCore.mapMainMenuChooseMap.on("vclick", function (a) {
      CommonCore.mapMainMenuChooseMapItems.is(":visible") ? CommonCore.mapMainMenuChooseMapItems.hide() : CommonCore.mapMainMenuChooseMapItems.show()
    }); else CommonCore.mapMainMenuChooseMap.on("mouseover",
      function (a) {
        CommonCore.canSetBaseLayer() && CommonCore.mapMainMenuChooseMapItems.show()
      }), CommonCore.mapMainMenuChooseMap.on("mouseout", function (a) {
      CommonCore.mapMainMenuChooseMapItems.hide()
    }), CommonCore.mapMainMenuWindowModes.on("mouseover", function (a) {
      CommonCore.mapMainMenuWindowModesItems.show()
    }).on("mouseout", function (a) {
      CommonCore.mapMainMenuWindowModesItems.hide()
    });
    CommonCore.mapContainer.width(Nigsys.getWindowSize().width);
    CommonCore.mapContainer.height(Nigsys.getWindowSize().height)
  },
  getPredefinedZoomLevelsHTML: function () {
    return '\x3cdiv id\x3d"predefinedZoomLevels" class\x3d"imajnetPredefinedZoomLevels"\x3e' +
      (CommonCore.isMobile ? '\x3cdiv id\x3d"predefinedZoomLevelsValue"\x3e' + $.app.map.button.predefinedZoom.title + "\x3c/div\x3e" : "") + '\x3cdiv id\x3d"predefinedZoomDropDownDiv" class\x3d"expandableToolbarDiv imajnetPredefinedZoomDropDownDiv' + (CommonCore.isMobile ? " buttonExpandedDiv" : "") + '"\x3e\x3cdiv id\x3d"predefinedZoomDropDownDivItem1" class\x3d"expandableToolbarDivItem"\x3e' + jQuery.app.map.button.predefinedZoom.title + '\x3c/div\x3e\x3cdiv id\x3d"predefinedZoomDropDownDivItem2" class\x3d"expandableToolbarDivItem"\x3e' +
      jQuery.app.map.button.predefinedZoom.region + '\x3c/div\x3e\x3cdiv id\x3d"predefinedZoomDropDownDivItem3" class\x3d"expandableToolbarDivItem"\x3e' + jQuery.app.map.button.predefinedZoom.department + '\x3c/div\x3e\x3cdiv id\x3d"predefinedZoomDropDownDivItem4" class\x3d"expandableToolbarDivItem"\x3e' + jQuery.app.map.button.predefinedZoom.interTown + '\x3c/div\x3e\x3cdiv id\x3d"predefinedZoomDropDownDivItem5" class\x3d"expandableToolbarDivItem"\x3e' + jQuery.app.map.button.predefinedZoom.town + '\x3c/div\x3e\x3cdiv id\x3d"predefinedZoomDropDownDivItem6" class\x3d"expandableToolbarDivItem"\x3e' +
      jQuery.app.map.button.predefinedZoom.neighborhood + '\x3c/div\x3e\x3cdiv id\x3d"predefinedZoomDropDownDivItem7" class\x3d"expandableToolbarDivItem"\x3e' + jQuery.app.map.button.predefinedZoom.street + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e"
  },
  bindPredefinedZoomLevelsEvents: function () {
    Nigsys.bindClickEvent(jQuery("#predefinedZoomDropDownDivItem1"), function (a) {
      Nigsys.disableEventPropagation(a);
      CommonCore.changePredefinedZoom(jQuery(a.target), "")
    });
    Nigsys.bindClickEvent(jQuery("#predefinedZoomDropDownDivItem2"),
      function (a) {
        Nigsys.disableEventPropagation(a);
        CommonCore.changePredefinedZoom(jQuery(a.target), 9)
      });
    Nigsys.bindClickEvent(jQuery("#predefinedZoomDropDownDivItem3"), function (a) {
      Nigsys.disableEventPropagation(a);
      CommonCore.changePredefinedZoom(jQuery(a.target), 10)
    });
    Nigsys.bindClickEvent(jQuery("#predefinedZoomDropDownDivItem4"), function (a) {
      Nigsys.disableEventPropagation(a);
      CommonCore.changePredefinedZoom(jQuery(a.target), 12)
    });
    Nigsys.bindClickEvent(jQuery("#predefinedZoomDropDownDivItem5"), function (a) {
      Nigsys.disableEventPropagation(a);
      CommonCore.changePredefinedZoom(jQuery(a.target), 14)
    });
    Nigsys.bindClickEvent(jQuery("#predefinedZoomDropDownDivItem6"), function (a) {
      Nigsys.disableEventPropagation(a);
      CommonCore.changePredefinedZoom(jQuery(a.target), 16)
    });
    Nigsys.bindClickEvent(jQuery("#predefinedZoomDropDownDivItem7"), function (a) {
      Nigsys.disableEventPropagation(a);
      CommonCore.changePredefinedZoom(jQuery(a.target), 18)
    });
    Nigsys.onMobile() ? (jQuery("#predefinedZoomLevels").corner("4px"), Nigsys.bindClickEvent(jQuery("#predefinedZoomLevels"),
      CommonCore.showHidePredefinedZoomDropDown)) : jQuery("#predefinedZoomLevels").bind({
      mouseenter: function () {
        ImajnetUI.docking.imajnetMapButtons ? ImajnetUI.showAndPositionInside(ImajnetUI.docking.imajnetMapButtons.mainContainer, jQuery("#predefinedZoomDropDownDiv")) : jQuery("#predefinedZoomDropDownDiv").show()
      }, mouseleave: function () {
        jQuery("#predefinedZoomDropDownDiv").hide()
      }
    });
    Nigsys.browserIsIE7() || Nigsys.browserIsIE8() ? Nigsys.browserIsIE7() && jQuery("#predefinedZoomDropDownDiv").css("position", "relative") :
      jQuery("#predefinedZoomDropDownDiv").corner()
  },
  initToolbars: function () {
    "map" == CommonCore.page && (CommonCore.isMobile || (ImajnetMapImplementation.createMapControls(), CommonCore.bindPredefinedZoomLevelsEvents()), CommonCore.addMapCommonControls())
  },
  initImajnetElements: function () {
    CommonCore.devMode && (CommonCore.bingApiKey = "Agn_cMsUjKBHOmbzzQmjejOgWenze-tP8Uu4moKwbp0-_kXf5oaMzCidZKDWFDaZ");
    CommonCore.initCommonElements();
    jQuery(window).resize(function (a, c) {
      if (c)return !1;
      CommonCore.applyContainerDimension(null,
        !0)
    });
    var a = {
      serverUrl: applicationDomain + "service",
      cartographicServerUrl: Nigsys.removeLastCharacter(applicationDomain),
      username: null,
      password: null,
      containerId: container.prop("id"),
      map: map,
      activateImajnet: !0,
      clipboardActive: !0,
      goToClosestPointOfInterest: !0,
      sessionType: "FULL"
    };
    Imajnet.init(a).done(function () {
      ImajnetUserSettings.mapExtent && "undefined" !== typeof ThematicGroupsTreeCore && (CommonCore.groupBounds = CommonCore.getMapBoundingBox(CommonCore.wgs84Crs, ImajnetUserSettings.mapExtent.longitudeWest,
        ImajnetUserSettings.mapExtent.latitudeSouth, ImajnetUserSettings.mapExtent.longitudeEast, ImajnetUserSettings.mapExtent.latitudeNorth))
    })
  },
  initPlatform: function () {
    ImageControler.currentGraphic = Graphic;
    CommonCore.initCommonElements();
    CommonCore.initMap();
    jQuery("#optionsInMenu").show();
    (Nigsys.browserIsIE7() || Nigsys.browserIsIE8()) && jQuery("#optionsInMenu").css("width", "72px");
    jQuery(window).resize(function (a, b) {
      if (a.target && (a.target.className && -1 !== a.target.className.indexOf("ui-dialog") || "mapAndToolbarContainer" ==
        a.target.id || "mapAndToolbar" == a.target.id || "LRSSchematic" == a.target.id))return !1;
      MapMethodsCore.applyImageLayout(ApplicationStorage.readObject("layout"))
    });
    $(document).keydown(function (a) {
      1 != a.ctrlKey || "107" != a.which && "109" != a.which && "187" != a.which && "189" != a.which || a.preventDefault()
    });
    $(window).on("mousewheel DOMMouseScroll", function (a) {
      1 == a.ctrlKey && a.preventDefault()
    });
    CommonCore.isMobile || (jQuery("#predefinedZoomLevels").corner("bevel tr"), jQuery(document).keyup(function (a) {
      27 == a.keyCode && (CommonCore.buttonClicked =
        "")
    }))
  },
  setBackEndContainerHeight: function () {
    if (isImajnetMode() || "" == CommonCore.page || "map" != CommonCore.page) {
      var a = Nigsys.getWindowSize();
      container.height(a.height - CommonCore.bodyMargins - 125)
    }
  },
  addBeforeUnloadEvent: function (a, b) {
    jQuery(window).on("beforeunload", {type: a}, b)
  },
  bindResizeBackendContainer: function () {
    CommonCore.setBackEndContainerHeight();
    jQuery(window).resize(function (a, b) {
      CommonCore.setBackEndContainerHeight()
    })
  },
  bindCommonEvents: function () {
    CommonCore.addBeforeUnloadEvent(null, function (a) {
      if (isImajnetMode()) ImajnetPolyligne.onFinish();
      else"undefined" !== typeof ImajnetProtocol && ImajnetProtocol.imajnetLogout(!1)
    })
  },
  onPlatformContextMenu: function (a) {
    CommonCore.onMapRightClick(a);
    CommonCore.currentEditorActiveControl && -1 !== CommonCore.currentEditorActiveControl.id.indexOf("SplitFeature") && (CommonCore.currentEditorActiveControl.deactivate(), CommonCore.currentEditorActiveControl.activate())
  },
  initCookieWarning: function (a) {
    var b = ApplicationStorage.readObject("cookieWarning", a);
    if (!b || "0" == b) {
      jQuery("body").append(Nigsys.getCookieWarningNotificationInfoOkHTML());
      var b = Nigsys.getWindowSize().width, c = 80 * b / 100;
      jQuery("#cookieWarningNotification").width(c).css("left", b / 10);
      Nigsys.bindClickEvent(jQuery("#cookieWarningNotificationOk"), function () {
        ApplicationStorage.writeObject("cookieWarning", "1", a);
        jQuery("#cookieWarningNotification").remove()
      })
    }
  },
  initCommonApplication: function () {
    CommonCore.initProj4js();
    CommonCore.initHTMLContainers();
    CommonCore.bindCommonEvents();
    container && 0 !== container.length && container.append('\x3cdiv class\x3d"popup"\x3e\x3c/div\x3e');
    Nigsys.bindOnHashChange();
    isImajnetMode() ? ("undefined" !== typeof OpenLayers && (OpenLayers.Map.prototype.zoom = ImajnetUrl.DEFAULT_ZOOM_LEVEL), container.css("background-image", 'url("' + clientAppUrl + 'ImajnetLib/img/imajnetLogoLargeBlue.png")'), Nigsys.showImajnetLoading(), CommonCore.initImajnetElements(), CommonCore.isMobile || (CommonCore.initMap(), ImajnetMap.map = map), jQuery("body").bind("click", function (a) {
      Nigsys.errorNotification && Nigsys.errorNotification.close()
    }), jQuery("#map").bind("contextmenu", function (a) {
      CommonCore.onMapRightClick(a);
      return !1
    })) : (CommonCore.isMobile ? ImajnetProtocol.imajnetLoginSuccess = function () {
    } : (CommonCore.initCookieWarning(CommonCore.userInfo.username), Nigsys.browserIsIE7() && footer.height(footer.height() + 9), jQuery(document).bind("mousedown selectstart", function (a) {
      return jQuery(a.target).is("input, textarea, select, option")
    })), Nigsys.bindClickEvent(jQuery(document), CommonCore.showHideDropDownDiv), Nigsys.bindClickEvent($("#mapMainMenuContributor"), function () {
      MainMethodsCore.goToPage("/platform-web/mvc/pages/thematicgroups.html")
    }),
      Nigsys.bindClickEvent($("#mapMainMenuAdministration"), function () {
        MainMethodsCore.goToPage("/platform-web/mvc/pages/administration.html")
      }), Nigsys.bindClickEvent($("#signOutButton"), function () {
      MainMethodsCore.goToPage("/platform-web/mvc/pages/logout.html")
    }), Nigsys.bindClickEvent($("#contributorMapLinkImage"), function () {
      MainMethodsCore.goToPage("/platform-web/mvc/pages/map.html")
    }), "map" == CommonCore.page ? jQuery("#map").bind("contextmenu", function (a) {
      CommonCore.onPlatformContextMenu(a);
      return !1
    }) : CommonCore.bindResizeBackendContainer(),
    "undefined" !== typeof MapCore && MapCore.initParseObjects())
  },
  beforeCloseDialog: function (a, b) {
    if ("popup" == a)return ThematicGroupsTree.closePopup(!0, Main.layerSettingsIsGeoserverLayer), !1;
    if ("popupInfo" == a || "popupSearch" == a || "popupNewSearchFromExisting" == a) {
      if (MainMethodsCore.haveUnsavedData(MainMethodsCore.ASK_FOR_SAVE_GRID_EDIT_FEATURE) && !FeaturesListing.isListingMode(a))return MainMethodsCore.checkIfUnsavedFeaturesForDialog(a, MainMethodsCore.ASK_FOR_SAVE_GRID_EDIT_FEATURE, {
          type: a,
          isFromConfirmation: !0
        },
        FeaturesListing.saveFeaturesFromGrid, !0), !1
    } else {
      if ("popupStyleEditor" == a)return StyleEditor.checkIfUnsavedFeatures(!0), !1;
      if ("popupInfoEditFeature" == a)return Feature.closePopupInfoEditFeature(!0), !1;
      if ("popupAddFeatureOnDraw" == a)return FeatureEdit.closePopupAddFeatureOnDraw(!0), !1;
      if ("editLayerMetadataPopup" == a)return ThematicGroupsTree.closeMetadataPopup(!0, b), !1;
      if ("editLayerMetadataEditValuesPopup" == a)return ThematicGroupsTree.closeMetadataValuesPopup(!0, b), !1;
      "popupImajnet" == a && ImajnetAPI.imajnetImage &&
      (ImajnetAPI.imajnetImage.onload = null, ImajnetAPI.imajnetImage = null)
    }
    Dialog.hideDialog(a, !0);
    return !0
  },
  bindAjaxError: function () {
    jQuery(document).ajaxError(function (a, b, c, e) {
      if (isImajnetMode()) -1 !== c.url.indexOf("/service/api/user/userdetails") || 401 != b.status && 403 != b.status || location.reload(); else {
        if (-1 !== c.url.indexOf("/service/api/user/userdetails") || -1 !== c.url.indexOf(applicationUrl + "app/user"))return !1;
        -1 !== c.url.indexOf("springlogin") ? Nigsys.showLoginError(Nigsys.getStatusErrorText(401 == b.status ?
          403 : b.status)) : -1 !== c.url.indexOf(geoserverUrl + "j_spring_security_check") ? 404 == b.status && GeoserverSecurity.geoserverLogin(!1) : 403 == b.status && -1 !== c.url.indexOf("/service/") && (MainMethodsCore.resetInitImajnetDeferred(), ImajnetUser.resetUserData(!1), console.error("Imajnet is logged out."), MainMethodsCore.initImajnet(!1))
      }
    })
  },
  platformOverwriteImajnetFunctions: function () {
    "undefined" !== typeof ImajnetUI && (ImajnetUI.getImageContainerDimesions = function () {
      var a = this.imajnetImageContainerSize;
      if (!ApplicationStorage.readObject("layout")) {
        if (MainCore.mapAndToolbarContainer.height()) {
          var b =
            ImajnetUI.getImageAspectRatio();
          b && (a.height = MainCore.mapAndToolbarContainer.height() - 50, a.width = a.height ? parseInt(a.height * b) - 2 : Nigsys.browserIsIE7() ? 480 : null)
        }
        a.height < this.imajnetImageContainerSize.height && (a.height = this.imajnetImageContainerSize.height);
        a.width < this.imajnetImageContainerSize.width && (a.width = this.imajnetImageContainerSize.width)
      }
      return a
    }, ImajnetUI.onImageResize = function () {
      if (ImajnetUI.imageContainer) {
        var a = 0, b = 0, a = ImajnetUI.imageContainer.width(), b = ImajnetUI.imageContainer.height();
        ImajnetUI.resizeImageElements(a, b, !1)
      }
    }, ImajnetUI.onKeyDown = function (a) {
      CommonCore.imajnetImageIsOpen() && ("imajnetPOI" == a.target.id && (a.preventDefault(), a.stopImmediatePropagation(), a.stopPropagation()), "undefined" !== typeof isImajnetMode && isImajnetMode() && "HTML" != a.target.tagName && "BODY" != a.target.tagName && "DIV" != a.target.tagName && "IMG" != a.target.tagName || ImajnetUI.doOnKeyDown(a))
    });
    "undefined" !== typeof ImajnetAPI && (ImajnetAPI.positionOrderReceived = function (a) {
      CommonCore.imajnetImageIsOpen() && ImajnetAPI.doOnPositionOrderReceived(a)
    });
    "undefined" !== typeof ImajnetMap && (ImajnetMap.onMapClick = function (a, b) {
      a && MainMethodsCore.initImajnet(!0).done(function () {
        ImajnetMap.doOnMapClick(a, b)
      }).fail(function () {
        Imajnet.clickMode == Imajnet.CLICK_MODE_ORIENTED_IMAGES && ImajnetClickMode.orientedImagesError()
      })
    });
    "undefined" !== typeof LRSRequest && (LRSRequest.getRoad = function (a, b, c, e) {
      var d = $.Deferred();
      !CommonCore.isMobile || app.isOnline() && !appSettings.settings.offlineMode ? MainMethodsCore.initImajnet(!1).done(function () {
        LRSRequest.onGetRoad(a, b,
          c, e).done(function (a, b) {
          d.resolve(a, b)
        }).fail(function () {
          d.reject(null, e)
        })
      }).fail(function () {
        LRSRequest.onGetRoad(a, b, c, e).done(function (a, b) {
          d.resolve(a, b)
        }).fail(function () {
          d.reject(null, e)
        })
      }) : fileSystem.readJsonFile(fileSystem.LRSROADS_DIR + "/" + a + ".json", !1).done(function (a, c) {
        "function" === typeof b && b({pr: a}, e);
        d.resolve()
      }).fail(function (a) {
        "function" === typeof c && c(null, e);
        d.resolve(null)
      });
      return d.promise()
    }, LRSRequest.getLRSRoads = function (a, b, c, e) {
      var d = jQuery.Deferred();
      !CommonCore.isMobile ||
      app.isOnline() && !appSettings.settings.offlineMode ? MainMethodsCore.initImajnet(!1).done(function () {
        LRSRequest.onGetLRSRoads(a, b, c, e).done(function (a, b) {
          d.resolve(a, b)
        }).fail(function () {
          d.reject()
        })
      }).fail(function () {
        if ("function" === typeof LRSRequest.onGetLRSRoadsError) LRSRequest.onGetLRSRoadsError(b);
        "function" === typeof e && e(b);
        d.reject()
      }) : fileSystem.readJsonFile(fileSystem.getLRSRoadsFilePath(), !1).done(function (a, e) {
        "function" === typeof c && c({roads: a}, b);
        d.resolve()
      }).fail(function (a) {
        "function" ===
        typeof e && e(null, b);
        d.resolve(null)
      });
      return d.promise()
    }, LRSRequest.getLRSForPoints = function (a, b, c) {
      var e = jQuery.Deferred();
      MainMethodsCore.initImajnet(!1).done(function () {
        LRSRequest.getLRSForPointRequest(a, b, c).done(function (a) {
          e.resolve(a)
        }).fail(function () {
          e.reject()
        })
      }).fail(function () {
        e.reject()
      });
      return e.promise()
    });
    "undefined" !== typeof ImajnetUrl && (ImajnetUrl.goToLocation = function (a) {
      if (isImajnetMode()) this.onGoToLocation(a); else"map" == CommonCore.page && MainMethodsCore.initImajnet(!0).done(function () {
        ImajnetUrl.onGoToLocation(a)
      })
    });
    "undefined" !== typeof Imajnet && (Imajnet.onImageResize = function () {
      if (ImajnetUI.imageContainer) {
        var a = ImajnetUI.imageContainer.width(), b = ImajnetUI.imageContainer.height();
        ImajnetUI.resizeImageElements(a, b, !0)
      }
    });
    "undefined" !== typeof Address && (Address.onAddressClick = function (a, b) {
      MainMethodsCore.initImajnet(!0).done(function () {
        Address.zoomToCoordinates(a, b);
        ImajnetAPI.getClosestPosition(b, a, ImajnetSettings.rangeAddress, null, null, {hideIfNoImage: !1})
      }).fail(function () {
        ImajnetPlugin.centerMapToPosition({
          lon: a,
          lat: b
        })
      })
    });
    "undefined" !== typeof ImajnetUser && (ImajnetUser.resetUserData = function (a) {
      a && MainMethodsCore.resetInitImajnetDeferred();
      ImajnetUser.data = null
    })
  },
  imajnetImageIsOpen: function () {
    var a = ApplicationStorage.readObject("layout");
    return a && 0 != a.index || Dialog.dialogIsOpen(ImajnetUI.imageContainerId)
  },
  onReady: function () {
    Nigsys.initNotification();
    CommonCore.bindAjaxError();
    if (isImajnetMode()) {
      if (CommonCore.initCommonApplication(), Nigsys.browserIsIE7() || Nigsys.browserIsIE8() || Nigsys.browserIsIE9()) OpenLayers.Format.XML.prototype.getElementsByTagNameNS =
        function (a, b, c) {
          var e = [];
          if (!a)return e;
          if (a.getElementsByTagNameNS) e = a.getElementsByTagNameNS(b, c); else {
            a = a.getElementsByTagName("*");
            for (var d, f, g = 0, h = a.length; g < h; ++g)if (d = a[g], f = d.prefix ? d.prefix + ":" + c : c, "*" == c || f == d.nodeName) "*" != b && b != d.namespaceURI || e.push(d)
          }
          return e
        }
    } else CommonCore.platformOverwriteImajnetFunctions(), "undefined" !== typeof MainCore && MainCore.getUser();
    CommonCore.functionsOverrides()
  },
  deactivateImajnetButton: function () {
    ImajnetUI.disableToolControls();
    ImajnetUI.deactivateImajnetToolbarButtons();
    CommonCore.deactivateMapClick();
    ImajnetPlugin.unregisterMapEvents();
    ImajnetUI.removeActiveState(ImajnetUI.btnImajnetPluginDiv)
  },
  activateImajnetButton: function () {
    "map" == CommonCore.page && ("undefined" !== typeof ThematicGroupsTree && (ThematicGroupsTree.onTopGroupLayersName = [ImajnetMap.layerName, ImajnetMap.imajnetSurveyTraceLayerName, ImajnetMap.imajnetDragFeaturesLayerName, ImajnetMap.allWFSName, ImajnetMap.imajnetOrientationLayerName]), Imajnet.imajnetIsActive() && (CommonCore.disableCommonControls(), Imajnet.activateImajnetControl(ImajnetUI.btnClosestImageDiv,
      "closestImage"), CommonCore.activateMapClick()), CommonCore.updateOverviewMap(), jQuery("#predefinedZoomLevelsValue").html(jQuery.app.map.button.predefinedZoom.title), ImajnetUI.addActiveState(ImajnetUI.btnImajnetPluginDiv))
  }
};
CommonCore.page = "";
var header = null, footer = null, languageBar = null, lastSegmentMeasurement = 0, lon = 50, lat = 0, zoom = 0,
  panel = null, srs = null, extent = null, defaultZoomLevel = 20, groupBoundingBox = null, mapNavigation,
  dialogMargins = 0, imajnetImageResized = !1, mapResized = !1, snapTolerance = 1,
  imajnetImageContainerDimensionPercentage = {width: .5, height: 1},
  mapContainerDimensionPercentage = {width: .5, height: 1};
function showHideSearchDropDown () {
  jQuery("#searchDropDownDiv").is(":visible") ? (jQuery("#searchDropDownDiv").hide(), CommonCore.buttonClicked = "") : ImajnetUI.docking.imajnetButtons ? ImajnetUI.showAndPositionInside(ImajnetUI.docking.imajnetButtons.mainContainer, jQuery("#searchDropDownDiv")) : jQuery("#searchDropDownDiv").show()
}
function isImajnetMode () {
  return themeName == IMAJNET_THEME_NAME
}
function getContainerMarginTop () {
  return parseInt(container.css("margin-top").replace("px", ""))
}
function getTimeStamp () {
  var b = new Date;
  return [b.getHours(), b.getMinutes(), b.getSeconds(), b.getMilliseconds()].join(":")
}
jQuery(function () {
  Imajnet.imajnetPath = rootUrl + "ImajnetLib/";
  Imajnet.setLanguage(localeLanguage).done(function () {
    CommonCore.onReady()
  })
});
var Common = {
  onSearchButtonPress: function () {
    if (ImajnetUI.docking.imajnetButtons) {
      var b = null;
      (b = isImajnetMode() ? ImajnetUI.docking.imajnetButtons : ImajnetUI.docking.mapToolsButtons) && ImajnetUI.showAndPositionInside(b.mainContainer, jQuery("#searchDropDownDiv"))
    } else jQuery("#searchDropDownDiv").show()
  }, bindSearchButtonEvents: function () {
    Nigsys.browserIsIE7() || Nigsys.browserIsIE8() ? Nigsys.browserIsIE7() && jQuery("#searchDropDownDiv").css("position", "relative") : jQuery("#searchDropDownDiv").corner();
    if (Nigsys.onMobile()) jQuery("#searchDropDownButton").on("vclick",
      function (b) {
        b.preventDefault();
        if (jQuery("#searchDropDownDiv").is(":visible")) jQuery("#searchDropDownDiv").hide(); else Common.onSearchButtonPress()
      }); else jQuery("#searchDropDownButton").on({
      mouseenter: function () {
        Common.onSearchButtonPress()
      }, mouseleave: function () {
        jQuery("#searchDropDownDiv").hide()
      }
    })
  }
};
ImajnetPlugin.imajnetLogoutComplete = function () {
  isImajnetMode() && location.reload()
};
ImajnetPlugin.imajnetLoginSuccess = function () {
  isImajnetMode() ? ImajnetWeb.imajnetLoginSuccess() : (ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showRoads = !0, ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showPR = !0, ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showLabels = !0, jQuery("#" + ImajnetUI.newsContainerId).remove())
};
ImajnetPlugin.imajnetLoginError = function (b) {
  if (isImajnetMode()) {
    Nigsys.hideImajnetLoading();
    var a = "";
    ImajnetProtocol.firstLoginTry ? (ImajnetProtocol.firstLoginTry = !1, Nigsys.showLoginNotification(Nigsys.getLoginWithHTML()), "undefined" !== typeof isMobile && isMobile && Main.readStorageObject("sessionExpired") && Main.writeStorageObject("sessionExpired", null)) : a = ImajnetProtocol.getErrorMessage(b);
    Nigsys.showLoginError(a);
    "undefined" !== typeof ImajnetUI && jQuery(document).bind("keydown", ImajnetUI.clickLogin);
    jQuery("#imajnetLoginButton").prop("disabled",
      !1);
    jQuery("#imajnetLoginRequestAccess").prop("disabled", !1)
  } else"undefined" !== typeof ImajnetUI && ImajnetUI.showNotificationInfoOk("", jQuery.imajnet.imajnetNotAvailable + "\x3cbr/\x3e" + ImajnetProtocol.getErrorMessage(b), "center")
};
var imajnetZoomOnScrollHandler = ImajnetZoom.zoomOnScrollHandler;
ImajnetZoom.zoomOnScrollHandler = function (b, a) {
  imajnetZoomOnScrollHandler(b, a) || (ImajnetMapImplementation.deactivateMapNavigation(), isImajnetMode() || CommonCore.removeFeatureInfo())
};
if ("undefined" !== typeof ImajnetSettings) {
  var imajnetSettingsSaveSettings = ImajnetSettings.saveSettings;
  ImajnetSettings.saveSettings = function () {
    imajnetSettingsSaveSettings();
    CommonCore.setScaleUnit()
  }
}
ImajnetUrl.applyUrlParams = function (b) {
  var a = ImajnetUrl.readUrl(b);
  a[this.LOCALE_URL_PARAM_NAME] && a[this.LOCALE_URL_PARAM_NAME] != this.urlParams[this.LOCALE_URL_PARAM_NAME] && ImajnetUrl.changeLocale(a[this.LOCALE_URL_PARAM_NAME]);
  a[this.MAP_URL_PARAM_NAME] || isImajnetMode() && (a[this.MAP_URL_PARAM_NAME] = Nigsys.getCookie("IMAJNET", "SETTINGS_MAP_TYPE"));
  if (a[this.MAP_URL_PARAM_NAME] != this.urlParams[this.MAP_URL_PARAM_NAME]) {
    this.urlParams[this.MAP_URL_PARAM_NAME] = a[this.MAP_URL_PARAM_NAME];
    try {
      window["set" +
      this.urlParams[this.MAP_URL_PARAM_NAME] + "BaseLayer"]()
    } catch (d) {
    }
    this.changeUrlParam(this.MAP_URL_PARAM_NAME, this.urlParams[this.MAP_URL_PARAM_NAME])
  }
  isImajnetMode() || (a[this.WORKSPACE_URL_PARAM_NAME] && a[this.WORKSPACE_URL_PARAM_NAME] != this.urlParams[this.WORKSPACE_URL_PARAM_NAME] && (MainMethodsCore.onSelectWorkspaceChanged(a[this.WORKSPACE_URL_PARAM_NAME], ThematicGroupsTreeCore.onWorkspaceChange) ? MainCore.selectWorkspace.val(a[this.WORKSPACE_URL_PARAM_NAME]) : this.changeUrlParam(this.WORKSPACE_URL_PARAM_NAME,
    MainMethodsCore.getCurrentWorkspace())), a[this.GROUP_URL_PARAM_NAME] && a[this.GROUP_URL_PARAM_NAME] != this.urlParams[this.GROUP_URL_PARAM_NAME] && (this.urlParams[this.GROUP_URL_PARAM_NAME] = a[this.GROUP_URL_PARAM_NAME], ThematicGroupsTreeCore.fillGroup(a[this.GROUP_URL_PARAM_NAME], {noZoomToExtent: !1})), "map" == CommonCore.page && a[this.POSITION_URL_PARAM_NAME] && a[this.POSITION_URL_PARAM_NAME] != this.urlParams[this.POSITION_URL_PARAM_NAME] && this.applyCenterFromUrl(c));
  if (a[this.ZOOM_URL_PARAM_NAME] != this.urlParams[this.ZOOM_URL_PARAM_NAME]) {
    this.urlParams[this.ZOOM_URL_PARAM_NAME] =
      a[this.ZOOM_URL_PARAM_NAME];
    var c = parseInt(this.urlParams[this.ZOOM_URL_PARAM_NAME]);
    isImajnetMode() && (!ImajnetUrl.urlParams[ImajnetUrl.MAP_URL_PARAM_NAME] && c < CommonCore.numZoomLevels || ImajnetUrl.urlParams[ImajnetUrl.MAP_URL_PARAM_NAME] && 18 > c) && c++;
    ImajnetPlugin.zoomMapTo(c)
  }
  a[this.SURVEY_TRACE_URL_PARAM_NAME] != this.urlParams[this.SURVEY_TRACE_URL_PARAM_NAME] && (this.urlParams[this.SURVEY_TRACE_URL_PARAM_NAME] = a[this.SURVEY_TRACE_URL_PARAM_NAME], a[this.SURVEY_TRACE_URL_PARAM_NAME] == this.SURVEY_TRACE_ACTIVE_PARAM_VALUE ?
    SurveyTrace.surveyTraceIsActive = !0 : b && (SurveyTrace.surveyTraceIsActive = !1, ImageControler.currentSurveyTrace.hideTrace()));
  a[this.IMAGE_URL_PARAM_NAME] ? (this.urlParams[this.IMAGE_URL_PARAM_NAME] = a[this.IMAGE_URL_PARAM_NAME], b = {id: this.urlParams[this.IMAGE_URL_PARAM_NAME]}, ImajnetZoom.left = -1, Nigsys.showLoading(ImajnetUI.imageContainer), ImajnetAPI.setImajnetImage({position: b}), ImajnetUrl.changeUrlParam(this.IMAGE_URL_PARAM_NAME, "")) : a[this.LOCATION_URL_PARAM_NAME] && a[this.LOCATION_URL_PARAM_NAME] !=
    this.urlParams[this.LOCATION_URL_PARAM_NAME] && (this.urlParams[this.LOCATION_URL_PARAM_NAME] = a[this.LOCATION_URL_PARAM_NAME], this.applyImajnetLocation(this.urlParams[this.LOCATION_URL_PARAM_NAME]))
};
ImajnetUser.getUsername = function () {
  return "undefined" !== typeof CommonCore.userInfo && CommonCore.userInfo && CommonCore.userInfo.username ? CommonCore.userInfo.username : ImajnetUser.data ? ImajnetUser.data.login : ""
};
ImajnetUser.getEmail = function () {
  return "undefined" !== typeof CommonCore.userInfo && CommonCore.userInfo && CommonCore.userInfo.email ? CommonCore.userInfo.email : ImajnetUser.data ? ImajnetUser.data.email : ""
};
ImajnetClickMode.orientedImagesReceived = function (b) {
  ImajnetMap.hideImajboxMarker();
  ImajnetMap.hideOrientation();
  b = JSON.parse(b);
  b.positions ? (ImajnetClickMode.positions = b.positions, ImajnetClickMode.addClickMode(!0)) : Dialog.dialogIsOpen(ImajnetUI.imageContainerId) && (ImajnetZoom.left = -1, Nigsys.showLoading(ImajnetUI.imageContainer), ImajnetAPI.setImajnetImage({position: null}));
  ImajnetClickMode.redrawClickedPointOnMap()
};
ImajnetUI.imajnetImageLayerMouseOut = function (b) {
  "function" === typeof ImajnetMapImplementation.activateMapNavigation && ImajnetMapImplementation.activateMapNavigation();
  Nigsys.browserIsIE()
};
ImajnetLRSSettings.updateSearch = function () {
};
var imajnetLRSSettingsupdateReferential = ImajnetLRSSettings.updateReferential;
ImajnetLRSSettings.updateReferential = function () {
  imajnetLRSSettingsupdateReferential();
  "undefined" !== typeof Feature && Feature.updateReferentialSettings()
};
Imajnet.deactivateImajnetControl = function (b, a) {
  if (!Imajnet.imajnetIsActive())return !1;
  "closestImage" == a ? (Imajnet.clickMode = null, "undefined" !== typeof ImajnetMapImplementation && "function" === typeof ImajnetMapImplementation.activateHoverAndClickFeature && ImajnetMapImplementation.activateHoverAndClickFeature()) : "clickMode" == a ? (ImajnetClickMode.hideOrientedImages(), Imajnet.clickMode = null, "undefined" !== typeof ImajnetMapImplementation && "function" === typeof ImajnetMapImplementation.activateHoverAndClickFeature &&
  ImajnetMapImplementation.activateHoverAndClickFeature()) : "showClipboard" == a ? (ImajnetUI.hideItem(ImajnetUI.clipboardExportContainerId), ImajnetUI.hideItem(ImajnetUI.clipboardContainerId)) : "searchLRS" == a && LRS.closeLRSDialog();
  ImajnetUI.removeActiveState(b)
};
var imajnetLRSSettingssaveLRSSettings = ImajnetLRSSettings.saveLRSSettings;
ImajnetLRSSettings.saveLRSSettings = function () {
  imajnetLRSSettingssaveLRSSettings();
  if ("undefined" !== typeof ImajnetMapImplementation && "function" === typeof ImajnetMapImplementation.onSaveLRSSettings) ImajnetMapImplementation.onSaveLRSSettings()
};
FlatGraphic.drawFeatureImage = function (b) {
  var a = jQuery('div[id\x3d"photogrammetryItem_' + b.featureId + '"]');
  if (b && 0 != a.length) {
    var c = null;
    "undefined" !== typeof Feature && "undefined" !== typeof Feature.featuresData && "undefined" !== typeof MainCore && "function" === typeof CommonCore.getLayerNameWithoutWorkspace && Feature.featuresData[CommonCore.getLayerNameWithoutWorkspace(b.featureId)] && (c = Feature.featuresData[CommonCore.getLayerNameWithoutWorkspace(b.featureId)].data);
    FlatGraphic.onDrawFeatureImage(a, b, c)
  }
};
CommonCore.mapScaleControl = null;
CommonCore.wgs84Sphere = new ol.Sphere(6378137);
CommonCore.emptyBaseLayer = new ol.layer.Tile({
  name: jQuery.app.map.emptyBaseLayer,
  isBaseLayer: !0,
  customIdentifier: "emptyBaseLayer"
});
CommonCore.dragAndDropLayerCounter = 0;
CommonCore.dragAndDropLayers = [];
CommonCore.getMapBoundingBox = function (a, b, c, d, e) {
  map.getView().calculateExtent(map.getSize())
};
CommonCore.getOSMLayer = function () {
  return new ol.layer.Tile({
    name: jQuery.imajnet.map.OSM,
    source: new ol.source.OSM,
    isBaseLayer: !0,
    customIdentifier: ImajnetUrl.OSM_LAYER_PARAM_NAME
  })
};
CommonCore.getOCMLayer = function () {
  return new ol.layer.Tile({
    name: jQuery.imajnet.map.OCM,
    source: new ol.source.XYZ({
      url: "https://{a-c}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey\x3d25dd076bbef44fab8c6a8e0b3642c257",
      crossOrigin: null
    }),
    isBaseLayer: !0,
    customIdentifier: ImajnetUrl.OCM_LAYER_PARAM_NAME
  })
};
CommonCore.getOTMLayer = function () {
  return new ol.layer.Tile({
    name: jQuery.imajnet.map.OCM,
    source: new ol.source.XYZ({
      url: "https://{a-c}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey\x3d25dd076bbef44fab8c6a8e0b3642c257",
      crossOrigin: null
    }),
    isBaseLayer: !0,
    customIdentifier: ImajnetUrl.OTM_LAYER_PARAM_NAME
  })
};
CommonCore.getBingLayer = function (a) {
  var b = "";
  a == CommonCore.BING_TYPE_ROAD ? b = ImajnetUrl.BING_ROAD_LAYER_PARAM_NAME : a == CommonCore.BING_TYPE_SATELLITE ? b = ImajnetUrl.BING_SATELLITE_LAYER_PARAM_NAME : a == CommonCore.BING_TYPE_HYBRID && (b = ImajnetUrl.BING_HYBRID_LAYER_PARAM_NAME);
  return new ol.layer.Tile({
    name: jQuery.imajnet.map["bing" + a],
    source: new ol.source.BingMaps({key: CommonCore.bingApiKey, imagerySet: a}),
    isBaseLayer: !0,
    customIdentifier: b
  })
};
CommonCore.onFeatureMouseMove = function (a) {
  if (a && (CommonCore.lastMouseCoordinateX != a.originalEvent.offsetX || CommonCore.lastMouseCoordinateY != a.originalEvent.offsetY)) {
    CommonCore.lastMouseCoordinateX = a.originalEvent.offsetX;
    CommonCore.lastMouseCoordinateY = a.originalEvent.offsetY;
    var b = CommonCore.mapContainer.offset(), c = {
      offsetX: CommonCore.lastMouseCoordinateX,
      offsetY: CommonCore.lastMouseCoordinateY,
      clientX: b.left + CommonCore.lastMouseCoordinateX,
      clientY: b.top + CommonCore.lastMouseCoordinateY
    };
    a = ol.proj.transform(a.coordinate,
      ImajnetMap.map.projection, ImajnetMapImplementation.imajnetProjection);
    LRSRequest.getLRSForPoints(Array({lon: a[0], lat: a[1], height: 0}), !0, !0).done(function (a) {
      if (a.linearPosition) {
        var b = a.linearPosition;
        if (mouseOverRoadName) {
          for (var f = !1, g = 0; g < a.linearPosition.length; g++)a.linearPosition[g].road.name == mouseOverRoadName && (b = a.linearPosition[g], f = !0);
          if (!f)return
        } else a.linearPosition[0] && (b = a.linearPosition[0]);
        jQuery("#popupFeatureInfoLRS").html(CommonCore.getLRSFieldsForPopup(b));
        jQuery("#popupFeatureInfoLRSPR").html(CommonCore.getLRSFieldsForPopupPR(b));
        jQuery("#popupFeatureInfoLRSPRAbs").html(CommonCore.getLRSFieldsForPopupPRAbs(b));
        Nigsys.positionExistingElement(c, null, "map", jQuery(".popupFeatureInfo"))
      }
    }).fail(function () {
      jQuery("#popupFeatureInfoLRS").html("");
      jQuery("#popupFeatureInfoLRSPR").html("");
      jQuery("#popupFeatureInfoLRSPRAbs").html("")
    })
  }
};
CommonCore.registerFeatureMouseMove = function (a) {
  CommonCore.unregisterFeatureMouseMove();
  mouseOverRoadName = a;
  CommonCore.onFeatureMouseMove();
  map.on("pointermove", CommonCore.onFeatureMouseMove)
};
CommonCore.unregisterFeatureMouseMove = function () {
  map.un("pointermove", CommonCore.onFeatureMouseMove)
};
CommonCore.addPanZoomBarEvents = function () {
};
CommonCore.zoomToExtent = function (a, b, c, d, e) {
  console.error("function not implemented")
};
CommonCore.formatMeasurementLength = function (a, b) {
  var c = 0;
  if (b)for (var d = a.getCoordinates(), c = 0, e = map.getView().getProjection(), f = 0, g = d.length - 1; f < g; ++f)var h = ol.proj.transform(d[f], e, "EPSG:4326"), k = ol.proj.transform(d[f + 1], e, "EPSG:4326"), c = c + CommonCore.wgs84Sphere.haversineDistance(h, k); else c = a.getLength();
  return Nigsys.getHighestUnit(LRS.transformFromMeters(c, Nigsys.getMeasurementUnit()), Nigsys.getMeasurementUnit())
};
CommonCore.formatMeasurementSuface = function (a, b) {
  var c;
  b ? (c = a.clone().transform(map.getView().getProjection(), "EPSG:4326").getLinearRing(0).getCoordinates(), c = Math.abs(CommonCore.wgs84Sphere.geodesicArea(c))) : c = a.getArea();
  return Nigsys.getHighestSquareUnit(LRS.transformFromSquareMeters(c, Nigsys.getMeasurementUnit()), Nigsys.getMeasurementUnit())
};
CommonCore.handleLineMeasurements = function (a) {
  var b = a.feature.getGeometry(), c = b.getCoordinates(),
    c = new ol.geom.LineString([c[c.length - 2], c[c.length - 1]]);
  jQuery("#lastSegmentMeasurementText").html(CommonCore.formatMeasurementLength(c, !0));
  jQuery("#popupMeasureContentText").html(CommonCore.formatMeasurementLength(b, !0));
  lastSegmentMeasurement = CommonCore.currentMeasurement = 0;
  CommonCore.lineMeasureComponentsLength = 2;
  a.preventDefault()
};
CommonCore.handleLinePartialMeasurements = function (a) {
  var b = a.getCoordinates();
  CommonCore.currentMeasurement = CommonCore.formatMeasurementLength(a, !0);
  jQuery("#popupMeasureContentText").html(CommonCore.currentMeasurement);
  b.length > CommonCore.lineMeasureComponentsLength ? (a = new ol.geom.LineString([b[b.length - 3], b[b.length - 2]]), jQuery("#lastSegmentMeasurementText").html(CommonCore.formatMeasurementLength(a, !0)), jQuery("#lastSegmentMeasurement").show(), lastSegmentMeasurement = CommonCore.currentMeasurement,
    CommonCore.lineMeasureComponentsLength = b.length) : 2 == CommonCore.lineMeasureComponentsLength && jQuery("#lastSegmentMeasurement").hide()
};
CommonCore.handleSurfaceMeasurements = function (a) {
  jQuery("#popupMeasureSurfaceContentText").html(CommonCore.formatMeasurementSuface(a, !0))
};
CommonCore.disableCommonControls = function (a) {
  Imajnet && (Imajnet.clickMode = null);
  ImajnetUI && ImajnetUI.disableToolControls();
  Dialog.hideDialog("popupMeasure", !0);
  Dialog.hideDialog("popupMeasureSurface", !0);
  CommonCore.zoomBox && CommonCore.zoomBox.setActive(!1);
  jQuery("#popupMeasureContentText").html("");
  jQuery("#popupMeasureSurfaceContentText").html("");
  jQuery("#lastSegmentMeasurement").hide();
  lastSegmentMeasurement = CommonCore.currentMeasurement = 0;
  CommonCore.lineMeasureComponentsLength = 2;
  CommonCore.deactivateButton("olControlZoomInFeatures");
  CommonCore.deactivateButton("olControlZoomOutFeatures");
  CommonCore.deactivateButton("olControlMeasureLineFeatures");
  CommonCore.deactivateButton("olControlMeasureSurfaceFeatures");
  CommonCore.deactivateButton("olControlDisableFeatures");
  CommonCore.deactivateButton("olControlPrintFeatures");
  if ("undefined" !== typeof CG34Arbres && CG34Arbres) CG34Arbres.onClose(!1);
  if ("undefined" !== typeof CG34SH && CG34SH) CG34SH.onClose();
  if ("undefined" !== typeof PolygonFromPoint && PolygonFromPoint) PolygonFromPoint.onClose();
  CommonCore.showHideDropDownDiv(null);
  isImajnetMode() || (MapMethodsCore.disableControls(a), "editor" != a && MapCore.disableEditorControls())
};
CommonCore.addMapCommonControls = function () {
  CommonCore.isMobile && MapMobile.initMapControls();
  var a = jQuery("\x3cdiv/\x3e").addClass("olControlNavigationHistory  olControlNavigationHistoryPreviousItemActive").prop("title", jQuery.app.map.button.previousView).click(function (a) {
      CommonCore.getPreviousView()
    }),
    b = jQuery("\x3cdiv/\x3e").addClass("olControlNavigationHistory  olControlNavigationHistoryNextItemActive").prop("title", jQuery.app.map.button.nextView).click(function (a) {
      CommonCore.getNextView()
    });
  jQuery("#mapControls").append(a,
    b);
  a = jQuery("\x3cdiv/\x3e").addClass("olControlZoomInFeaturesItemInactive").prop("title", jQuery.app.map.button.zoomIn).click(function (a) {
    CommonCore.buttonIsActive("olControlZoomInFeatures") ? (CommonCore.buttonClicked = "", CommonCore.zoomBox.setActive(!1), CommonCore.deactivateButton("olControlZoomInFeatures"), isImajnetMode() && Imajnet.activateImajnetControl(ImajnetUI.btnClosestImageDiv, "closestImage"), CommonCore.activateMapClick()) : (CommonCore.disableCommonControls("zoomIn"), CommonCore.buttonClicked = "zoomIn",
      map.removeInteraction(CommonCore.zoomBox), CommonCore.zoomBox = new ol.interaction.DragZoom({
      condition: ol.events.condition.always,
      out: !1
    }), map.addInteraction(CommonCore.zoomBox), CommonCore.zoomBox.setActive(!0), isImajnetMode() && Imajnet.deactivateImajnetControl(ImajnetUI.btnClickModeDiv, "clickMode"), CommonCore.activateButton("olControlZoomInFeatures"))
  });
  jQuery("#mapControls").append(a);
  a = jQuery("\x3cdiv/\x3e").addClass("olControlZoomOutFeaturesItemInactive").prop("title", jQuery.app.map.button.zoomOut).click(function (a) {
    CommonCore.buttonIsActive("olControlZoomOutFeatures") ?
      (CommonCore.buttonClicked = "", CommonCore.zoomBox.setActive(!1), CommonCore.deactivateButton("olControlZoomOutFeatures"), isImajnetMode() && Imajnet.activateImajnetControl(ImajnetUI.btnClosestImageDiv, "closestImage"), CommonCore.activateMapClick()) : (CommonCore.disableCommonControls("zoomOut"), CommonCore.buttonClicked = "zoomOut", map.removeInteraction(CommonCore.zoomBox), CommonCore.zoomBox = new ol.interaction.DragZoom({
      condition: ol.events.condition.always,
      out: !0
    }), map.addInteraction(CommonCore.zoomBox), CommonCore.zoomBox.setActive(!0),
    isImajnetMode() && Imajnet.deactivateImajnetControl(ImajnetUI.btnClickModeDiv, "clickMode"), CommonCore.activateButton("olControlZoomOutFeatures"))
  });
  jQuery("#mapControls").append(a);
  a = jQuery("\x3cdiv/\x3e").addClass("olControlMeasureLineFeaturesItemInactive").prop("title", jQuery.app.map.button.measureLine).click(function (a) {
    CommonCore.buttonIsActive("olControlMeasureLineFeatures") ? (CommonCore.deactivateMeasureLine(), Dialog.hideDialog("popupMeasure", !0), Dialog.hideDialog("popupMeasureSurface", !0), CommonCore.buttonClicked =
      "", CommonCore.deactivateButton("olControlMeasureLineFeatures"), Imajnet.activateImajnetControl(ImajnetUI.btnClosestImageDiv, "closestImage"), CommonCore.activateMapClick()) : (CommonCore.disableCommonControls("measureLine"), CommonCore.buttonClicked = "measureLine", CommonCore.activateMeasureLine(), CommonCore.onMeasureLineTabsChange(0 == Nigsys.tabActiveIndex(jQuery("#popupLineMeasureTabs")) ? "simpleMeasurementTab" : "LRSMeasurementTab"), Dialog.showDialog("popupMeasure", 420, 200, null, null, jQuery.app.map.button.measureLine),
      Imajnet.deactivateImajnetControl(ImajnetUI.btnClickModeDiv, "clickMode"), CommonCore.activateButton("olControlMeasureLineFeatures"))
  });
  jQuery("#mapControls").append(a);
  a = jQuery("\x3cdiv/\x3e").addClass("olControlMeasureSurfaceFeaturesItemInactive").prop("title", jQuery.app.map.button.measureSurface).click(function (a) {
    CommonCore.buttonIsActive("olControlMeasureSurfaceFeatures") ? (CommonCore.buttonClicked = "", CommonCore.deactivateMeasureSurface(), Dialog.hideDialog("popupMeasure", !0), Dialog.hideDialog("popupMeasureSurface",
      !0), jQuery("#popupMeasureSurfaceContentText").html(""), CommonCore.deactivateButton("olControlMeasureSurfaceFeatures"), Imajnet.activateImajnetControl(ImajnetUI.btnClosestImageDiv, "closestImage"), CommonCore.activateMapClick()) : (CommonCore.disableCommonControls("measureSurface"), CommonCore.buttonClicked = "measureSurface", CommonCore.activateMeasureSurface(), Dialog.showDialog("popupMeasureSurface", 320, 120, null, null, jQuery.app.map.button.measureSurface), isImajnetMode() && Imajnet.deactivateImajnetControl(ImajnetUI.btnClickModeDiv,
      "clickMode"), CommonCore.activateButton("olControlMeasureSurfaceFeatures"))
  });
  jQuery("#mapControls").append(a);
  CommonCore.zoomBox = new ol.interaction.DragZoom({condition: ol.events.condition.always});
  map.addInteraction(CommonCore.zoomBox);
  !CommonCore.isMobile || app.isOnline() && !appSettings.settings.offlineMode || Reserve.hideSearchReserve();
  CommonCore.measurementLayer = new ol.layer.Vector({
    source: new ol.source.Vector, style: new ol.style.Style({
      fill: new ol.style.Fill({color: "rgba(0, 153, 255, 0.2)"}),
      stroke: new ol.style.Stroke({
        color: "rgba(0, 153, 255, 1)",
        width: 3
      }),
      image: new ol.style.Circle({
        radius: 5,
        stroke: new ol.style.Stroke({color: "rgba(0, 153, 255, 0.7)"}),
        fill: new ol.style.Fill({color: "rgba(0, 153, 255, 0.2)"})
      })
    })
  });
  map.addLayer(CommonCore.measurementLayer);
  CommonCore.measureLine = new ol.interaction.Draw({
    type: "LineString",
    source: CommonCore.measurementLayer.getSource(),
    condition: CommonCore.isLeftMouseButton,
    geometryFunction: function (a, b) {
      b || (b = new ol.geom.LineString(null));
      b.setCoordinates(a);
      CommonCore.handleLinePartialMeasurements(b);
      return b
    }
  });
  CommonCore.measureLine.on("drawstart", CommonCore.clearMeasurements);
  CommonCore.measureLine.on("drawend", CommonCore.handleLineMeasurements);
  map.addInteraction(CommonCore.measureLine);
  CommonCore.deactivateMeasureLine();
  CommonCore.measureSurface = new ol.interaction.Draw({
    type: "Polygon",
    source: CommonCore.measurementLayer.getSource(),
    condition: CommonCore.isLeftMouseButton,
    geometryFunction: function (a, b) {
      b || (b = new ol.geom.Polygon(null));
      b.setCoordinates(a);
      CommonCore.handleSurfaceMeasurements(b);
      return b
    },
    style: new ol.style.Style({
      fill: new ol.style.Fill({color: "rgba(0, 153, 255, 0.2)"}),
      stroke: new ol.style.Stroke({color: "rgba(0, 153, 255, 1)", width: 3}),
      image: new ol.style.Circle({
        radius: 5,
        stroke: new ol.style.Stroke({color: "rgba(0, 153, 255, 0.7)"}),
        fill: new ol.style.Fill({color: "rgba(0, 153, 255, 0.2)"})
      })
    })
  });
  CommonCore.measureSurface.on("drawstart", CommonCore.clearMeasurements);
  CommonCore.measureSurface.on("drawend", function (a) {
    CommonCore.handleSurfaceMeasurements(a.feature.getGeometry())
  });
  map.addInteraction(CommonCore.measureSurface);
  CommonCore.deactivateMeasureSurface();
  a = new ol.interaction.DragRotateAndZoom({condition: ol.events.condition.platformModifierKeyOnly});
  map.addInteraction(a);
  a = new ol.interaction.DragAndDrop({formatConstructors: [ol.format.GPX, ol.format.GeoJSON, ol.format.IGC, ol.format.KML, ol.format.TopoJSON]});
  map.addInteraction(a);
  a.on("addfeatures", function (a) {
    for (var b = 0; b < a.features.length; b++)a.features[b].setStyle(null);
    a = new ol.source.Vector({features: a.features});
    b = new ol.layer.Vector({
      source: a, name: "Drag and drop layer " +
      CommonCore.dragAndDropLayerCounter, style: function (a, b) {
        return CommonCore.dragAndDropStyle(a.getGeometry().getType())
      }
    });
    CommonCore.dragAndDropLayerCounter++;
    map.addLayer(b);
    CommonCore.dragAndDropLayers.push(b);
    map.getView().fit(a.getExtent(), map.getSize())
  })
};
CommonCore.dragAndDropStyle = function (a) {
  var b = {
    Point: new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({color: "rgba(0,0,255,0.5)"}),
        radius: 3,
        stroke: new ol.style.Stroke({color: "#00f", width: 1})
      })
    }),
    LineString: new ol.style.Style({stroke: new ol.style.Stroke({color: "rgba(0,0,255,0.7)", width: 3})}),
    Polygon: new ol.style.Style({
      fill: new ol.style.Fill({color: "rgba(0,0,255,0.5)"}),
      stroke: new ol.style.Stroke({color: "#00f", width: 1})
    }),
    MultiPoint: new ol.style.Style({
      image: new ol.style.Circle({
        fill: new ol.style.Fill({color: "rgba(0,0,255,0.5)"}),
        radius: 3, stroke: new ol.style.Stroke({color: "#00f", width: 1})
      })
    }),
    MultiLineString: new ol.style.Style({stroke: new ol.style.Stroke({color: "rgba(0,0,255,0.7)", width: 3})}),
    MultiPolygon: new ol.style.Style({
      fill: new ol.style.Fill({color: "rgba(0,0,255,0.5)"}),
      stroke: new ol.style.Stroke({color: "#00f", width: 1})
    })
  };
  b[a].text = new ol.style.Text({
    fill: new ol.style.Fill({color: "#fff"}),
    stroke: new ol.style.Stroke({color: "rgba(0, 0, 0, 0.6)", width: 3})
  });
  return b[a]
};
CommonCore.isLeftMouseButton = function (a) {
  return 1 == a.originalEvent.buttons
};
CommonCore.removeLayers = function () {
  if (map) {
    "undefined" !== typeof GPSMainApp && "function" === typeof GPSMainApp.removeGPSMarkerLayer && GPSMainApp.removeGPSMarkerLayer();
    for (var a = map.layers.length - 1; -1 < a; a--)!map.layers[a] || CommonCore.isBaseMap(map.layers[a].customIdentifier || map.layers[a].get("customIdentifier")) || CommonCore.measureLine && CommonCore.measureLine.handler && CommonCore.measureLine.handler.layer && CommonCore.measureLine.handler.layer.id == map.layers[a].id || CommonCore.measureSurface && CommonCore.measureSurface.handler &&
    CommonCore.measureSurface.handler.layer && CommonCore.measureSurface.handler.layer.id == map.layers[a].id || ("undefined" !== typeof ImajnetMap && "undefined" !== typeof ThematicGroupsTree && ThematicGroupsTree.onTopGroupLayersName && -1 !== jQuery.inArray(map.layers[a].name, ThematicGroupsTree.onTopGroupLayersName) && ThematicGroupsTreeCore.onTopLayers.push(map.layers[a]), ImajnetPlugin.removeLayerFromMap(map.layers[a]))
  }
};
CommonCore.removeBaseLayers = function () {
  map && 0 < map.getLayers().getLength() && map.getLayers().removeAt(0)
};
CommonCore.addBaseLayers = function (a, b) {
  var c = CommonCore.getBaseLayerName();
  ImajnetUrl.changeUrlParam(ImajnetUrl.MAP_URL_PARAM_NAME, c);
  CommonCore.removeBaseLayers();
  a.addLayer(CommonCore.emptyBaseLayer);
  if (CommonCore.canSetBaseLayer()) {
    var d = CommonCore.getOSMLayer();
    c == d.get("customIdentifier") && a.setBaseLayer(d);
    d = CommonCore.getOCMLayer();
    c == d.get("customIdentifier") && a.setBaseLayer(d);
    d = CommonCore.getOTMLayer();
    c == d.get("customIdentifier") && a.setBaseLayer(d);
    CommonCore.bingApiKey && (d = CommonCore.getBingLayer(CommonCore.BING_TYPE_ROAD),
    c == ImajnetUrl.BING_ROAD_LAYER_PARAM_NAME && a.setBaseLayer(d), d = CommonCore.getBingLayer(CommonCore.BING_TYPE_SATELLITE), c == ImajnetUrl.BING_SATELLITE_LAYER_PARAM_NAME && a.setBaseLayer(d), d = CommonCore.getBingLayer(CommonCore.BING_TYPE_HYBRID), c == ImajnetUrl.BING_HYBRID_LAYER_PARAM_NAME && a.setBaseLayer(d), jQuery("#mapMainMenuChooseMapItems").addClass("mapMainMenuChooseMapItemsWithBing"), jQuery("#bingLayers").show(), Nigsys.bindClickEvent(jQuery("#setB_MAP"), function (a) {
      CommonCore.setB_MAPBaseLayer(a)
    }), Nigsys.bindClickEvent(jQuery("#setB_SAT"),
      function (a) {
        CommonCore.setB_SATBaseLayer(a)
      }), Nigsys.bindClickEvent(jQuery("#setB_HYBRID"), function (a) {
      CommonCore.setB_HYBRIDBaseLayer(a)
    }))
  }
  "undefined" !== typeof CustomBaseLayers && -1 !== applicationDomain.indexOf("wipco.imajbox.com") && CustomBaseLayers.init(c);
  CommonCore.activateImage(jQuery("#set" + (c ? c : "emptyBaseLayer")).get(0));
  setTimeout("CommonCore.removeAttributionLinks()", 8E3);
  CommonCore.overviewMap = new ol.control.OverviewMap({collapseLabel: "»", label: "«", layers: [a.layers[0]]});
  a.addControl(CommonCore.overviewMap)
};
CommonCore.setOSMBaseLayer = function (a) {
  map.setBaseLayer(CommonCore.getOSMLayer());
  CommonCore.onMapChanged(a);
  CommonCore.onHaveBaseLayer(a)
};
CommonCore.setOCMBaseLayer = function (a) {
  map.setBaseLayer(CommonCore.getOCMLayer());
  CommonCore.onMapChanged(a);
  CommonCore.onHaveBaseLayer()
};
CommonCore.setOTMBaseLayer = function (a) {
  map.setBaseLayer(CommonCore.getOTMLayer());
  CommonCore.onMapChanged(a);
  CommonCore.onHaveBaseLayer(a)
};
CommonCore.setB_MAPBaseLayer = function (a) {
  map.setBaseLayer(CommonCore.getBingLayer(CommonCore.BING_TYPE_ROAD));
  CommonCore.onMapChanged(a);
  CommonCore.onHaveBaseLayer(a)
};
CommonCore.setB_SATBaseLayer = function (a) {
  map.setBaseLayer(CommonCore.getBingLayer(CommonCore.BING_TYPE_SATELLITE));
  CommonCore.onMapChanged(a);
  CommonCore.onHaveBaseLayer(a)
};
CommonCore.setB_HYBRIDBaseLayer = function (a) {
  map.setBaseLayer(CommonCore.getBingLayer(CommonCore.BING_TYPE_HYBRID));
  CommonCore.onMapChanged(a);
  CommonCore.onHaveBaseLayer(a)
};
CommonCore.bindEventsOnMapElements = function () {
  Nigsys.bindClickEvent(jQuery("#setemptyBaseLayer"), function (a) {
    map.setBaseLayer(CommonCore.emptyBaseLayer);
    CommonCore.lastBaseLayerName = "emptyBaseLayer";
    CommonCore.onHaveEmptyBaseLayer(a);
    CommonCore.onMapChanged(a)
  });
  Nigsys.bindClickEvent(jQuery("#setOSM"), function (a) {
    CommonCore.setOSMBaseLayer(a)
  });
  Nigsys.bindClickEvent(jQuery("#setOSMMAPNIK"), function (a) {
    setOSMMAPNIKBaseLayer(a)
  });
  Nigsys.bindClickEvent(jQuery("#setOCM"), function (a) {
    CommonCore.setOCMBaseLayer(a)
  });
  Nigsys.bindClickEvent(jQuery("#setOTM"), function (a) {
    CommonCore.setOTMBaseLayer(a)
  })
};
CommonCore.onMapClick = function (a) {
  a.xy || (a.xy = {x: a.pageX, y: a.pageY});
  var b = !1;
  map.forEachFeatureAtPixel(a.pixel, function (a, d) {
    d == ImajnetMap.imajnetDragFeaturesLayer && (b = !0)
  });
  if (!b && Imajnet.imajnetIsActive())if ("LRSMeasurement" == CommonCore.mapClickType) CommonCore.onLRSMeasurementMapClick(a); else CommonCore.mapClickHandlerDisabled ? CommonCore.mapClickHandlerDisabled = !1 : (a = ol.proj.transform(a.coordinate, ImajnetMap.map.projection, ImajnetMapImplementation.imajnetProjection), ImajnetMap.mapClickHandler({
    lon: a[0],
    lat: a[1]
  }))
};
CommonCore.updateOverviewMap = function () {
  CommonCore.overviewMap && (map.removeControl(CommonCore.overviewMap), CommonCore.overviewMap = new ol.control.OverviewMap({
    collapseLabel: "»",
    label: "«",
    layers: [map.layers[0]]
  }), map.addControl(CommonCore.overviewMap));
  CommonCore.isEmptyBaseLayer(map.getLayers().item(0).get("customIdentifier")) && jQuery("#olControlOverviewMapMaximizeButton").hide()
};
CommonCore.activateMapClick = function () {
  if (CommonCore.isMobile) CommonCore.deactivateMapClick(), Nigsys.bindClickEvent(CommonCore.mapContainer, CommonCore.onMapClick); else map.on("click", CommonCore.onMapClick)
};
CommonCore.deactivateMapClick = function () {
  CommonCore.isMobile ? Nigsys.unbindClickEvent(CommonCore.mapContainer, CommonCore.onMapClick) : map.un("click", CommonCore.onMapClick)
};
CommonCore.setScaleUnit = function () {
  "feet" == Nigsys.getMeasurementUnit() ? CommonCore.mapScaleControl.setUnits("imperial") : CommonCore.mapScaleControl.setUnits("metric")
};
CommonCore.initMap = function () {
  extent = CommonCore.sphericalMercatorBounds;
  map = new ol.Map({
    view: new ol.View({maxZoom: 24, extent: extent, zoomFactor: 2}),
    interactions: ol.interaction.defaults({
      mouseWheelZoom: !1,
      keyboard: !1
    }).extend([new ol.interaction.MouseWheelZoom({duration: 300})]),
    target: "map"
  });
  CommonCore.zoomBar = new ol.control.ZoomSlider;
  CommonCore.mapMousePosition = new ol.control.MousePosition({
    projection: ImajnetMap.imajnetCrs,
    coordinateFormat: function (a) {
      return ol.coordinate.format(a, "{y}, {x}", 4)
    }
  });
  CommonCore.mapScaleControl = new ol.control.ScaleLine;
  var a = [new ol.control.Attribution, CommonCore.mapScaleControl, new ol.control.Zoom({delta: 1}), new ol.control.Rotate, CommonCore.mapMousePosition, CommonCore.zoomBar],
    b;
  for (b in a)map.addControl(a[b]);
  map.layers = map.getLayers().getArray();
  map.projection = map.getView().getProjection();
  map.setBaseLayer = function (a) {
    var b = map.getLayers().item(0).get("customIdentifier"), e = a.get("customIdentifier");
    b != e && (CommonCore.lastBaseLayerName = b, CommonCore.lastBaseLayer =
      map.getLayers().item(0), CommonCore.currentBaseLayerName = e, CommonCore.removeBaseLayers(), map.getLayers().insertAt(0, a), ImajnetUrl.changeUrlParam(ImajnetUrl.MAP_URL_PARAM_NAME, e), CommonCore.setBaseLayerCookie(e), CommonCore.updateOverviewMap(), CommonCore.removeAttributionLinks(), "emptyBaseLayer" == e ? (a = map.getView(), b = {
      zoom: a.getZoom(),
      center: a.getCenter(),
      projection: a.getProjection(),
      maxZoom: 24
    }, map.setView(new ol.View(b)), map.getView().on("change:resolution", ImajnetPlugin.onZoomStart)) : "emptyBaseLayer" ==
      b && (a = map.getView(), b = {
        zoom: a.getZoom(),
        center: a.getCenter(),
        projection: a.getProjection(),
        maxZoom: CommonCore.baseLayersMaxZoom
      }, map.setView(new ol.View(b)), map.getView().on("change:resolution", ImajnetPlugin.onZoomStart), ImajnetPlugin.zoomMapTo(a.getZoom() > CommonCore.baseLayersMaxZoom - 1 ? CommonCore.baseLayersMaxZoom - 1 : a.getZoom()), ImajnetPlugin.onZoomStart()))
  };
  isImajnetMode() || (map.isValidZoomLevel = function (a) {
    if (!a && 0 !== a)return !1;
    if (CommonCore.isMobile && (!app.isOnline() || appSettings.settings && appSettings.settings.offlineMode)) {
      if (a <
        MainMobile.offlineMapMinZoom || a > MainMobile.offlineNumZoomLevels)return !1
    } else if (a < CommonCore.mapMinZoom || a > CommonCore.numZoomLevels)return !1;
    return !0
  }, CommonCore.addBaseLayers(map, !0), CommonCore.isMobile && MapMethodsCore.applyImageLayout(null))
};
CommonCore.onMapRightClick = function (a) {
  a.preventDefault();
  CommonCore.resetLRSMeasurement();
  if (CommonCore.zoomBox)try {
    CommonCore.zoomBox.handler.removeBox()
  } catch (c) {
  }
  for (var b in CommonCore.boxControl)if (CommonCore.boxControl[b])try {
    CommonCore.boxControl[b].box.removeBox()
  } catch (c) {
  }
  CommonCore.navigation && CommonCore.navigation.dragPan.handler.dragstart(a);
  CommonCore.buttonIsActive("olControlMeasureLineFeatures") ? (jQuery("#popupMeasureContentText").html(""), jQuery("#lastSegmentMeasurementText").html(""),
    lastSegmentMeasurement = CommonCore.currentMeasurement = 0, CommonCore.lineMeasureComponentsLength = 2, CommonCore.deactivateMeasureLine()) : CommonCore.buttonIsActive("olControlMeasureSurfaceFeatures") && (jQuery("#popupMeasureSurfaceContentText").html(""), CommonCore.deactivateMeasureSurface(), CommonCore.activateMeasureSurface())
};
CommonCore.clearMeasurements = function () {
  ImajnetPlugin.removeAllFeatures(CommonCore.measurementLayer)
};
CommonCore.functionsOverrides = function () {
  Nigsys.onMobile() && (ol.events.condition.mouseActionButton = function (a) {
    return !0
  }, ol.events.condition.mouseOnly = function (a) {
    ol.asserts.assert(a.pointerEvent, 56);
    return !0
  });
  ol.interaction.Interaction.zoomWithoutConstraints = function (a, b, c, d, e) {
    if (c) {
      var f = b.getResolution(), g = b.getCenter();
      void 0 !== f && g && c !== f && e && 0 < e && (a.beforeRender(ol.animation.zoom({
        resolution: f,
        duration: e,
        easing: ol.easing.easeOut
      })), d && a.beforeRender(ol.animation.pan({source: g, duration: e, easing: ol.easing.easeOut})));
      d && (a = b.calculateCenterZoom(c, d), b.setCenter(a));
      b.setResolution(c, !0)
    }
  };
  ol.View.prototype.setResolution = function (a, b) {
    !b && .29 > a && "emptyBaseLayer" !== CommonCore.currentBaseLayerName && null !== CommonCore.currentBaseLayerName || this.set(ol.View.Property.RESOLUTION, a)
  }
};
CommonCore.storeCurrentView = function (a) {
  CommonCore.currentMapViewIndex < CommonCore.mapViewsArray.length - 1 && (CommonCore.mapViewsArray = CommonCore.mapViewsArray.slice(0, CommonCore.currentMapViewIndex + 1));
  CommonCore.currentMapViewIndex++;
  CommonCore.mapViewsArray.push(a)
};
CommonCore.getPreviousView = function () {
  if (0 != CommonCore.currentMapViewIndex) {
    CommonCore.currentMapViewIndex--;
    var a = CommonCore.mapViewsArray[CommonCore.currentMapViewIndex];
    CommonCore.isFromNavigationHistory = !0;
    map.getView().setCenter(a.center);
    map.getView().setZoom(a.zoom)
  }
};
CommonCore.getNextView = function () {
  if (CommonCore.currentMapViewIndex != CommonCore.mapViewsArray.length - 1) {
    CommonCore.currentMapViewIndex++;
    var a = CommonCore.mapViewsArray[CommonCore.currentMapViewIndex];
    CommonCore.isFromNavigationHistory = !0;
    map.getView().setCenter(a.center);
    map.getView().setZoom(a.zoom)
  }
};
CommonCore.activateMeasureSurface = function () {
  CommonCore.measureSurface.setActive(!0)
};
CommonCore.deactivateMeasureSurface = function () {
  CommonCore.clearMeasurements();
  CommonCore.measureSurface.setActive(!1)
};
CommonCore.activateMeasureLine = function () {
  CommonCore.measureLine.setActive(!0)
};
CommonCore.deactivateMeasureLine = function () {
  CommonCore.clearMeasurements();
  CommonCore.measureLine.setActive(!1)
};
CommonCore.resetLRSMeasurementGeometry = function () {
  ImajnetPlugin.removeFeatures(ImajnetMap.allWFS, [CommonCore.LRSMeasurementFeatureWrapperPoint]);
  ImajnetPlugin.removeFeatures(ImajnetMap.allWFS, [CommonCore.LRSMeasurementFeatureWrapperFirstPoint]);
  ImajnetPlugin.removeFeatures(ImajnetMap.allWFS, [CommonCore.LRSMeasurementFeatureWrapperSecondPoint]);
  ImajnetPlugin.removeFeatures(ImajnetMap.allWFS, [CommonCore.LRSMeasurementFeatureWrapperLine])
};
CommonCore.addLRSMeasurementPointFeature = function (a) {
  a = ol.proj.transform([parseFloat(a.coordinate[0]), parseFloat(a.coordinate[1])], map.projection, ImajnetMapImplementation.imajnetProjection);
  return ImajnetPlugin.addFeature(ImajnetMap.allWFS, {x: a[0], y: a[1]}, {
    type: "Point",
    fillColor: "#0099ff",
    radius: 6,
    strokeColor: "#ffffff"
  })
};
CommonCore.onLRSMeasurementMapClick = function (a) {
  var b = ol.proj.transform([a.coordinate[0], a.coordinate[1]], map.projection, ImajnetMapImplementation.imajnetProjection);
  CommonCore.LRSMeasurementMapClick({lon: b[0], lat: b[1]});
  CommonCore.LRSMeasurementIsFirstPoint ? CommonCore.LRSMeasurementFeatureWrapperFirstPoint = CommonCore.addLRSMeasurementPointFeature(a) : CommonCore.LRSMeasurementFeatureWrapperSecondPoint = CommonCore.addLRSMeasurementPointFeature(a)
};
CommonCore.onLRSMeasurementComplete = function (a) {
  a = Nigsys.getOLGeometryFromWKTString(a);
  CommonCore.LRSMeasurementFeatureWrapperLine = ImajnetPlugin.addFeature(ImajnetMap.allWFS, a.points, {
    type: "LineString",
    strokeColor: "#0099ff",
    strokeWidth: 3
  });
  jQuery("#LRSMeasurementValue").html(CommonCore.formatMeasurementLength(CommonCore.LRSMeasurementFeatureWrapperLine.getFeature().getGeometry(), !0))
};
CommonCore.onLRSMeasurementMouseMoveTimeout = function (a) {
  ImajnetPlugin.removeFeatures(ImajnetMap.allWFS, [CommonCore.LRSMeasurementFeatureWrapperPoint]);
  CommonCore.LRSMeasurementFeatureWrapperPoint = CommonCore.addLRSMeasurementPointFeature(a)
};
CommonCore.LRSMeasurementTimeout = null;
CommonCore.onLRSMeasurementMouseMoveTimeout = function (a) {
  ImajnetPlugin.removeFeatures(ImajnetMap.allWFS, [CommonCore.LRSMeasurementFeatureWrapperPoint]);
  CommonCore.LRSMeasurementFeatureWrapperPoint = CommonCore.addLRSMeasurementPointFeature(a)
};
CommonCore.LRSMeasurementTimeout = null;
CommonCore.onLRSMeasurementMouseMove = function (a) {
  CommonCore.LRSMeasurementTimeout = setTimeout(function () {
    CommonCore.onLRSMeasurementMouseMoveTimeout(a)
  }, 150)
};
CommonCore.registerLRSMeasurementMouseMoveEvent = function () {
  map.on("pointermove", CommonCore.onLRSMeasurementMouseMove)
};
CommonCore.unregisterLRSMeasurementMouseMoveEvent = function () {
  clearTimeout(CommonCore.LRSMeasurementTimeout);
  map.un("pointermove", CommonCore.onLRSMeasurementMouseMove)
};
CommonCore.registerLRSMeasurementClickEvent = function () {
  CommonCore.unregisterLRSMeasurementClickEvent();
  CommonCore.mapClickType = "LRSMeasurement"
};
CommonCore.unregisterLRSMeasurementClickEvent = function () {
  CommonCore.resetLRSMeasurement();
  CommonCore.mapClickType = ""
};
var CustomBaseLayers = {
  NAVER_STREET_LAYER_PARAM_NAME: "NAV_STREET",
  NAVER_SATELLITE_LAYER_PARAM_NAME: "NAV_SATELLITE",
  NAVER_HYBRID_LAYER_PARAM_NAME: "NAV_HYBRID",
  VWORLD_STREET_LAYER_PARAM_NAME: "VWORLD_STREET",
  VWORLD_SATELLITE_LAYER_PARAM_NAME: "VWORLD_SATELLITE",
  VWORLD_HYBRID_LAYER_PARAM_NAME: "VWORLD_HYBRID",
  layerTypes: ["STREET", "SATELLITE", "HYBRID"],
  naverResolutions: [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, .5, .25],
  naverExtent: [90112, 1192896, 2187264, 2765760],
  init: function (b) {
    proj4.defs("EPSG:5179", "+proj\x3dtmerc +lat_0\x3d38 +lon_0\x3d127.5 +k\x3d0.9996 +x_0\x3d1000000 +y_0\x3d2000000 +ellps\x3dGRS80 +towgs84\x3d0,0,0,0,0,0,0 +units\x3dm +no_defs");
    ol.proj.setProj4 = proj4;
    CustomBaseLayers.naverProjection = new ol.proj.Projection({
      code: "EPSG:5179",
      extent: CustomBaseLayers.naverExtent,
      units: "m"
    });
    for (var a in CustomBaseLayers.layerTypes) {
      var c = CustomBaseLayers["NAVER_" + CustomBaseLayers.layerTypes[a] + "_LAYER_PARAM_NAME"];
      CustomBaseLayers.setBaseLayerHTMLItem(jQuery.imajnet.map.customBaseLayers[c], c)
    }
    for (a in CustomBaseLayers.layerTypes)c = CustomBaseLayers["VWORLD_" + CustomBaseLayers.layerTypes[a] + "_LAYER_PARAM_NAME"], CustomBaseLayers.setBaseLayerHTMLItem(jQuery.imajnet.map.customBaseLayers[c],
      c);
    CustomBaseLayers.setCustomBaseLayer(null, b)
  },
  setBaseLayerHTMLItem: function (b, a) {
    var c = {
        street: "/resources/img/buttons/BTN-BB4-5_Off.PNG",
        satellite: "/resources/img/buttons/BTN-BB4-6_Off.PNG",
        hybrid: "/resources/img/buttons/BTN-BB4-7_Off.PNG"
      }[a.substring(a.indexOf("_") + 1).toLowerCase()],
      c = jQuery('\x3cdiv class\x3d"mapMainMenuChooseMapItem"\x3e\x3cdiv\x3e\x3cimg src\x3d"' + c + '" class\x3d"mapMainMenuChooseMapItemImage" id\x3d"set' + a + '"\x3e\x3c/div\x3e\x3cdiv\x3e' + b + "\x3c/div\x3e\x3c/div\x3e");
    jQuery("#mapMainMenuChooseMapItems").append(c);
    jQuery("#set" + a).on("click", function (b) {
      CustomBaseLayers.setCustomBaseLayer(b, a)
    })
  },
  setCustomBaseLayer: function (b, a) {
    -1 !== a.indexOf("NAV_") ? CustomBaseLayers.setNaverLayer(a) : -1 !== a.indexOf("VWORLD_") && CustomBaseLayers.setVWorldLayer(a);
    b && (CommonCore.onMapChanged(b), CommonCore.onHaveBaseLayer())
  },
  setNaverLayer: function (b) {
    map.setBaseLayer(CustomBaseLayers.getNaverLayer({
      NAV_STREET: "bl_vc_bg/ol_vc_an",
      NAV_SATELLITE: "bl_st_bg/ol_st_an",
      NAV_HYBRID: "bl_st_bg/ol_st_rd/ol_st_an"
    }[b], b))
  },
  getNaverLayer: function (b,
                           a) {
    return new ol.layer.Tile({
      title: a, customIdentifier: a, type: "base", source: new ol.source.XYZ({
        projection: CustomBaseLayers.naverProjection,
        tileSize: 256,
        tileGrid: new ol.tilegrid.TileGrid({
          extent: CustomBaseLayers.naverExtent,
          origin: [CustomBaseLayers.naverExtent[0], CustomBaseLayers.naverExtent[1]],
          resolutions: CustomBaseLayers.naverResolutions
        }),
        tileUrlFunction: function (a, d, e) {
          return null == a ? void 0 : "http://onetile" + (Math.floor(3 * Math.random()) + 1) + ".map.naver.net/get/160/0/0/" + (a[0] + 1) + "/" + a[1] + "/" + a[2] +
            "/" + b
        },
        attributions: [new ol.Attribution({html: ['\x3ca href\x3d"http://map.naver.com"\x3e\x3cimg src\x3d"http://static.naver.net/maps2/logo_naver_s.png"\x3e\x3c/a\x3e']})]
      })
    })
  },
  setVWorldLayer: function (b) {
    map.setBaseLayer(CustomBaseLayers.getVWorldLayer({
      VWORLD_STREET: "Base",
      VWORLD_SATELLITE: "Satellite",
      VWORLD_HYBRID: "Hybrid"
    }[b], b))
  },
  getVWorldLayer: function (b, a) {
    return new ol.layer.Tile({
      title: a, customIdentifier: a, visible: !0, type: "base", source: new ol.source.XYZ({
        url: "http://xdworld.vworld.kr:8080/2d/" +
        b + "/201301/{z}/{x}/{y}." + ("Satellite" != b ? "png" : "jpeg"),
        attributions: [new ol.Attribution({html: ['\x26copy; \x3ca href\x3d"http://map.vworld.kr"\x3eV-World Map\x3c/a\x3e']})]
      })
    })
  }
};
ImajnetPlugin.onImajnetDeactivated = function () {
  ImajnetMapImplementation.dragFeature && (ImajnetMapImplementation.dragFeature.setActive(!1), map.removeControl(ImajnetMapImplementation.dragFeature), ImajnetMapImplementation.dragFeature = null);
  ImajnetUI.removeActiveState(ImajnetUI.btnImajnetPluginDiv);
  if (!isImajnetMode()) {
    var a = MainCore.getNodeObjectFromLayerProperty(["data.layer.externalLayer.name"], Array(ImajnetMap.prLayerName));
    a && a.data && a.data.select && a.select(!1);
    (a = MainCore.getNodeObjectFromLayerProperty(["data.layer.externalLayer.name"],
      Array(ImajnetMap.roadLayerName))) && a.data && a.data.select && a.select(!1)
  }
};
ImajnetMapImplementation = {
  imajnetProjection: new ol.proj.Projection({code: "EPSG:4326"}),
  dragBoxFeature: null,
  dragFeature: null,
  imajnetWFSProtocol1: null,
  imajnetWFSProtocol2: null,
  protocol2FeaturesCache: null,
  protocol1FeaturesLoaded: !1,
  selectFeatureControl: null,
  clickFeature: null,
  imajnetLRSLayer: null,
  imajnetLRSLayerName: "Imajnet LRS",
  selectedFeaturesArray: [],
  addImajnetFeatures: function (a, b) {
    if (a) {
      for (var c = 0; c < b.length; c++)b[c].setStyle(ImajnetMapImplementation.getDefaultStyle());
      a.getSource().addFeatures(b)
    } else console.error("Trying to add features to null layer.")
  },
  addProtocol1FeaturesToLayer: function (a, b) {
    try {
      if (a && (!isImajnetMode() || ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showLabels)) {
        var c = (new ol.format.GeoJSON).readFeatures(a);
        c[0] ? (ImajnetMapImplementation.removeOldFeatures(!0, !0), ImajnetMapImplementation.addImajnetFeatures(ImajnetMapImplementation.imajnetLRSLayer, c), ImajnetMapImplementation.protocol2FeaturesCache ? ImajnetMapImplementation.addImajnetFeatures(ImajnetMapImplementation.imajnetLRSLayer, ImajnetMapImplementation.protocol2FeaturesCache) :
          ImajnetMapImplementation.protocol1FeaturesLoaded = !0) : ImajnetMap.setImajboxMarkerPosition({position: ImajnetMap.currentPosition}, !1)
      }
    } catch (f) {
      console.error("Roads read features error: " + f)
    }
  },
  addProtocol2FeaturesToLayer: function (a) {
    try {
      if (a && (!isImajnetMode() || ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showLabels)) {
        var b = (new ol.format.GeoJSON).readFeatures(a);
        b[0] && (ImajnetMapImplementation.protocol1FeaturesLoaded ? (ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showRoads || ImajnetMapImplementation.removeOldFeatures(!1,
          !0), ImajnetMapImplementation.addImajnetFeatures(ImajnetMapImplementation.imajnetLRSLayer, b)) : ImajnetMapImplementation.protocol2FeaturesCache = b)
      }
    } catch (c) {
      console.error("PR read features error: " + c)
    }
  },
  getMapExtentFilter: function () {
    try {
      var a = map.getExtent();
      return new OpenLayers.Filter.Spatial({
        type: OpenLayers.Filter.Spatial.BBOX,
        property: CommonCore.geometryPropertyName,
        value: new OpenLayers.Bounds(a.left, a.bottom, a.right, a.top),
        projection: CommonCore.sphericalMercatorCrs
      })
    } catch (b) {
    }
  },
  createVectorLayerProtocol: function (a,
                                       b, c) {
    return ImajnetPlugin.getMapExtent() ? (new ol.format.WFS).writeGetFeature({
      geometryName: CommonCore.geometryPropertyName,
      featurePrefix: "feature",
      featureTypes: [b],
      featureNS: c,
      outputFormat: "application/json",
      srsName: CommonCore.sphericalMercatorCrs,
      bbox: ImajnetPlugin.getMapExtent(),
      filter: ol.format.filter.Bbox({
        geometryName: CommonCore.geometryPropertyName,
        extent: ImajnetPlugin.getMapExtent()
      })
    }) : null
  },
  initImajnetWMS: function () {
    ImajnetLRSSettings.LRSSettings && ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showRoads ?
      ImajnetMap.roadLayer || (ImajnetMap.roadLayer = ImajnetPlugin.addWMSLayerToMap(ImajnetMap.roadLayerName, ImajnetMap.LRSUrl)) : (ImajnetPlugin.removeLayerFromMap(ImajnetMap.roadLayer), ImajnetMap.roadLayer = null);
    ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showPR ? ImajnetMap.prLayer || (ImajnetMap.prLayer = ImajnetPlugin.addWMSLayerToMap(ImajnetMap.prLayerName, ImajnetMap.LRSUrl)) : (ImajnetPlugin.removeLayerFromMap(ImajnetMap.prLayer), ImajnetMap.prLayer = null)
  },
  initImajnetWFS: function () {
    ImajnetMapImplementation.protocol2FeaturesCache =
      null;
    var a = !1, b = !1;
    if (isImajnetMode()) ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showLabels && (a = ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showLabels, b = ImajnetLRSSettings.LRSSettings.display.addressAndLRS.showRoads); else {
      var c = MainCore.getNodeObjectFromLayerProperty(["layer.externalLayer.name"], Array(ImajnetMap.prLayerName));
      c && (a = c.select);
      if (c = MainCore.getNodeObjectFromLayerProperty(["layer.externalLayer.name"], Array(ImajnetMap.roadLayerName))) b = c.select
    }
    if (a || b) {
      ImajnetMapImplementation.imajnetWFSProtocol1 &&
      (ImajnetMapImplementation.imajnetWFSProtocol1 = null);
      if (!b) ImajnetMapImplementation.removeOldFeatures(!0, !1), ImajnetMapImplementation.protocol1FeaturesLoaded = !0; else if (11 < ImajnetPlugin.getCurrentZoomLevel())try {
        ImajnetMapImplementation.protocol1FeaturesLoaded = !1;
        var f = Imajnet.cartographicServerUrl + "/carto/" + ImajnetMap.key + "/wfs";
        ImajnetMapImplementation.imajnetWFSProtocol1 = ImajnetMapImplementation.createVectorLayerProtocol(f, ImajnetMap.roadWFSLayerName, Nigsys.getProtocolString() + "//imajnet.net");
        if (!ImajnetMapImplementation.imajnetWFSProtocol1)return;
        Nigsys.doAjaxRequest("POST", f, (new XMLSerializer).serializeToString(ImajnetMapImplementation.imajnetWFSProtocol1), ImajnetMapImplementation.addProtocol1FeaturesToLayer)
      } catch (e) {
      }
      ImajnetMapImplementation.imajnetWFSProtocol2 && (ImajnetMapImplementation.imajnetWFSProtocol2 = null);
      if (!a) ImajnetMapImplementation.removeOldFeatures(!1, !0); else if (15 < ImajnetPlugin.getCurrentZoomLevel())try {
        f = Imajnet.cartographicServerUrl + "/carto/" + ImajnetMap.key + "/wfs",
          ImajnetMapImplementation.imajnetWFSProtocol2 = ImajnetMapImplementation.createVectorLayerProtocol(f, ImajnetMap.prWFSLayerName, Nigsys.getProtocolString() + "//imajnet.net", ImajnetMapImplementation.addProtocol2FeaturesToLayer), ImajnetMapImplementation.imajnetWFSProtocol2 && Nigsys.doAjaxRequest("POST", f, (new XMLSerializer).serializeToString(ImajnetMapImplementation.imajnetWFSProtocol2), ImajnetMapImplementation.addProtocol2FeaturesToLayer)
      } catch (e) {
      }
    } else ImajnetMapImplementation.removeOldFeatures(!0, !0)
  },
  getDefaultStyle: function () {
    return new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: Nigsys.convertToHexFromRgba("#EE9900", .5),
        width: 6
      }),
      image: new ol.style.Circle({
        radius: 8,
        fill: new ol.style.Fill({color: Nigsys.convertToHexFromRgba("#EE9900", .5)}),
        stroke: new ol.style.Stroke({color: Nigsys.convertToHexFromRgba("#EE9900", .8), width: 4})
      })
    })
  },
  getSelectedStyle: function () {
    return new ol.style.Style({
      stroke: new ol.style.Stroke({color: Nigsys.convertToHexFromRgba("#00FF00"), width: 6}),
      image: new ol.style.Circle({
        radius: 8,
        fill: new ol.style.Fill({color: Nigsys.convertToHexFromRgba("#00FF00", .5)}),
        stroke: new ol.style.Stroke({color: Nigsys.convertToHexFromRgba("#00FF00", .8), width: 4})
      })
    })
  },
  getDefaultImajnetWFSStyle: function () {
    return new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: Nigsys.convertToHexFromRgba("#EE9900", .5),
        width: 6
      }), image: new ol.style.Circle({radius: 8})
    })
  },
  applyLayerFeaturesStyle: function (a, b) {
    for (var c = 0; c < a.features.length; c++)a.features[c].style && a.features[c].style.externalGraphic || (a.features[c].style =
      b, a.drawFeature(a.features[c]))
  },
  featureIsSection: function (a) {
    return a.getId() && -1 !== a.getId().indexOf(ImajnetMap.roadWFSLayerName + ".")
  },
  featureIsPR: function (a) {
    return a.getId() && -1 !== a.getId().indexOf(ImajnetMap.prWFSLayerName + ".")
  },
  onSaveLRSSettings: function () {
    isImajnetMode() && (ImajnetMapImplementation.initImajnetWMS(), ImajnetMapImplementation.initImajnetWFS());
    "function" === typeof ImajnetMap.setImajboxLayerOnTop && ImajnetMap.setImajboxLayerOnTop()
  },
  removeOldFeatures: function (a, b) {
    if (ImajnetMapImplementation.imajnetLRSLayer)for (var c =
      ImajnetMapImplementation.imajnetLRSLayer.getSource().getFeatures(), f = 0; f < c.length; f++)!ImajnetMapImplementation.featureIsSection(c[f]) && !ImajnetMapImplementation.featureIsPR(c[f]) || !a && ImajnetMapImplementation.featureIsSection(c[f]) || !b && ImajnetMapImplementation.featureIsPR(c[f]) || ImajnetMapImplementation.imajnetLRSLayer.getSource().removeFeature(c[f])
  },
  onSectionFeatureMouseOver: function (a, b) {
    CommonCore.removeFeatureInfo();
    jQuery("#map").append(CommonCore.getFeatureInfoPopupContentBlue(jQuery.app.map.popupFeatureInfo.roadSections,
      [{key: "roadName", value: a.get("roadname")}, {
        key: "roadShortName",
        value: a.get("roadshortname")
      }, {key: "sectionName", value: a.get("sectionname")}, {key: "roadType", value: a.get("roadtype")}]));
    CommonCore.registerFeatureMouseMove(a.get("roadname"));
    Nigsys.positionExistingElement(b.mapBrowserEvent.originalEvent, null, "map", jQuery(".popupFeatureInfo"));
    for (var c = ImajnetMapImplementation.imajnetLRSLayer.getSource().getFeatures(), f = 0; f < c.length; f++)c[f].get("roadid") !== a.get("roadid") || c[f].get("fid") == a.get("fid") ||
    ImajnetMapImplementation.featureIsPR(c[f]) || (c[f].setStyle(new ol.style.Style({
      stroke: new ol.style.Stroke({
        color: "#000000",
        width: 3
      })
    })), c[f].changed(), c[f].set("isSelected", !0))
  },
  onPRFeatureMouseOver: function (a, b) {
    CommonCore.removeFeatureInfo();
    jQuery("#map").append(CommonCore.getFeatureInfoPopupContentPR(jQuery.app.map.popupFeatureInfo.pr, [{
      key: "pr",
      value: a.get("number")
    }, {key: "roadName", value: a.get("roadname")}, {
      key: "roadShortName",
      value: a.get("roadshortname")
    }, {key: "roadType", value: a.get("roadtype")}]));
    CommonCore.registerFeatureMouseMove(a.get("roadname"));
    Nigsys.positionExistingElement(b.mapBrowserEvent.originalEvent, null, "map", jQuery(".popupFeatureInfo"))
  },
  createImajnetDragMarkerFeatureControl: function () {
    if (ImajnetMap.allWFS) {
      if (!ImajnetMapImplementation.dragFeature) map.on("pointermove", function (a) {
        ImajnetMapImplementation.clickFeature.getFeatures().clear();
        var b = map.forEachFeatureAtPixel(a.pixel, function (a, b) {
          return b && b.get("name") == ImajnetMap.allWFSName ? a : null
        });
        a = a.map.getTargetElement();
        b && "Imajbox Marker" == b.get("type") ? a.style.cursor = "pointer" : a.style.cursor = "auto"
      });
      map.removeInteraction(ImajnetMapImplementation.dragFeature);
      ImajnetMapImplementation.dragFeature = new ol.interaction.Modify({
        features: new ol.Collection([ImajnetMapImplementation.dragBoxFeature]),
        style: ImajnetMapImplementation.dragBoxFeature.getStyle(),
        condition: ol.events.condition.singleclick,
        pixelTolerance: 12
      });
      ImajnetMapImplementation.dragFeature.on("modifystart", function () {
        ImajnetMap.hideOrientation()
      });
      ImajnetMapImplementation.dragFeature.on("modifyend",
        function (a, b) {
          var c = ol.proj.transform(a.mapBrowserEvent.coordinate, ImajnetMap.map.projection, ImajnetMapImplementation.imajnetProjection);
          ImajnetMap.onMapClick({lon: c[0], lat: c[1]}, !0)
        });
      map.addInteraction(ImajnetMapImplementation.dragFeature);
      ImajnetMapImplementation.dragFeature.setActive(!0)
    }
  },
  isWFSLayerForSelectFeatureControl: function (a) {
    return a instanceof ol.layer.Vector && a.get("name") != ImajnetMap.imajnetSurveyTraceLayerName && a.get("name") != ImajnetMap.imajnetImageSwitcherLayerName && a.get("name") !=
      ImajnetMap.imajnetOrientationLayerName
  },
  layersForSelectFeatureControl: function () {
    for (var a = 0; a < map.layers.length; a++)if (ImajnetMapImplementation.isWFSLayerForSelectFeatureControl(map.layers[a]))return !0;
    return !1
  },
  getMapLayersForSelectFeatureControl: function () {
    for (var a = [], b = map.getLayers().getArray(), c = 0; c < b.length; c++)ImajnetMapImplementation.isWFSLayerForSelectFeatureControl(b[c]) && a.push(b[c]);
    return a
  },
  setFeatureStyle: function (a, b) {
    a.setStyle(b);
    a.changed()
  },
  createSelectFeatureControl: function () {
    var a =
      ImajnetMapImplementation.getMapLayersForSelectFeatureControl();
    if (0 == a.length) ImajnetMapImplementation.deactivateHoverAndClickFeature(); else {
      if (ImajnetMapImplementation.selectFeatureControl)try {
        ImajnetMapImplementation.selectFeatureControl.setProperties({layers: a})
      } catch (c) {
      } else ImajnetMapImplementation.selectFeatureControl = new ol.interaction.Select({
        condition: ol.events.condition.pointerMove,
        layers: a,
        multi: !1,
        style: ImajnetMapImplementation.getSelectedStyle(),
        filter: function (a, b) {
          a.set("layer", b);
          return !0
        },
        beforefeaturehighlighted: function (a, b) {
          console.log(a, b)
        }
      }), ImajnetMapImplementation.selectFeatureControl.on("select", function (a, b) {
        if (!CommonCore.isMobile && ("exportFeatures" != CommonCore.buttonClicked || "featuresExport" != Export.exportOption))if (0 < a.selected.length) {
          var e = a.selected[0];
          ImajnetMapImplementation.selectedFeaturesArray.push(e);
          if (ImajnetMapImplementation.featureIsSection(e)) ImajnetMapImplementation.onSectionFeatureMouseOver(e, a), ImajnetMapImplementation.setFeatureStyle(e, ImajnetMapImplementation.getSelectedStyle()),
            e.set("isSelected", !0); else if (ImajnetMapImplementation.featureIsPR(e)) ImajnetMapImplementation.onPRFeatureMouseOver(e, a), ImajnetMapImplementation.setFeatureStyle(e, ImajnetMapImplementation.getSelectedStyle()), e.set("isSelected", !0); else {
            var d = ImajnetMapImplementation.getFeatureWrapperByFeature(e);
            if (d) d.getType() != ImajnetMap.MARKER_TYPE_IMAJBOX && d.getType() != ImajnetMap.FEATURE_TYPE_IMAGE_ORIENTATION && d.getType() != ImajnetMap.FEATURE_TYPE_LARGE_IMAGE_ORIENTATION && ImajnetPlugin.highlightFeatureOnImage(d);
            else if (e.data) {
              var h = e.fid;
              if (!(h || "undefined" !== typeof MainCore.isExternalLayer && MainCore.isExternalLayer(g)))return !1;
              var g = e.layer.customIdentifier;
              g || (g = MainCore.getLayerNameWithWorkspace(CommonCore.getLayerNameFromFeatureId(e.fid)));
              var d = Nigsys.getEventRelativeCoordinates(this.handlers.feature.evt), k = Nigsys.cloneObject(e.data);
              Feature.formatDateForFeature(g, k);
              Feature.getFeatureDataPopup({
                clientX: d.x,
                clientY: d.y
              }, null, "map", g, h, k, e.geometry, map.projection.getCode());
              "undefined" !== typeof LRSSchematic &&
              LRSSchematic.highlightFeature(h)
            }
          }
        } else {
          ImajnetMapImplementation.selectedFeaturesArray.push(a.deselected[0]);
          for (h in ImajnetMapImplementation.selectedFeaturesArray) {
            e = ImajnetMapImplementation.selectedFeaturesArray[h];
            CommonCore.removeFeatureInfo();
            CommonCore.unregisterFeatureMouseMove();
            if (ImajnetMapImplementation.featureIsSection(e) || ImajnetMapImplementation.featureIsPR(e))for (g = ImajnetMapImplementation.imajnetLRSLayer.getSource().getFeatures(), d = 0; d < g.length; d++)g[d].get("isSelected") && (ImajnetMapImplementation.setFeatureStyle(g[d],
              ImajnetMapImplementation.getDefaultStyle()), g[d].set("isSelected", !1));
            if (d = ImajnetMapImplementation.getFeatureWrapperByFeature(e)) {
              if (d.getType() == ImajnetMap.MARKER_TYPE_IMAJBOX || d.getType() == ImajnetMap.FEATURE_TYPE_IMAGE_ORIENTATION || d.getType() == ImajnetMap.FEATURE_TYPE_LARGE_IMAGE_ORIENTATION) {
                ImajnetMapImplementation.selectedFeaturesArray.length = 0;
                return
              }
              ImajnetPlugin.unHighlightFeatureOnImage(d);
              ImajnetMapImplementation.selectedFeaturesArray.length = 0;
              return
            }
            e.data && (CommonCore.removeFeatureInfo(),
            e.fid && "undefined" !== typeof LRSSchematic && LRSSchematic.unHighlightFeature(e.fid))
          }
          ImajnetMapImplementation.selectedFeaturesArray.length = 0
        }
      }), map.addInteraction(ImajnetMapImplementation.selectFeatureControl);
      var b = a.slice();
      b.push(ImajnetMap.imajnetDragFeaturesLayer);
      if (ImajnetMapImplementation.clickFeature)try {
        ImajnetMapImplementation.clickFeature.setProperties({layers: a})
      } catch (c) {
      } else ImajnetMapImplementation.clickFeature = new ol.interaction.Select({
        addCondition: ol.events.condition.click,
        toggleCondition: ol.events.condition.click,
        layers: b,
        removeCondition: ol.events.condition.pointerMove,
        style: ImajnetMapImplementation.getSelectedStyle(),
        filter: function (a, b) {
          a.set("layer", b);
          return !0
        }
      }), ImajnetMapImplementation.clickFeature.on("select", function (a, b) {
        if (0 < a.selected.length) {
          var e = a.selected[0];
          if (!(CommonCore.isMobile || CommonCore.buttonIsActive("olControlInfoFeatures") || CommonCore.buttonIsActive("olControlGetFeatures") || CommonCore.buttonIsActive("olControlModifyFeature") || "drawFeature" == CommonCore.buttonClicked))if (CommonCore.mapClickType)if ("CG34Arbres" ==
            CommonCore.mapClickType) CG34Arbres.onMapClick(event); else if ("feature" == CommonCore.mapClickType) Feature.onMapClick(event); else {
            if ("polygonFromPoint" == CommonCore.mapClickType) PolygonFromPoint.onMapClick(event)
          } else {
            var d = ImajnetMapImplementation.getFeatureWrapperByFeature(e);
            if (d) {
              if (d.getType() == ImajnetMap.MARKER_TYPE_IMAJBOX || d.getType() == ImajnetMap.FEATURE_TYPE_IMAGE_ORIENTATION || d.getType() == ImajnetMap.FEATURE_TYPE_LARGE_IMAGE_ORIENTATION) {
                ImajnetMeasurement.onMeasurementClick(d);
                return
              }
              if (d.getType() ==
                ImajnetMap.FEATURE_TYPE_POLYLIGNE) {
                ImajnetMeasurement.onClick(d);
                return
              }
              if (d.getType() == ImajnetMap.FEATURE_TYPE_ORIENTED_IMAGES) {
                if (!Imajnet.imajnetOrientedImagesIsActive())return;
                -1 < d.getId() && ImajnetClickMode.moveImageToPosition(d.getId());
                return
              }
            }
            e.data && e.fid && ((d = e.layer.customIdentifier) || (d = MainCore.getLayerNameWithWorkspace(CommonCore.getLayerNameFromFeatureId(e.fid))), Feature.highlightFeature(d, e.fid, {
              mustZoomToFeature: !0,
              editFeature: !0,
              editIsDisabledByInfo: !0
            }))
          }
        }
      }), map.addInteraction(ImajnetMapImplementation.clickFeature);
      ImajnetMapImplementation.activateHoverAndClickFeature()
    }
  },
  activateHoverAndClickFeature: function () {
    Imajnet.imajnetClosestPositionIsActive() || Imajnet.imajnetOrientedImagesIsActive() || (ImajnetMapImplementation.selectFeatureControl && ImajnetMapImplementation.selectFeatureControl.setActive("true"), ImajnetMapImplementation.clickFeature && ImajnetMapImplementation.clickFeature.setActive("false"))
  },
  deactivateHoverAndClickFeature: function () {
    try {
      ImajnetMapImplementation.selectFeatureControl && (ImajnetMapImplementation.selectFeatureControl.setActive("false"),
        map.removeControl(ImajnetMapImplementation.selectFeatureControl), CommonCore.removeFeatureInfo(), jQuery("#" + ImajnetMapImplementation.selectFeatureControl.div.id).remove()), ImajnetMapImplementation.clickFeature && (ImajnetMapImplementation.clickFeature.setActive("false"), map.removeControl(ImajnetMapImplementation.clickFeature), jQuery("#" + ImajnetMapImplementation.clickFeature.div.id).remove())
    } catch (a) {
    }
  },
  activateMapNavigation: function () {
    try {
      var a = this.map.getControlsByClass("OpenLayers.Control.Navigation");
      if (null !== a)for (var b = 0; b < a.length; ++b)a[b].enableZoomWheel()
    } catch (c) {
    }
  },
  deactivateMapNavigation: function () {
    if ("function" === typeof map.getControlsByClass) {
      var a = this.map.getControlsByClass("OpenLayers.Control.Navigation");
      if (null !== a)for (var b = 0; b < a.length; ++b)a[b].disableZoomWheel()
    }
  },
  getFeatureWrapperByFeature: function (a) {
    for (var b = 0, c = ImajnetMap.featureWrappers.length; b < c; ++b)if (ImajnetMap.featureWrappers[b].feature == a)return ImajnetMap.featureWrappers[b];
    return null
  },
  addImajnetSettingsButtons: function () {
    jQuery(ImajnetUI.imajnetToolbarButtons.div).append('\x3cdiv id\x3d"imajnetSettingsButton" class\x3d"imajnetSettingsButton" title\x3d"' +
      jQuery.imajnet.settings.settings + '"\x3e\x3cdiv id\x3d"imajnetSettingsDropDownDiv" class\x3d"expandableToolbarDiv"\x3e\x3cdiv class\x3d"expandableToolbarDivItem" onclick\x3d"ImajnetSettings.showImajnetSettings(); jQuery(\'.buttonExpandedDiv\').hide();"\x3e' + jQuery.imajnet.settings.settings + "\x3c/div\x3e\x3cdiv class\x3d\"expandableToolbarDivItem\" onclick\x3d\"ImajnetLRSSettings.showImajnetLRSSettings(); jQuery('#imajnetWebShowRoadsAndPR').remove(); jQuery('.buttonExpandedDiv').hide();\"\x3e" + jQuery.imajnet.settings.LRSSettings +
      '\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"imajnetHelpButton" class\x3d"imajnetSettingsButton" title\x3d"' + jQuery.imajnet.menuHelp + '"\x3e\x3cdiv id\x3d"imajnetHelpDropDownDiv" class\x3d"expandableToolbarDiv"\x3e\x3cdiv  class\x3d"expandableToolbarDivItem" onclick\x3d"ImajnetUI.showHelp(); jQuery(\'.buttonExpandedDiv\').hide();"\x3e' + jQuery.imajnet.menuHelp + '\x3c/div\x3e\x3cdiv  class\x3d"expandableToolbarDivItem" onclick\x3d"ImajnetUI.showAboutImajnet(); jQuery(\'.buttonExpandedDiv\').hide();"\x3e' +
      jQuery.imajnet.menuAboutImajnet + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e");
    jQuery("#imajnetSettingsButton").bind({
      mouseenter: function () {
        if (!Imajnet.imajnetIsActive())return !1;
        jQuery("#imajnetSettingsDropDownDiv").show()
      }, mouseleave: function () {
        if (!Imajnet.imajnetIsActive())return !1;
        jQuery("#imajnetSettingsDropDownDiv").hide()
      }
    });
    jQuery("#imajnetHelpButton").bind({
      mouseenter: function () {
        if (!Imajnet.imajnetIsActive())return !1;
        jQuery("#imajnetHelpDropDownDiv").show()
      }, mouseleave: function () {
        if (!Imajnet.imajnetIsActive())return !1;
        jQuery("#imajnetHelpDropDownDiv").hide()
      }
    });
    Nigsys.browserIsIE7() || Nigsys.browserIsIE8() || (jQuery("#imajnetSettingsDropDownDiv").corner(), jQuery("#imajnetHelpDropDownDiv").corner())
  },
  createMapControls: function () {
    var a = 288;
    isImajnetMode() && (a = 226);
    ImajnetUI.docking.imajnetMapButtons = new ImajnetDocking(isImajnetMode() ? jQuery("#map") : MainCore.mapDockingContainer, CommonCore.getPredefinedZoomLevelsHTML() + '\x3cdiv id\x3d"mapControls"\x3e\x3c/div\x3e', "Right", "imajnetMapButtons", {
      width: dockingRightContainerSize,
      height: a, right: 0, top: 240
    });
    CheckDockingCookie("imajnetMapButtons");
    if (CommonCore.imajnetIsActive()) {
      a = 196;
      isImajnetMode() && (a = 132);
      var b = (isImajnetMode() ? '\x3cdiv id\x3d"searchDropDownButton" title\x3d"' + jQuery.imajnet.button.search + '"\x3e\x3cdiv id\x3d"searchDropDownDiv" class\x3d"buttonExpandedDiv"\x3e\x3cdiv id\x3d"searchLRSLink"\x3e' + jQuery.imajnet.map.popupSearchLRS.title + '\x3c/div\x3e\x3cdiv id\x3d"searchAddressLink"\x3e' + jQuery.imajnet.map.popupSearchAddress.title + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e" :
          "") + '\x3cdiv id\x3d"imajnetControlsButtons"\x3e\x3c/div\x3e';
      ImajnetUI.docking.imajnetButtons = new ImajnetDocking(isImajnetMode() ? jQuery("#map") : MainCore.mapDockingContainer, b, "Right", "imajnetButtons", {
        width: dockingRightContainerSize,
        height: a,
        right: 0,
        top: 40
      });
      CheckDockingCookie("imajnetButtons");
      Nigsys.bindClickEvent(jQuery("#searchLRSLink"), function (a) {
        LRS.openLRSDialog();
        jQuery(".buttonExpandedDiv").hide()
      });
      Nigsys.bindClickEvent(jQuery("#searchAddressLink"), function (a) {
        Address.openSearchDialog();
        jQuery(".buttonExpandedDiv").hide()
      });
      ImajnetUI.btnClosestImageDiv = jQuery("\x3cdiv/\x3e").addClass("olControlImajnetClosestImageItemInactive").prop("title", jQuery.imajnet.button.closestImage).click(function (a) {
        if (Imajnet.clickMode == Imajnet.CLICK_MODE_CLOSEST_IMAGE)return !1;
        CommonCore.disableCommonControls();
        Imajnet.activateImajnetControl(ImajnetUI.btnClosestImageDiv, "closestImage");
        CommonCore.activateMapClick()
      });
      jQuery("#imajnetControlsButtons").append(ImajnetUI.btnClosestImageDiv);
      ImajnetUI.btnClickModeDiv =
        jQuery("\x3cdiv/\x3e").addClass("olControlImajnetClickModeItemInactive").prop("title", jQuery.imajnet.button.clickMode).click(function (a) {
          if (Imajnet.clickMode == Imajnet.CLICK_MODE_ORIENTED_IMAGES)return !1;
          CommonCore.disableCommonControls();
          CommonCore.activateMapClick();
          Imajnet.deactivateImajnetControl(ImajnetUI.btnClickModeDiv, "clickMode");
          Imajnet.activateImajnetControl(ImajnetUI.btnClickModeDiv, "clickMode")
        });
      jQuery("#imajnetControlsButtons").append(ImajnetUI.btnClickModeDiv);
      ImajnetUI.btnEnableClipboardDiv =
        jQuery("\x3cdiv/\x3e").addClass("olControlImajnetClipboardItemInactive").prop("title", jQuery.imajnet.map.clipboard.enableClipboard).click(function (a) {
          ImajnetUI.buttonIsActive(ImajnetUI.btnEnableClipboardDiv) ? Imajnet.deactivateImajnetControl(ImajnetUI.btnEnableClipboardDiv, "showClipboard") : Imajnet.activateImajnetControl(ImajnetUI.btnEnableClipboardDiv, "showClipboard")
        });
      jQuery("#imajnetControlsButtons").append(ImajnetUI.btnEnableClipboardDiv);
      isImajnetMode() ? Common.bindSearchButtonEvents() : (ImajnetUI.btnImajnetPlugin =
        new OpenLayers.Control.Button({
          title: jQuery.imajnet.button.enableImajnet,
          displayClass: "olControlImajnetPlugin",
          trigger: function () {
            ImajnetUI.buttonIsActive(ImajnetUI.btnImajnetPluginDiv) ? Imajnet.deactivateImajnet(!1, !0, !0) : MainMethodsCore.initImajnet(!0).done(function () {
              ImajnetPlugin.onImajnetActivated(!0)
            })
          }
        }), ImajnetUI.imajnetToolbarButtons.addControls([ImajnetUI.btnImajnetPlugin]), ImajnetUI.btnImajnetPluginDiv = jQuery(ImajnetUI.btnImajnetPlugin.panel_div), ImajnetUI.btnEnableClipboardDiv = jQuery(ImajnetUI.btnEnableClipboard.panel_div));
      isImajnetMode() || ImajnetMapImplementation.addImajnetSettingsButtons();
      Imajnet.imajnetIsActive() || ImajnetUI.deactivateImajnetToolbarButtons()
    }
  }
};
"undefined" !== typeof ImajnetPlugin && (ImajnetPlugin.featuresForProjection = {}, ImajnetPlugin.stylesForProjection = null, ImajnetPlugin.cachedProjections = {}, ImajnetPlugin.setLayerZIndex = function (a, b) {
  a.setZIndex(b)
}, ImajnetPlugin.addImajnetLayerToMap = function () {
  var a = "en" == localeLanguage ? "eu" : localeLanguage, a = new ol.layer.Tile({
    name: ImajnetMap.layerName,
    source: new ol.source.TileImage({urls: ImajnetMap.getImajnetTileUrls()}),
    type: "png",
    isBaseLayer: !1,
    displayInLayerSwitcher: !1,
    displayOutsideMaxExtent: !1,
    attribution: '\x3ca href\x3d"http://www.imajing.' +
    a + '" target\x3d"_blank"\x3e\x26#169; ' + (new Date).getFullYear() + " Imajing\x3c/a\x3e"
  });
  0 == map.getLayers().getLength() ? (a.set("isBaseLayer", !0), map.getLayers().insertAt(0, a)) : map.addLayer(a);
  return a
}, ImajnetPlugin.getMapExtent = function () {
  if (map.getView().getResolution())return map.getView().calculateExtent(map.getSize())
}, ImajnetPlugin.centerMapToPosition = function (a, b) {
  var c = ol.proj.transform([parseFloat(a.lon), parseFloat(a.lat)], ImajnetMapImplementation.imajnetProjection, map.projection);
  if (b) {
    var d =
      ImajnetPlugin.getMapExtent();
    if (!d || ol.extent.containsCoordinate(d, c))return
  }
  map.getView().setCenter(c)
}, ImajnetPlugin.getMapScale = function () {
  var a = map.getView(), b = a.getResolution(), a = a.getProjection().getUnits();
  return 25.4 / .28 * ol.proj.METERS_PER_UNIT[a] * 39.37 * b
}, ImajnetPlugin.zoomMapTo = function (a) {
  a && map.getView().setZoom(parseInt(a))
}, ImajnetPlugin.zoomMapToFeatureWrapper = function (a, b) {
  var c = a.getFeature();
  if (c) {
    var d = 17 < ImajnetPlugin.getCurrentZoomLevel() ? ImajnetPlugin.getCurrentZoomLevel() : 17;
    map.getView().fit(c.getGeometry(), map.getSize(), {maxZoom: d})
  }
}, ImajnetPlugin.getMapResolution = function () {
  return map.getResolution()
}, ImajnetPlugin.getCurrentZoomLevel = function () {
  return Math.round(map.getView().getZoom())
}, ImajnetPlugin.addWMSLayerToMap = function (a, b) {
  var c = new ol.layer.Tile({
    singleTile: !1, customIdentifier: a, opacity: 1, buffer: 0, name: a, source: new ol.source.TileWMS({
      params: {LAYERS: a, STYLES: "", TRANSPARENT: !0, FORMAT: "image/png", TILED: !0, VERSION: "1.3.0"},
      urls: "string" === typeof b ? Array(b) :
        b
    })
  });
  c.setOpacity(1);
  map.addLayer(c);
  return c
}, ImajnetPlugin.addVectorLayerToMap = function (a, b, c) {
  b = 1;
  a == ImajnetMap.imajnetSurveyTraceLayerName ? (b = .5, c = {displayInLayerSwitcher: !1}) : a == ImajnetMap.imajnetImageSwitcherLayerName ? (b = .5, c = {displayInLayerSwitcher: !1}) : a == ImajnetMap.dragFeaturesLayerName ? (b = 1, c = {
    displayInLayerSwitcher: !1,
    rendererOptions: {zIndexing: !0, yOrdering: !1}
  }) : a == ImajnetMap.imajnetDragFeaturesLayerName ? c = {zIndex: 100} : a == ImajnetMapImplementation.imajnetLRSLayerName ? c = {zIndex: 95} : ImajnetMap.allWFSName &&
    (b = 1, c = {displayInLayerSwitcher: !1, style: ImajnetMapImplementation.getDefaultStyle()});
  var d = new ol.layer.Vector({name: a, source: new ol.source.Vector, updateWhileInteracting: !0});
  d.setOpacity(b);
  c.style && d.setStyle(c.style);
  d.set("displayInLayerSwitcher", c.displayInLayerSwitcher);
  ImajnetPlugin.addZIndexToLayer(a, d);
  map.addLayer(d);
  return d
}, ImajnetPlugin.addZIndexToLayer = function (a, b) {
  var c = 0;
  switch (a) {
    case ImajnetMap.allWFSName:
      c = 100;
      break;
    case ImajnetMap.imajnetOrientationLayerName:
      c = 99;
      break;
    case ImajnetMap.imajnetDragFeaturesLayerName:
      c =
        98;
      break;
    case ImajnetMapImplementation.imajnetLRSLayerName:
      c = 97
  }
  b.setZIndex(c)
}, ImajnetPlugin.addMarkerLayerToMap = function (a) {
  var b = null;
  a == ImajnetMap.photogrammetryPositionsLayerName && (b = {displayInLayerSwitcher: !1});
  a = new ol.layer.Vector({name: a, source: new ol.source.Vector});
  a.set("displayInLayerSwitcher", b.displayInLayerSwitcher);
  map.addLayer(a);
  return a
}, ImajnetPlugin.removeLayerFromMap = function (a, b) {
  a && (map.removeLayer(a), isImajnetMode() || ThematicGroupsTreeCore.reorderSearchableLayers())
}, ImajnetPlugin.removeAllMarkerFeatures =
  function (a) {
    markerLayer.getSource().clear()
  }, ImajnetPlugin.removeAllMarkersFromLayer = function (a) {
  a && a.getSource().clear()
}, ImajnetPlugin.setMarkerOpacity = function (a, b, c) {
  b.feature && b.feature.getStyle() && b.feature.getStyle().getImage() ? (b.feature.getStyle().getImage().setOpacity(c), b.feature.changed()) : console.error("Cannot set opacity!")
}, ImajnetPlugin.addMarker = function (a, b) {
  if (b.type == ImajnetMap.markerType.IMAJBOX) {
    var c = ImajnetPlugin.addImajboxMarker(a, b);
    ImajnetMapImplementation.createImajnetDragMarkerFeatureControl();
    return c
  }
  var c = ol.proj.transform([parseFloat(b.lon), parseFloat(b.lat)], ImajnetMapImplementation.imajnetProjection, map.projection),
    d = {src: b.imagePath, size: [b.size.width, b.size.height]};
  b.type == ImajnetMap.markerType.CLICK_POSITION_ON_MAP && (d.anchor = [.5, 1]);
  d = new ol.style.Style({image: new ol.style.Icon(d)});
  c = new ol.Feature({geometry: new ol.geom.Point(c)});
  c.setStyle(d);
  a.getSource().addFeature(c);
  d = new FeatureWrapper;
  d.setFeature(c);
  return d
}, ImajnetPlugin.addImajboxMarker = function (a, b) {
  var c = ol.proj.transform([parseFloat(b.lon),
      parseFloat(b.lat)], ImajnetMapImplementation.imajnetProjection, map.projection),
    d = new ol.style.Style({image: new ol.style.Icon({src: b.imagePath})});
  ImajnetMapImplementation.dragBoxFeature = new ol.Feature({geometry: new ol.geom.Point(c)});
  ImajnetMapImplementation.dragBoxFeature.setStyle(d);
  ImajnetMapImplementation.dragBoxFeature.set("type", "Imajbox Marker");
  ImajnetMapImplementation.dragBoxFeature.changed();
  a.getSource().addFeature(ImajnetMapImplementation.dragBoxFeature);
  c = new FeatureWrapper;
  c.setFeature(ImajnetMapImplementation.dragBoxFeature);
  return c
}, ImajnetPlugin.afterImajnetLayersAddedToMap = function () {
  isImajnetMode() ? (ImajnetMapImplementation.imajnetLRSLayer = ImajnetPlugin.addVectorLayerToMap(ImajnetMapImplementation.imajnetLRSLayerName, 1), ImajnetMapImplementation.initImajnetWFS(), ImajnetMapImplementation.createSelectFeatureControl()) : (MapMethodsCore.setWFSLayersOnTop(), ImajnetMapImplementation.createImajnetDragMarkerFeatureControl(), ImajnetMapImplementation.createSelectFeatureControl(), MapMethodsCore.refreshMapLayersZIndex())
}, ImajnetPlugin.removeMarker =
  function (a, b) {
    a.getSource().removeFeature(b.feature);
    a.setVisible(!1);
    a.setVisible(!0);
    a.getSource().changed();
    b.type == ImajnetMap.MARKER_TYPE_IMAJBOX && ImajnetMapImplementation.dragFeature.setActive(!1)
  }, ImajnetPlugin.removeMarkerFeatures = function (a, b) {
  for (var c = 0, d = b.length; c < d; ++c)this.removeMarker(a, b[c])
}, ImajnetPlugin.addFeature = function (a, b, c) {
  var d = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: Nigsys.convertToHexFromRgba(c.strokeColor, c.strokeOpacity),
      width: c.strokeWidth
    }), fill: new ol.style.Fill({
      color: Nigsys.convertToHexFromRgba(c.fillColor ||
        c.strokeColor, c.fillOpacity)
    })
  }), e = null;
  if ("Point" == c.type) d = new ol.style.Style({
    image: new ol.style.Circle({
      radius: c.radius ? c.radius : 5,
      fill: new ol.style.Fill({color: Nigsys.convertToHexFromRgba(c.fillColor || c.strokeColor, c.fillOpacity)}),
      stroke: new ol.style.Stroke({
        color: Nigsys.convertToHexFromRgba(c.strokeColor, c.strokeOpacity),
        width: c.strokeWidth
      })
    })
  }), e = new ol.geom.Point(ol.proj.transform([parseFloat(b.x), parseFloat(b.y)], ImajnetMapImplementation.imajnetProjection, map.projection)); else if ("LineString" ==
    c.type) {
    c = 0;
    for (e = b.length; c < e; ++c)b[c] = ol.proj.transform([parseFloat(b[c].x), parseFloat(b[c].y)], ImajnetMapImplementation.imajnetProjection, map.projection);
    e = new ol.geom.LineString(b)
  } else if ("Polygon" == c.type) {
    c = 0;
    for (e = b.length; c < e; ++c)b[c] = ol.proj.transform([parseFloat(b[c].x), parseFloat(b[c].y)], ImajnetMapImplementation.imajnetProjection, map.projection);
    e = new ol.geom.Polygon([b])
  } else if ("MultiPolygon" == c.type) {
    for (c = 0; c < b.length; c++)for (var e = 0, f = b[c].length; e < f; ++e)b[c][e] = ol.proj.transform([parseFloat(b[c][e].x),
      parseFloat(b[c][e].y)], ImajnetMapImplementation.imajnetProjection, map.projection);
    e = new ol.geom.MultiPolygon([b])
  }
  b = new ol.Feature(e);
  b.setStyle(d);
  a.getSource().addFeature(b);
  a = new FeatureWrapper;
  a.setFeature(b);
  return a
}, ImajnetPlugin.removeFeatures = function (a, b) {
  if (a && b && !(1 > b.length)) {
    var c = a.getSource().getFeatures();
    if (c.length) {
      for (var d = 0, e = c.length; d < e; ++d)for (var f = 0, g = b.length; f < g; ++f)b[f] && c[d] == b[f].feature && a.getSource().removeFeature(b[f].feature);
      a.getSource().changed()
    }
  }
}, ImajnetPlugin.removeAllFeatures =
  function (a) {
    a && (a.getSource().clear(), a.getSource().changed())
  }, ImajnetPlugin.selectMarker = function (a, b) {
  ImajnetPlugin.setMarkerOpacity(a, b, .6)
}, ImajnetPlugin.unselectMarker = function (a, b) {
  ImajnetPlugin.setMarkerOpacity(a, b, 1)
}, ImajnetPlugin.selectFeature = function (a, b) {
  ImajnetMapImplementation.selectFeatureControl.getFeatures().push(b.feature);
  ImajnetMapImplementation.selectFeatureControl.dispatchEvent({type: "select", selected: [b.feature], deselected: []});
  b.getFeature().getStyle().getStroke().setColor(Nigsys.convertToHexFromRgba(Nigsys.defaultObjectsColor,
    .5))
}, ImajnetPlugin.unselectFeature = function (a, b) {
  ImajnetMapImplementation.selectFeatureControl.getFeatures().clear();
  ImajnetMapImplementation.selectFeatureControl.dispatchEvent({type: "select", selected: [], deselected: [b.feature]});
  b.getFeature().getStyle().getStroke().setColor(Nigsys.convertToHexFromRgba(Nigsys.defaultObjectsColor))
}, ImajnetPlugin.onFeatureMouseOver = function () {
}, ImajnetPlugin.onFeatureMouseOut = function () {
}, ImajnetPlugin.onMoveEnd = function (a) {
  ImajnetMap.imajnetOrientationLayer.setVisible(!0);
  CommonCore.isFromNavigationHistory || CommonCore.storeCurrentView({
    center: map.getView().getCenter(),
    zoom: map.getView().getZoom()
  });
  CommonCore.isFromNavigationHistory = !1;
  if (currentZoomLevel != map.getView().getZoom()) currentZoomLevel = map.getView().getZoom(); else ImajnetPlugin.onDragEnd()
}, ImajnetPlugin.onDragEnd = function () {
  CommonCore.disableGeneralView();
  ImajnetWeb.dragEndHandler();
  if (isImajnetMode())try {
    ImajnetMapImplementation.initImajnetWFS()
  } catch (a) {
  }
  CommonCore.unregisterFeatureMouseMove()
}, ImajnetPlugin.onZoomStart =
  function (a) {
    a && ImajnetMapImplementation.selectFeatureControl && (ImajnetMap.imajnetOrientationLayer.setVisible(!1), ImajnetMapImplementation.selectFeatureControl.getFeatures().clear());
    ImajnetPlugin.getCurrentZoomLevel() > CommonCore.baseLayersMaxZoom - 1 && "emptyBaseLayer" !== CommonCore.currentBaseLayerName ? map.setBaseLayer(CommonCore.emptyBaseLayer) : ImajnetPlugin.getCurrentZoomLevel() <= CommonCore.baseLayersMaxZoom - 1 && "emptyBaseLayer" !== CommonCore.lastBaseLayerName && "emptyBaseLayer" == CommonCore.currentBaseLayerName &&
      map.setBaseLayer(CommonCore.lastBaseLayer);
    CommonCore.disableGeneralView();
    CommonCore.addPanZoomBarEvents();
    a && ImajnetMap.mapZoomEndHandler();
    CommonCore.unregisterFeatureMouseMove();
    map.updateSize()
  }, ImajnetPlugin.registerMapEvents = function () {
  currentZoomLevel = map.getView().getZoom();
  map.getView().on("change:resolution", ImajnetPlugin.onZoomStart);
  map.on("moveend", ImajnetPlugin.onMoveEnd)
}, ImajnetPlugin.unregisterMapEvents = function () {
  map.un("moveend", ImajnetPlugin.onMoveEnd);
  map.getView().un("change:resolution",
    ImajnetPlugin.onZoomStart)
}, ImajnetPlugin.clearCachedProjections = function (a) {
  jQuery.each(ImajnetPlugin.cachedProjections, function (b, c) {
    delete c[a]
  })
}, ImajnetPlugin.getFeaturesForProjection = function (a, b, c, d) {
  var e = jQuery.Deferred();
  if (ImajnetPlugin.cachedProjections[d][a])return ImajnetPlugin.featuresForProjection[a].features = ImajnetPlugin.cachedProjections[d][a].features, e.resolve();
  MainCore.getFeatureAjaxPostRequest(b, !0, null, null, null, {layerName: a, filter: c}).done(function (b) {
    ImajnetPlugin.featuresForProjection[a] ||
    (ImajnetPlugin.featuresForProjection[a] = {}, ImajnetPlugin.featuresForProjection[a].layerName = a);
    ImajnetPlugin.featuresForProjection[a].features = b;
    ImajnetPlugin.cachedProjections[d][a] || (ImajnetPlugin.cachedProjections[d][a] = {});
    ImajnetPlugin.cachedProjections[d][a].features = b;
    e.resolve()
  }).fail(function () {
    e.resolve()
  });
  return e.promise()
}, ImajnetPlugin.getLayerStyleForProjection = function (a, b) {
  var c = jQuery.Deferred();
  if (ImajnetPlugin.cachedProjections[b][a])return ImajnetPlugin.featuresForProjection[a].styles =
    ImajnetPlugin.cachedProjections[b][a].styles, ImajnetPlugin.featuresForProjection[a].styleName = ImajnetPlugin.cachedProjections[b][a].styleName, c.resolve();
  StyleEditor.getLayerStyleName(a).done(function (d) {
    StyleEditor.doGeoserverRequest("GET", null, null, null, null, {layerStyle: d}).done(function () {
      var e = StyleEditor.getLayerStyleObject(d);
      ImajnetPlugin.featuresForProjection[a] || (ImajnetPlugin.featuresForProjection[a] = {});
      ImajnetPlugin.featuresForProjection[a].styles = e;
      ImajnetPlugin.featuresForProjection[a].styleName =
        d;
      ImajnetPlugin.cachedProjections[b][a] || (ImajnetPlugin.cachedProjections[b][a] = {});
      ImajnetPlugin.cachedProjections[b][a].styles = e;
      ImajnetPlugin.cachedProjections[b][a].styleName = d;
      c.resolve()
    }).fail(function () {
      c.resolve()
    })
  });
  return c.promise()
}, ImajnetPlugin.getStylesArray = function (a, b) {
  var c = [];
  if (!a || !a.rules)return MainCore.stylesArray;
  for (var d = 0; d < a.rules.length; d++)if (a.rules[d].minScaleDenominator = null, a.rules[d].maxScaleDenominator = null, a.rules[d].evaluate(Feature.featuresData[CommonCore.getLayerNameWithoutWorkspace(b)])) {
    var e =
      a.rules[d].symbolizer.Line;
    e || (a.rules[d].symbolizer.Polygon ? e = {
      strokeColor: a.rules[d].symbolizer.Polygon.strokeColor ? a.rules[d].symbolizer.Polygon.strokeColor : a.rules[d].symbolizer.Polygon.fillColor,
      strokeWidth: a.rules[d].symbolizer.Polygon.strokeWidth,
      strokeDashstyle: a.rules[d].symbolizer.Polygon.strokeDashstyle
    } : a.rules[d].symbolizer.Point ? (e = a.rules[d].symbolizer.Point, e.graphic && !e.graphicName && (e.graphicName = "square"), e.externalGraphic && -1 == e.externalGraphic.indexOf("http") && (e.externalGraphic =
      StyleEditor.getImagePathFromGeoserverPath(e.externalGraphic), e.strokeWidth = 0)) : e = {
      strokeColor: "#808080",
      strokeWidth: 1
    });
    e.fill && !e.fillColor && (e.fillColor = "#808080");
    e.stroke && (e.strokeColor || (e.strokeColor = "#000000"), e.strokeWidth || (e.strokeWidth = 1));
    e.label && e.graphic && delete e.label;
    c.push(e);
    a.rules[d].symbolizer.Text && (e = a.rules[d].symbolizer.Text, e.pointRadius = 0, c.push(e))
  }
  return c
}, ImajnetPlugin.drawUserProjections = function (a) {
  if (isImajnetMode())return jQuery.Deferred().resolve(null).promise();
  var b = jQuery.Deferred();
  Projection.getProjections(Projection.getLayersForProjection()).done(function (c) {
    if (!c)return b.resolve(), b.promise();
    var d = JSON.parse(c);
    ImajnetPlugin.cachedProjections[a] || (ImajnetPlugin.cachedProjections[a] = {});
    if (0 == d.layerProjections.length)return b.resolve(), b.promise();
    var e = [], f = [], g = [];
    c = [];
    for (var q = [], l = 0; l < d.layerProjections.length; l++) {
      var m = d.layerProjections[l];
      c.push(m.layerName);
      for (var n = 0; n < m.projections.length; n++) {
        var h = m.projections[n], r = h.id.substring(h.id.indexOf(".") +
          1, h.id.length);
        g.push(r);
        1 < h.projections.length ? e.push(h) : f.push(h.projections[0])
      }
    }
    var k = f.concat(e), g = new OpenLayers.Filter.FeatureId({fids: g}), p = [], t = MapMethodsCore.getFilterString(g);
    jQuery.each(c, function (b, c) {
      var d = MainMethodsCore.getFeatureWFSPostRequestQuery(c, t),
        e = MainMethodsCore.getWFS11GetFeatureRequest(' outputFormat\x3d"JSON"') + d + "\x3c/wfs:GetFeature\x3e";
      p.push(ImajnetPlugin.getFeaturesForProjection(c, e, d, a));
      p.push(ImajnetPlugin.getLayerStyleForProjection(c, a))
    });
    jQuery.when.apply(null,
      p).always(function () {
      var a = {imageSize: d.imageSize, shapeProjections: e, pointProjections: f}, c = {};
      c.parameter = {pointOfView: d.pointOfView};
      c.projection = a;
      jQuery.each(ImajnetPlugin.featuresForProjection, function (a, b) {
        if (b.features)for (var c = 0; c < b.features.length; c++)for (var d = b.features[c], e = 0; e < k.length; e++)if (-1 !== k[e].id.indexOf(d.fid)) {
          var f = ImajnetPlugin.getStylesArray(b.styles, k[e].id);
          q.push({feature: d, style: f, id: k[e].id})
        }
      });
      b.resolve(c, q)
    })
  }).fail(function () {
    b.reject()
  });
  return b.promise()
}, ImajnetPlugin.getFeatureIdFromWrapper =
  function (a) {
    return isImajnetMode() ? a.id : CommonCore.getLayerNameWithoutWorkspace(a.id)
  }, ImajnetPlugin.onImageChange = function (a) {
}, ImajnetPlugin.getProjectionCandidates = function (a) {
  return jQuery.Deferred().resolve(null).promise()
}, ImajnetPlugin.getProjectionCandidates = function (a) {
  return jQuery.Deferred().resolve(null).promise()
}, ImajnetPlugin.onImajnetDeactivated = function () {
  ImajnetMapImplementation.dragFeature && (ImajnetMapImplementation.dragFeature.setActive(!1), map.removeControl(ImajnetMapImplementation.dragFeature),
    ImajnetMapImplementation.dragFeature = null);
  ImajnetUI.removeActiveState(ImajnetUI.btnImajnetPluginDiv);
  var a = MainCore.getNodeObjectFromLayerProperty(["data.layer.externalLayer.name"], Array(ImajnetMap.prLayerName));
  a && a.data && a.data.select && a.select(!1);
  (a = MainCore.getNodeObjectFromLayerProperty(["data.layer.externalLayer.name"], Array(ImajnetMap.roadLayerName))) && a.data && a.data.select && a.select(!1)
}, ImajnetPlugin.onImajnetActivated = function (a) {
  (isImajnetMode() || a) && CommonCore.activateImajnetButton()
},
  ImajnetPlugin.onPinPointCreated = function (a) {
    if ("undefined" !== typeof MapCore && MapCore.isEditMode && "undefined" !== typeof Feature.layerEditGeometry && "Point" == Feature.layerEditGeometry) {
      var b = (new OpenLayers.Geometry.Point(a.point.coordinates.lon, a.point.coordinates.lat)).transform(ImajnetMapImplementation.imajnetProjection, map.projection);
      b.photogrammetryId = a.id;
      draw.drawFeature(b)
    }
  }, ImajnetPlugin.onPolyligneCreated = function (a) {
  if ("undefined" !== typeof MapCore && MapCore.isEditMode && "undefined" !== typeof Feature.layerEditGeometry &&
    !("LineString" === a.type && -1 === Feature.layerEditGeometry.indexOf("Line") || "Polygon" === a.type && -1 === Feature.layerEditGeometry.indexOf("Surface"))) {
    for (var b = 0; b < a.pointsArray.length; b++)a.pointsArray[b] = (new OpenLayers.Geometry.Point(a.pointsArray[b].x, a.pointsArray[b].y)).transform(ImajnetMapImplementation.imajnetProjection, map.projection);
    "LineString" == a.type ? (b = new OpenLayers.Geometry.MultiLineString(new OpenLayers.Geometry.LineString(a.pointsArray)), b.photogrammetryId = a.id, draw.drawFeature(b)) :
      "Polygon" === a.type && (b = new OpenLayers.Geometry.MultiPolygon([new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing(a.pointsArray)])]), b.photogrammetryId = a.id, draw.drawFeature(b))
  }
}, ImajnetPlugin.getMapSize = function () {
  var a = map.getSize();
  return a ? {w: a[0], h: a[1]} : null
}, ImajnetPlugin.showImajnetItem = function (a, b, c) {
  Dialog.showDialog(a, b, c)
}, ImajnetPlugin.hideImajnetItem = function (a) {
  Dialog.hideDialog(a)
}, ImajnetPlugin.addActiveState = function (a) {
  a.addClass("opacity60")
}, ImajnetPlugin.removeActiveState =
  function (a) {
    a.removeClass("opacity60")
  }, ImajnetPlugin.redrawLayer = function (a) {
  a == ImajnetMap.imajnetLayer && a.getSource().setUrl(ImajnetProtocol.getUsernameForUrl(Imajnet.serverUrl + '/api/tile/{"tile":{"x":{x},"y":{y},"zoom":{z}},"timeframe":' + JSON.stringify(ImajnetTimeframe.getTimeframe()) + "}"));
  a.getSource().refresh()
});
ImajnetWeb = {
  initMenu: function () {
    if (isImajnetMode()) {
      var a = "", b;
      for (b in ImajnetSettings.imajnetLanguages)Imajnet.locale != ImajnetSettings.imajnetLanguages[b] && (a += '\x3cimg src\x3d"' + Imajnet.imajnetPath + "img/" + ImajnetSettings.imajnetLanguages[b] + '.png" onclick\x3d"ImajnetUrl.changeLocale(\'' + ImajnetSettings.imajnetLanguages[b] + '\');" onmouseover\x3d"jQuery(this).addClass(\'opacity60\');" onmouseout\x3d"jQuery(this).removeClass(\'opacity60\');" width\x3d"22" height\x3d"22" class\x3d"localeImage" title\x3d"' +
        jQuery.imajnet.locale[ImajnetSettings.imajnetLanguages[b]] + '" /\x3e');
      jQuery("#imajnetSettingsMenuLocale").html(a);
      jQuery(".menu").menu({
        position: {at: "left bottom"},
        icons: {submenu: "ui-icon-triangle-1-s"},
        role: null,
        blur: function (a, b) {
          jQuery("#imajnetDockingRightContainer_header").height(28);
          "imajnetSettingsMenu" == a.target.id && (jQuery("#focusTarget").blur(), a.handleObj && "mouseleave" == a.handleObj.origType && ImajnetUI.closeAllMenus())
        },
        focus: function (a, b) {
          "imajnetSettingsMenu" == a.target.id && jQuery("#imajnetDockingRightContainer_header").height(200)
        }
      });
      jQuery(".menu").show();
      jQuery("#imajnetPOI").bind("keydown", function (a) {
        Nigsys.disableEventPropagation(a)
      });
      jQuery("#imajnetAddress").on("keydown", function (a) {
        if (13 == a.keyCode)return Address.openSearchDialog(), jQuery("#searchAddressInput").val(jQuery("#imajnetAddress").val()), jQuery("#searchAddress").click(), !1;
        Nigsys.disableEventPropagation(a)
      })
    }
  }, initImajnetHeader: function () {
    var a = "";
    if ("admin" == ImajnetUser.data.role.name || "imajnet-admin" == ImajnetUser.data.role.name) a = '\x3cli\x3e\x3ca href\x3d"javascript: void(0);"\x3e' +
      jQuery.imajnet.management.title + '\x3c/a\x3e\x3cul class\x3d"menuItem"\x3e\x3cli\x3e\x3ca id\x3d"menuShowSequenceDetailsButton" href\x3d"javascript: void(0);"\x3e' + jQuery.imajnet.management.sequenceDetails + '\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca id\x3d"menuShowReimportSequenceButton" href\x3d"javascript: void(0);"\x3e' + jQuery.imajnet.management.reimportSequence.title + '\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca id\x3d"menuShowDeleteSequenceButton" href\x3d"javascript: void(0);"\x3e' + jQuery.imajnet.management.deleteSequence.title +
      '\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca id\x3d"menuShowCreatePOIButton" href\x3d"javascript: void(0);"\x3e' + jQuery.imajnet.management.createPOI + "\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/li\x3e";
    a = '\x3cul id\x3d"imajnetSettingsMenu" class\x3d"menu"\x3e' + (Nigsys.onMobile() ? "" : '\x3cli class\x3d"left headerDockingButton" style\x3d"width: 30px;"\x3e\x3cdiv id\x3d"imajnetDockingButton_header" class\x3d"imageDockingButton ui-icon ui-icon-pin-w"\x3e\x3c/div\x3e\x3c/li\x3e') + '\x3cli style\x3d"margin-left: 0;"\x3e\x3ca href\x3d"javascript: void(0);"\x3e' +
      jQuery.imajnet.menuHelp + '\x3c/a\x3e\x3cul class\x3d"menuItem"\x3e\x3cli\x3e\x3ca id\x3d"menuHelpButton" href\x3d"javascript: void(0);"\x3e' + jQuery.imajnet.menuHelp + '\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca id\x3d"menuAboutImajnetButton" href\x3d"javascript: void(0);"\x3e' + jQuery.imajnet.menuAboutImajnet + '\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca id\x3d"menuNewsButton" href\x3d"javascript: void(0);"\x3e' + jQuery.imajnet.menuNews + '\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/li\x3e\x3cli\x3e\x3ca href\x3d"javascript: void(0);"\x3e' +
      jQuery.imajnet.menuSettings + '\x3c/a\x3e\x3cul class\x3d"menuItem"\x3e\x3cli\x3e\x3ca id\x3d"menuSettingsButton" href\x3d"javascript: void(0);"\x3e' + jQuery.imajnet.menuSettings + '\x3c/a\x3e\x3c/li\x3e\x3cli\x3e\x3ca id\x3d"menuLRSSettingsButton" href\x3d"javascript: void(0);"\x3e' + jQuery.imajnet.LRSSettings + "\x3c/a\x3e\x3c/li\x3e\x3c/ul\x3e\x3c/li\x3e" + a + '\x3cli style\x3d"margin-left: 20px;"\x3e\x3cdiv class\x3d"left"\x3e' + jQuery.imajnet.poi.label + ':\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"margin-left: 3px;"\x3e\x3cselect id\x3d"imajnetPOI" onchange\x3d"ImajnetMap.POIChanged(jQuery(this));"\x3e\x3c/select\x3e\x3c/div\x3e\x3c/li\x3e\x3cli style\x3d"margin-left: 15px;"\x3e\x3cdiv class\x3d"left"\x3e' +
      jQuery.imajnet.address.label + ':\x3c/div\x3e\x3cdiv class\x3d"left" style\x3d"margin-left: 3px;"\x3e\x3cinput type\x3d"text" id\x3d"imajnetAddress" value\x3d"" /\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/li\x3e\x3cli style\x3d"float: right; border: 0; margin-right: 2px;"\x3e\x3cdiv\x3e\x3cinput type\x3d"button" id\x3d"logoutButton" value\x3d"' + jQuery.imajnet.security.logout + '" style\x3d"cursor: pointer;' + (Nigsys.browserIsIE7() ? " font-size: 15px;" : "") + '" /\x3e\x3c/div\x3e\x3c/li\x3e\x3cli id\x3d"imajnetSettingsMenuLocale" style\x3d"float: right; margin: 0 3px 0 0;"\x3e\x3cdiv\x3e\x3c/div\x3e\x3c/li\x3e\x3c/ul\x3e\x3cdiv class\x3d"clear"\x3e\x3c/div\x3e';
    ImajnetUI.docking.header = new ImajnetDocking(jQuery("body"), a, "Top", "header", {
      width: 28,
      height: container.width(),
      left: 0,
      top: 0
    });
    a = jQuery("#logoutButton");
    a.val(a.val() + "(" + ImajnetUser.getUsername() + ")");
    Nigsys.bindClickEvent(jQuery("#menuHelpButton"), ImajnetUI.showHelp);
    Nigsys.bindClickEvent(jQuery("#menuAboutImajnetButton"), ImajnetUI.showAboutImajnet);
    Nigsys.bindClickEvent(jQuery("#menuNewsButton"), function () {
      ImajnetNews.init(!1);
      ImajnetUI.closeAllMenus()
    });
    Nigsys.bindClickEvent(jQuery("#menuSettingsButton"),
      ImajnetSettings.showImajnetSettings);
    Nigsys.bindClickEvent(jQuery("#menuLRSSettingsButton"), ImajnetLRSSettings.showImajnetLRSSettings);
    Nigsys.bindClickEvent(a, function () {
      ImajnetProtocol.imajnetLogout(!0)
    });
    if ("admin" == ImajnetUser.data.role.name || "imajnet-admin" == ImajnetUser.data.role.name) Nigsys.bindClickEvent(jQuery("#menuShowSequenceDetailsButton"), ImajnetUI.showSequenceDetails), Nigsys.bindClickEvent(jQuery("#menuShowReimportSequenceButton"), ImajnetUI.showReimportSequence), Nigsys.bindClickEvent(jQuery("#menuShowDeleteSequenceButton"),
      ImajnetUI.showDeleteSequence), Nigsys.bindClickEvent(jQuery("#menuShowCreatePOIButton"), ImajnetUI.showCreatePOI)
  }, imajnetLoginSuccess: function () {
    Nigsys.initModalOverlay("body");
    this.initImajnetHeader();
    Nigsys.addIddleTimeout();
    CommonCore.devMode || (CommonCore.bingApiKey = ImajnetUser.data.bingKey || "");
    "undefined" !== typeof ImajnetMap && (CommonCore.addBaseLayers(ImajnetMap.map, !0), CommonCore.initToolbars());
    CommonCore.initCookieWarning(ImajnetUser.data.login);
    "undefined" !== typeof ImajnetUI && ImajnetUI && ImajnetUI.addMobileCss();
    ImajnetWeb.initMenu();
    CommonCore.setScaleUnit()
  }, dragEndHandler: function () {
    isImajnetMode() && CommonCore.removeFeatureInfo()
  }, initTimeframeContainer: function () {
    var a = '\x3cdiv id\x3d"imajnetTimeframeContainer"\x3e\x3cdiv id\x3d"timeframeUnselectableContainer"\x3e\x3cdiv\x3e\x3cdiv class\x3d"left timeframeLabel"\x3e' + jQuery.imajnet.timeframe.from + '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"text" id\x3d"imajnetTimeframeFromDate" onchange\x3d"ImajnetTimeframe.setTimeframeFrom(jQuery(this));" size\x3d"17" /\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3cdiv style\x3d"margin-top: 5px;"\x3e\x3cdiv class\x3d"left timeframeLabel"\x3e' +
      jQuery.imajnet.timeframe.to + '\x3c/div\x3e\x3cdiv class\x3d"left"\x3e\x3cinput type\x3d"text" id\x3d"imajnetTimeframeToDate" onchange\x3d"ImajnetTimeframe.setTimeframeTo(jQuery(this));" size\x3d"17" /\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3cdiv id\x3d"setTimeframeContainer"\x3e\x3cdiv class\x3d"clearLeft"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv id\x3d"resetTimeframeButtonContainer"\x3e\x3cinput id\x3d"resetTimeframeButton" type\x3d"button" value\x3d"' + jQuery.imajnet.timeframe.reset +
      '" /\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e';
    ImajnetUI.docking.imajnetTimeframe = new ImajnetDocking(isImajnetMode() ? jQuery("#map") : MainCore.mapDockingContainer, a, "Top", "imajnetTimeframe", {
      width: 86,
      height: 250,
      left: 150,
      top: 0,
      notResizable: !0
    });
    Nigsys.bindClickEvent(jQuery("#resetTimeframeButton"), function () {
      jQuery("#imajnetTimeframeFromDate").val("");
      jQuery("#imajnetTimeframeToDate").val("");
      ImajnetTimeframe.setTimeframe(ImajnetTimeframe.getTimeframeFromInput())
    });
    a = ImajnetTimeframe.getTimeframe();
    Nigsys.appendDateTimePickerToElement("#imajnetTimeframeFromDate",
      "xsd:date", a ? a.from : "", !1, {
        onClose: function () {
          ImajnetTimeframe.setTimeframe(ImajnetTimeframe.getTimeframeFromInput())
        }
      });
    jQuery("#imajnetTimeframeFromDate").datepicker("option", "minDate", new Date(2010, 0, 1)).datepicker("option", "maxDate", 0);
    Nigsys.appendDateTimePickerToElement("#imajnetTimeframeToDate", "xsd:date", a ? a.to : "", !1, {
      onClose: function () {
        ImajnetTimeframe.setTimeframe(ImajnetTimeframe.getTimeframeFromInput())
      }
    });
    jQuery("#imajnetTimeframeToDate").datepicker("option", "minDate", new Date(2010, 0,
      1)).datepicker("option", "maxDate", 0);
    ImajnetTimeframe.setTimeframeText(a);
    CheckDockingCookie("imajnetTimeframe");
    jQuery("#imajnetTimeframeFromDate").keydown(function (a) {
      return !1
    });
    jQuery("#imajnetTimeframeToDate").keydown(function (a) {
      return !1
    })
  }
};
FlatGraphic.init = function () {
  this.svg = this.initSVG("popupImajnetControlsLayer", this.svg);
  if (!Nigsys.isPolyligneMode()) jQuery(this.svg.canvas).on("click", ImajnetUI.onImageClick)
};
var imajnetMapmapZoomEndHandler = ImajnetMap.mapZoomEndHandler;
ImajnetMap.mapZoomEndHandler = function () {
  imajnetMapmapZoomEndHandler();
  ImajnetUrl.changeUrlParam(ImajnetUrl.ZOOM_URL_PARAM_NAME, ImajnetPlugin.getCurrentZoomLevel(), !0);
  CommonCore.removeFeatureInfo()
};
var imajnetMapregisterToMap = ImajnetMap.registerToMap;
ImajnetMap.registerToMap = function () {
  imajnetMapregisterToMap();
  ImajnetMapImplementation.initImajnetWMS()
};
(function (d) {
  function e (a) {
    var b = a || window.event, c = [].slice.call(arguments, 1), f = 0, e = 0, g = 0;
    return a = d.event.fix(b), a.type = "mousewheel", b.wheelDelta && (f = b.wheelDelta / 120), b.detail && (f = -b.detail / 3), g = f, void 0 !== b.axis && b.axis === b.HORIZONTAL_AXIS && (g = 0, e = -1 * f), void 0 !== b.wheelDeltaY && (g = b.wheelDeltaY / 120), void 0 !== b.wheelDeltaX && (e = -1 * b.wheelDeltaX / 120), c.unshift(a, f, e, g), (d.event.dispatch || d.event.handle).apply(this, c)
  }

  var c = ["DOMMouseScroll", "mousewheel"];
  if (d.event.fixHooks)for (var h = c.length; h;)d.event.fixHooks[c[--h]] =
    d.event.mouseHooks;
  d.event.special.mousewheel = {
    setup: function () {
      if (this.addEventListener)for (var a = c.length; a;)this.addEventListener(c[--a], e, !1); else this.onmousewheel = e
    }, teardown: function () {
      if (this.removeEventListener)for (var a = c.length; a;)this.removeEventListener(c[--a], e, !1); else this.onmousewheel = null
    }
  };
  d.fn.extend({
    mousewheel: function (a) {
      return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
    }, unmousewheel: function (a) {
      return this.unbind("mousewheel", a)
    }
  })
})(jQuery);
Raphael.registerFont({
  w: 180,
  face: {
    "font-family": "Vinci Sans",
    "font-weight": 400,
    "font-stretch": "normal",
    "units-per-em": "360",
    "panose-1": "2 0 0 0 0 0 0 0 0 0",
    ascent: "277",
    descent: "-83",
    "x-height": "2",
    bbox: "-11 -272 303 77",
    "underline-thickness": "18",
    "underline-position": "0",
    "unicode-range": "U+0020-U+007E"
  },
  glyphs: {
    " ": {w: 82},
    a: {
      d: "108,-78v-26,7,-68,1,-68,31v0,39,62,24,68,-2r0,-29xm113,-24v-9,14,-25,26,-50,26v-32,0,-52,-18,-53,-47v-2,-52,61,-45,98,-57v12,-54,-60,-51,-74,-20r-20,-14v13,-18,32,-32,64,-34v86,-5,48,101,66,168r-26,4v-3,-9,-5,-15,-5,-26",
      w: 161, k: {y: 4, v: 4}
    },
    b: {
      d: "21,-1v13,-70,3,-161,6,-240r30,-1r0,99v9,-15,27,-27,50,-27v47,1,64,36,64,84v0,49,-18,87,-68,88v-24,1,-42,-11,-51,-25v-1,10,-3,17,-6,25xm98,-145v-20,0,-34,13,-41,28r0,69v7,15,19,25,39,25v34,0,43,-29,44,-62v1,-33,-10,-60,-42,-60",
      w: 182,
      k: {"\\": 29, x: 4}
    },
    c: {
      d: "12,-84v-8,-80,100,-117,136,-52r-22,12v-27,-43,-84,-15,-84,40v0,33,15,61,46,61v20,0,34,-12,41,-27r22,11v-12,23,-30,42,-64,41v-50,-2,-70,-36,-75,-86",
      w: 160
    },
    d: {
      d: "12,-84v-6,-68,70,-111,114,-69r0,-88r30,-1v3,79,-7,172,6,241r-26,3v-3,-8,-4,-15,-5,-25v-10,14,-26,26,-51,25v-48,-1,-64,-38,-68,-86xm86,-23v20,0,33,-10,40,-25r0,-77v-9,-13,-20,-19,-39,-20v-32,-1,-45,30,-45,62v1,32,13,60,44,60",
      w: 182
    },
    e: {
      d: "43,-69v-3,50,74,62,89,20r22,10v-10,24,-31,42,-65,41v-50,-1,-72,-35,-77,-86v-9,-88,117,-119,141,-38v3,10,5,23,5,35xm125,-106v1,-49,-73,-49,-80,-7v-2,6,-3,14,-3,21",
      w: 169
    },
    f: {
      d: "31,-168v-12,-61,34,-93,84,-65r-10,22v-17,-10,-49,-10,-44,22r0,21r42,0r-1,24r-41,0r0,144r-30,0r0,-144r-28,0r0,-24r28,0",
      w: 105,
      k: {
        "\\": -22,
        ")": -22,
        "-": 22,
        "?": -18,
        ".": 22,
        c: 7,
        d: 7,
        e: 7,
        g: 7,
        o: 7,
        q: 7,
        ",": 25,
        a: 4,
        T: -25,
        V: -25,
        W: -25,
        Y: -25,
        X: -22
      }
    },
    g: {
      d: "12,-84v0,-83,90,-106,144,-67v-7,92,33,226,-71,226v-35,0,-57,-15,-69,-38r21,-15v14,37,95,40,89,-16r0,-30v-11,14,-22,23,-46,24v-45,0,-68,-36,-68,-84xm86,-26v20,0,33,-12,40,-26r0,-84v-37,-24,-88,1,-84,52v3,33,13,58,44,58",
      w: 181
    },
    h: {
      d: "131,-113v2,-49,-66,-34,-74,-3r0,116r-30,0r0,-241r30,-1r0,98v23,-40,104,-34,104,31r0,113r-30,0r0,-113",
      w: 183,
      k: {T: 18, v: 4, y: 4}
    },
    i: {
      d: "57,-169r0,169r-30,0r0,-168xm59,-218v0,10,-7,16,-17,16v-11,1,-18,-6,-18,-16v0,-10,7,-17,18,-16v10,0,17,6,17,16",
      w: 83
    },
    j: {
      d: "-11,54v21,-10,39,-23,38,-55r0,-167r30,-1v-9,92,33,224,-57,245xm59,-218v0,10,-7,16,-17,16v-11,1,-18,-6,-18,-16v0,-10,7,-17,18,-16v10,0,17,6,17,16",
      w: 83
    },
    k: {
      d: "57,-242r0,153r73,-80v9,2,25,-2,31,3r-58,62r65,104r-33,1r-53,-83r-25,28r0,54r-30,0r0,-241",
      w: 168, k: {"-": 18, c: 4, d: 4, e: 4, g: 4, o: 4, q: 4}
    },
    l: {d: "57,-242r0,242r-30,0r0,-241", w: 83},
    m: {
      d: "54,-139v13,-35,92,-45,101,0v18,-43,106,-44,106,26r0,113r-30,0r0,-113v1,-49,-63,-34,-72,-3r0,116r-30,0r0,-113v1,-49,-64,-33,-72,-3r0,116r-30,0r0,-168r27,-1r0,30",
      w: 284,
      k: {T: 18, v: 4, y: 4}
    },
    n: {
      d: "131,-113v2,-49,-66,-34,-74,-3r0,116r-30,0r0,-168r27,-1r0,30v19,-45,107,-42,107,26r0,113r-30,0r0,-113",
      w: 184,
      k: {T: 18, v: 4, y: 4}
    },
    o: {
      d: "133,-84v0,-34,-12,-61,-45,-61v-33,0,-46,29,-46,61v0,32,12,61,46,61v33,0,45,-28,45,-61xm12,-84v0,-51,25,-86,76,-86v51,0,76,36,76,86v0,50,-25,86,-76,86v-51,0,-76,-35,-76,-86",
      w: 175, k: {"\\": 29, x: 4}
    },
    p: {
      d: "104,2v-22,0,-37,-9,-47,-21r0,93r-30,1r0,-243r27,-1r0,28v11,-17,28,-29,54,-29v47,0,63,37,63,84v0,50,-17,88,-67,88xm98,-145v-20,0,-34,14,-41,28r0,70v7,14,20,24,39,24v34,0,43,-29,44,-62v1,-33,-10,-60,-42,-60",
      w: 182,
      k: {"\\": 29, x: 4}
    },
    q: {
      d: "12,-84v-7,-83,90,-106,144,-68r0,226r-30,1r0,-97v-8,14,-24,24,-46,24v-49,-1,-64,-38,-68,-86xm87,-23v20,0,32,-10,39,-25r0,-88v-39,-23,-88,0,-84,52v3,32,13,62,45,61",
      w: 182
    },
    r: {
      d: "113,-142v-26,0,-46,9,-56,28r0,114r-30,0r0,-168r26,-1r0,30v11,-19,33,-31,63,-31",
      w: 115, k: {"-": 29, ".": 32, c: 4, d: 4, e: 4, g: 4, o: 4, q: 4, ",": 36}
    },
    s: {
      d: "40,-82v-44,-25,-18,-98,37,-88v33,-1,48,12,60,31r-20,15v-8,-25,-71,-33,-71,3v11,42,91,13,92,73v2,66,-114,62,-126,9r23,-11v3,30,73,40,73,4v0,-29,-46,-24,-68,-36",
      w: 148
    },
    t: {
      d: "109,-4v-34,15,-78,3,-78,-43r0,-97r-28,0r0,-24r28,0r0,-39r30,-4r0,43r42,0r-1,24r-41,0r0,96v-2,26,24,29,42,21",
      w: 113,
      k: {"-": 25, c: 4, d: 4, e: 4, g: 4, o: 4, q: 4}
    },
    u: {
      d: "80,2v-80,0,-52,-99,-57,-170r30,0r0,111v-2,53,67,36,74,4r0,-115r30,0v2,57,-5,121,6,168r-26,2v-2,-8,-5,-18,-5,-28v-9,17,-26,28,-52,28",
      w: 183
    },
    v: {d: "33,-169r44,143r45,-143r31,1r-59,168r-34,0r-58,-168", w: 154, k: {"-": 7, ".": 25, ",": 25}},
    w: {
      d: "147,-168r36,144r34,-145r31,1r-47,168r-38,0r-37,-145r-39,145r-37,0r-46,-168r30,-1r34,145r37,-144r42,0",
      w: 251,
      k: {"/": 4, ".": 20, ",": 18}
    },
    x: {
      d: "149,-168r-54,83r56,85r-32,1r-41,-64r-41,64r-33,-1r57,-85r-55,-83r32,-1r40,63r40,-63",
      w: 155,
      k: {"-": 18, c: 4, d: 4, e: 4, g: 4, o: 4, q: 4}
    },
    y: {
      d: "33,-169r44,143r45,-143r31,1r-79,210v-12,21,-32,33,-64,35r-5,-23v33,-4,50,-20,56,-52r-59,-170",
      w: 154,
      k: {"-": 7, ".": 25, ",": 25}
    },
    z: {
      d: "16,-168r118,0r1,23r-86,121r91,0r-2,24r-123,0r-1,-23r85,-121r-84,0",
      w: 152, k: {"-": 25, c: 10, d: 10, e: 10, g: 10, o: 10, q: 10}
    },
    "@": {
      d: "97,-87v0,35,33,53,51,26r0,-60v-26,-12,-51,4,-51,34xm34,-89v-4,87,90,125,160,86r7,20v-17,10,-41,16,-68,15v-76,-2,-120,-43,-120,-121v0,-72,41,-121,115,-121v75,0,109,41,115,114v5,55,-56,93,-87,54v-30,33,-93,7,-84,-45v-4,-56,61,-73,101,-47v4,32,-14,89,19,89v23,0,30,-24,30,-51v-1,-60,-32,-95,-94,-94v-61,1,-91,40,-94,101",
      w: 255,
      k: {",": 14}
    },
    "#": {d: "69,-168r0,42r41,0r0,-42r25,0r0,42r32,0r0,21r-32,0r0,38r32,0r0,22r-32,0r0,45r-25,0r0,-45r-41,0r0,45r-24,0r0,-45r-33,0r0,-22r33,0r0,-38r-33,0r0,-21r33,0r0,-42r24,0xm69,-67r41,0r0,-38r-41,0r0,38"},
    ".": {
      d: "54,-16v0,11,-7,18,-18,18v-10,0,-19,-8,-19,-18v0,-10,10,-17,19,-17v10,0,18,7,18,17",
      w: 71,
      k: {T: 36, V: 29, W: 29, Y: 43, v: 25, y: 25, "*": 40, w: 20}
    },
    ",": {d: "58,-32r-29,79r-25,0r24,-79r30,0", w: 71},
    ":": {
      d: "54,-16v0,11,-7,18,-18,18v-10,0,-19,-8,-19,-18v0,-10,10,-17,19,-17v10,0,18,7,18,17xm54,-153v0,11,-7,18,-18,18v-10,0,-19,-8,-19,-18v0,-10,10,-17,19,-17v10,0,18,7,18,17",
      w: 71
    },
    ";": {
      d: "54,-32r-29,79r-25,0r24,-79r30,0xm54,-153v0,11,-7,18,-18,18v-10,0,-19,-8,-19,-18v0,-10,10,-17,19,-17v10,0,18,7,18,17",
      w: 71
    },
    "-": {d: "26,-96r96,0r0,24r-96,0r0,-24", w: 148, k: {T: 43, V: 14, W: 11, Y: 40, X: 18, x: 18, A: 7, z: 18, Z: 18}},
    _: {d: "0,12r235,0r0,24r-235,0r0,-24", w: 235},
    "(": {
      d: "63,76v-44,-62,-71,-173,-39,-267v10,-30,23,-57,39,-81r25,4v-28,43,-50,102,-50,170v0,67,23,127,50,170",
      w: 83,
      k: {j: -25}
    },
    ")": {
      d: "21,76v44,-62,71,-173,39,-267v-10,-30,-23,-57,-39,-81r-25,4v28,43,50,102,50,170v0,67,-23,127,-50,170",
      w: 83
    },
    "[": {d: "92,-247r-34,0r0,298r34,0r0,23r-61,0r0,-344r61,0r0,23", w: 93, k: {j: -22}},
    "]": {
      d: "2,-247r34,0r0,298r-34,0r0,23r61,0r0,-344r-61,0r0,23",
      w: 93
    },
    "{": {
      d: "33,-62v1,-18,-11,-23,-27,-24r0,-23v17,-1,28,-5,27,-24v-18,-58,-29,-162,61,-134r-4,21v-24,-4,-47,-2,-45,26v3,42,38,111,-14,122v51,12,17,80,14,121v-1,27,20,32,45,27r4,22v-39,12,-78,-4,-76,-48v1,-30,14,-56,15,-86",
      w: 95,
      k: {j: -18}
    },
    "}": {
      d: "63,-62v-1,-18,11,-23,27,-24r0,-23v-17,-1,-28,-5,-27,-24v18,-58,29,-162,-61,-134r4,21v24,-4,47,-2,45,26v-3,42,-38,111,14,122v-51,12,-17,80,-14,121v1,27,-20,32,-45,27r-4,22v39,12,78,-4,76,-48v-1,-30,-14,-56,-15,-86",
      w: 95
    },
    "!": {
      d: "61,-234r-2,179r-28,0r-1,-179r31,0xm64,-15v0,21,-37,22,-37,0v0,-11,9,-18,18,-18v11,0,18,8,19,18",
      w: 90
    },
    "?": {
      d: "88,-176v3,-38,-48,-42,-66,-22r-15,-22v36,-29,111,-19,111,43v0,41,-21,58,-52,69r0,51r-29,0r0,-71v29,-5,48,-18,51,-48xm51,2v-9,0,-19,-7,-18,-17v-1,-9,9,-19,18,-18v11,-1,19,8,19,18v0,11,-9,17,-19,17",
      w: 124,
      k: {"/": 14, ".": 27, ",": 32}
    },
    "'": {d: "56,-234r-2,93r-23,0r-2,-93r27,0", w: 85},
    '"': {d: "111,-234r-2,93r-23,0r-2,-93r27,0xm56,-234r-2,93r-23,0r-2,-93r27,0", w: 140},
    "/": {
      d: "136,-234r-110,235r-26,-1r110,-235",
      w: 135,
      k: {A: 25, s: 22, r: 14, q: 22, p: 14, o: 22, n: 14, m: 14, g: 22, e: 22, d: 22, c: 22, a: 18, "/": 47}
    },
    "\\": {
      d: "0,-234r110,235r26,-1r-110,-235",
      w: 135, k: {V: 7, "\\": 45}
    },
    A: {
      d: "2,0r73,-234r40,0r74,234r-32,1r-18,-64r-87,0r-19,64xm131,-89r-36,-119r-35,119r71,0",
      w: 190,
      k: {"\\": 18, "-": 7, ",": -18, T: 22, V: 11, W: 5, Y: 18, v: 5, y: 5, "*": 18, w: 4}
    },
    B: {
      d: "182,-64v3,75,-79,64,-151,64r0,-234v67,1,145,-12,145,58v0,34,-21,48,-44,57v28,5,49,22,50,55xm145,-172v0,-41,-43,-36,-83,-36r0,77v43,2,83,0,83,-41xm150,-65v0,-43,-44,-42,-88,-40r0,79v43,0,88,6,88,-39",
      w: 198
    },
    C: {
      d: "14,-117v-8,-103,109,-156,174,-88r-18,18v-13,-14,-27,-23,-52,-23v-52,0,-73,39,-73,93v0,54,20,92,73,93v27,1,39,-8,52,-23r19,18v-18,19,-36,31,-72,31v-71,0,-97,-47,-103,-119",
      w: 200, k: {c: 4, d: 4, e: 4, g: 4, o: 4, q: 4, v: 14, y: 14, C: 4, G: 4, O: 4, Q: 4}
    },
    D: {
      d: "210,-117v0,73,-32,116,-104,117r-75,0r0,-234r75,0v71,1,104,45,104,117xm178,-117v0,-72,-40,-99,-116,-91r0,182v76,8,116,-18,116,-91",
      w: 223
    },
    E: {d: "157,-234r-1,26r-94,0r0,77r81,0r0,26r-81,0r0,79r97,0r0,26r-128,0r0,-234r126,0", w: 173, k: {"-": 7}},
    F: {
      d: "157,-234r-1,26r-94,0r0,81r81,0r0,26r-81,0r0,101r-31,0r0,-234r126,0",
      w: 166,
      k: {"/": 7, "-": 11, ".": 47, c: 7, d: 7, e: 7, g: 7, o: 7, q: 7, ",": 58, x: 14, A: 11, z: 22, s: 7}
    },
    G: {
      d: "14,-117v0,-108,124,-155,192,-86r-18,18v-13,-15,-36,-25,-62,-25v-55,1,-81,35,-81,93v0,55,21,92,73,93v44,1,63,-32,61,-78r-54,0r0,-27r84,0r0,129r-25,0v-1,-12,1,-28,0,-37v-11,26,-34,39,-69,39v-69,0,-101,-46,-101,-119",
      w: 229
    },
    H: {d: "62,-234r0,102r111,0r0,-102r31,0r0,234r-31,0r0,-106r-111,0r0,106r-31,0r0,-234r31,0", w: 234},
    I: {d: "62,-234r0,234r-31,0r0,-234r31,0", w: 92},
    J: {d: "62,-234v-3,79,10,171,-5,240v-5,25,-28,38,-49,48r-15,-24v21,-11,38,-24,38,-56r0,-208r31,0", w: 92},
    K: {
      d: "62,-234r0,122r108,-123v10,1,25,-1,33,2r-85,95r89,138r-35,1r-75,-114r-35,40r0,73r-31,0r0,-234r31,0",
      w: 204,
      k: {"-": 14, v: 11, y: 11, w: 7, C: 11, G: 11, O: 11, Q: 11}
    },
    L: {
      d: "62,-234r0,208r91,0r-1,26r-121,0r0,-234r31,0", w: 155, k: {
        "-": 32, T: 36, V: 25, W: 14, Y: 36, v: 16, y: 16,
        "*": 61, w: 11, C: 14, G: 14, O: 14, Q: 14, U: 7
      }
    },
    M: {d: "139,0r-80,-209r3,209r-31,0r0,-234r50,0r77,208r77,-208r50,0r0,234r-30,0r1,-209r-79,209r-38,0", w: 316},
    N: {
      d: "78,-234r108,208r2,0v-5,-64,-1,-139,-2,-208r31,0r0,234r-49,0r-109,-209v5,65,1,140,2,209r-30,0r0,-234r47,0",
      w: 247
    },
    O: {
      d: "14,-117v0,-73,33,-119,102,-119v69,0,103,47,103,119v0,72,-32,119,-103,119v-70,0,-101,-47,-102,-119xm188,-117v0,-54,-21,-93,-72,-93v-51,0,-72,38,-71,93v0,54,19,93,71,93v53,0,72,-40,72,-93",
      w: 232,
      k: {T: 7, Y: 4, X: 11}
    },
    P: {
      d: "177,-165v0,63,-52,81,-115,73r0,92r-31,0r0,-234v74,-2,146,-4,146,69xm145,-164v0,-44,-39,-46,-83,-44r0,90v43,5,83,1,83,-46",
      w: 185, k: {"/": 18, "-": 7, ".": 50, ",": 47, A: 11}
    },
    Q: {
      d: "219,-117v1,47,-16,82,-42,101v15,15,31,29,43,48r-28,9r-39,-45v-82,23,-141,-28,-139,-113v2,-73,33,-119,102,-119v69,0,102,47,103,119xm188,-117v0,-54,-21,-93,-72,-93v-51,0,-72,38,-71,93v0,54,19,93,71,93v53,0,72,-40,72,-93",
      w: 232,
      k: {T: 7, Y: 4, X: 11}
    },
    R: {
      d: "177,-165v0,39,-18,59,-46,69r53,96r-33,1r-49,-91v-14,0,-27,0,-40,-2r0,92r-31,0r0,-234v74,-2,147,-4,146,69xm145,-164v0,-44,-39,-46,-83,-44r0,90v43,5,83,1,83,-46",
      w: 194,
      k: {"-": 11}
    },
    S: {
      d: "43,-122v-51,-30,-27,-121,41,-114v37,4,59,16,72,41r-25,12v-9,-35,-90,-38,-86,7v6,64,111,36,111,113v0,81,-125,84,-147,22r24,-14v10,18,22,31,51,31v38,0,52,-36,33,-59v-17,-20,-51,-25,-74,-39",
      w: 169
    },
    T: {
      d: "166,-234r-1,26r-65,0r0,208r-31,0r0,-208r-64,0r0,-26r161,0",
      w: 171,
      k: {
        "/": 32,
        "#": 14,
        t: 7,
        "-": 43,
        ".": 36,
        c: 25,
        d: 25,
        e: 25,
        g: 25,
        o: 25,
        q: 25,
        ",": 36,
        a: 27,
        v: 25,
        y: 25,
        x: 23,
        w: 25,
        C: 7,
        G: 7,
        O: 7,
        Q: 7,
        A: 22,
        z: 25,
        s: 25,
        "\x26": 11,
        u: 34,
        m: 29,
        n: 29,
        p: 29,
        r: 29,
        f: 7
      }
    },
    U: {
      d: "99,2v-105,3,-64,-141,-72,-236r30,0r0,149v1,36,12,62,49,61v87,-3,55,-126,61,-210r31,0r0,234r-27,0v-1,-14,1,-31,1,-41v-12,29,-34,42,-73,43",
      w: 227
    },
    V: {
      d: "186,-234r-72,234r-38,0r-72,-234r31,-1r61,209r60,-209", w: 190, k: {
        "/": 25, "-": 22, ".": 29, c: 14, d: 14, e: 14,
        g: 14, o: 14, q: 14, ",": 32, a: 7, A: 11, s: 7, u: 7, m: 4, n: 4, p: 4, r: 4
      }
    },
    W: {
      d: "37,-235r45,209r49,-208r45,0r50,208r44,-209r33,1r-55,234r-45,0r-50,-207r-49,207r-44,0r-56,-234",
      w: 304,
      k: {"/": 22, "-": 11, ".": 29, c: 7, d: 7, e: 7, g: 7, o: 7, q: 7, ",": 22, a: 7, A: 5, s: 7}
    },
    X: {
      d: "41,-234r55,95r56,-95r34,0r-72,118r72,116r-36,1r-54,-94r-54,94r-36,-1r72,-116r-72,-118r35,0",
      w: 193,
      k: {t: 7, "-": 18, c: 7, d: 7, e: 7, g: 7, o: 7, q: 7, v: 14, y: 14, w: 11, C: 11, G: 11, O: 11, Q: 11, u: 7}
    },
    Y: {
      d: "2,-234r31,-1r61,124r58,-124r32,1r-76,152r0,82r-30,0r0,-82", w: 186, k: {
        "/": 32,
        "#": 18,
        "-": 40,
        ".": 43,
        c: 25,
        d: 25,
        e: 25,
        g: 25,
        o: 25,
        q: 25,
        ",": 43,
        a: 22,
        v: 4,
        y: 4,
        x: 11,
        w: 4,
        C: 4,
        G: 4,
        O: 4,
        Q: 4,
        A: 18,
        z: 14,
        s: 25,
        "\x26": 11,
        u: 18,
        m: 22,
        n: 22,
        p: 22,
        r: 22
      }
    },
    Z: {
      d: "161,-234r2,23r-118,185r121,0r-1,26r-155,0r-1,-23r118,-185r-115,0r1,-26r148,0",
      w: 176,
      k: {"-": 43, c: 11, d: 11, e: 11, g: 11, o: 11, q: 11, v: 11, y: 11, w: 11, C: 11, G: 11, O: 11, Q: 11}
    },
    "*": {
      d: "61,-98r2,-55r-45,24r-8,-16r47,-21r-47,-20r8,-17r45,24r-2,-55r20,0r-2,55r45,-24r8,17r-47,20r47,21r-8,16r-45,-24r2,55r-20,0",
      w: 141,
      k: {".": 40, ",": 40, A: 18}
    },
    "\x26": {
      d: "139,-71v4,-8,7,-21,6,-33r26,1v-1,18,-4,40,-12,54v13,16,31,29,42,47r-32,4r-28,-29v-28,45,-136,37,-133,-32v2,-34,23,-50,45,-62v-40,-26,-37,-115,30,-115v35,0,57,19,57,54v-1,33,-21,49,-44,65xm40,-60v-2,45,68,45,83,13r-52,-56v-13,10,-30,19,-31,43xm82,-210v-41,1,-30,59,-5,74v32,-9,48,-71,5,-74",
      w: 179, k: {T: 18, V: 7, Y: 25}
    },
    0: {d: "43,-117v0,46,5,93,47,93v42,0,47,-47,47,-93v0,-46,-6,-89,-47,-93v-42,4,-47,47,-47,93xm14,-117v0,-67,20,-119,76,-119v56,0,76,52,76,119v0,67,-19,119,-76,119v-57,0,-76,-52,-76,-119"},
    1: {d: "33,-26r50,0r0,-179r-58,34r-11,-22r69,-41r31,0r0,208r45,0r-1,26r-125,0r0,-26"},
    2: {d: "16,-197v19,-54,143,-53,137,21v-6,75,-67,100,-102,150r108,0r-1,26r-139,0r-1,-24v27,-44,66,-73,93,-115v19,-29,9,-74,-29,-71v-21,1,-34,10,-41,25"},
    3: {d: "121,-173v0,-48,-69,-46,-80,-12r-25,-12v11,-23,35,-39,69,-39v41,0,66,20,68,60v2,33,-23,49,-48,57v30,6,50,22,52,57v4,77,-121,83,-142,24r25,-11v12,36,87,33,85,-15v-2,-40,-38,-45,-82,-43r0,-26v41,1,78,0,78,-40"},
    4: {d: "144,-139r0,52r25,0r-2,25r-23,0r0,62r-31,0r0,-62r-104,0r-1,-24r103,-149v10,2,23,0,31,4r-98,144r69,0r0,-52r31,0"},
    5: {d: "130,-69v2,-51,-57,-53,-98,-40r-3,-4r0,-121r121,0r-2,26r-91,0r0,67v61,-6,101,15,105,72v5,80,-117,94,-142,31r24,-11v8,15,22,25,43,25v29,1,42,-16,43,-45"},
    6: {d: "138,-72v0,-52,-68,-56,-90,-23v0,39,9,71,47,71v27,0,43,-19,43,-48xm16,-111v0,-94,67,-162,138,-102v3,4,6,9,8,14r-24,12v-12,-28,-65,-31,-79,-1v-7,15,-13,37,-13,65v40,-36,126,-18,121,51v-3,45,-27,74,-72,74v-60,0,-79,-46,-79,-113"},
    7: {d: "53,0v8,-86,39,-151,75,-208r-109,0r1,-26r138,0r1,24v-37,58,-68,120,-75,210r-31,0"},
    8: {d: "17,-57v0,-33,21,-51,46,-62v-21,-12,-41,-26,-41,-59v0,-38,27,-58,68,-58v40,0,67,19,67,58v0,33,-20,47,-41,59v25,11,46,29,46,62v0,41,-30,59,-72,59v-43,0,-73,-18,-73,-59xm90,-23v47,3,52,-63,14,-75v-5,-3,-9,-6,-14,-8v-19,9,-42,20,-42,47v0,24,17,34,42,36xm90,-210v-40,0,-50,55,-16,70v5,3,10,6,16,9v18,-11,36,-19,37,-46v0,-20,-17,-33,-37,-33"},
    9: {d: "45,-162v0,52,68,56,90,23v0,-39,-9,-71,-47,-71v-27,-0,-43,19,-43,48xm167,-123v0,94,-67,162,-138,102v-3,-4,-6,-9,-8,-14r24,-12v12,28,65,31,79,1v7,-15,13,-37,13,-65v-40,36,-126,18,-121,-51v3,-45,27,-74,72,-74v60,-0,79,46,79,113"},
    $: {d: "129,-120v43,21,21,93,-25,91r0,44r-23,0r0,-44v-27,-5,-44,-17,-55,-41r23,-12v6,30,72,42,75,3v-11,-44,-97,-14,-96,-79v1,-32,23,-47,53,-51r0,-43r23,0r0,43v23,4,39,17,49,33r-20,15v-10,-38,-100,-22,-68,17v16,13,45,14,64,24"},
    "|": {d: "56,-270r0,344r-25,0r0,-344r25,0", w: 87},
    "+": {d: "102,-148r0,52r52,0r0,24r-52,0r0,52r-25,0r0,-52r-51,0r0,-24r51,0r0,-52r25,0"},
    "\x3d": {d: "154,-127r0,24r-128,0r0,-24r128,0xm154,-66r0,24r-128,0r0,-24r128,0"},
    "\x3c": {d: "154,-129r-100,45r100,45r-4,24r-125,-58r0,-22r125,-58"},
    "\x3e": {d: "25,-129r100,45r-100,45r4,24r125,-58r0,-22r-125,-58"},
    "~": {d: "121,-60v-31,0,-70,-51,-81,-2r-22,-3v-2,-38,47,-54,74,-30v15,12,48,20,47,-11r23,4v-3,23,-14,42,-41,42"},
    "^": {d: "102,-234r59,114r-19,9r-52,-102r-52,102r-19,-9r59,-114r24,0"},
    "%": {
      d: "102,-170v0,38,-12,67,-45,67v-32,0,-44,-29,-44,-67v0,-39,12,-66,44,-66v32,0,45,27,45,66xm58,-217v-32,0,-32,92,-1,94v32,-2,31,-91,1,-94xm236,-64v0,37,-13,66,-45,66v-32,0,-44,-29,-44,-66v0,-39,11,-67,44,-67v33,0,45,29,45,67xm192,-112v-32,0,-32,92,-1,94v32,-2,31,-91,1,-94xm196,-234r-124,234r-21,0r124,-234r21,0",
      w: 250
    },
    "`": {d: "72,-249r49,47r-14,15r-51,-43"},
    " ": {w: 82}
  }
});
