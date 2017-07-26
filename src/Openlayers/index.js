var OpenLayersForProjection = {
  String: {
    startsWith: function (a, b) {
      return 0 == a.indexOf(b)
    }, trim: function (a) {
      return a.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }
  }, Util: {
    dotless: /\./g, lastSeqID: 0, createUniqueID: function (a) {
      a = null == a ? "id_" : a.replace(OpenLayersForProjection.Util.dotless, "_");
      OpenLayersForProjection.Util.lastSeqID += 1;
      return a + OpenLayersForProjection.Util.lastSeqID
    }, toFloat: function (a, b) {
      null == b && (b = OpenLayersForProjection.Util.DEFAULT_PRECISION);
      "number" !== typeof a && (a = parseFloat(a));
      return 0 ===
      b ? a : parseFloat(a.toPrecision(b))
    }, isArray: function (a) {
      return "[object Array]" === Object.prototype.toString.call(a)
    }, getElement: function () {
      for (var a = [], b = 0, c = arguments.length; b < c; b++) {
        var d = arguments[b];
        "string" == typeof d && (d = document.getElementById(d));
        if (1 == arguments.length)return d;
        a.push(d)
      }
      return a
    }
  }, Class: function () {
    var a = arguments.length, b = arguments[0], c = arguments[a - 1],
      d = "function" == typeof c.initialize ? c.initialize : function () {
        b.prototype.initialize.apply(this, arguments)
      };
    1 < a ? (a = [d, b].concat(Array.prototype.slice.call(arguments).slice(1,
      a - 1), c), OpenLayersForProjection.inherit.apply(null, a)) : d.prototype = c;
    return d
  }, inherit: function (a, b) {
    var c = function () {
    };
    c.prototype = b.prototype;
    a.prototype = new c;
    var d, e, c = 2;
    for (d = arguments.length; c < d; c++)e = arguments[c], "function" === typeof e && (e = e.prototype), OpenLayersForProjection.Util.extend(a.prototype, e)
  }, Number: {
    decimalSeparator: ".", thousandsSeparator: ",", limitSigDigs: function (a, b) {
      var c = 0;
      0 < b && (c = parseFloat(a.toPrecision(b)));
      return c
    }, format: function (a, b, c, d) {
      b = "undefined" != typeof b ? b : 0;
      c =
        "undefined" != typeof c ? c : OpenLayersForProjection.Number.thousandsSeparator;
      d = "undefined" != typeof d ? d : OpenLayersForProjection.Number.decimalSeparator;
      null != b && (a = parseFloat(a.toFixed(b)));
      var e = a.toString().split(".");
      1 == e.length && null == b && (b = 0);
      a = e[0];
      if (c)for (var f = /(-?[0-9]+)([0-9]{3})/; f.test(a);)a = a.replace(f, "$1" + c + "$2");
      0 == b ? b = a : (c = 1 < e.length ? e[1] : "0", null != b && (c += Array(b - c.length + 1).join("0")), b = a + d + c);
      return b
    }, zeroPad: function (a, b, c) {
      for (a = a.toString(c || 10); a.length < b;)a = "0" + a;
      return a
    }
  }
};
OpenLayersForProjection.Date = {
  dateRegEx: /^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:(?:T(\d{1,2}):(\d{2}):(\d{2}(?:\.\d+)?)(Z|(?:[+-]\d{1,2}(?::(\d{2}))?)))|Z)?$/,
  toISOString: function () {
    return "toISOString" in Date.prototype ? function (a) {
      return a.toISOString()
    } : function (a) {
      return isNaN(a.getTime()) ? "Invalid Date" : a.getUTCFullYear() + "-" + OpenLayersForProjection.Number.zeroPad(a.getUTCMonth() + 1, 2) + "-" + OpenLayersForProjection.Number.zeroPad(a.getUTCDate(), 2) + "T" + OpenLayersForProjection.Number.zeroPad(a.getUTCHours(),
          2) + ":" + OpenLayersForProjection.Number.zeroPad(a.getUTCMinutes(), 2) + ":" + OpenLayersForProjection.Number.zeroPad(a.getUTCSeconds(), 2) + "." + OpenLayersForProjection.Number.zeroPad(a.getUTCMilliseconds(), 3) + "Z"
    }
  }(),
  parse: function (a) {
    var b;
    if ((a = a.match(this.dateRegEx)) && (a[1] || a[7])) {
      b = parseInt(a[1], 10) || 0;
      var c = parseInt(a[2], 10) - 1 || 0, d = parseInt(a[3], 10) || 1;
      b = new Date(Date.UTC(b, c, d));
      if (c = a[7]) {
        var d = parseInt(a[4], 10), e = parseInt(a[5], 10), f = parseFloat(a[6]), g = f | 0;
        b.setUTCHours(d, e, g, Math.round(1E3 * (f - g)));
        "Z" !== c && (c = parseInt(c, 10), a = parseInt(a[8], 10) || 0, a = -1E3 * (3600 * c + 60 * a), b = new Date(b.getTime() + a))
      }
    } else b = new Date("invalid");
    return b
  }
};
OpenLayersForProjection.Util = OpenLayersForProjection.Util || {};
OpenLayersForProjection.Util.extend = function (a, b) {
  a = a || {};
  if (b) {
    for (var c in b) {
      var d = b[c];
      void 0 !== d && (a[c] = d)
    }
    "function" == typeof window.Event && b instanceof window.Event || !b.hasOwnProperty || !b.hasOwnProperty("toString") || (a.toString = b.toString)
  }
  return a
};
OpenLayersForProjection.Util.Try = function () {
  for (var a = null, b = 0, c = arguments.length; b < c; b++) {
    var d = arguments[b];
    try {
      a = d();
      break
    } catch (e) {
    }
  }
  return a
};
OpenLayersForProjection.Util.getXmlNodeValue = function (a) {
  var b = null;
  OpenLayersForProjection.Util.Try(function () {
    b = a.text;
    b || (b = a.textContent);
    b || (b = a.firstChild.nodeValue)
  }, function () {
    b = a.textContent
  });
  return b
};
OpenLayersForProjection.Geometry = OpenLayersForProjection.Class({
  bounds: null, initialize: function () {
    this.id = OpenLayersForProjection.Util.createUniqueID(this.CLASS_NAME + "_")
  }, getBounds: function () {
    null == this.bounds && this.calculateBounds();
    return this.bounds
  }
});
OpenLayersForProjection.Geometry.Point = OpenLayersForProjection.Class(OpenLayersForProjection.Geometry, {
  x: null,
  y: null,
  initialize: function (a, b) {
    OpenLayersForProjection.Geometry.prototype.initialize.apply(this, arguments);
    this.x = parseFloat(a);
    this.y = parseFloat(b)
  },
  calculateBounds: function () {
    this.bounds = new OpenLayersForProjection.Bounds(this.x, this.y, this.x, this.y)
  },
  getCentroid: function () {
    return new OpenLayersForProjection.Geometry.Point(this.x, this.y)
  },
  CLASS_NAME: "OpenLayers.Geometry.Point"
});
OpenLayersForProjection.Bounds = OpenLayersForProjection.Class({
  left: null, bottom: null, right: null, top: null, centerLonLat: null, initialize: function (a, b, c, d) {
    OpenLayersForProjection.Util.isArray(a) && (d = a[3], c = a[2], b = a[1], a = a[0]);
    null != a && (this.left = OpenLayersForProjection.Util.toFloat(a));
    null != b && (this.bottom = OpenLayersForProjection.Util.toFloat(b));
    null != c && (this.right = OpenLayersForProjection.Util.toFloat(c));
    null != d && (this.top = OpenLayersForProjection.Util.toFloat(d))
  }, extend: function (a) {
    if (a)switch (a.CLASS_NAME) {
      case "OpenLayers.LonLat":
        this.extendXY(a.lon,
          a.lat);
        break;
      case "OpenLayers.Geometry.Point":
        this.extendXY(a.x, a.y);
        break;
      case "OpenLayers.Bounds":
        this.centerLonLat = null;
        if (null == this.left || a.left < this.left) this.left = a.left;
        if (null == this.bottom || a.bottom < this.bottom) this.bottom = a.bottom;
        if (null == this.right || a.right > this.right) this.right = a.right;
        if (null == this.top || a.top > this.top) this.top = a.top
    }
  }, clone: function () {
    return new OpenLayersForProjection.Bounds(this.left, this.bottom, this.right, this.top)
  }, intersectsBounds: function (a, b) {
    "boolean" === typeof b &&
    (b = {inclusive: b});
    b = b || {};
    if (b.worldBounds) {
      var c = this.wrapDateLine(b.worldBounds);
      a = a.wrapDateLine(b.worldBounds)
    } else c = this;
    null == b.inclusive && (b.inclusive = !0);
    var d = !1, e = c.left == a.right || c.right == a.left || c.top == a.bottom || c.bottom == a.top;
    if (b.inclusive || !e)var d = a.top >= c.bottom && a.top <= c.top || c.top > a.bottom && c.top < a.top,
      e = a.left >= c.left && a.left <= c.right || c.left >= a.left && c.left <= a.right,
      f = a.right >= c.left && a.right <= c.right || c.right >= a.left && c.right <= a.right,
      d = (a.bottom >= c.bottom && a.bottom <= c.top ||
        c.bottom >= a.bottom && c.bottom <= a.top || d) && (e || f);
    if (b.worldBounds && !d) {
      var g = b.worldBounds, e = g.getWidth(), f = !g.containsBounds(c), g = !g.containsBounds(a);
      f && !g ? (a = a.add(-e, 0), d = c.intersectsBounds(a, {inclusive: b.inclusive})) : g && !f && (c = c.add(-e, 0), d = a.intersectsBounds(c, {inclusive: b.inclusive}))
    }
    return d
  }, wrapDateLine: function (a, b) {
    b = b || {};
    var c = b.leftTolerance || 0, d = b.rightTolerance || 0, e = this.clone();
    if (a) {
      for (var f = a.getWidth(); e.left < a.left && e.right - d <= a.left;)e = e.add(f, 0);
      for (; e.left + c >= a.right && e.right >
      a.right;)e = e.add(-f, 0);
      c = e.left + c;
      c < a.right && c > a.left && e.right - d > a.right && (e = e.add(-f, 0))
    }
    return e
  }, getWidth: function () {
    return this.right - this.left
  }, getHeight: function () {
    return this.top - this.bottom
  }, getCenterLonLat: function () {
    this.centerLonLat || (this.centerLonLat = new OpenLayersForProjection.LonLat((this.left + this.right) / 2, (this.bottom + this.top) / 2));
    return this.centerLonLat
  }, CLASS_NAME: "OpenLayersForProjection.Bounds"
});
OpenLayersForProjection.LonLat = OpenLayersForProjection.Class({
  lon: 0, lat: 0, initialize: function (a, b) {
    OpenLayersForProjection.Util.isArray(a) && (b = a[1], a = a[0]);
    this.lon = OpenLayersForProjection.Util.toFloat(a);
    this.lat = OpenLayersForProjection.Util.toFloat(b)
  }
});
OpenLayersForProjection.Projection = OpenLayersForProjection.Class({
  proj: null, projCode: null, titleRegEx: /\+title=[^\+]*/, initialize: function (a, b) {
    OpenLayersForProjection.Util.extend(this, b);
    this.projCode = a;
    "object" == typeof Proj4js && (this.proj = new Proj4js.Proj(a))
  }, getCode: function () {
    return this.proj ? this.proj.srsCode : this.projCode
  }, getUnits: function () {
    return this.proj ? this.proj.units : null
  }, toString: function () {
    return this.getCode()
  }, equals: function (a) {
    var b = !1;
    a && (a instanceof OpenLayersForProjection.Projection ||
    (a = new OpenLayersForProjection.Projection(a)), "object" == typeof Proj4js && this.proj.defData && a.proj.defData ? b = this.proj.defData.replace(this.titleRegEx, "") == a.proj.defData.replace(this.titleRegEx, "") : a.getCode && (b = this.getCode(), a = a.getCode(), b = b == a || !!OpenLayersForProjection.Projection.transforms[b] && OpenLayersForProjection.Projection.transforms[b][a] === OpenLayersForProjection.Projection.nullTransform));
    return b
  }, transform: function (a, b, c) {
    if (b && c)if (b instanceof OpenLayers.Projection || (b = new OpenLayers.Projection(b)),
      c instanceof OpenLayers.Projection || (c = new OpenLayers.Projection(c)), b.proj && c.proj) a = Proj4js.transform(b.proj, c.proj, a); else {
      b = b.getCode();
      c = c.getCode();
      var d = OpenLayers.Projection.transforms;
      if (d[b] && d[b][c]) d[b][c](a)
    }
    return a
  }, destroy: function () {
    delete this.proj;
    delete this.projCode
  }, CLASS_NAME: "OpenLayers.Projection"
});
OpenLayersForProjection.Console = {
  log: function () {
  }, debug: function () {
  }, info: function () {
  }, warn: function () {
  }, error: function () {
  }, userError: function (a) {
    alert(a)
  }, assert: function () {
  }, dir: function () {
  }, dirxml: function () {
  }, trace: function () {
  }, group: function () {
  }, groupEnd: function () {
  }, time: function () {
  }, timeEnd: function () {
  }, profile: function () {
  }, profileEnd: function () {
  }, count: function () {
  }, CLASS_NAME: "OpenLayers.Console"
};
OpenLayersForProjection.Feature = OpenLayersForProjection.Class({
  layer: null,
  id: null,
  lonlat: null,
  data: null,
  marker: null,
  popupClass: null,
  popup: null,
  initialize: function (a, b, c) {
    this.layer = a;
    this.lonlat = b;
    this.data = null != c ? c : {};
    this.id = OpenLayersForProjection.Util.createUniqueID(this.CLASS_NAME + "_")
  }
});
OpenLayersForProjection.Feature.Vector = OpenLayersForProjection.Class(OpenLayersForProjection.Feature, {
  fid: null,
  geometry: null,
  attributes: null,
  bounds: null,
  state: null,
  style: null,
  url: null,
  renderIntent: "default",
  modified: null,
  initialize: function (a, b, c) {
    OpenLayersForProjection.Feature.prototype.initialize.apply(this, [null, null, b]);
    this.lonlat = null;
    this.geometry = a ? a : null;
    this.state = null;
    this.attributes = {};
    b && (this.attributes = OpenLayersForProjection.Util.extend(this.attributes, b));
    this.style = c ? c : null
  },
  CLASS_NAME: "OpenLayersForProjection.Feature.Vector"
});
OpenLayersForProjection.Size = OpenLayersForProjection.Class({
  w: 0, h: 0, initialize: function (a, b) {
    this.w = parseFloat(a);
    this.h = parseFloat(b)
  }, clone: function () {
    return new OpenLayersForProjection.Size(this.w, this.h)
  }
});
OpenLayersForProjection.Renderer = OpenLayersForProjection.Class({
  container: null,
  root: null,
  extent: null,
  locked: !1,
  size: null,
  resolution: null,
  map: null,
  featureDx: 0,
  initialize: function (a, b) {
    this.container = OpenLayersForProjection.Util.getElement(a);
    OpenLayersForProjection.Util.extend(this, b)
  },
  setExtent: function (a, b) {
    this.extent = a.clone();
    if (this.map.baseLayer && this.map.baseLayer.wrapDateLine) {
      var c = a.getWidth() / this.map.getExtent().getWidth();
      a = a.scale(1 / c);
      this.extent = a.wrapDateLine(this.map.getMaxExtent()).scale(c)
    }
    b &&
    (this.resolution = null);
    return !0
  },
  setSize: function (a) {
    this.size = a.clone();
    this.resolution = null
  },
  getResolution: function () {
    return this.resolution = this.resolution || this.map.getResolution()
  },
  drawFeature: function (a, b) {
    null == b && (b = a.style);
    if (a.geometry) {
      var c = a.geometry.getBounds();
      if (c) {
        var d;
        this.map.baseLayer && this.map.baseLayer.wrapDateLine && (d = this.map.getMaxExtent());
        c.intersectsBounds(this.extent, {worldBounds: d}) ? this.calculateFeatureDx(c, d) : b = {display: "none"};
        c = this.drawGeometry(a.geometry, b, a.id);
        if ("none" != b.display && b.label && !1 !== c) {
          d = a.geometry.getCentroid();
          if (b.labelXOffset || b.labelYOffset) {
            var e = isNaN(b.labelXOffset) ? 0 : b.labelXOffset, f = isNaN(b.labelYOffset) ? 0 : b.labelYOffset,
              g = this.getResolution();
            d.move(e * g, f * g)
          }
          this.drawText(a.id, b, d)
        } else this.removeText(a.id);
        return c
      }
    }
  },
  calculateFeatureDx: function (a, b) {
    this.featureDx = 0;
    if (b) {
      var c = b.getWidth();
      this.featureDx = Math.round(((a.left + a.right) / 2 - (this.extent.left + this.extent.right) / 2) / c) * c
    }
  },
  applyDefaultSymbolizer: function (a) {
    var b = OpenLayersForProjection.Util.extend({},
      OpenLayersForProjection.Renderer.defaultSymbolizer);
    !1 === a.stroke && (delete b.strokeWidth, delete b.strokeColor);
    !1 === a.fill && delete b.fillColor;
    OpenLayersForProjection.Util.extend(b, a);
    return b
  },
  removeText: function (a) {
  }
});
OpenLayersForProjection.Renderer.defaultSymbolizer = {
  fillColor: "#000000",
  strokeColor: "#000000",
  strokeWidth: 2,
  fillOpacity: 1,
  strokeOpacity: 1,
  pointRadius: 0,
  labelAlign: "cm"
};
OpenLayersForProjection.Renderer.symbol = {
  star: [350, 75, 379, 161, 469, 161, 397, 215, 423, 301, 350, 250, 277, 301, 303, 215, 231, 161, 321, 161, 350, 75],
  cross: [4, 0, 6, 0, 6, 4, 10, 4, 10, 6, 6, 6, 6, 10, 4, 10, 4, 6, 0, 6, 0, 4, 4, 4, 4, 0],
  x: [0, 0, 25, 0, 50, 35, 75, 0, 100, 0, 65, 50, 100, 100, 75, 100, 50, 65, 25, 100, 0, 100, 35, 50, 0, 0],
  square: [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
  triangle: [0, 10, 10, 10, 5, 0, 0, 10]
};
OpenLayersForProjection.Renderer.Elements = OpenLayersForProjection.Class(OpenLayersForProjection.Renderer, {
  rendererRoot: null,
  root: null,
  vectorRoot: null,
  textRoot: null,
  xmlns: null,
  xOffset: 0,
  indexer: null,
  BACKGROUND_ID_SUFFIX: "_background",
  LABEL_ID_SUFFIX: "_label",
  LABEL_OUTLINE_SUFFIX: "_outline",
  initialize: function (a, b) {
    OpenLayersForProjection.Renderer.prototype.initialize.apply(this, arguments);
    this.rendererRoot = this.createRenderRoot();
    this.root = this.createRoot("_root");
    this.vectorRoot = this.createRoot("_vroot");
    this.textRoot = this.createRoot("_troot");
    this.root.appendChild(this.vectorRoot);
    this.root.appendChild(this.textRoot);
    this.rendererRoot.appendChild(this.root);
    this.container.appendChild(this.rendererRoot);
    b && (b.zIndexing || b.yOrdering) && (this.indexer = new OpenLayersForProjection.ElementsIndexer(b.yOrdering))
  },
  destroy: function () {
    this.clear();
    this.xmlns = this.root = this.rendererRoot = null;
    OpenLayersForProjection.Renderer.prototype.destroy.apply(this, arguments)
  },
  clear: function () {
    var a, b = this.vectorRoot;
    if (b)for (; a =
                   b.firstChild;)b.removeChild(a);
    if (b = this.textRoot)for (; a = b.firstChild;)b.removeChild(a);
    this.indexer && this.indexer.clear()
  },
  setExtent: function (a, b) {
    var c = OpenLayersForProjection.Renderer.prototype.setExtent.apply(this, arguments), d = this.getResolution();
    if (this.map.baseLayer && this.map.baseLayer.wrapDateLine) {
      var e, f = a.getWidth() / this.map.getExtent().getWidth();
      a = a.scale(1 / f);
      f = this.map.getMaxExtent();
      f.right > a.left && f.right < a.right ? e = !0 : f.left > a.left && f.left < a.right && (e = !1);
      if (e !== this.rightOfDateLine ||
        b) c = !1, this.xOffset = !0 === e ? f.getWidth() / d : 0;
      this.rightOfDateLine = e
    }
    return c
  },
  getNodeType: function (a, b) {
  },
  drawGeometry: function (a, b, c) {
    var d = a.CLASS_NAME, e = !0;
    if ("OpenLayers.Geometry.Collection" == d || "OpenLayers.Geometry.MultiPoint" == d || "OpenLayers.Geometry.MultiLineString" == d || "OpenLayers.Geometry.MultiPolygon" == d) {
      for (var d = 0, f = a.components.length; d < f; d++)e = this.drawGeometry(a.components[d], b, c) && e;
      return e
    }
    d = e = !1;
    "none" != b.display && (b.backgroundGraphic ? this.redrawBackgroundNode(a.id, a, b, c) : d = !0,
      e = this.redrawNode(a.id, a, b, c));
    0 == e && (b = document.getElementById(a.id)) && (b._style.backgroundGraphic && (d = !0), b.parentNode.removeChild(b));
    d && (b = document.getElementById(a.id + this.BACKGROUND_ID_SUFFIX)) && b.parentNode.removeChild(b);
    return e
  },
  redrawNode: function (a, b, c, d) {
    c = this.applyDefaultSymbolizer(c);
    a = this.nodeFactory(a, this.getNodeType(b, c));
    a._featureId = d;
    a._boundsBottom = b.getBounds().bottom;
    a._geometryClass = b.CLASS_NAME;
    a._style = c;
    b = this.drawGeometryNode(a, b, c);
    if (!1 === b)return !1;
    a = b.node;
    this.indexer ?
      (c = this.indexer.insert(a)) ? this.vectorRoot.insertBefore(a, c) : this.vectorRoot.appendChild(a) : a.parentNode !== this.vectorRoot && this.vectorRoot.appendChild(a);
    this.postDraw(a);
    return b.complete
  },
  createNode: function (a, b) {
  },
  nodeFactory: function (a, b) {
    var c = OpenLayersForProjection.Util.getElement(a);
    c ? this.nodeTypeCompare(c, b) || (c.parentNode.removeChild(c), c = this.nodeFactory(a, b)) : c = this.createNode(b, a);
    return c
  },
  drawGeometryNode: function (a, b, c) {
    c = c || a._style;
    var d = {
      isFilled: void 0 === c.fill ? !0 : c.fill, isStroked: void 0 ===
      c.stroke ? !!c.strokeWidth : c.stroke
    }, e;
    switch (b.CLASS_NAME) {
      case "OpenLayers.Geometry.Point":
        !1 === c.graphic && (d.isFilled = !1, d.isStroked = !1);
        e = this.drawPoint(a, b);
        break;
      case "OpenLayers.Geometry.LineString":
        d.isFilled = !1;
        e = this.drawLineString(a, b);
        break;
      case "OpenLayers.Geometry.LinearRing":
        e = this.drawLinearRing(a, b);
        break;
      case "OpenLayers.Geometry.Polygon":
        e = this.drawPolygon(a, b);
        break;
      case "OpenLayers.Geometry.Rectangle":
        e = this.drawRectangle(a, b)
    }
    a._options = d;
    return 0 != e ? {
      node: this.setStyle(a, c, d,
        b), complete: e
    } : !1
  },
  removeText: function (a) {
    var b = document.getElementById(a + this.LABEL_ID_SUFFIX);
    b && this.textRoot.removeChild(b);
    (a = document.getElementById(a + this.LABEL_OUTLINE_SUFFIX)) && this.textRoot.removeChild(a)
  },
  drawPoint: function (a, b) {
  },
  postDraw: function (a) {
  },
  isComplexSymbol: function (a) {
    return "circle" != a && !!a
  },
  CLASS_NAME: "OpenLayersForProjection.Renderer.Elements"
});
OpenLayersForProjection.Renderer.Canvas = OpenLayersForProjection.Class(OpenLayersForProjection.Renderer, {
  hitDetection: !0,
  hitOverflow: 0,
  canvas: null,
  features: null,
  pendingRedraw: !1,
  cachedSymbolBounds: {},
  initialize: function (a, b) {
    OpenLayersForProjection.Renderer.prototype.initialize.apply(this, arguments);
    this.root = document.createElement("canvas");
    this.container.appendChild(this.root);
    this.canvas = this.root.getContext("2d");
    this.features = {};
    this.hitDetection && (this.hitCanvas = document.createElement("canvas"),
      this.hitContext = this.hitCanvas.getContext("2d"))
  },
  setExtent: function () {
    OpenLayersForProjection.Renderer.prototype.setExtent.apply(this, arguments);
    return !1
  },
  eraseGeometry: function (a, b) {
    this.eraseFeatures(this.features[b][0])
  },
  supported: function () {
    return OpenLayersForProjection.CANVAS_SUPPORTED
  },
  setSize: function (a) {
    this.size = a.clone();
    var b = this.root;
    b.style.width = a.w + "px";
    b.style.height = a.h + "px";
    b.width = a.w;
    b.height = a.h;
    this.resolution = null;
    this.hitDetection && (b = this.hitCanvas, b.style.width = a.w + "px",
      b.style.height = a.h + "px", b.width = a.w, b.height = a.h)
  },
  drawFeature: function (a, b) {
    var c;
    if (a.geometry) {
      b = this.applyDefaultSymbolizer(b || a.style);
      c = a.geometry.getBounds();
      var d;
      this.map.baseLayer && this.map.baseLayer.wrapDateLine && (d = this.map.getMaxExtent());
      d = c && c.intersectsBounds(this.extent, {worldBounds: d});
      (c = "none" !== b.display && !!c && d) ? this.features[a.id] = [a, b] : delete this.features[a.id];
      this.pendingRedraw = !0
    }
    this.pendingRedraw && !this.locked && (this.redraw(), this.pendingRedraw = !1);
    return c
  },
  drawGeometry: function (a,
                          b, c) {
    var d = a.CLASS_NAME;
    if ("OpenLayers.Geometry.Collection" == d || "OpenLayers.Geometry.MultiPoint" == d || "OpenLayers.Geometry.MultiLineString" == d || "OpenLayers.Geometry.MultiPolygon" == d)for (d = 0; d < a.components.length; d++)this.drawGeometry(a.components[d], b, c); else switch (a.CLASS_NAME) {
      case "OpenLayers.Geometry.Point":
        this.drawPoint(a, b, c);
        break;
      case "OpenLayers.Geometry.LineString":
        this.drawLineString(a, b, c);
        break;
      case "OpenLayers.Geometry.LinearRing":
        this.drawLinearRing(a, b, c);
        break;
      case "OpenLayers.Geometry.Polygon":
        this.drawPolygon(a,
          b, c)
    }
  },
  drawExternalGraphic: function (a, b, c) {
    var d = new Image, e = b.title || b.graphicTitle;
    e && (d.title = e);
    var f = b.graphicWidth || b.graphicHeight, g = b.graphicHeight || b.graphicWidth, f = f ? f : 2 * b.pointRadius,
      g = g ? g : 2 * b.pointRadius, h = void 0 != b.graphicXOffset ? b.graphicXOffset : -(.5 * f),
      k = void 0 != b.graphicYOffset ? b.graphicYOffset : -(.5 * g), l = b.graphicOpacity || b.fillOpacity;
    d.onload = OpenLayersForProjection.Function.bind(function () {
      if (this.features[c]) {
        var b = this.getLocalXY(a), e = b[0], b = b[1];
        if (!isNaN(e) && !isNaN(b)) {
          var e =
            e + h | 0, b = b + k | 0, p = this.canvas;
          p.globalAlpha = l;
          var q = OpenLayersForProjection.Renderer.Canvas.drawImageScaleFactor || (OpenLayersForProjection.Renderer.Canvas.drawImageScaleFactor = /android 2.1/.test(navigator.userAgent.toLowerCase()) ? 320 / window.screen.width : 1);
          p.drawImage(d, e * q, b * q, f * q, g * q);
          this.hitDetection && (this.setHitContextStyle("fill", c), this.hitContext.fillRect(e, b, f, g))
        }
      }
    }, this);
    d.src = b.externalGraphic
  },
  drawNamedSymbol: function (a, b, c) {
    var d, e, f, g;
    f = Math.PI / 180;
    var h = OpenLayersForProjection.Renderer.symbol[b.graphicName];
    if (!h)throw Error(b.graphicName + " is not a valid symbol name");
    if (!(!h.length || 2 > h.length || (a = this.getLocalXY(a), e = a[0], g = a[1], isNaN(e) || isNaN(g)))) {
      this.canvas.lineCap = "round";
      this.canvas.lineJoin = "round";
      this.hitDetection && (this.hitContext.lineCap = "round", this.hitContext.lineJoin = "round");
      if (b.graphicName in this.cachedSymbolBounds) d = this.cachedSymbolBounds[b.graphicName]; else {
        d = new OpenLayersForProjection.Bounds;
        for (a = 0; a < h.length; a += 2)d.extend(new OpenLayersForProjection.LonLat(h[a], h[a + 1]));
        this.cachedSymbolBounds[b.graphicName] = d
      }
      this.canvas.save();
      this.hitDetection && this.hitContext.save();
      this.canvas.translate(e, g);
      this.hitDetection && this.hitContext.translate(e, g);
      a = f * b.rotation;
      isNaN(a) || (this.canvas.rotate(a), this.hitDetection && this.hitContext.rotate(a));
      f = 2 * b.pointRadius / Math.max(d.getWidth(), d.getHeight());
      this.canvas.scale(f, f);
      this.hitDetection && this.hitContext.scale(f, f);
      a = d.getCenterLonLat().lon;
      d = d.getCenterLonLat().lat;
      this.canvas.translate(-a, -d);
      this.hitDetection && this.hitContext.translate(-a,
        -d);
      g = b.strokeWidth;
      b.strokeWidth = g / f;
      if (!1 !== b.fill) {
        this.setCanvasStyle("fill", b);
        this.canvas.beginPath();
        for (a = 0; a < h.length; a += 2)d = h[a], e = h[a + 1], 0 == a && this.canvas.moveTo(d, e), this.canvas.lineTo(d, e);
        this.canvas.closePath();
        this.canvas.fill();
        if (this.hitDetection) {
          this.setHitContextStyle("fill", c, b);
          this.hitContext.beginPath();
          for (a = 0; a < h.length; a += 2)d = h[a], e = h[a + 1], 0 == a && this.canvas.moveTo(d, e), this.hitContext.lineTo(d, e);
          this.hitContext.closePath();
          this.hitContext.fill()
        }
      }
      if (!1 !== b.stroke) {
        this.setCanvasStyle("stroke",
          b);
        this.canvas.beginPath();
        for (a = 0; a < h.length; a += 2)d = h[a], e = h[a + 1], 0 == a && this.canvas.moveTo(d, e), this.canvas.lineTo(d, e);
        this.canvas.closePath();
        this.canvas.stroke();
        if (this.hitDetection) {
          this.setHitContextStyle("stroke", c, b, f);
          this.hitContext.beginPath();
          for (a = 0; a < h.length; a += 2)d = h[a], e = h[a + 1], 0 == a && this.hitContext.moveTo(d, e), this.hitContext.lineTo(d, e);
          this.hitContext.closePath();
          this.hitContext.stroke()
        }
      }
      b.strokeWidth = g;
      this.canvas.restore();
      this.hitDetection && this.hitContext.restore();
      this.setCanvasStyle("reset")
    }
  },
  setCanvasStyle: function (a, b) {
    "fill" === a ? (this.canvas.globalAlpha = b.fillOpacity, this.canvas.fillStyle = b.fillColor) : "stroke" === a ? (this.canvas.globalAlpha = b.strokeOpacity, this.canvas.strokeStyle = b.strokeColor, this.canvas.lineWidth = b.strokeWidth) : (this.canvas.globalAlpha = 0, this.canvas.lineWidth = 1)
  },
  featureIdToHex: function (a) {
    a = Number(a.split("_").pop()) + 1;
    16777216 <= a && (this.hitOverflow = a - 16777215, a = a % 16777216 + 1);
    a = "000000" + a.toString(16);
    var b = a.length;
    return a = "#" + a.substring(b - 6, b)
  },
  setHitContextStyle: function (a,
                                b, c, d) {
    b = this.featureIdToHex(b);
    "fill" == a ? (this.hitContext.globalAlpha = 1, this.hitContext.fillStyle = b) : "stroke" == a ? (this.hitContext.globalAlpha = 1, this.hitContext.strokeStyle = b, "undefined" === typeof d ? this.hitContext.lineWidth = c.strokeWidth + 2 : isNaN(d) || (this.hitContext.lineWidth = c.strokeWidth + 2 / d)) : (this.hitContext.globalAlpha = 0, this.hitContext.lineWidth = 1)
  },
  drawPoint: function (a, b, c) {
    if (!1 !== b.graphic)if (b.externalGraphic) this.drawExternalGraphic(a, b, c); else if (b.graphicName && "circle" != b.graphicName) this.drawNamedSymbol(a,
      b, c); else {
      var d = this.getLocalXY(a);
      a = d[0];
      d = d[1];
      if (!isNaN(a) && !isNaN(d)) {
        var e = 2 * Math.PI, f = b.pointRadius;
        !1 !== b.fill && (this.setCanvasStyle("fill", b), this.canvas.beginPath(), this.canvas.arc(a, d, f, 0, e, !0), this.canvas.fill(), this.hitDetection && (this.setHitContextStyle("fill", c, b), this.hitContext.beginPath(), this.hitContext.arc(a, d, f, 0, e, !0), this.hitContext.fill()));
        !1 !== b.stroke && (this.setCanvasStyle("stroke", b), this.canvas.beginPath(), this.canvas.arc(a, d, f, 0, e, !0), this.canvas.stroke(), this.hitDetection &&
        (this.setHitContextStyle("stroke", c, b), this.hitContext.beginPath(), this.hitContext.arc(a, d, f, 0, e, !0), this.hitContext.stroke()), this.setCanvasStyle("reset"))
      }
    }
  },
  drawLineString: function (a, b, c) {
    b = OpenLayersForProjection.Util.applyDefaults({fill: !1}, b);
    this.drawLinearRing(a, b, c)
  },
  drawLinearRing: function (a, b, c) {
    !1 !== b.fill && (this.setCanvasStyle("fill", b), this.renderPath(this.canvas, a, b, c, "fill"), this.hitDetection && (this.setHitContextStyle("fill", c, b), this.renderPath(this.hitContext, a, b, c, "fill")));
    !1 !==
    b.stroke && (this.setCanvasStyle("stroke", b), this.renderPath(this.canvas, a, b, c, "stroke"), this.hitDetection && (this.setHitContextStyle("stroke", c, b), this.renderPath(this.hitContext, a, b, c, "stroke")));
    this.setCanvasStyle("reset")
  },
  renderPath: function (a, b, c, d, e) {
    b = b.components;
    c = b.length;
    a.beginPath();
    d = this.getLocalXY(b[0]);
    var f = d[1];
    if (!isNaN(d[0]) && !isNaN(f)) {
      a.moveTo(d[0], d[1]);
      for (d = 1; d < c; ++d)f = this.getLocalXY(b[d]), a.lineTo(f[0], f[1]);
      "fill" === e ? a.fill() : a.stroke()
    }
  },
  drawPolygon: function (a, b, c) {
    a =
      a.components;
    var d = a.length;
    this.drawLinearRing(a[0], b, c);
    for (var e = 1; e < d; ++e)this.canvas.globalCompositeOperation = "destination-out", this.hitDetection && (this.hitContext.globalCompositeOperation = "destination-out"), this.drawLinearRing(a[e], OpenLayersForProjection.Util.applyDefaults({
      stroke: !1,
      fillOpacity: 1
    }, b), c), this.canvas.globalCompositeOperation = "source-over", this.hitDetection && (this.hitContext.globalCompositeOperation = "source-over"), this.drawLinearRing(a[e], OpenLayersForProjection.Util.applyDefaults({fill: !1},
      b), c)
  },
  drawText: function (a, b) {
    var c = this.getLocalXY(a);
    this.setCanvasStyle("reset");
    this.canvas.fillStyle = b.fontColor;
    this.canvas.globalAlpha = b.fontOpacity || 1;
    var d = [b.fontStyle ? b.fontStyle : "normal", "normal", b.fontWeight ? b.fontWeight : "normal", b.fontSize ? b.fontSize : "1em", b.fontFamily ? b.fontFamily : "sans-serif"].join(" "),
      e = b.label.split("\n"), f = e.length;
    if (this.canvas.fillText) {
      this.canvas.font = d;
      this.canvas.textAlign = OpenLayersForProjection.Renderer.Canvas.LABEL_ALIGN[b.labelAlign[0]] || "center";
      this.canvas.textBaseline =
        OpenLayersForProjection.Renderer.Canvas.LABEL_ALIGN[b.labelAlign[1]] || "middle";
      var g = OpenLayersForProjection.Renderer.Canvas.LABEL_FACTOR[b.labelAlign[1]];
      null == g && (g = -.5);
      d = this.canvas.measureText("Mg").height || this.canvas.measureText("xx").width;
      c[1] += d * g * (f - 1);
      for (g = 0; g < f; g++)b.labelOutlineWidth && (this.canvas.save(), this.canvas.globalAlpha = b.labelOutlineOpacity || b.fontOpacity || 1, this.canvas.strokeStyle = b.labelOutlineColor, this.canvas.lineWidth = b.labelOutlineWidth, this.canvas.strokeText(e[g], c[0],
        c[1] + d * g + 1), this.canvas.restore()), this.canvas.fillText(e[g], c[0], c[1] + d * g)
    } else if (this.canvas.mozDrawText) {
      this.canvas.mozTextStyle = d;
      var h = OpenLayersForProjection.Renderer.Canvas.LABEL_FACTOR[b.labelAlign[0]];
      null == h && (h = -.5);
      g = OpenLayersForProjection.Renderer.Canvas.LABEL_FACTOR[b.labelAlign[1]];
      null == g && (g = -.5);
      d = this.canvas.mozMeasureText("xx");
      c[1] += d * (1 + g * f);
      for (g = 0; g < f; g++) {
        var k = c[0] + h * this.canvas.mozMeasureText(e[g]), l = c[1] + g * d;
        this.canvas.translate(k, l);
        this.canvas.mozDrawText(e[g]);
        this.canvas.translate(-k,
          -l)
      }
    }
    this.setCanvasStyle("reset")
  },
  getLocalXY: function (a) {
    var b = this.getResolution(), c = this.extent;
    return [(a.x - this.featureDx) / b + -c.left / b, c.top / b - a.y / b]
  },
  clear: function () {
    var a = this.root.height, b = this.root.width;
    this.canvas.clearRect(0, 0, b, a);
    this.features = {};
    this.hitDetection && this.hitContext.clearRect(0, 0, b, a)
  },
  getFeatureIdFromEvent: function (a) {
    var b;
    if (this.hitDetection && "none" !== this.root.style.display && !this.map.dragging && (a = a.xy, a = this.hitContext.getImageData(a.x | 0, a.y | 0, 1, 1).data, 255 === a[3] &&
      (a = a[2] + 256 * (a[1] + 256 * a[0])))) {
      a = "OpenLayers_Feature_Vector_" + (a - 1 + this.hitOverflow);
      try {
        b = this.features[a][0]
      } catch (c) {
      }
    }
    return b
  },
  eraseFeatures: function (a) {
    OpenLayersForProjection.Util.isArray(a) || (a = [a]);
    for (var b = 0; b < a.length; ++b)delete this.features[a[b].id];
    this.redraw()
  },
  redraw: function () {
    if (!this.locked) {
      var a = this.root.height, b = this.root.width;
      this.canvas.clearRect(0, 0, b, a);
      this.hitDetection && this.hitContext.clearRect(0, 0, b, a);
      var a = [], c, d, e = this.map.baseLayer && this.map.baseLayer.wrapDateLine &&
        this.map.getMaxExtent(), f;
      for (f in this.features)this.features.hasOwnProperty(f) && (b = this.features[f][0], c = b.geometry, this.calculateFeatureDx(c.getBounds(), e), d = this.features[f][1], this.drawGeometry(c, d, b.id), d.label && a.push([b, d]));
      b = 0;
      for (c = a.length; b < c; ++b)f = a[b], this.drawText(f[0].geometry.getCentroid(), f[1])
    }
  },
  CLASS_NAME: "OpenLayersForProjection.Renderer.Canvas"
});
OpenLayersForProjection.Renderer.Canvas.LABEL_ALIGN = {l: "left", r: "right", t: "top", b: "bottom"};
OpenLayersForProjection.Renderer.Canvas.LABEL_FACTOR = {l: 0, r: -1, t: 0, b: -1};
OpenLayersForProjection.Renderer.Canvas.drawImageScaleFactor = null;
OpenLayersForProjection.Renderer.SVG = OpenLayersForProjection.Class(OpenLayersForProjection.Renderer.Elements, {
  xmlns: "http://www.w3.org/2000/svg",
  xlinkns: "http://www.w3.org/1999/xlink",
  MAX_PIXEL: 15E3,
  translationParameters: null,
  symbolMetrics: null,
  initialize: function (a) {
    this.supported() && (OpenLayersForProjection.Renderer.Elements.prototype.initialize.apply(this, arguments), this.translationParameters = {
      x: 0,
      y: 0
    }, this.symbolMetrics = {})
  },
  supported: function () {
    return document.implementation && (document.implementation.hasFeature("org.w3c.svg",
        "1.0") || document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#SVG", "1.1") || document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1"))
  },
  setSize: function (a) {
    OpenLayersForProjection.Renderer.prototype.setSize.apply(this, arguments);
    this.rendererRoot.setAttributeNS(null, "width", this.size.w);
    this.rendererRoot.setAttributeNS(null, "height", this.size.h)
  },
  setExtent: function (a, b) {
    var c = OpenLayersForProjection.Renderer.Elements.prototype.setExtent.apply(this,
      arguments), d = this.getResolution(), e = -a.left / d, d = a.top / d;
    if (b)return this.left = e, this.top = d, this.rendererRoot.setAttributeNS(null, "viewBox", "0 0 " + this.size.w + " " + this.size.h), this.translate(this.xOffset, 0), !0;
    (e = this.translate(e - this.left + this.xOffset, d - this.top)) || this.setExtent(a, !0);
    return c && e
  },
  createRenderRoot: function () {
    var a = this.nodeFactory(this.container.id + "_svgRoot", "svg");
    a.style.display = "block";
    return a
  },
  createNode: function (a, b) {
    var c = document.createElementNS(this.xmlns, a);
    b && c.setAttributeNS(null,
      "id", b);
    return c
  },
  createRoot: function (a) {
    return this.nodeFactory(this.container.id + a, "g")
  },
  translate: function (a, b) {
    if (this.inValidRange(a, b, !0)) {
      var c = "";
      if (a || b) c = "translate(" + a + "," + b + ")";
      this.root.setAttributeNS(null, "transform", c);
      this.translationParameters = {x: a, y: b};
      return !0
    }
    return !1
  },
  inValidRange: function (a, b, c) {
    a += c ? 0 : this.translationParameters.x;
    b += c ? 0 : this.translationParameters.y;
    return a >= -this.MAX_PIXEL && a <= this.MAX_PIXEL && b >= -this.MAX_PIXEL && b <= this.MAX_PIXEL
  },
  createImagePattern: function (a,
                                b, c) {
    if (this.container && this.container.id) {
      var d = this.container.id + "-" + a.externalGraphic + (a.pointRadius ? "-" + a.pointRadius : ""),
        e = OpenLayers.Util.getElement(d);
      if (!e) {
        var f = new Image;
        f.onload = OpenLayers.Function.bind(function () {
          this.defs || (this.defs = this.createDefs());
          e = this.nodeFactory(d, "pattern");
          e.setAttributeNS(null, "x", "0");
          e.setAttributeNS(null, "y", "0");
          e.setAttributeNS(null, "height", c);
          e.setAttributeNS(null, "width", b);
          e.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
          var f = this.nodeFactory(null,
            "image");
          e.appendChild(f);
          f.setAttributeNS(this.xlinkns, "href", a.externalGraphic);
          f.setAttributeNS(null, "height", c);
          f.setAttributeNS(null, "width", b);
          f.setAttributeNS(null, "style", "opacity: " + (a.graphicOpacity || a.fillOpacity || 1));
          if ("undefined" != typeof a.rotation) {
            var h = OpenLayers.String.format("rotate(${0})", [a.rotation]);
            f.setAttributeNS(null, "transform", h)
          }
          this.defs.appendChild(e)
        }, this);
        f.src = a.externalGraphic
      }
      return d
    }
  },
  setStyle: function (a, b, c) {
    "circle" == a.nodeName && (b.pointRadius || (b.pointRadius =
      6), b.pointerEvents || (b.pointerEvents = "visiblePainted"));
    b = b || a._style;
    c = c || a._options;
    var d = b.title || b.graphicTitle;
    if (d) {
      a.setAttributeNS(null, "title", d);
      var e = a.getElementsByTagName("title");
      0 < e.length ? e[0].firstChild.textContent = d : (e = this.nodeFactory(null, "title"), e.textContent = d, a.appendChild(e))
    }
    var e = parseFloat(a.getAttributeNS(null, "r")), d = 1, f;
    if (-1 !== a._geometryClass.indexOf("Geometry.Point") && e) {
      a.style.visibility = "";
      if (!1 === b.graphic) a.style.visibility = "hidden"; else if (b.externalGraphic) {
        f =
          this.getPosition(a);
        b.graphicWidth && b.graphicHeight && a.setAttributeNS(null, "preserveAspectRatio", "none");
        var e = b.graphicWidth || b.size || 30, g = b.graphicHeight || b.size || 30, e = e ? e : 2 * b.pointRadius,
          g = g ? g : 2 * b.pointRadius, h = void 0 != b.graphicYOffset ? b.graphicYOffset : -(.5 * g),
          k = b.graphicOpacity || b.fillOpacity;
        a.setAttributeNS(null, "x", (f.x + (void 0 != b.graphicXOffset ? b.graphicXOffset : -(.5 * e))).toFixed());
        a.setAttributeNS(null, "y", (f.y + h).toFixed());
        a.setAttributeNS(null, "width", e);
        a.setAttributeNS(null, "height",
          g);
        a.setAttributeNS(this.xlinkns, "xlink:href", b.externalGraphic);
        a.setAttributeNS(null, "style", "opacity: " + k);
        a.onclick = OpenLayersForProjection.Event.preventDefault
      } else if (this.isComplexSymbol(b.graphicName)) {
        var e = 3 * b.pointRadius, g = 2 * e, l = null;
        Nigsys.graphicIsFont(b.graphicName) ? (l = StyleEditor.drawRuleFontImageOnWFS(b), d = 1, a.setAttributeNS(null, "viewBox", "-10 -10 30 30"), a.firstChild && a.removeChild(a.firstChild), a.appendChild(l)) : (l = this.importSymbol(b.graphicName), d = 3 * this.symbolMetrics[l.id][0] /
          g, a.setAttributeNS(null, "viewBox", l.getAttributeNS(null, "viewBox")), a.firstChild && a.removeChild(a.firstChild), a.appendChild(l.firstChild.cloneNode(!0)));
        f = this.getPosition(a);
        h = a.parentNode;
        k = a.nextSibling;
        h && h.removeChild(a);
        a.setAttributeNS(null, "width", g);
        a.setAttributeNS(null, "height", g);
        a.setAttributeNS(null, "x", f.x - e);
        a.setAttributeNS(null, "y", f.y - e);
        k ? h.insertBefore(a, k) : h && h.appendChild(a)
      } else a.setAttributeNS(null, "r", b.pointRadius);
      e = b.rotation;
      void 0 === e && void 0 === a._rotation || !f || (a._rotation =
        e, e |= 0, "svg" !== a.nodeName ? a.setAttributeNS(null, "transform", "rotate(" + e + " " + f.x + " " + f.y + ")") : (f = this.symbolMetrics[l.id]) ? a.firstChild.setAttributeNS(null, "transform", "rotate(" + e + " " + f[1] + " " + f[2] + ")") : a.firstChild.setAttributeNS(null, "transform", "rotate(" + e + " 5 5)"))
    }
    c.isFilled ? b.externalGraphic ? (g = b.size ? b.size : b.pointRadius, f = OpenLayersForProjection.Renderer.SVG.prototype.createImagePattern(b, g, g), a.setAttributeNS(null, "fill", "url(#" + f + ")"), a.setAttributeNS(null, "fill-opacity", b.graphicOpacity)) :
      b.graphicName && -1 !== b.graphicName.indexOf("shape://") && "OpenLayers.Geometry.Polygon" === a._geometryClass ? (OpenLayersForProjection.Console.error("WellKnownName is not yet supported as GraphicFill by the SVG renderer!"), b.externalGraphic = applicationUrl + "resources/img/pattern.png?" + Imajnet.version, f = OpenLayersForProjection.Renderer.SVG.prototype.createImagePattern(b, 58, 58), a.setAttributeNS(null, "fill", "url(#" + f + ")"), a.setAttributeNS(null, "fill-opacity", b.patternstrokeOpacity)) : (a.setAttributeNS(null,
        "fill", b.fillColor), a.setAttributeNS(null, "fill-opacity", b.fillOpacity)) : a.setAttributeNS(null, "fill", "none");
    c.isStroked ? (a.setAttributeNS(null, "stroke", b.strokeColor), a.setAttributeNS(null, "stroke-opacity", b.strokeOpacity), a.setAttributeNS(null, "stroke-width", b.strokeWidth * d), a.setAttributeNS(null, "stroke-linecap", b.strokeLinecap || "round"), a.setAttributeNS(null, "stroke-linejoin", "round"), b.strokeDashstyle && a.setAttributeNS(null, "stroke-dasharray", this.dashStyle(b, d))) : a.setAttributeNS(null, "stroke",
      "none");
    b.pointerEvents && a.setAttributeNS(null, "pointer-events", b.pointerEvents);
    null != b.cursor && a.setAttributeNS(null, "cursor", b.cursor);
    return a
  },
  drawPoint: function (a, b) {
    return this.drawCircle(a, b, 1)
  },
  drawCircle: function (a, b, c) {
    var d = this.getResolution(), e = (b.x - this.featureDx) / d + this.left;
    b = this.top - b.y / d;
    return this.inValidRange(e, b) ? (a.setAttributeNS(null, "cx", e), a.setAttributeNS(null, "cy", b), a.setAttributeNS(null, "r", c), a) : !1
  },
  importSymbol: function (a) {
    this.defs || (this.defs = this.createDefs());
    var b = this.container.id + "-" + a, c = document.getElementById(b);
    if (null != c)return c;
    var d = OpenLayersForProjection.Renderer.symbol[a];
    if (!d)throw Error(a + " is not a valid symbol name");
    a = this.nodeFactory(b, "symbol");
    var e = this.nodeFactory(null, "polygon");
    a.appendChild(e);
    for (var c = new OpenLayersForProjection.Bounds(Number.MAX_VALUE, Number.MAX_VALUE, 0, 0), f = [], g, h, k = 0; k < d.length; k += 2)g = d[k], h = d[k + 1], c.left = Math.min(c.left, g), c.bottom = Math.min(c.bottom, h), c.right = Math.max(c.right, g), c.top = Math.max(c.top, h),
      f.push(g, ",", h);
    e.setAttributeNS(null, "points", f.join(" "));
    d = c.getWidth();
    e = c.getHeight();
    a.setAttributeNS(null, "viewBox", [c.left - d, c.bottom - e, 3 * d, 3 * e].join(" "));
    this.symbolMetrics[b] = [Math.max(d, e), c.getCenterLonLat().lon, c.getCenterLonLat().lat];
    this.defs.appendChild(a);
    return a
  },
  createDefs: function () {
    if (!this.container || !this.container.id)return null;
    var a = this.nodeFactory(this.container.id + "_defs", "defs");
    this.rendererRoot.appendChild(a);
    return a
  },
  getPosition: function (a) {
    return {
      x: parseFloat(a.getAttributeNS(null,
        "cx")), y: parseFloat(a.getAttributeNS(null, "cy"))
    }
  },
  getNodeType: function (a, b) {
    var c = null;
    switch (a.CLASS_NAME) {
      case "OpenLayers.Geometry.Point":
        c = b.externalGraphic ? "image" : this.isComplexSymbol(b.graphicName) ? "svg" : "circle";
        break;
      case "OpenLayers.Geometry.Rectangle":
        c = "rect";
        break;
      case "OpenLayers.Geometry.LineString":
        c = "polyline";
        break;
      case "OpenLayers.Geometry.LinearRing":
        c = "polygon";
        break;
      case "OpenLayers.Geometry.Polygon":
      case "OpenLayers.Geometry.Curve":
        c = "path"
    }
    return c
  },
  dashStyle: function (a, b) {
    var c =
      a.strokeWidth * b, d = a.strokeDashstyle;
    switch (d) {
      case "solid":
        return "none";
      case "dot":
        return [1, 4 * c].join();
      case "dash":
        return [4 * c, 4 * c].join();
      case "dashdot":
        return [4 * c, 4 * c, 1, 4 * c].join();
      case "longdash":
        return [8 * c, 4 * c].join();
      case "longdashdot":
        return [8 * c, 4 * c, 1, 4 * c].join();
      default:
        return OpenLayersForProjection.String.trim(d).replace(/\s+/g, ",")
    }
  },
  drawText: function (a, b, c) {
    var d = !!b.labelOutlineWidth;
    if (d) {
      var e = OpenLayersForProjection.Util.extend({}, b);
      e.fontColor = e.labelOutlineColor;
      e.fontStrokeColor =
        e.labelOutlineColor;
      e.fontStrokeWidth = b.labelOutlineWidth;
      b.labelOutlineOpacity && (e.fontOpacity = b.labelOutlineOpacity);
      delete e.labelOutlineWidth;
      this.drawText(a, e, c)
    }
    var f = this.getResolution(), e = (c.x - this.featureDx) / f + this.left, g = c.y / f - this.top,
      d = d ? this.LABEL_OUTLINE_SUFFIX : this.LABEL_ID_SUFFIX, f = this.nodeFactory(a + d, "text");
    f.setAttributeNS(null, "x", e);
    f.setAttributeNS(null, "y", -g);
    b.fontColor && f.setAttributeNS(null, "fill", b.fontColor);
    b.fontStrokeColor && f.setAttributeNS(null, "stroke", b.fontStrokeColor);
    b.fontStrokeWidth && f.setAttributeNS(null, "stroke-width", b.fontStrokeWidth);
    b.fontOpacity && f.setAttributeNS(null, "opacity", b.fontOpacity);
    b.fontFamily && f.setAttributeNS(null, "font-family", b.fontFamily);
    b.fontSize && f.setAttributeNS(null, "font-size", b.fontSize);
    b.fontWeight && f.setAttributeNS(null, "font-weight", b.fontWeight);
    b.fontStyle && f.setAttributeNS(null, "font-style", b.fontStyle);
    !0 === b.labelSelect ? (f.setAttributeNS(null, "pointer-events", "visible"), f._featureId = a) : f.setAttributeNS(null, "pointer-events",
      "none");
    g = b.labelAlign || OpenLayersForProjection.Renderer.defaultSymbolizer.labelAlign;
    f.setAttributeNS(null, "text-anchor", OpenLayersForProjection.Renderer.SVG.LABEL_ALIGN[g[0]] || "middle");
    !0 === OpenLayersForProjection.IS_GECKO && f.setAttributeNS(null, "dominant-baseline", OpenLayersForProjection.Renderer.SVG.LABEL_ALIGN[g[1]] || "central");
    for (var h = b.label.split("\n"), k = h.length; f.childNodes.length > k;)f.removeChild(f.lastChild);
    for (var l = 0; l < k; l++) {
      var m = this.nodeFactory(a + d + "_tspan_" + l, "tspan");
      !0 ===
      b.labelSelect && (m._featureId = a, m._geometry = c, m._geometryClass = c.CLASS_NAME);
      !1 === OpenLayersForProjection.IS_GECKO && m.setAttributeNS(null, "baseline-shift", OpenLayersForProjection.Renderer.SVG.LABEL_VSHIFT[g[1]] || "-35%");
      m.setAttribute("x", e);
      if (0 == l) {
        var n = OpenLayersForProjection.Renderer.SVG.LABEL_VFACTOR[g[1]];
        null == n && (n = -.5);
        m.setAttribute("dy", n * (k - 1) + "em")
      } else m.setAttribute("dy", "1em");
      m.textContent = "" === h[l] ? " " : h[l];
      m.parentNode || f.appendChild(m)
    }
    f.parentNode || this.textRoot.appendChild(f)
  },
  CLASS_NAME: "OpenLayersForProjection.Renderer.SVG"
});
OpenLayersForProjection.Renderer.SVG.LABEL_ALIGN = {l: "start", r: "end", b: "bottom", t: "hanging"};
OpenLayersForProjection.Renderer.SVG.LABEL_VFACTOR = {t: 0, b: -1};
OpenLayersForProjection.Renderer.VML = OpenLayersForProjection.Class(OpenLayersForProjection.Renderer.Elements, {
  xmlns: "urn:schemas-microsoft-com:vml", symbolCache: {}, offset: null, initialize: function (a) {
    if (this.supported()) {
      if (!document.namespaces.olv) {
        document.namespaces.add("olv", this.xmlns);
        for (var b = document.createStyleSheet(), c = "shape rect oval fill stroke imagedata group textbox".split(" "), d = 0, e = c.length; d < e; d++)b.addRule("olv\\:" + c[d], "behavior: url(#default#VML); position: absolute; display: inline-block;")
      }
      OpenLayersForProjection.Renderer.Elements.prototype.initialize.apply(this,
        arguments)
    }
  }, supported: function () {
    return !!document.namespaces
  }, setExtent: function (a, b) {
    var c = OpenLayersForProjection.Renderer.Elements.prototype.setExtent.apply(this, arguments),
      d = this.getResolution(), e = a.left / d | 0, d = a.top / d - this.size.h | 0;
    b || !this.offset ? (this.offset = {x: e, y: d}, d = e = 0) : (e -= this.offset.x, d -= this.offset.y);
    this.root.coordorigin = e - this.xOffset + " " + d;
    for (var e = [this.root, this.vectorRoot, this.textRoot], f = 0, g = e.length; f < g; ++f)d = e[f], d.coordsize = this.size.w + " " + this.size.h;
    this.root.style.flip =
      "y";
    return c
  }, setSize: function (a) {
    OpenLayersForProjection.Renderer.prototype.setSize.apply(this, arguments);
    for (var b = [this.rendererRoot, this.root, this.vectorRoot, this.textRoot], c = this.size.w + "px", d = this.size.h + "px", e, f = 0, g = b.length; f < g; ++f)e = b[f], e.style.width = c, e.style.height = d
  }, createRenderRoot: function () {
    return this.nodeFactory(this.container.id + "_vmlRoot", "div")
  }, createNode: function (a, b) {
    var c = document.createElement(a);
    b && (c.id = b);
    c.unselectable = "on";
    c.onselectstart = OpenLayersForProjection.Function.False;
    return c
  }, createRoot: function (a) {
    return this.nodeFactory(this.container.id + a, "olv:group")
  }, setStyle: function (a, b, c, d) {
    b = b || a._style;
    c = c || a._options;
    var e = b.fillColor, f = b.title || b.graphicTitle;
    f && (a.title = f);
    if ("OpenLayers.Geometry.Point" === a._geometryClass)if (b.externalGraphic) {
      c.isFilled = !0;
      var e = b.graphicWidth || b.graphicHeight, f = b.graphicHeight || b.graphicWidth, e = e ? e : 2 * b.pointRadius,
        f = f ? f : 2 * b.pointRadius, g = this.getResolution(),
        h = void 0 != b.graphicXOffset ? b.graphicXOffset : -(.5 * e), k = void 0 != b.graphicYOffset ?
          b.graphicYOffset : -(.5 * f);
      a.style.left = ((d.x - this.featureDx) / g - this.offset.x + h | 0) + "px";
      a.style.top = (d.y / g - this.offset.y - (k + f) | 0) + "px";
      a.style.width = e + "px";
      a.style.height = f + "px";
      a.style.flip = "y";
      e = "none";
      c.isStroked = !1
    } else this.isComplexSymbol(b.graphicName) ? (f = this.importSymbol(b.graphicName), a.path = f.path, a.coordorigin = f.left + "," + f.bottom, f = f.size, a.coordsize = f + "," + f, this.drawCircle(a, d, b.pointRadius), a.style.flip = "y") : this.drawCircle(a, d, b.pointRadius);
    c.isFilled ? a.fillcolor = e : a.filled = "false";
    d = a.getElementsByTagName("fill");
    d = 0 == d.length ? null : d[0];
    c.isFilled ? (d || (d = this.createNode("olv:fill", a.id + "_fill")), d.opacity = b.fillOpacity, "OpenLayers.Geometry.Point" === a._geometryClass && b.externalGraphic && (b.graphicOpacity && (d.opacity = b.graphicOpacity), d.src = b.externalGraphic, d.type = "frame", b.graphicWidth && b.graphicHeight || (d.aspect = "atmost")), d.parentNode != a && a.appendChild(d)) : d && a.removeChild(d);
    e = b.rotation;
    if (void 0 !== e || void 0 !== a._rotation) a._rotation = e, b.externalGraphic ? (this.graphicRotate(a,
      h, k, b), d.opacity = 0) : "OpenLayers.Geometry.Point" === a._geometryClass && (a.style.rotation = e || 0);
    h = a.getElementsByTagName("stroke");
    h = 0 == h.length ? null : h[0];
    c.isStroked ? (h || (h = this.createNode("olv:stroke", a.id + "_stroke"), a.appendChild(h)), h.on = !0, h.color = b.strokeColor, h.weight = b.strokeWidth + "px", h.opacity = b.strokeOpacity, h.endcap = "butt" == b.strokeLinecap ? "flat" : b.strokeLinecap || "round", b.strokeDashstyle && (h.dashstyle = this.dashStyle(b))) : (a.stroked = !1, h && (h.on = !1));
    "inherit" != b.cursor && null != b.cursor && (a.style.cursor =
      b.cursor);
    return a
  }, postDraw: function (a) {
    a.style.visibility = "visible";
    var b = a._style.fillColor, c = a._style.strokeColor;
    "none" == b && a.fillcolor != b && (a.fillcolor = b);
    "none" == c && a.strokecolor != c && (a.strokecolor = c)
  }, drawPoint: function (a, b) {
    return this.drawCircle(a, b, 1)
  }, drawCircle: function (a, b, c) {
    if (!isNaN(b.x) && !isNaN(b.y)) {
      var d = this.getResolution();
      a.style.left = ((b.x - this.featureDx) / d - this.offset.x | 0) - c + "px";
      a.style.top = (b.y / d - this.offset.y | 0) - c + "px";
      b = 2 * c;
      a.style.width = b + "px";
      a.style.height = b + "px";
      return a
    }
    return !1
  },
  importSymbol: function (a) {
    var b = this.container.id + "-" + a, c = this.symbolCache[b];
    if (c)return c;
    c = OpenLayersForProjection.Renderer.symbol[a];
    if (!c)throw Error(a + " is not a valid symbol name");
    a = new OpenLayersForProjection.Bounds(Number.MAX_VALUE, Number.MAX_VALUE, 0, 0);
    for (var d = ["m"], e = 0; e < c.length; e += 2) {
      var f = c[e], g = c[e + 1];
      a.left = Math.min(a.left, f);
      a.bottom = Math.min(a.bottom, g);
      a.right = Math.max(a.right, f);
      a.top = Math.max(a.top, g);
      d.push(f);
      d.push(g);
      0 == e && d.push("l")
    }
    d.push("x e");
    c = d.join(" ");
    d = (a.getWidth() -
      a.getHeight()) / 2;
    0 < d ? (a.bottom -= d, a.top += d) : (a.left += d, a.right -= d);
    c = {path: c, size: a.getWidth(), left: a.left, bottom: a.bottom};
    return this.symbolCache[b] = c
  }, getNodeType: function (a, b) {
    var c = null;
    switch (a.CLASS_NAME) {
      case "OpenLayers.Geometry.Point":
        c = b.externalGraphic ? "olv:rect" : this.isComplexSymbol(b.graphicName) ? "olv:shape" : "olv:oval";
        break;
      case "OpenLayers.Geometry.Rectangle":
        c = "olv:rect";
        break;
      case "OpenLayers.Geometry.LineString":
      case "OpenLayers.Geometry.LinearRing":
      case "OpenLayers.Geometry.Polygon":
      case "OpenLayers.Geometry.Curve":
        c =
          "olv:shape"
    }
    return c
  }, CLASS_NAME: "OpenLayersForProjection.Renderer.VML"
});
OpenLayersForProjection.Event = {
  observers: !1,
  KEY_SPACE: 32,
  KEY_BACKSPACE: 8,
  KEY_TAB: 9,
  KEY_RETURN: 13,
  KEY_ESC: 27,
  KEY_LEFT: 37,
  KEY_UP: 38,
  KEY_RIGHT: 39,
  KEY_DOWN: 40,
  KEY_DELETE: 46,
  element: function (a) {
    return a.target || a.srcElement
  },
  isSingleTouch: function (a) {
    return a.touches && 1 == a.touches.length
  },
  isMultiTouch: function (a) {
    return a.touches && 1 < a.touches.length
  },
  isLeftClick: function (a) {
    return a.which && 1 == a.which || a.button && 1 == a.button
  },
  isRightClick: function (a) {
    return a.which && 3 == a.which || a.button && 2 == a.button
  },
  stop: function (a,
                  b) {
    b || OpenLayersForProjection.Event.preventDefault(a);
    a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
  },
  preventDefault: function (a) {
    a.preventDefault ? a.preventDefault() : a.returnValue = !1
  },
  findElement: function (a, b) {
    for (var c = OpenLayersForProjection.Event.element(a); c.parentNode && (!c.tagName || c.tagName.toUpperCase() != b.toUpperCase());)c = c.parentNode;
    return c
  },
  observe: function (a, b, c, d) {
    a = OpenLayersForProjection.Util.getElement(a);
    d = d || !1;
    "keypress" == b && (navigator.appVersion.match(/Konqueror|Safari|KHTML/) ||
    a.attachEvent) && (b = "keydown");
    this.observers || (this.observers = {});
    a || (a = {});
    if (!a._eventCacheID) {
      var e = "eventCacheID_";
      a.id && (e = a.id + "_" + e);
      a._eventCacheID = OpenLayersForProjection.Util.createUniqueID(e)
    }
    e = a._eventCacheID;
    this.observers[e] || (this.observers[e] = []);
    this.observers[e].push({element: a, name: b, observer: c, useCapture: d});
    a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
  },
  stopObservingElement: function (a) {
    (a = OpenLayersForProjection.Util.getElement(a)) && this._removeElementObservers(OpenLayersForProjection.Event.observers[a._eventCacheID])
  },
  _removeElementObservers: function (a) {
    if (a)for (var b = a.length - 1; 0 <= b; b--) {
      var c = a[b];
      OpenLayersForProjection.Event.stopObserving.apply(this, [c.element, c.name, c.observer, c.useCapture])
    }
  },
  stopObserving: function (a, b, c, d) {
    d = d || !1;
    a = OpenLayersForProjection.Util.getElement(a);
    var e = a._eventCacheID;
    "keypress" == b && (navigator.appVersion.match(/Konqueror|Safari|KHTML/) || a.detachEvent) && (b = "keydown");
    var f = !1, g = OpenLayersForProjection.Event.observers[e];
    if (g)for (var h = 0; !f && h < g.length;) {
      var k = g[h];
      if (k.name ==
        b && k.observer == c && k.useCapture == d) {
        g.splice(h, 1);
        0 == g.length && delete OpenLayersForProjection.Event.observers[e];
        f = !0;
        break
      }
      h++
    }
    f && (a.removeEventListener ? a.removeEventListener(b, c, d) : a && a.detachEvent && a.detachEvent("on" + b, c));
    return f
  },
  unloadCache: function () {
    if (OpenLayersForProjection.Event && OpenLayersForProjection.Event.observers) {
      for (var a in OpenLayersForProjection.Event.observers)OpenLayersForProjection.Event._removeElementObservers.apply(this, [OpenLayersForProjection.Event.observers[a]]);
      OpenLayersForProjection.Event.observers =
        !1
    }
  },
  CLASS_NAME: "OpenLayersForProjection.Event"
};
OpenLayersForProjection.Event.observe(window, "unload", OpenLayersForProjection.Event.unloadCache, !1);
OpenLayersForProjection.Events = OpenLayersForProjection.Class({
  BROWSER_EVENTS: "mouseover mouseout mousedown mouseup mousemove click dblclick rightclick dblrightclick resize focus blur touchstart touchmove touchend keydown".split(" "),
  listeners: null,
  object: null,
  element: null,
  eventHandler: null,
  fallThrough: null,
  includeXY: !1,
  extensions: null,
  extensionCount: null,
  clearMouseListener: null,
  initialize: function (a, b, c, d, e) {
    OpenLayersForProjection.Util.extend(this, e);
    this.object = a;
    this.fallThrough = d;
    this.listeners =
      {};
    this.extensions = {};
    this.extensionCount = {};
    this._msTouches = [];
    null != b && this.attachToElement(b)
  },
  destroy: function () {
    for (var a in this.extensions)"boolean" !== typeof this.extensions[a] && this.extensions[a].destroy();
    this.extensions = null;
    this.element && (OpenLayersForProjection.Event.stopObservingElement(this.element), this.element.hasScrollEvent && OpenLayersForProjection.Event.stopObserving(window, "scroll", this.clearMouseListener));
    this.eventHandler = this.fallThrough = this.object = this.listeners = this.element =
      null
  },
  addEventType: function (a) {
  },
  attachToElement: function (a) {
    this.element ? OpenLayersForProjection.Event.stopObservingElement(this.element) : (this.eventHandler = OpenLayersForProjection.Function.bindAsEventListener(this.handleBrowserEvent, this), this.clearMouseListener = OpenLayersForProjection.Function.bind(this.clearMouseCache, this));
    this.element = a;
    for (var b = !!window.navigator.msMaxTouchPoints, c, d = 0, e = this.BROWSER_EVENTS.length; d < e; d++)c = this.BROWSER_EVENTS[d], OpenLayersForProjection.Event.observe(a, c,
      this.eventHandler), b && 0 === c.indexOf("touch") && this.addMsTouchListener(a, c, this.eventHandler);
    OpenLayersForProjection.Event.observe(a, "dragstart", OpenLayersForProjection.Event.stop)
  },
  on: function (a) {
    for (var b in a)"scope" != b && a.hasOwnProperty(b) && this.register(b, a.scope, a[b])
  },
  register: function (a, b, c, d) {
    a in OpenLayersForProjection.Events && !this.extensions[a] && (this.extensions[a] = new OpenLayersForProjection.Events[a](this));
    if (null != c) {
      null == b && (b = this.object);
      var e = this.listeners[a];
      e || (e = [], this.listeners[a] =
        e, this.extensionCount[a] = 0);
      b = {obj: b, func: c};
      d ? (e.splice(this.extensionCount[a], 0, b), "object" === typeof d && d.extension && this.extensionCount[a]++) : e.push(b)
    }
  },
  registerPriority: function (a, b, c) {
    this.register(a, b, c, !0)
  },
  un: function (a) {
    for (var b in a)"scope" != b && a.hasOwnProperty(b) && this.unregister(b, a.scope, a[b])
  },
  unregister: function (a, b, c) {
    null == b && (b = this.object);
    a = this.listeners[a];
    if (null != a)for (var d = 0, e = a.length; d < e; d++)if (a[d].obj == b && a[d].func == c) {
      a.splice(d, 1);
      break
    }
  },
  remove: function (a) {
    null !=
    this.listeners[a] && (this.listeners[a] = [])
  },
  triggerEvent: function (a, b) {
    var c = this.listeners[a];
    if (c && 0 != c.length) {
      null == b && (b = {});
      b.object = this.object;
      b.element = this.element;
      b.type || (b.type = a);
      for (var c = c.slice(), d, e = 0, f = c.length; e < f && (d = c[e], d = d.func.apply(d.obj, [b]), void 0 == d || 0 != d); e++);
      this.fallThrough || OpenLayersForProjection.Event.stop(b, !0);
      return d
    }
  },
  handleBrowserEvent: function (a) {
    var b = a.type, c = this.listeners[b];
    if (c && 0 != c.length) {
      if ((c = a.touches) && c[0]) {
        for (var d = 0, e = 0, f = c.length, g, h = 0; h <
        f; ++h)g = this.getTouchClientXY(c[h]), d += g.clientX, e += g.clientY;
        a.clientX = d / f;
        a.clientY = e / f
      }
      this.includeXY && (a.xy = this.getMousePosition(a));
      this.triggerEvent(b, a)
    }
  },
  getTouchClientXY: function (a) {
    var b = window.olMockWin || window, c = b.pageXOffset, b = b.pageYOffset, d = a.clientX, e = a.clientY;
    if (0 === a.pageY && Math.floor(e) > Math.floor(a.pageY) || 0 === a.pageX && Math.floor(d) > Math.floor(a.pageX)) d -= c, e -= b; else if (e < a.pageY - b || d < a.pageX - c) d = a.pageX - c, e = a.pageY - b;
    a.olClientX = d;
    a.olClientY = e;
    return {clientX: d, clientY: e}
  },
  clearMouseCache: function () {
    this.element.scrolls = null;
    this.element.lefttop = null;
    this.element.offsets = null
  },
  getMousePosition: function (a) {
    this.includeXY ? this.element.hasScrollEvent || (OpenLayersForProjection.Event.observe(window, "scroll", this.clearMouseListener), this.element.hasScrollEvent = !0) : this.clearMouseCache();
    if (!this.element.scrolls) {
      var b = OpenLayersForProjection.Util.getViewportElement();
      this.element.scrolls = [window.pageXOffset || b.scrollLeft, window.pageYOffset || b.scrollTop]
    }
    this.element.lefttop ||
    (this.element.lefttop = [document.documentElement.clientLeft || 0, document.documentElement.clientTop || 0]);
    this.element.offsets || (this.element.offsets = OpenLayersForProjection.Util.pagePosition(this.element));
    return new OpenLayersForProjection.Pixel(a.clientX + this.element.scrolls[0] - this.element.offsets[0] - this.element.lefttop[0], a.clientY + this.element.scrolls[1] - this.element.offsets[1] - this.element.lefttop[1])
  },
  addMsTouchListener: function (a, b, c) {
    function d (a) {
      c(OpenLayersForProjection.Util.applyDefaults({
        stopPropagation: function () {
          for (var a =
            e.length - 1; 0 <= a; --a)e[a].stopPropagation()
        }, preventDefault: function () {
          for (var a = e.length - 1; 0 <= a; --a)e[a].preventDefault()
        }, type: b
      }, a))
    }

    var e = this._msTouches;
    switch (b) {
      case "touchstart":
        return this.addMsTouchListenerStart(a, b, d);
      case "touchend":
        return this.addMsTouchListenerEnd(a, b, d);
      case "touchmove":
        return this.addMsTouchListenerMove(a, b, d);
      default:
        throw"Unknown touch event type";
    }
  },
  addMsTouchListenerStart: function (a, b, c) {
    var d = this._msTouches;
    OpenLayersForProjection.Event.observe(a, "MSPointerDown",
      function (a) {
        for (var b = !1, g = 0, h = d.length; g < h; ++g)if (d[g].pointerId == a.pointerId) {
          b = !0;
          break
        }
        b || d.push(a);
        a.touches = d.slice();
        c(a)
      });
    OpenLayersForProjection.Event.observe(a, "MSPointerUp", function (a) {
      for (var b = 0, c = d.length; b < c; ++b)if (d[b].pointerId == a.pointerId) {
        d.splice(b, 1);
        break
      }
    })
  },
  addMsTouchListenerMove: function (a, b, c) {
    var d = this._msTouches;
    OpenLayersForProjection.Event.observe(a, "MSPointerMove", function (a) {
      if (a.pointerType != a.MSPOINTER_TYPE_MOUSE || 0 != a.buttons)if (1 != d.length || d[0].pageX != a.pageX ||
        d[0].pageY != a.pageY) {
        for (var b = 0, g = d.length; b < g; ++b)if (d[b].pointerId == a.pointerId) {
          d[b] = a;
          break
        }
        a.touches = d.slice();
        c(a)
      }
    })
  },
  addMsTouchListenerEnd: function (a, b, c) {
    var d = this._msTouches;
    OpenLayersForProjection.Event.observe(a, "MSPointerUp", function (a) {
      for (var b = 0, g = d.length; b < g; ++b)if (d[b].pointerId == a.pointerId) {
        d.splice(b, 1);
        break
      }
      a.touches = d.slice();
      c(a)
    })
  },
  CLASS_NAME: "OpenLayersForProjection.Events"
});
OpenLayersForProjection.Function = {
  bind: function (a, b) {
    var c = Array.prototype.slice.apply(arguments, [2]);
    return function () {
      var d = c.concat(Array.prototype.slice.apply(arguments, [0]));
      return a.apply(b, d)
    }
  }, bindAsEventListener: function (a, b) {
    return function (c) {
      return a.call(b, c || window.event)
    }
  }, False: function () {
    return !1
  }, True: function () {
    return !0
  }, Void: function () {
  }
};
OpenLayersForProjection.Format = OpenLayersForProjection.Class({
  options: null,
  externalProjection: null,
  internalProjection: null,
  data: null,
  keepData: !1,
  initialize: function (a) {
    OpenLayersForProjection.Util.extend(this, a);
    this.options = a
  },
  destroy: function () {
  },
  read: function (a) {
    throw Error("Read not implemented.");
  },
  write: function (a) {
    throw Error("Write not implemented.");
  },
  CLASS_NAME: "OpenLayers.Format"
});
OpenLayersForProjection.Format.XML = OpenLayersForProjection.Class(OpenLayersForProjection.Format, {
  namespaces: null,
  namespaceAlias: null,
  defaultPrefix: null,
  readers: {},
  writers: {},
  xmldom: null,
  initialize: function (a) {
    window.ActiveXObject && (this.xmldom = new ActiveXObject("Microsoft.XMLDOM"));
    OpenLayersForProjection.Format.prototype.initialize.apply(this, [a]);
    this.namespaces = OpenLayersForProjection.Util.extend({}, this.namespaces);
    this.namespaceAlias = {};
    for (var b in this.namespaces)this.namespaceAlias[this.namespaces[b]] =
      b
  },
  destroy: function () {
    this.xmldom = null;
    OpenLayersForProjection.Format.prototype.destroy.apply(this, arguments)
  },
  setNamespace: function (a, b) {
    this.namespaces[a] = b;
    this.namespaceAlias[b] = a
  },
  read: function (a) {
    var b = a.indexOf("\x3c");
    0 < b && (a = a.substring(b));
    b = OpenLayersForProjection.Util.Try(OpenLayersForProjection.Function.bind(function () {
      var b;
      b = window.ActiveXObject && !this.xmldom ? new ActiveXObject("Microsoft.XMLDOM") : this.xmldom;
      b.loadXML(a);
      return b
    }, this), function () {
      return (new DOMParser).parseFromString(a,
        "text/xml")
    }, function () {
      var b = new XMLHttpRequest;
      b.open("GET", "data:text/xml;charset\x3dutf-8," + encodeURIComponent(a), !1);
      b.overrideMimeType && b.overrideMimeType("text/xml");
      b.send(null);
      return b.responseXML
    });
    this.keepData && (this.data = b);
    return b
  },
  write: function (a) {
    if (this.xmldom) a = a.xml; else {
      var b = new XMLSerializer;
      if (1 == a.nodeType) {
        var c = document.implementation.createDocument("", "", null);
        c.importNode && (a = c.importNode(a, !0));
        c.appendChild(a);
        a = b.serializeToString(c)
      } else a = b.serializeToString(a)
    }
    return a
  },
  createElementNS: function (a, b) {
    return this.xmldom ? "string" == typeof a ? this.xmldom.createNode(1, b, a) : this.xmldom.createNode(1, b, "") : document.createElementNS(a, b)
  },
  createDocumentFragment: function () {
    return this.xmldom ? this.xmldom.createDocumentFragment() : document.createDocumentFragment()
  },
  createTextNode: function (a) {
    "string" !== typeof a && (a = String(a));
    return this.xmldom ? this.xmldom.createTextNode(a) : document.createTextNode(a)
  },
  getElementsByTagNameNS: function (a, b, c) {
    var d = [];
    if (a.getElementsByTagNameNS) d =
      a.getElementsByTagNameNS(b, c); else {
      a = a.getElementsByTagName("*");
      for (var e, f, g = 0, h = a.length; g < h; ++g)if (e = a[g], f = e.prefix ? e.prefix + ":" + c : c, "*" == c || f == e.nodeName) "*" != b && b != e.namespaceURI || d.push(e)
    }
    return d
  },
  getAttributeNodeNS: function (a, b, c) {
    var d = null;
    if (a.getAttributeNodeNS) d = a.getAttributeNodeNS(b, c); else {
      a = a.attributes;
      for (var e, f, g = 0, h = a.length; g < h; ++g)if (e = a[g], e.namespaceURI == b && (f = e.prefix ? e.prefix + ":" + c : c, f == e.nodeName)) {
        d = e;
        break
      }
    }
    return d
  },
  getAttributeNS: function (a, b, c) {
    var d = "";
    if (a.getAttributeNS) d =
      a.getAttributeNS(b, c) || ""; else if (a = this.getAttributeNodeNS(a, b, c)) d = a.nodeValue;
    return d
  },
  getChildValue: function (a, b) {
    var c = b || "";
    if (a)for (var d = a.firstChild; d; d = d.nextSibling)switch (d.nodeType) {
      case 3:
      case 4:
        c += d.nodeValue
    }
    return c
  },
  isSimpleContent: function (a) {
    var b = !0;
    for (a = a.firstChild; a; a = a.nextSibling)if (1 === a.nodeType) {
      b = !1;
      break
    }
    return b
  },
  contentType: function (a) {
    var b = !1, c = !1, d = OpenLayersForProjection.Format.XML.CONTENT_TYPE.EMPTY;
    for (a = a.firstChild; a; a = a.nextSibling) {
      switch (a.nodeType) {
        case 1:
          c =
            !0;
          break;
        case 8:
          break;
        default:
          b = !0
      }
      if (c && b)break
    }
    if (c && b) d = OpenLayersForProjection.Format.XML.CONTENT_TYPE.MIXED; else {
      if (c)return OpenLayersForProjection.Format.XML.CONTENT_TYPE.COMPLEX;
      if (b)return OpenLayersForProjection.Format.XML.CONTENT_TYPE.SIMPLE
    }
    return d
  },
  hasAttributeNS: function (a, b, c) {
    var d = !1;
    return d = a.hasAttributeNS ? a.hasAttributeNS(b, c) : !!this.getAttributeNodeNS(a, b, c)
  },
  setAttributeNS: function (a, b, c, d) {
    if (a.setAttributeNS) a.setAttributeNS(b, c, d); else if (this.xmldom) b ? (b = a.ownerDocument.createNode(2,
      c, b), b.nodeValue = d, a.setAttributeNode(b)) : a.setAttribute(c, d); else throw"setAttributeNS not implemented";
  },
  createElementNSPlus: function (a, b) {
    b = b || {};
    var c = b.uri || this.namespaces[b.prefix];
    c || (c = a.indexOf(":"), c = this.namespaces[a.substring(0, c)]);
    c || (c = this.namespaces[this.defaultPrefix]);
    c = this.createElementNS(c, a);
    b.attributes && this.setAttributes(c, b.attributes);
    var d = b.value;
    null != d && c.appendChild(this.createTextNode(d));
    return c
  },
  setAttributes: function (a, b) {
    var c, d, e;
    for (e in b)null != b[e] && b[e].toString &&
    (c = b[e].toString(), d = this.namespaces[e.substring(0, e.indexOf(":"))] || null, this.setAttributeNS(a, d, e, c))
  },
  readNode: function (a, b) {
    b || (b = {});
    var c = this.readers[a.namespaceURI ? this.namespaceAlias[a.namespaceURI] : this.defaultPrefix];
    if (c) {
      var d = a.localName || a.nodeName.split(":").pop();
      (c = c[d] || c["*"]) && c.apply(this, [a, b])
    }
    return b
  },
  readChildNodes: function (a, b) {
    b || (b = {});
    for (var c = a.childNodes, d, e = 0, f = c.length; e < f; ++e)d = c[e], 1 == d.nodeType && this.readNode(d, b);
    return b
  },
  writeNode: function (a, b, c) {
    var d, e =
      a.indexOf(":");
    0 < e ? (d = a.substring(0, e), a = a.substring(e + 1)) : d = c ? this.namespaceAlias[c.namespaceURI] : this.defaultPrefix;
    b = this.writers[d][a].apply(this, [b]);
    c && c.appendChild(b);
    return b
  },
  getChildEl: function (a, b, c) {
    return a && this.getThisOrNextEl(a.firstChild, b, c)
  },
  getNextEl: function (a, b, c) {
    return a && this.getThisOrNextEl(a.nextSibling, b, c)
  },
  getThisOrNextEl: function (a, b, c) {
    a:for (; a; a = a.nextSibling)switch (a.nodeType) {
      case 1:
        if (!(b && b !== (a.localName || a.nodeName.split(":").pop()) || c && c !== a.namespaceURI))break a;
        a = null;
        break a;
      case 3:
        if (/^\s*$/.test(a.nodeValue))break;
      case 4:
      case 6:
      case 12:
      case 10:
      case 11:
        a = null;
        break a
    }
    return a || null
  },
  lookupNamespaceURI: function (a, b) {
    var c = null;
    if (a)if (a.lookupNamespaceURI) c = a.lookupNamespaceURI(b); else a:switch (a.nodeType) {
      case 1:
        if (null !== a.namespaceURI && a.prefix === b) {
          c = a.namespaceURI;
          break a
        }
        if (c = a.attributes.length)for (var d, e = 0; e < c; ++e)if (d = a.attributes[e], "xmlns" === d.prefix && d.name === "xmlns:" + b) {
          c = d.value || null;
          break a
        } else if ("xmlns" === d.name && null === b) {
          c = d.value ||
            null;
          break a
        }
        c = this.lookupNamespaceURI(a.parentNode, b);
        break a;
      case 2:
        c = this.lookupNamespaceURI(a.ownerElement, b);
        break a;
      case 9:
        c = this.lookupNamespaceURI(a.documentElement, b);
        break a;
      case 6:
      case 12:
      case 10:
      case 11:
        break a;
      default:
        c = this.lookupNamespaceURI(a.parentNode, b)
    }
    return c
  },
  getXMLDoc: function () {
    OpenLayersForProjection.Format.XML.document || this.xmldom || (document.implementation && document.implementation.createDocument ? OpenLayersForProjection.Format.XML.document = document.implementation.createDocument("",
      "", null) : !this.xmldom && window.ActiveXObject && (this.xmldom = new ActiveXObject("Microsoft.XMLDOM")));
    return OpenLayersForProjection.Format.XML.document || this.xmldom
  },
  CLASS_NAME: "OpenLayers.Format.XML"
});
OpenLayersForProjection.Format.KML = OpenLayersForProjection.Class(OpenLayersForProjection.Format.XML, {
  namespaces: {kml: "http://www.opengis.net/kml/2.2", gx: "http://www.google.com/kml/ext/2.2"},
  kmlns: "http://earth.google.com/kml/2.0",
  placemarksDesc: "No description available",
  foldersName: "OpenLayers export",
  foldersDesc: "Exported on " + new Date,
  extractAttributes: !0,
  kvpAttributes: !1,
  extractStyles: !1,
  extractTracks: !1,
  trackAttributes: null,
  internalns: null,
  features: null,
  styles: null,
  styleBaseUrl: "",
  fetched: null,
  maxDepth: 0,
  initialize: function (a) {
    this.regExes = {
      trimSpace: /^\s*|\s*$/g,
      removeSpace: /\s*/g,
      splitSpace: /\s+/,
      trimComma: /\s*,\s*/g,
      kmlColor: /(\w{2})(\w{2})(\w{2})(\w{2})/,
      kmlIconPalette: /root:\/\/icons\/palette-(\d+)(\.\w+)/,
      straightBracket: /\$\[(.*?)\]/g
    };
    this.externalProjection = new OpenLayersForProjection.Projection("EPSG:4326");
    OpenLayersForProjection.Format.XML.prototype.initialize.apply(this, [a])
  },
  read: function (a) {
    this.features = [];
    this.styles = {};
    this.fetched = {};
    return this.parseData(a, {
      depth: 0,
      styleBaseUrl: this.styleBaseUrl
    })
  },
  parseData: function (a, b) {
    "string" == typeof a && (a = OpenLayersForProjection.Format.XML.prototype.read.apply(this, [a]));
    for (var c = ["Link", "NetworkLink", "Style", "StyleMap", "Placemark"], d = 0, e = c.length; d < e; ++d) {
      var f = c[d], g = this.getElementsByTagNameNS(a, "*", f);
      if (0 != g.length)switch (f.toLowerCase()) {
        case "link":
        case "networklink":
          this.parseLinks(g, b);
          break;
        case "style":
          this.extractStyles && this.parseStyles(g, b);
          break;
        case "stylemap":
          this.extractStyles && this.parseStyleMaps(g,
            b);
          break;
        case "placemark":
          this.parseFeatures(g, b)
      }
    }
    return this.features
  },
  parseLinks: function (a, b) {
    if (b.depth >= this.maxDepth)return !1;
    var c = OpenLayersForProjection.Util.extend({}, b);
    c.depth++;
    for (var d = 0, e = a.length; d < e; d++) {
      var f = this.parseProperty(a[d], "*", "href");
      f && !this.fetched[f] && (this.fetched[f] = !0, (f = this.fetchLink(f)) && this.parseData(f, c))
    }
  },
  fetchLink: function (a) {
    if (a = OpenLayers.Request.GET({url: a, async: !1}))return a.responseText
  },
  parseStyles: function (a, b) {
    for (var c = 0, d = a.length; c < d; c++) {
      var e =
        this.parseStyle(a[c]);
      e && (this.styles[(b.styleBaseUrl || "") + "#" + e.id] = e)
    }
  },
  parseKmlColor: function (a) {
    var b = null;
    a && (a = a.match(this.regExes.kmlColor)) && (b = {
      color: "#" + a[4] + a[3] + a[2],
      opacity: parseInt(a[1], 16) / 255
    });
    return b
  },
  parseStyle: function (a) {
    for (var b = {}, c = ["LineStyle", "PolyStyle", "IconStyle", "BalloonStyle", "LabelStyle"], d, e, f = 0, g = c.length; f < g; ++f)if (d = c[f], e = this.getElementsByTagNameNS(a, "*", d)[0])switch (d.toLowerCase()) {
      case "linestyle":
        d = this.parseProperty(e, "*", "color");
        if (d = this.parseKmlColor(d)) b.strokeColor =
          d.color, b.strokeOpacity = d.opacity;
        (d = this.parseProperty(e, "*", "width")) && (b.strokeWidth = d);
        break;
      case "polystyle":
        d = this.parseProperty(e, "*", "color");
        if (d = this.parseKmlColor(d)) b.fillOpacity = d.opacity, b.fillColor = d.color;
        "0" == this.parseProperty(e, "*", "fill") && (b.fillColor = "none");
        "0" == this.parseProperty(e, "*", "outline") && (b.strokeWidth = "0");
        break;
      case "iconstyle":
        var h = parseFloat(this.parseProperty(e, "*", "scale") || 1);
        d = 32 * h;
        var k = 32 * h, l = this.getElementsByTagNameNS(e, "*", "Icon")[0];
        if (l) {
          var m = this.parseProperty(l,
            "*", "href");
          if (m) {
            var n = this.parseProperty(l, "*", "w"), p = this.parseProperty(l, "*", "h");
            !OpenLayersForProjection.String.startsWith(m, "http://maps.google.com/mapfiles/kml") || n || p || (p = n = 64, h /= 2);
            n = n || p;
            p = p || n;
            n && (d = parseInt(n) * h);
            p && (k = parseInt(p) * h);
            if (p = m.match(this.regExes.kmlIconPalette)) n = p[1], p = p[2], m = this.parseProperty(l, "*", "x"), l = this.parseProperty(l, "*", "y"), m = "http://maps.google.com/mapfiles/kml/pal" + n + "/icon" + (8 * (l ? 7 - l / 32 : 7) + (m ? m / 32 : 0)) + p;
            b.graphicOpacity = 1;
            b.externalGraphic = m
          }
        }
        if (e = this.getElementsByTagNameNS(e,
            "*", "hotSpot")[0]) m = parseFloat(e.getAttribute("x")), l = parseFloat(e.getAttribute("y")), n = e.getAttribute("xunits"), "pixels" == n ? b.graphicXOffset = -m * h : "insetPixels" == n ? b.graphicXOffset = -d + m * h : "fraction" == n && (b.graphicXOffset = -d * m), e = e.getAttribute("yunits"), "pixels" == e ? b.graphicYOffset = -k + l * h + 1 : "insetPixels" == e ? b.graphicYOffset = -(l * h) + 1 : "fraction" == e && (b.graphicYOffset = -k * (1 - l) + 1);
        b.graphicWidth = d;
        b.graphicHeight = k;
        break;
      case "balloonstyle":
        (e = OpenLayersForProjection.Util.getXmlNodeValue(e)) && (b.balloonStyle =
          e.replace(this.regExes.straightBracket, "${$1}"));
        break;
      case "labelstyle":
        if (d = this.parseProperty(e, "*", "color"), d = this.parseKmlColor(d)) b.fontColor = d.color, b.fontOpacity = d.opacity
    }
    !b.strokeColor && b.fillColor && (b.strokeColor = b.fillColor);
    (a = a.getAttribute("id")) && b && (b.id = a);
    return b
  },
  parseStyleMaps: function (a, b) {
    for (var c = 0, d = a.length; c < d; c++)for (var e = a[c], f = this.getElementsByTagNameNS(e, "*", "Pair"), e = e.getAttribute("id"), g = 0, h = f.length; g < h; g++) {
      var k = f[g], l = this.parseProperty(k, "*", "key");
      (k = this.parseProperty(k,
        "*", "styleUrl")) && "normal" == l && (this.styles[(b.styleBaseUrl || "") + "#" + e] = this.styles[(b.styleBaseUrl || "") + k])
    }
  },
  parseFeatures: function (a, b) {
    for (var c = [], d = 0, e = a.length; d < e; d++) {
      var f = a[d], g = this.parseFeature.apply(this, [f]);
      if (g) {
        this.extractStyles && g.attributes && g.attributes.styleUrl && (g.style = this.getStyle(g.attributes.styleUrl, b));
        if (this.extractStyles) {
          var h = this.getElementsByTagNameNS(f, "*", "Style")[0];
          h && (h = this.parseStyle(h)) && (g.style = OpenLayersForProjection.Util.extend(g.style, h))
        }
        this.extractTracks ?
          (f = this.getElementsByTagNameNS(f, this.namespaces.gx, "Track")) && 0 < f.length && (g = {
            features: [],
            feature: g
          }, this.readNode(f[0], g), 0 < g.features.length && c.push.apply(c, g.features)) : c.push(g)
      } else throw"Bad Placemark: " + d;
    }
    this.features = this.features.concat(c)
  },
  readers: {
    kml: {
      when: function (a, b) {
        b.whens.push(OpenLayersForProjection.Date.parse(this.getChildValue(a)))
      }, _trackPointAttribute: function (a, b) {
        var c = a.nodeName.split(":").pop();
        b.attributes[c].push(this.getChildValue(a))
      }
    }, gx: {
      Track: function (a, b) {
        var c =
          {whens: [], points: [], angles: []};
        if (this.trackAttributes) {
          var d;
          c.attributes = {};
          for (var e = 0, f = this.trackAttributes.length; e < f; ++e)d = this.trackAttributes[e], c.attributes[d] = [], d in this.readers.kml || (this.readers.kml[d] = this.readers.kml._trackPointAttribute)
        }
        this.readChildNodes(a, c);
        if (c.whens.length !== c.points.length)throw Error("gx:Track with unequal number of when (" + c.whens.length + ") and gx:coord (" + c.points.length + ") elements.");
        var g = 0 < c.angles.length;
        if (g && c.whens.length !== c.angles.length)throw Error("gx:Track with unequal number of when (" +
          c.whens.length + ") and gx:angles (" + c.angles.length + ") elements.");
        for (var h, e = 0, f = c.whens.length; e < f; ++e) {
          h = b.feature.clone();
          h.fid = b.feature.fid || b.feature.id;
          d = c.points[e];
          h.geometry = d;
          "z" in d && (h.attributes.altitude = d.z);
          this.internalProjection && this.externalProjection && h.geometry.transform(this.externalProjection, this.internalProjection);
          if (this.trackAttributes)for (var k = 0, l = this.trackAttributes.length; k < l; ++k)d = this.trackAttributes[k], h.attributes[d] = c.attributes[d][e];
          h.attributes.when = c.whens[e];
          h.attributes.trackId = b.feature.id;
          g && (d = c.angles[e], h.attributes.heading = parseFloat(d[0]), h.attributes.tilt = parseFloat(d[1]), h.attributes.roll = parseFloat(d[2]));
          b.features.push(h)
        }
      }, coord: function (a, b) {
        var c = this.getChildValue(a).replace(this.regExes.trimSpace, "").split(/\s+/),
          d = new OpenLayersForProjection.Geometry.Point(c[0], c[1]);
        2 < c.length && (d.z = parseFloat(c[2]));
        b.points.push(d)
      }, angles: function (a, b) {
        var c = this.getChildValue(a).replace(this.regExes.trimSpace, "").split(/\s+/);
        b.angles.push(c)
      }
    }
  },
  parseFeature: function (a) {
    for (var b = ["MultiGeometry", "Polygon", "LineString", "Point"], c, d, e, f = 0, g = b.length; f < g; ++f)if (c = b[f], this.internalns = a.namespaceURI ? a.namespaceURI : this.kmlns, d = this.getElementsByTagNameNS(a, this.internalns, c), 0 < d.length) {
      if (b = this.parseGeometry[c.toLowerCase()]) e = b.apply(this, [d[0]]), this.internalProjection && this.externalProjection && e.transform(this.externalProjection, this.internalProjection); else throw new TypeError("Unsupported geometry type: " + c);
      break
    }
    var h;
    this.extractAttributes &&
    (h = this.parseAttributes(a));
    c = new OpenLayersForProjection.Feature.Vector(e, h);
    a = a.getAttribute("id") || a.getAttribute("name");
    null != a && (c.fid = a);
    return c
  },
  getStyle: function (a, b) {
    var c = OpenLayersForProjection.Util.removeTail(a), d = OpenLayersForProjection.Util.extend({}, b);
    d.depth++;
    d.styleBaseUrl = c;
    !this.styles[a] && !OpenLayersForProjection.String.startsWith(a, "#") && d.depth <= this.maxDepth && !this.fetched[c] && (c = this.fetchLink(c)) && this.parseData(c, d);
    return OpenLayersForProjection.Util.extend({}, this.styles[a])
  },
  parseGeometry: {
    point: function (a) {
      var b = this.getElementsByTagNameNS(a, this.internalns, "coordinates");
      a = [];
      if (0 < b.length) {
        var c = b[0].firstChild.nodeValue, c = c.replace(this.regExes.removeSpace, "");
        a = c.split(",")
      }
      b = null;
      if (1 < a.length) 2 == a.length && (a[2] = null), b = new OpenLayersForProjection.Geometry.Point(a[0], a[1], a[2]); else throw"Bad coordinate string: " + c;
      return b
    }, linestring: function (a, b) {
      var c = this.getElementsByTagNameNS(a, this.internalns, "coordinates"), d = null;
      if (0 < c.length) {
        for (var c = this.getChildValue(c[0]),
               c = c.replace(this.regExes.trimSpace, ""), c = c.replace(this.regExes.trimComma, ","), d = c.split(this.regExes.splitSpace), e = d.length, f = Array(e), g, h, k = 0; k < e; ++k)if (g = d[k].split(","), h = g.length, 1 < h) 2 == g.length && (g[2] = null), f[k] = new OpenLayersForProjection.Geometry.Point(g[0], g[1], g[2]); else throw"Bad LineString point coordinates: " + d[k];
        if (e) d = b ? new OpenLayersForProjection.Geometry.LinearRing(f) : new OpenLayersForProjection.Geometry.LineString(f); else throw"Bad LineString coordinates: " + c;
      }
      return d
    }, polygon: function (a) {
      a =
        this.getElementsByTagNameNS(a, this.internalns, "LinearRing");
      var b = a.length, c = Array(b);
      if (0 < b)for (var d = 0, e = a.length; d < e; ++d)if (b = this.parseGeometry.linestring.apply(this, [a[d], !0])) c[d] = b; else throw"Bad LinearRing geometry: " + d;
      return new OpenLayersForProjection.Geometry.Polygon(c)
    }, multigeometry: function (a) {
      for (var b, c = [], d = a.childNodes, e = 0, f = d.length; e < f; ++e)a = d[e], 1 == a.nodeType && (b = a.prefix ? a.nodeName.split(":")[1] : a.nodeName, (b = this.parseGeometry[b.toLowerCase()]) && c.push(b.apply(this, [a])));
      return new OpenLayersForProjection.Geometry.Collection(c)
    }
  },
  parseAttributes: function (a) {
    var b = {}, c = a.getElementsByTagName("ExtendedData");
    c.length && (b = this.parseExtendedData(c[0]));
    var d, e, f;
    a = a.childNodes;
    for (var c = 0, g = a.length; c < g; ++c)if (d = a[c], 1 == d.nodeType && (e = d.childNodes, 1 <= e.length && 3 >= e.length)) {
      switch (e.length) {
        case 1:
          f = e[0];
          break;
        case 2:
          f = e[0];
          e = e[1];
          f = 3 == f.nodeType || 4 == f.nodeType ? f : e;
          break;
        default:
          f = e[1]
      }
      if (3 == f.nodeType || 4 == f.nodeType)if (d = d.prefix ? d.nodeName.split(":")[1] : d.nodeName,
          f = OpenLayersForProjection.Util.getXmlNodeValue(f)) f = f.replace(this.regExes.trimSpace, ""), b[d] = f
    }
    return b
  },
  parseExtendedData: function (a) {
    var b = {}, c, d, e, f, g = a.getElementsByTagName("Data");
    c = 0;
    for (d = g.length; c < d; c++) {
      e = g[c];
      f = e.getAttribute("name");
      var h = {}, k = e.getElementsByTagName("value");
      k.length && (h.value = this.getChildValue(k[0]));
      this.kvpAttributes ? b[f] = h.value : (e = e.getElementsByTagName("displayName"), e.length && (h.displayName = this.getChildValue(e[0])), b[f] = h)
    }
    a = a.getElementsByTagName("SimpleData");
    c = 0;
    for (d = a.length; c < d; c++)h = {}, e = a[c], f = e.getAttribute("name"), h.value = this.getChildValue(e), this.kvpAttributes ? b[f] = h.value : (h.displayName = f, b[f] = h);
    return b
  },
  parseProperty: function (a, b, c) {
    var d;
    a = this.getElementsByTagNameNS(a, b, c);
    try {
      d = OpenLayersForProjection.Util.getXmlNodeValue(a[0])
    } catch (e) {
      d = null
    }
    return d
  },
  write: function (a) {
    OpenLayersForProjection.Util.isArray(a) || (a = [a]);
    for (var b = this.createElementNS(this.kmlns, "kml"), c = this.createFolderXML(), d = 0, e = a.length; d < e; ++d)c.appendChild(this.createPlacemarkXML(a[d]));
    b.appendChild(c);
    return OpenLayersForProjection.Format.XML.prototype.write.apply(this, [b])
  },
  createFolderXML: function () {
    var a = this.createElementNS(this.kmlns, "Folder");
    if (this.foldersName) {
      var b = this.createElementNS(this.kmlns, "name"), c = this.createTextNode(this.foldersName);
      b.appendChild(c);
      a.appendChild(b)
    }
    this.foldersDesc && (b = this.createElementNS(this.kmlns, "description"), c = this.createTextNode(this.foldersDesc), b.appendChild(c), a.appendChild(b));
    return a
  },
  createPlacemarkXML: function (a) {
    var b = this.createElementNS(this.kmlns,
      "name"), c = a.style && a.style.label ? a.style.label : a.id;
    b.appendChild(this.createTextNode(a.attributes.name || c));
    var d = this.createElementNS(this.kmlns, "description");
    d.appendChild(this.createTextNode(a.attributes.description || this.placemarksDesc));
    c = this.createElementNS(this.kmlns, "Placemark");
    null != a.fid && c.setAttribute("id", a.fid);
    c.appendChild(b);
    c.appendChild(d);
    b = this.buildGeometryNode(a.geometry);
    c.appendChild(b);
    a.attributes && (a = this.buildExtendedData(a.attributes)) && c.appendChild(a);
    return c
  },
  buildGeometryNode: function (a) {
    var b = a.CLASS_NAME, b = b.substring(b.lastIndexOf(".") + 1), b = this.buildGeometry[b.toLowerCase()], c = null;
    b && (c = b.apply(this, [a]));
    return c
  },
  buildGeometry: {
    point: function (a) {
      var b = this.createElementNS(this.kmlns, "Point");
      b.appendChild(this.buildCoordinatesNode(a));
      return b
    }, multipoint: function (a) {
      return this.buildGeometry.collection.apply(this, [a])
    }, linestring: function (a) {
      var b = this.createElementNS(this.kmlns, "LineString");
      b.appendChild(this.buildCoordinatesNode(a));
      return b
    },
    multilinestring: function (a) {
      return this.buildGeometry.collection.apply(this, [a])
    }, linearring: function (a) {
      var b = this.createElementNS(this.kmlns, "LinearRing");
      b.appendChild(this.buildCoordinatesNode(a));
      return b
    }, polygon: function (a) {
      var b = this.createElementNS(this.kmlns, "Polygon");
      a = a.components;
      for (var c, d, e = 0, f = a.length; e < f; ++e)c = 0 == e ? "outerBoundaryIs" : "innerBoundaryIs", c = this.createElementNS(this.kmlns, c), d = this.buildGeometry.linearring.apply(this, [a[e]]), c.appendChild(d), b.appendChild(c);
      return b
    },
    multipolygon: function (a) {
      return this.buildGeometry.collection.apply(this, [a])
    }, collection: function (a) {
      for (var b = this.createElementNS(this.kmlns, "MultiGeometry"), c, d = 0, e = a.components.length; d < e; ++d)(c = this.buildGeometryNode.apply(this, [a.components[d]])) && b.appendChild(c);
      return b
    }
  },
  buildCoordinatesNode: function (a) {
    var b = this.createElementNS(this.kmlns, "coordinates"), c;
    if (c = a.components) {
      for (var d = c.length, e = Array(d), f = 0; f < d; ++f)a = c[f], e[f] = this.buildCoordinates(a);
      c = e.join(" ")
    } else c = this.buildCoordinates(a);
    c = this.createTextNode(c);
    b.appendChild(c);
    return b
  },
  buildCoordinates: function (a) {
    this.internalProjection && this.externalProjection && (a = a.clone(), a.transform(this.internalProjection, this.externalProjection));
    return a.x + "," + a.y
  },
  buildExtendedData: function (a) {
    var b = this.createElementNS(this.kmlns, "ExtendedData"), c;
    for (c in a)if (a[c] && "name" != c && "description" != c && "styleUrl" != c) {
      var d = this.createElementNS(this.kmlns, "Data");
      d.setAttribute("name", c);
      var e = this.createElementNS(this.kmlns, "value");
      if ("object" ==
        typeof a[c]) {
        if (a[c].value && e.appendChild(this.createTextNode(a[c].value)), a[c].displayName) {
          var f = this.createElementNS(this.kmlns, "displayName");
          f.appendChild(this.getXMLDoc().createCDATASection(a[c].displayName));
          d.appendChild(f)
        }
      } else e.appendChild(this.createTextNode(a[c]));
      d.appendChild(e);
      b.appendChild(d)
    }
    return this.isSimpleContent(b) ? null : b
  },
  CLASS_NAME: "OpenLayers.Format.KML"
});
